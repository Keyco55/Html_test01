import { Project } from '../types/projects';

/**
 * Featured Projects data for KEYCO Portfolio v1.
 * Accurate, truthful claims without exaggeration or internal asset exposure.
 */
export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'kbo-hub',
    slug: 'kbo-hub',
    displayOrder: 1,
    tier: 'heroic',
    title: 'KBO-Hub',
    nameEn: 'HOMEPLATE',
    subtitle: '통합 KBO 팬 라이프스타일 플랫폼',
    category: 'Full-Stack Product',
    status: 'Closed Beta',
    summary:
      '야구 팬들의 경기 관람, 선수/구단 데이터, 포토카드 아카이빙, 직관 기록, 커뮤니티를 연결하는 올인원 야구 플랫폼입니다. 단순 프로토타입을 넘어 1인 빌더로서 제품 기획부터 풀스택 개발, Supabase RLS 인증/데이터베이스 설계, Cloudflare 배포, Human Runtime QA까지 실서비스 운영 수준으로 구축했습니다.',
    metadata: {
      role: 'Product Planning & Full-Stack Builder',
      timeline: '2026.08 ~ 현재',
      platform: 'Web (Next.js App Router) & Cloudflare Pages',
      scope: '기획 · 디자인 시스템 · 프론트엔드 · DB/Auth/RLS · 배포 · QA',
    },
    narrative: {
      problem:
        'KBO 리그 팬들은 경기 일정, 기록 조회, 굿즈/포토카드 거래, 티켓팅 정보 등이 여러 플랫폼에 파편화되어 있어 일상 속에서 통합된 야구 경험을 누리기 어려웠습니다.',
      solution:
        'Next.js App Router와 Supabase 기반으로 고성능 웹 플랫폼을 설계했습니다. 비주얼 v3 테마 시스템, 3D 포토카드 틸트 인터랙션, Row Level Security(RLS) 기반 보안 계정 체계, 모바일 최적화 내비게이션을 단일 제품으로 완성했습니다.',
      keyContributions: [
        '제품 기획 & 요구사항 정의: KBO 팬의 페인 포인트를 분석하여 포토카드 아카이브, 티켓/일정 허브, 커뮤니티를 유기적으로 연결한 핵심 기능 스펙 수립',
        'Next.js App Router 아키텍처: App Router 구조 위에 전역 헤더, 실시간 티커 셸, 모바일 드로어 및 FOUC 없는 테마 시스템 구축',
        'Supabase Auth & Database / RLS 설계: Email/Password 인증, public.profiles 트리거 연계, 사용자 데이터 격리를 위한 엄격한 Row Level Security 정책 적용',
        '고성능 클라이언트 인터랙션: 무거운 외부 라이브러리 없이 순수 DOM 제어로 3D 홀로그램 글레어 및 포토카드 틸트 효과 구현, Hydration 안정화',
        '체계적인 검증 체계: Day 15 수직 슬라이스에 대해 Senior Security Review PASS 및 철저한 Human Runtime QA를 거쳐 안정적인 Closed Beta 릴리스 달성',
      ],
      technicalHighlights: [
        'Next.js App Router & React',
        'Supabase Auth & Session Persistence',
        'PostgreSQL Database & Schema Design',
        'Row Level Security (RLS) Policies',
        'Cloudflare Pages Static Export Delivery',
        'Zero-Dependency 3D Card Tilt Interaction',
        'Human Runtime QA & Security Gate Passed',
      ],
      learned:
        '백엔드 전담 개발자가 아니더라도, 제품 중심 사고와 탄탄한 아키텍처 이해를 바탕으로 인증, 데이터 격리, 고성능 UI까지 완성도 높은 풀스택 서비스를 주도적으로 구축할 수 있음을 입증했습니다.',
    },
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Cloudflare Pages',
      'Tailwind CSS',
    ],
    featuredStack: ['Next.js App Router', 'React', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'],
    metrics: [
      { label: '배포 상태', value: 'Closed Beta', note: '실제 사용자 초대 기반 운영' },
      { label: '보안 검증', value: 'Reviewed', note: 'RLS 격리 & Security Gate 수행' },
      { label: '개발 범위', value: 'Full-Cycle', note: '기획부터 배포·QA까지 전 과정' },
      { label: '인터랙션', value: 'DOM 기반', note: '외부 라이브러리 없는 3D 카드 틸트' },
    ],
    links: [],
    architecture: {
      containerId: 'kbo-hub-arch-container',
      title: 'KBO-Hub Full-Stack Architecture',
      description:
        'Next.js App Router 프론트엔드와 Cloudflare CDN 서빙, Supabase Auth/RLS 데이터베이스 격리 계층이 유기적으로 연결된 실서비스 아키텍처입니다.',
      diagramType: 'kbo-hub-architecture',
      svgArtifactPath: '/docs/diagrams/kbo-hub-architecture.svg',
    },
    screenshotPlaceholder: {
      caption: 'KBO-Hub 메인 대시보드 및 실시간 경기/포토카드 아카이브 인터페이스',
      mockupType: 'browser',
      badgeText: 'Closed Beta Verified',
    },
  },
  {
    id: 'multi-agent-orchestration',
    slug: 'multi-agent-orchestration',
    displayOrder: 2,
    tier: 'featured',
    title: 'Multi-Agent Development Orchestration',
    nameEn: 'Parallel Worktree Pipeline',
    subtitle: '실전 프로덕트에 적용된 병렬 에이전트 개발 프로세스',
    category: 'Development Orchestration',
    status: 'Active Production',
    summary:
      '단순히 AI 모델을 나열하는 것이 아닌, 실제 프로덕트(KBO-Hub, Portfolio v1) 개발에 직접 적용한 다중 에이전트 분업 워크플로우입니다. cmux 터미널 멀티플렉서와 Git worktree 격리를 통해 Human Director, Parallel Worker, Independent Senior Reviewer, Remediation, Human QA, Security Gate로 이어지는 엔지니어링 체계를 설계·운영했습니다.',
    metadata: {
      role: 'Pipeline Architect & Human Director',
      timeline: '2026.08 ~ 현재',
      platform: 'macOS · cmux · Git Worktree · Human-selected Agent Routing',
      scope: '워크플로우 설계 · 트랙 분할 · 독립 코드리뷰 · 보안 게이트 · QA',
    },
    narrative: {
      problem:
        '단일 AI 모델에 의존하거나 단일 컨텍스트에서 복잡한 기능을 구현할 경우 컨텍스트 오염, 환각, 회귀 버그, 무분별한 파일 수정 위험이 커지는 한계가 존재했습니다.',
      solution:
        'Git worktree를 활용해 Foundation, Platform, Projects, Resume 등으로 물리적 작업 트리를 격리하고, cmux 터미널로 다중 에이전트를 병렬 배치했습니다. 구현(Worker)과 검증(Independent Senior Review)을 분리하고, 최종 Human QA와 Security Gate를 통과해야만 dev에 머지되는 안전 프로세스를 확립했습니다.',
      keyContributions: [
        'Track Decomposition 체계화: 대규모 개발 작업을 충돌 없는 독립 트랙으로 쪼개고 소유권(Ownership) 명확화',
        'cmux 기반 병렬 세션 제어: 단일 화면에서 다중 터미널 세션의 에이전트 작업 상태 및 콘솔 출력을 실시간 감시',
        'Independent Senior Review 도입: 구현 작업자와 완전히 분리된 검증 에이전트가 빌드, 타입, 보안, 회귀 위험을 엄격히 감사',
        'Security Gate & Remediation 루프: 발견된 결함을 단계별로 패치하고 재검증하여 dev 브랜치 무결성 보장',
        'KBO-Hub 실제 개발 적용: Supabase Auth 수직 슬라이스에 본 워크플로우를 적용하고 검토·보완 후 integration 완료',
      ],
      technicalHighlights: [
        'cmux CLI Multi-Terminal Sessions',
        'Git Worktrees Isolated Working Directories',
        'Role-Separated Agents (Worker vs Senior Reviewer)',
        'Remediation & Re-review Enforcement Loop',
        'Strict Security & Privacy Verification Gates',
        'Human Runtime QA Final Sign-off',
      ],
      learned:
        'AI 도구의 성패는 모델 자체의 지능보다 "작업을 어떻게 격리하고 어떤 검증 게이트를 거치게 설계하는가"라는 엔지니어링 프로세스에 달려 있음을 실증했습니다.',
    },
    techStack: [
      'cmux',
      'Git Worktree',
      'Multi-Agent Routing',
      'Shell Automation',
      'Independent Code Review',
      'Security Gate',
      'Runtime QA',
    ],
    featuredStack: ['cmux', 'Git Worktrees', 'Multi-Agent Routing', 'Security Gate'],
    metrics: [
      { label: '병렬 트랙', value: '4+ Tracks', note: 'Foundation · Platform · Projects · Resume' },
      { label: '리뷰 체계', value: 'Independent', note: '작업자-리뷰어 완전 분리 검증' },
      { label: '보안 게이트', value: 'Required', note: '시크릿·개인정보·회귀 점검' },
      { label: '적용 사례', value: 'KBO-Hub', note: '실제 프로덕트 개발 파이프라인으로 운용' },
    ],
    links: [
      {
        label: '오케스트레이션 아키텍처',
        url: '#multi-agent-workflow-container',
        isExternal: false,
        icon: 'doc',
      },
    ],
    architecture: {
      containerId: 'multi-agent-workflow-container',
      title: 'Multi-Agent Parallel Development Workflow',
      description:
        'Human Director가 작업을 분해하고, 병렬 worktree에서 Worker가 구현한 후, 독립된 Senior Review와 Remediation을 거쳐 Human QA로 검증되는 실제 개발 흐름입니다.',
      diagramType: 'multi-agent-workflow',
      svgArtifactPath: '/docs/diagrams/multi-agent-workflow.svg',
    },
    screenshotPlaceholder: {
      caption: 'cmux 기반 다중 worktree 병렬 세션 및 독립 코드리뷰 피드백 루프',
      mockupType: 'terminal',
      badgeText: 'Process Architecture',
    },
  },
  {
    id: 'ai-hub-pet',
    slug: 'ai-hub-pet',
    displayOrder: 3,
    tier: 'featured',
    title: 'AI-Hub-pet',
    nameEn: 'Doro Hub Pet',
    subtitle: '로컬 AI 에이전트 리소스 관찰 및 세션 라우팅 macOS 네이티브 앱',
    category: 'macOS Native Tool',
    status: 'Open Source',
    summary:
      '화면 위에 조용히 떠 있는 플로팅 펫이 로컬에서 실행 중인 AI 개발 에이전트(Antigravity, Claude Code, Codex 등)의 작업 상태를 관찰하고, 2줄 말풍선으로 리소스 사용량과 쿼터 리셋 시간을 직관적으로 알려주며 세션으로 바로 이동시켜주는 macOS 네이티브 도구입니다. 다중 에이전트 개발 환경의 실제 불편을 해소하기 위해 Swift로 직접 개발했습니다.',
    metadata: {
      role: 'Solo Native Developer',
      timeline: '2026.08',
      platform: 'macOS (Universal: Apple Silicon & Intel)',
      scope: '앱 기획 · Swift/AppKit 개발 · 프로세스 수명주기 감지 · 스프라이트 애니메이션',
    },
    narrative: {
      problem:
        '여러 터미널에서 AI 에이전트를 동시에 실행할 때, 어떤 에이전트가 생각 중이고 어떤 에이전트가 사용자의 입력을 기다리는지 확인하기 위해 끊임없이 창을 전환해야 하는 컨텍스트 스위칭 비용이 컸습니다.',
      solution:
        'Swift와 AppKit 기반의 초경량 플로팅 윈도우 앱을 구축했습니다. 시스템 자원을 거의 소모하지 않으면서 로컬 프로세스 수명주기와 사용량 캐시만 안전하게 감지하여, 상태별 스프라이트 모션과 클릭 한 번으로 세션을 포커싱하는 단축 인터랙션을 구현했습니다.',
      keyContributions: [
        'macOS Native AppKit & SwiftUI 설계: 가볍고 부드러운 플로팅 윈도우, 클릭 스루 및 드래그 인터랙션 구현',
        '프라이버시 최우선 안전 감지: 에이전트의 프롬프트, 대화 내용, 쿠키, 비밀번호는 절대 읽지 않고 프로세스 실행 상태와 로컬 캐시만 최소한으로 확인',
        '2줄 지능형 작업 말풍선: 현재 작업 중인 provider(AG/CC/Codex)와 실제 로컬 쿼터 캐시를 순환 표시',
        '원클릭 세션 포커스: 말풍선 클릭 또는 펫 더블클릭 시 현재 활성 에이전트의 터미널/작업 환경으로 즉시 전환',
        '상태 반응형 스프라이트 엔진: idle, working, thinking, waiting-for-user 등 7가지 상태별 모션 렌더링',
      ],
      technicalHighlights: [
        'Swift & macOS AppKit / SwiftUI',
        'Universal Binary (Apple Silicon & Intel Mac)',
        'Zero-Credential Process State Polling',
        'Smart 2-Line Dynamic HUD Bubble',
        'Session Auto-Focus Window Scripting',
        'Low-Resource Sprite Animation',
      ],
      learned:
        '개발자 본인의 작업 흐름에서 느끼는 사소한 마찰을 네이티브 데스크톱 기술로 직접 해결함으로써, 일상적 개발 생산성을 극대화하는 실용적 엔지니어링의 가치를 배웠습니다.',
    },
    techStack: [
      'Swift',
      'macOS AppKit',
      'SwiftUI',
      'Apple Silicon Universal',
      'Process Lifecycle Tracking',
      'Sprite Animation Engine',
    ],
    featuredStack: ['Swift', 'macOS AppKit', 'SwiftUI', 'Process Lifecycle Tracking'],
    metrics: [
      { label: '지원 환경', value: 'macOS', note: 'Apple Silicon & Intel 대상 네이티브 앱' },
      { label: '프라이버시', value: 'Limited Access', note: '프롬프트·토큰·비밀번호 비접근' },
      { label: '인터랙션', value: '1-Click', note: '클릭 한 번으로 작업 세션 즉시 이동' },
      { label: '배포 상태', value: 'Open Source', note: 'GitHub 공개 저장소' },
    ],
    links: [
      {
        label: 'GitHub 저장소',
        url: 'https://github.com/Keyco55/AI-Hub-pet',
        isExternal: true,
        icon: 'github',
      },
    ],
    screenshotPlaceholder: {
      caption: 'macOS 화면 위에 플로팅된 Doro 펫과 작업 상태·사용량 알림 말풍선',
      mockupType: 'macos-app',
      badgeText: 'Native macOS App',
    },
  },
  {
    id: 'gom-marketing-automation',
    slug: 'gom-marketing-automation',
    displayOrder: 4,
    tier: 'featured',
    title: 'GOM Marketing × Web × Automation',
    nameEn: 'Marketing Tech & Data Pipeline',
    subtitle: '콘텐츠 마케팅·웹 전환 최적화 및 파이썬 엑셀 업무 자동화',
    category: 'Growth & Automation',
    status: 'Internal Production Verified',
    summary:
      '국내 및 글로벌 마케팅 캠페인을 전개하며, 반복적인 데이터 취합 업무를 Python(pandas, openpyxl) 파이프라인으로 자동화하고, 마케팅 랜딩 페이지의 HTML/CSS를 직접 수정하여 CTA 전환율을 극대화한 실무 프로젝트입니다. 회사 내부 기밀 자산은 철저히 보호하며 익명화된 프로세스로 프레젠테이션합니다.',
    metadata: {
      role: 'Growth Marketer & Automation Builder',
      timeline: '2024 ~ 2025',
      platform: 'Web · SNS/Blog · Python CLI Pipeline',
      scope: '글로벌/국내 마케팅 · 콘텐츠 기획 · 웹 수정 · 데이터 자동화',
    },
    narrative: {
      problem:
        '매주/매월 여러 채널에서 쏟아지는 마케팅 성과 데이터를 수작업으로 엑셀에 취합하는 과정에서 수 시간의 단순 반복 노동과 휴먼 에러가 빈번하게 발생했고, 랜딩 페이지 수정 시 개발 부서와의 커뮤니케이션 비용으로 인해 전환 최적화 실험 속도가 지연되었습니다.',
      solution:
        'Python의 pandas와 openpyxl 라이브러리를 활용해 원클릭 데이터 검증 및 엑셀 리포트 생성 스크립트를 작성하고, 마케팅 페이지의 HTML/CSS/CTA 버튼 마크업을 직접 안전하게 수정·배포하여 실험 주기를 획기적으로 단축했습니다.',
      keyContributions: [
        '국내 & 글로벌 마케팅 전략 수립: 브랜드 인지도 증대 및 제품 전환을 위한 다채널 SNS·블로그 콘텐츠 큐레이션',
        '웹 페이지 직접 수정 & 전환 최적화: 마케팅 랜딩 페이지의 HTML/CSS 구조를 직접 핸들링하여 CTA 배치, 링크 구조, 인터랙티브 임베드 개선',
        'Python 데이터 전처리 자동화: 여러 광고 매체 및 유입 경로의 원시 데이터를 정규화하고 중복을 제거하는 CLI 스크립트 제작',
        '대용량 엑셀 워크플로우 자동화: 주간 정산 및 KPI 리포트 집계 반복 업무를 스크립트 파이프라인으로 자동화',
        '보안 및 데이터 거버넌스 준수: 민감한 고객 정보나 회사 기밀 자산을 노출하지 않는 안전한 자동화 아키텍처 수립',
      ],
      technicalHighlights: [
        'Python 3 Scripting & CLI Automation',
        'pandas Data Cleansing & Transformation',
        'openpyxl Formatted Excel Report Generation',
        'Semantic HTML5 & Responsive CSS Optimization',
        'Conversion-Oriented CTA & Embed Structuring',
        'Zero-Leak Data Privacy Anonymization',
      ],
      learned:
        '마케팅 비즈니스 도메인에 기술과 코드를 직접 결합했을 때 조직의 반복 노동을 얼마나 혁신적으로 줄이고 빠른 실험 속도를 만들어낼 수 있는지 체득했습니다.',
    },
    techStack: [
      'Python',
      'pandas',
      'openpyxl',
      'HTML5',
      'CSS3',
      'Excel Automation',
      'Growth Analytics',
    ],
    featuredStack: ['Python', 'pandas', 'openpyxl', 'HTML5/CSS3', 'Excel Automation'],
    metrics: [
      { label: '집계 자동화', value: 'Pipeline', note: '반복 리포트 집계 스크립트 자동화' },
      { label: '데이터 검증', value: 'Automated', note: '수작업 오기를 줄이는 검증 로직' },
      { label: '웹 운영', value: '직접 수정', note: 'HTML/CSS·미디어·CTA·링크 반영' },
      { label: '정보 보호', value: 'Anonymized', note: '회사 내부 raw asset 비공개 원칙' },
    ],
    links: [
      {
        label: '프로세스 요약',
        url: '#developer-tooling',
        isExternal: false,
        icon: 'doc',
      },
    ],
    screenshotPlaceholder: {
      caption: '데이터 수집·정제부터 포맷팅된 엑셀 산출물 자동 생성까지의 파이썬 파이프라인 흐름',
      mockupType: 'workflow',
      badgeText: 'Anonymized Workflow',
    },
  },
  {
    id: 'ai-status-hub',
    slug: 'ai-status-hub',
    displayOrder: 5,
    tier: 'featured',
    title: 'AI Usage Status Hub',
    nameEn: 'keyco AI Status Hub',
    subtitle: '프라이버시 보존형 다중 AI 리소스 캐시 & 메뉴바·터미널 통합 레이어',
    category: 'Developer Infrastructure',
    status: 'Preparing Public Release',
    summary:
      '여러 AI 개발 서비스(Codex, Antigravity, Alibaba 등)의 사용량과 초기화 시각을 한눈에 확인하여 최적의 모델 라우팅을 돕는 macOS 도구입니다. Peter Steinberger의 오픈소스 CodexBar 로컬 루프백 데이터를 공급원으로 활용하며, 계정 정보가 남지 않는 프라이버시 보존형 캐시 레이어와 Python 수집기, Swift 메뉴바 헬퍼를 직접 개발하여 터미널(cmux) 워크플로우에 통합했습니다.',
    metadata: {
      role: 'Integration Architect & Developer',
      timeline: '2026.08 ~ 현재',
      platform: 'macOS · Python · Swift AppKit · cmux/tmux',
      scope: '데이터 수집기 · 캐시 보안 설계 · 메뉴바 헬퍼 · cmux 연동 (공개 릴리스 준비 중)',
    },
    narrative: {
      problem:
        '멀티 에이전트 협업 환경에서 각 서비스의 쿼터 소진율과 리셋 시간을 확인하기 위해 여러 브라우저 탭과 대시보드를 번갈아 확인해야 했고, 작업 중간에 토큰이 고갈되어 개발 흐름이 끊기는 문제가 있었습니다.',
      solution:
        'CodexBar의 로컬 loopback API를 기반으로, 필요한 최소한의 수치(Quota, Reset Countdown)만 안전하게 추출하는 Python collector를 제작했습니다. 인증 정보나 프롬프트를 배제한 제한된 로컬 권한의 로컬 캐시를 구성하고, Swift 메뉴바 및 cmux 상태창에 실시간 공급하는 통합 레이어를 구축했습니다.',
      keyContributions: [
        'CodexBar 로컬 루프백 데이터 통합: 기존 검증된 오픈소스(CodexBar)의 출력을 비침습적으로 연계 (CodexBar 자체를 직접 개발했다고 과장하지 않음)',
        '프라이버시 보존형 상태 캐시 설계: 사용자 ID, 토큰, 프롬프트, 쿠키를 일절 배제하고 오직 쿼터 퍼센트와 리셋 타임만 정규화하여 원자적(atomic) 파일 쓰기 구현',
        'Python 표준 라이브러리 기반 Collector: 무거운 외부 종속성 없이 OS 기본 환경에서 초경량으로 주기적 데이터 수집',
        'Swift AppKit 메뉴바 헬퍼 & 터미널 출력: macOS 메뉴바(AG/CC/C/ALI) 및 cmux/tmux 하단 상태 표시줄에 즉시 출력 지원',
        'Multi-Agent 리소스 기반 라우팅 지원: 잔여 쿼터와 리셋 시간을 기준으로 병렬 작업 트리에 어떤 모델을 투입할지 신속 판단',
      ],
      technicalHighlights: [
        'Python Standard Library Loopback Client',
        'Swift AppKit Lightweight Menubar Helper',
        'Privacy-Preserving Local Status Cache (Restricted Permissions)',
        'Atomic Cache File Write & Stale Data Distinction',
        'Zero-Credential / Zero-Telemetry Design',
        'cmux & tmux Integration Pipeline',
      ],
      learned:
        '기존의 훌륭한 오픈소스 생태계를 존중하면서, 내 작업 흐름에 꼭 필요한 통합 레이어와 프라이버시 보호 장치를 더해 강력한 개인화 개발 인프라를 완성하는 소프트웨어 조합 능력을 길렀습니다.',
    },
    techStack: [
      'Python 3',
      'Swift',
      'macOS AppKit',
      'CodexBar Integration',
      'Local Status Cache',
      'cmux / tmux CLI',
    ],
    featuredStack: ['Python 3', 'Swift', 'macOS AppKit', 'Privacy Cache Layer'],
    metrics: [
      { label: '공개 상태', value: '준비 중', note: 'Preparing Public Release' },
      { label: '보안 격리', value: 'Restricted', note: '로컬 권한 기반 캐시 접근 제한' },
      { label: '프라이버시', value: 'Excluded', note: '자격증명 및 프롬프트 미보관' },
      { label: '통합 환경', value: 'Menubar & CLI', note: 'Swift 메뉴바 + cmux 터미널 지원' },
    ],
    links: [],
    architecture: {
      containerId: 'ai-status-hub-flow-container',
      title: 'AI Usage Status Hub Integration Pipeline',
      description:
        'CodexBar 로컬 루프백 → Python 수집기 → 무결성 상태 캐시 → Swift 메뉴바 및 cmux 터미널로 이어지는 안전한 로컬 파이프라인 구조입니다.',
      diagramType: 'ai-status-hub-flow',
      svgArtifactPath: '/docs/diagrams/ai-status-hub-flow.svg',
    },
    screenshotPlaceholder: {
      caption: 'macOS 메뉴바와 cmux 상태창에 표시되는 실시간 provider별 쿼터 및 리셋 카운트다운',
      mockupType: 'macos-app',
      badgeText: 'Preparing Public Release',
    },
  },
] as const;

