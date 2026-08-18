/**
 * Developer Portfolio - Interactive Engine & Pipeline Orchestration
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientGlow();
  initPipelineCanvas();
  initInteractiveTerminal();
  initEmailCopy();
});

/* --------------------------------------------------------------------------
   1. Ambient Mouse Spotlight Effect
   -------------------------------------------------------------------------- */
function initAmbientGlow() {
  const glow = document.getElementById('ambientGlow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(renderGlow);
  }
  renderGlow();
}

/* --------------------------------------------------------------------------
   2. Realtime Pipeline Canvas & Particle Animation
   -------------------------------------------------------------------------- */
function initPipelineCanvas() {
  const canvas = document.getElementById('pipelineCanvas');
  const container = document.getElementById('orchestratorVisual');
  const btnSimulate = document.getElementById('btnSimulate');
  const logContent = document.getElementById('logContent');
  const logTimestamp = document.getElementById('logTimestamp');

  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animId;

  function resize() {
    const rect = container.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }
  window.addEventListener('resize', resize);
  resize();

  // Nodes referencing
  const inputNode = document.getElementById('nodeInput');
  const outputNode = document.getElementById('nodeOutput');
  const workerNodes = [
    document.getElementById('nodeAntigravity'),
    document.getElementById('nodeCodex'),
    document.getElementById('nodeClaude')
  ];

  function getNodeCenter(el) {
    if (!el) return { x: 0, y: 0 };
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    return {
      x: eRect.left - cRect.left + eRect.width / 2,
      y: eRect.top - cRect.top + eRect.height / 2,
      right: eRect.right - cRect.left,
      left: eRect.left - cRect.left
    };
  }

  class Particle {
    constructor(fromPoint, toPoint, color, speed = 0.015) {
      this.from = fromPoint;
      this.to = toPoint;
      this.color = color;
      this.progress = Math.random() * 0.5;
      this.speed = speed + Math.random() * 0.01;
      this.size = 3 + Math.random() * 2;
    }

    update() {
      this.progress += this.speed;
      if (this.progress > 1) {
        this.progress = 0;
      }
    }

    draw() {
      // Cubic bezier interpolation
      const cp1x = (this.from.x + this.to.x) / 2;
      const cp1y = this.from.y;
      const cp2x = (this.from.x + this.to.x) / 2;
      const cp2y = this.to.y;

      const t = this.progress;
      const cx = (1 - t) ** 3 * this.from.x + 3 * (1 - t) ** 2 * t * cp1x + 3 * (1 - t) * t ** 2 * cp2x + t ** 3 * this.to.x;
      const cy = (1 - t) ** 3 * this.from.y + 3 * (1 - t) ** 2 * t * cp1y + 3 * (1 - t) * t ** 2 * cp2y + t ** 3 * this.to.y;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }
  }

  function setupParticles() {
    particles = [];
    const colors = ['#38bdf8', '#34d399', '#f59e0b'];
    
    // Only connect if screen is large enough for multi-column
    if (window.innerWidth > 860) {
      const inPos = getNodeCenter(inputNode);
      const outPos = getNodeCenter(outputNode);

      workerNodes.forEach((node, idx) => {
        if (!node) return;
        const wPos = getNodeCenter(node);
        const color = colors[idx % colors.length];

        // In -> Worker particles
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle({ x: inPos.right, y: inPos.y }, { x: wPos.left, y: wPos.y }, color));
        }
        // Worker -> Out particles
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle({ x: wPos.right, y: wPos.y }, { x: outPos.left, y: outPos.y }, color));
        }
      });
    }
  }

  function drawConnections() {
    if (window.innerWidth <= 860) return;
    const inPos = getNodeCenter(inputNode);
    const outPos = getNodeCenter(outputNode);

    workerNodes.forEach((node) => {
      if (!node) return;
      const wPos = getNodeCenter(node);

      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      // In -> Worker
      ctx.beginPath();
      ctx.moveTo(inPos.right, inPos.y);
      ctx.bezierCurveTo((inPos.right + wPos.left) / 2, inPos.y, (inPos.right + wPos.left) / 2, wPos.y, wPos.left, wPos.y);
      ctx.stroke();

      // Worker -> Out
      ctx.beginPath();
      ctx.moveTo(wPos.right, wPos.y);
      ctx.bezierCurveTo((wPos.right + outPos.left) / 2, wPos.y, (wPos.right + outPos.left) / 2, outPos.y, outPos.left, outPos.y);
      ctx.stroke();
      ctx.restore();
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    drawConnections();
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    animId = requestAnimationFrame(animate);
  }

  setupParticles();
  animate();
  window.addEventListener('resize', () => {
    setupParticles();
  });

  // Trigger burst & logs
  if (btnSimulate) {
    btnSimulate.addEventListener('click', () => {
      triggerPipelineRun();
    });
  }

  function addLog(text, type = 'info') {
    if (!logContent) return;
    const line = document.createElement('div');
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`;
    line.className = `log-line text-${type}`;
    line.textContent = `${timeStr} ${text}`;
    logContent.appendChild(line);
    logContent.scrollTop = logContent.scrollHeight;
  }

  // Update clock
  setInterval(() => {
    if (logTimestamp) {
      const d = new Date();
      logTimestamp.textContent = d.toTimeString().split(' ')[0];
    }
  }, 1000);

  function triggerPipelineRun() {
    addLog('Incoming task payload: "Synthesize microservice & generate unit tests"', 'cyan');
    
    // Animate workers
    workerNodes.forEach((node) => {
      if (node) {
        node.style.borderColor = 'var(--accent-cyan)';
        node.style.transform = 'scale(1.02)';
        setTimeout(() => {
          node.style.borderColor = '';
          node.style.transform = '';
        }, 1200);
      }
    });

    setTimeout(() => {
      addLog('Antigravity: Orchestrating tool execution & codebase graph', 'info');
    }, 300);

    setTimeout(() => {
      addLog('Codex: Fast synthesizing algorithms and API typings (0.12s)', 'success');
    }, 600);

    setTimeout(() => {
      addLog('Claude Code: Reasoning verification & Clean Architecture verified', 'amber');
    }, 900);

    setTimeout(() => {
      addLog('Pipeline sync complete. 0 lint errors, build succeeded.', 'success');
    }, 1200);
  }
}

/* --------------------------------------------------------------------------
   3. Interactive Terminal Simulation
   -------------------------------------------------------------------------- */
function initInteractiveTerminal() {
  const form = document.getElementById('terminalForm');
  const input = document.getElementById('termInput');
  const output = document.getElementById('termOutput');
  const chipBtns = document.querySelectorAll('.chip-btn');

  const commands = {
    help: '사용 가능한 명령어: status, pipeline, tools, skills, clear',
    status: `[SYSTEM STATUS]
• Node: Active (Full-Stack & Pipeline Orchestrator)
• Active AI Engines: Antigravity 2.0, Codex, Claude Code
• Terminal Workspace: macOS / zsh / tmux + cmux
• Status: 100% Operational, Ready for new projects.`,
    pipeline: `[ORCHESTRATION PIPELINE]
1. Input Router -> Decomposes multi-step tasks
2. Parallel Workers:
   - Antigravity: Multi-subagent & system tooling
   - Codex: Low-latency code synthesis & unit tests
   - Claude Code: Deep architectural reasoning & refactor
3. Aggregator -> Seamless validated solution output`,
    tools: `[TOOLCHAIN STACK]
• Terminals: iTerm2, Ghostty (GPU accelerated)
• Multiplexers: cmux (Multi-Agent), tmux (Persistent sessions)
• Monitoring: btop (Resource & Process TUI)
• Productivity: lazygit (Git TUI), yazi (Fast File Manager), VS Code`,
    skills: `[CORE CAPABILITIES]
• Frontend: Modern Vanilla HTML/CSS/JS, Component Systems, Responsive UI
• Backend: API Architecture, Distributed Pipelines, Clean Code
• AI Engineering: Multi-Agent Parallel Orchestration, Tool Calling & Synthesis`
  };

  function executeCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    // Echo command
    const rowCmd = document.createElement('div');
    rowCmd.className = 'term-row';
    rowCmd.innerHTML = `<span class="term-prompt">lab-env ❯</span> <span class="term-cmd">${escapeHTML(cmdRaw)}</span>`;
    output.appendChild(rowCmd);

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    const rowResp = document.createElement('div');
    rowResp.className = 'term-row';

    if (commands[cmd]) {
      rowResp.innerHTML = `<pre style="font-family: inherit; white-space: pre-wrap; color: #cbd5e1; margin: 4px 0;">${escapeHTML(commands[cmd])}</pre>`;
    } else {
      rowResp.innerHTML = `<span class="text-muted">zsh: command not found: ${escapeHTML(cmdRaw)}. 'help'를 입력해보세요.</span>`;
    }

    output.appendChild(rowResp);
    output.scrollTop = output.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(input.value);
      input.value = '';
    });
  }

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
      if (input) input.focus();
    });
  });
}

/* --------------------------------------------------------------------------
   4. Email Clipboard Copy
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const btn = document.getElementById('btnCopyEmail');
  const toast = document.getElementById('copyNotification');
  if (!btn || !toast) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'contact@developer.lab';
    navigator.clipboard.writeText(email).then(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }).catch(() => {
      alert('이메일: ' + email);
    });
  });
}