/**
 * Hero section metadata & live indicators.
 */
export const HERO_DATA = {
  nameKo: '김범우',
  nameEn: 'KEYCO',
  roleTitle: 'Customer Experience · Content · Product Development',
  slogan: '고객과 서비스를 이해하고,\n콘텐츠와 기술로 직접 만드는 사람.',
  subDescription:
    '고객 관점의 서비스 기획과 마케팅 자동화부터, 풀스택 웹 애플리케이션과 macOS 네이티브 도구 개발까지. 문제를 직접 정의하고, AI 멀티에이전트 오케스트레이션과 엔지니어링으로 빠르게 실서비스를 구축합니다.',
  liveStatuses: [
    {
      id: 'kbo-hub',
      label: 'KBO-Hub',
      badge: 'Closed Beta',
      description: '통합 야구 라이프스타일 플랫폼',
      indicatorColor: 'emerald',
      href: '#kbo-hub',
    },
    {
      id: 'ai-hub-pet',
      label: 'AI-Hub-pet',
      badge: 'macOS Native',
      description: '에이전트 모니터링 & 세션 라우터',
      indicatorColor: 'cyan',
      href: '#ai-hub-pet',
    },
    {
      id: 'portfolio',
      label: 'Portfolio v1',
      badge: 'Active Work',
      description: 'Next.js Static Export & Parallel Track',
      indicatorColor: 'blue',
      href: '#featured-projects',
    },
  ],
  ctaButtons: [
    {
      id: 'projects',
      label: '프로젝트 둘러보기',
      href: '#featured-projects',
      variant: 'primary' as const,
      isExternal: false,
    },
    {
      id: 'resume',
      label: '이력서 / 소개',
      href: '#resume',
      variant: 'secondary' as const,
      isExternal: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/Keyco55',
      variant: 'ghost' as const,
      isExternal: true,
      badge: 'Keyco55',
    },
  ],
} as const;
