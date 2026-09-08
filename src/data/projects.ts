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
    subtitle: '통합 야구팬 라이프스타일 C2C 플랫폼',
    category: 'Full-Stack Product',
    status: 'Closed Beta',
    summary:
      'HOMEPLATE는 경기 일정과 직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티, 야구 굿즈 중고 장터를 한곳에 모은 야구팬용 C2C 서비스입니다. 1인 빌더로 기획부터 개발, Supabase 인증·RLS 설계, Cloudflare Workers 배포와 QA까지 맡았습니다.',
    metadata: {
      role: 'Product Planning & Full-Stack Builder',
      timeline: '2026.08 ~ 현재',
      platform: 'Web (Next.js App Router) & Cloudflare Workers',
      scope: '기획 · 디자인 시스템 · 프론트엔드 · DB/Auth/RLS · 배포 · QA',
    },
    narrative: {
      problem:
        '경기 일정과 기록, 굿즈·포토카드 거래, 티켓 정보가 여러 서비스에 흩어져 있어 필요한 정보를 한 번에 확인하기 어려웠습니다.',
      solution:
        'Next.js App Router와 Supabase로 서비스를 만들고, 테마 시스템과 3D 포토카드 인터랙션, RLS 기반 계정별 데이터 보호, 모바일 내비게이션을 구현했습니다.',
      keyContributions: [
        '제품 기획과 요구사항 정의: 경기 일정·직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티, 야구 굿즈 중고 장터의 기능과 연결 방식 정의',
        'Next.js App Router 아키텍처: App Router 구조 위에 전역 헤더, 실시간 티커 셸, 모바일 드로어 및 FOUC 없는 테마 시스템 구축',
        'Supabase Auth & Database / RLS 설계: Email/Password 인증, public.profiles 트리거 연계, 사용자 데이터 격리를 위한 엄격한 Row Level Security 정책 적용',
        '클라이언트 인터랙션: 외부 라이브러리 없이 DOM 제어로 3D 홀로그램 글레어와 포토카드 틸트 효과를 구현하고 Hydration 오류 방지',
        '검증: 기능 단위 보안 리뷰와 Human Runtime QA를 거쳐 Closed Beta 배포',
      ],
      technicalHighlights: [
        'Next.js App Router & React',
        'Supabase Auth & Session Persistence',
        'PostgreSQL Database & Schema Design',
        'Row Level Security (RLS) Policies',
        'Cloudflare Workers Delivery',
        'Zero-Dependency 3D Card Tilt Interaction',
        'Human Runtime QA & Security Gate Passed',
      ],
      learned:
        '기획한 기능을 실제 서비스로 운영하려면 화면 구현뿐 아니라 인증, 데이터 격리, 배포와 사용자 확인까지 함께 설계해야 한다는 점을 배웠습니다.',
    },
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Cloudflare Workers',
      'Tailwind CSS',
    ],
    featuredStack: ['Next.js App Router', 'React', 'Supabase', 'PostgreSQL', 'Cloudflare Workers'],
    metrics: [
      { label: '현재 상태', value: 'Closed Beta', note: '초대 기반 운영 → 2027.02 Open Beta → 2027.03 정식 출시 목표' },
      { label: '보안 검증', value: 'Reviewed', note: 'RLS 격리 & Security Gate 수행' },
      { label: '개발 범위', value: 'Full-Cycle', note: '기획부터 배포·QA까지 전 과정' },
      { label: '인터랙션', value: 'DOM 기반', note: '외부 라이브러리 없는 3D 카드 틸트' },
    ],
    links: [
      {
        label: '서비스 바로가기 (HOMEPLATE)',
        url: 'https://kbo-hub.9ren5dezvous.workers.dev/',
        isExternal: true,
        icon: 'external',
      },
    ],
    architecture: {
      containerId: 'kbo-hub-arch-container',
      title: 'KBO-Hub Full-Stack Architecture',
      description:
        'Next.js App Router, Cloudflare Workers, Supabase Auth와 RLS가 연결되는 서비스 구조입니다.',
      diagramType: 'kbo-hub-architecture',
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
    tier: 'heroic',
    title: 'Multi-Agent Development Orchestration',
    nameEn: 'MULTI-AGENT DEVELOPMENT ENVIRONMENT',
    subtitle: '역할 분리와 Git Worktree 격리를 적용한 개인 개발 운영 환경',
    category: 'Development Orchestration',
    status: 'Public · Open Source',
    summary:
      '여러 CLI 에이전트를 역할별로 나누고 Git Worktree로 작업 공간을 격리해 구현, 검수, QA를 분리해서 운영하는 개인 개발환경입니다. HOMEPLATE와 이 포트폴리오를 포함한 실제 개인 프로젝트에 적용하고 있습니다.',
    metadata: {
      role: 'System Designer & Human Operator',
      timeline: '운영 중',
      platform: 'cmux · CLI Agent · Git Worktree',
      scope: '운영 구조 설계 · 역할 분리 · 작업 공간 격리 · 검수 · Human Runtime QA',
    },
    narrative: {
      problem:
        '한 에이전트가 구현과 검수, 통합까지 모두 맡으면 문맥과 책임이 섞이고, 여러 작업을 동시에 수정할 때 충돌하기 쉬웠습니다.',
      solution:
        'Human/HQ가 범위를 정하고 Worker와 Worker Fast가 구현을 맡도록 역할을 나눴습니다. Day마다 하나의 feature branch와 임시 worktree를 사용하고, 별도의 Senior Review와 Security Gate, Human Runtime QA를 거친 뒤 통합 여부를 결정합니다.',
      keyContributions: [
        'cmux에서 Worker, Worker Fast, Senior Review, QA 역할을 나누어 실행',
        'Day 작업마다 하나의 feature branch와 임시 worktree를 생성하는 운영 방식 정리',
        'worktree당 수정 주체를 하나로 제한해 동시 수정 충돌 방지',
        '구현과 독립 검수, Security Gate, Human Runtime QA를 분리',
        '동일한 작업 조건에서 모델별 결과를 비교하는 benchmark 기록',
        'merge와 push는 Human이 최종 결정하는 승인 경계 유지',
      ],
      technicalHighlights: [
        'cmux CLI Agent Operations',
        'Dynamic Feature Worktree Runtime',
        'One Modifier per Worktree',
        'Independent Senior Review',
        'Read-Only Security Gate',
        'Human Runtime QA',
      ],
      learned:
        '모델 이름보다 역할과 책임을 분명히 나누고, 작업 공간과 승인 경계를 지키는 것이 결과를 안정적으로 검수하는 데 더 중요했습니다.',
    },
    techStack: ['cmux', 'CLI Agent', 'Git', 'Git Worktree', 'Shell', 'Markdown'],
    featuredStack: ['cmux', 'CLI Agent', 'Git Worktree', 'Security Gate'],
    metrics: [
      { label: '작업 공간', value: 'Isolated', note: 'Day별 단일 feature branch와 임시 worktree' },
      { label: '수정 원칙', value: 'One Modifier', note: 'worktree당 수정 주체 1개' },
      { label: '검수', value: 'Independent', note: 'Worker와 Senior Review 역할 분리' },
      { label: '최종 판단', value: 'Human', note: 'Runtime QA와 merge·push 결정' },
    ],
    links: [
      {
        label: 'GitHub에서 보기',
        url: 'https://github.com/Keyco55/multi-agent-project',
        isExternal: true,
        icon: 'github',
      },
    ],
    architecture: {
      containerId: 'multi-agent-orchestration-container',
      title: 'Multi-Agent Development Environment',
      description:
        'Human/HQ, 역할별 CLI Agent, 단일 feature worktree, 독립 검수와 QA가 이어지는 개발 운영 구조입니다.',
      diagramType: 'multi-agent-workflow',
    },
    screenshotPlaceholder: {
      caption: 'cmux에서 역할별 CLI Agent와 독립 검수를 함께 운영하는 실제 환경',
      mockupType: 'workflow',
      badgeText: 'Public · Open Source',
    },
  },
  {
    id: 'ai-hub-pet',
    slug: 'ai-hub-pet',
    displayOrder: 5,
    tier: 'featured',
    title: 'Doro Hub Pet',
    nameEn: 'AI-Hub-pet',
    subtitle: '로컬 AI 에이전트 리소스 관찰 및 세션 라우팅 macOS 네이티브 앱',
    category: 'macOS Native Tool',
    status: 'Open Source',
    summary:
      'Doro Hub Pet은 화면 위에 떠 있는 캐릭터가 로컬 AI 에이전트의 작업 상태와 사용량, 쿼터 초기화 시각을 알려주는 macOS 앱입니다. 말풍선을 클릭하면 해당 작업 세션으로 바로 이동합니다.',
    metadata: {
      role: 'Solo Native Developer',
      timeline: '2026.08',
      platform: 'macOS (Universal: Apple Silicon & Intel)',
      scope: '앱 기획 · Swift/AppKit 개발 · 프로세스 수명주기 감지 · 스프라이트 애니메이션',
    },
    narrative: {
      problem:
        '여러 터미널에서 AI 에이전트를 동시에 실행하면 작업 중인지 입력을 기다리는지 확인하려고 창을 자주 전환해야 했습니다.',
      solution:
        'Swift와 AppKit으로 플로팅 윈도우를 만들고, 로컬 프로세스 상태와 사용량 캐시만 읽도록 범위를 제한했습니다. 상태별 캐릭터 움직임과 원클릭 세션 이동도 함께 구현했습니다.',
      keyContributions: [
        'macOS Native AppKit & SwiftUI 설계: 가볍고 부드러운 플로팅 윈도우, 클릭 스루 및 드래그 인터랙션 구현',
        '정보 접근 제한: 프롬프트, 대화 내용, 쿠키, 비밀번호는 읽지 않고 프로세스 실행 상태와 로컬 캐시만 확인',
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
        '작업 중 반복되는 작은 불편을 관찰하고, 필요한 기능만 담은 네이티브 도구로 해결하는 과정을 익혔습니다.',
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
    subtitle: '콘텐츠 마케팅·웹페이지 수정 및 Python 엑셀 업무 자동화',
    category: 'Growth & Automation',
    status: 'Internal Production Verified',
    summary:
      '국내외 콘텐츠 마케팅과 공식 SNS 채널을 운영하고, 랜딩 페이지의 HTML/CSS를 수정했습니다. Python과 Excel로 반복적인 데이터 취합·정리 업무를 자동화했으며, 공개 자료에는 회사 내부 정보가 드러나지 않도록 처리했습니다.',
    metadata: {
      role: 'Growth Marketer & Automation Builder',
      timeline: '2024 ~ 2025',
      platform: 'Web · SNS/Blog · Python CLI Pipeline',
      scope: '글로벌/국내 마케팅 · 콘텐츠 기획 · 웹 수정 · 데이터 자동화',
    },
    narrative: {
      problem:
        '여러 채널의 마케팅 데이터를 매주·매월 엑셀로 취합하는 과정에서 반복 작업과 수작업 오류가 생겼습니다. 랜딩 페이지의 작은 수정도 별도 요청이 필요해 반영이 늦어지곤 했습니다.',
      solution:
        'pandas와 openpyxl로 데이터 검증과 엑셀 정리를 자동화하는 스크립트를 작성했습니다. 웹 업무는 별도로 HTML/CSS와 CTA 마크업을 직접 수정해 필요한 내용을 반영했습니다.',
      keyContributions: [
        '국내외 콘텐츠 마케팅: 공식 SNS와 블로그 채널에 맞는 콘텐츠 기획·제작 및 운영',
        '웹페이지 수정: 마케팅 랜딩 페이지의 HTML/CSS, CTA 배치, 링크 구조와 미디어 삽입 코드 수정',
        'Python 데이터 전처리 자동화: 여러 광고 매체 및 유입 경로의 원시 데이터를 정규화하고 중복을 제거하는 CLI 스크립트 제작',
        '대용량 엑셀 워크플로우 자동화: 주간 정산 및 KPI 리포트 집계 반복 업무를 스크립트 파이프라인으로 자동화',
        '정보 보호: 고객 정보와 회사 내부 자료가 공개 결과물에 포함되지 않도록 작업 범위 관리',
      ],
      technicalHighlights: [
        'Python 3 Scripting & CLI Automation',
        'pandas Data Cleansing & Transformation',
        'openpyxl Formatted Excel Report Generation',
        'Semantic HTML5 & Responsive CSS Optimization',
        'CTA & Media Embed Markup',
        'Public Asset Anonymization',
      ],
      learned:
        '마케팅 업무를 직접 해 본 경험이 있어 반복되는 지점을 찾고, 작은 스크립트와 웹 수정으로 운영 부담을 줄일 수 있었습니다.',
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
    displayOrder: 3,
    tier: 'featured',
    title: 'keyco AI Status Hub',
    nameEn: 'AI Usage Status Hub',
    subtitle: '프라이버시 보존형 다중 AI 리소스 캐시 & 메뉴바·터미널 통합 레이어',
    category: 'Developer Infrastructure',
    status: 'Public · Open Source',
    summary:
      '여러 AI 개발 서비스의 사용량과 초기화 시각을 메뉴바와 터미널에서 함께 확인하는 macOS 도구입니다. 오픈소스 CodexBar의 로컬 데이터를 받아 필요한 수치만 저장하는 Python 수집기와 Swift 메뉴바 도구를 만들었습니다.',
    metadata: {
      role: 'Integration Architect & Developer',
      timeline: '2026.08 ~ 현재',
      platform: 'macOS · Python · Swift AppKit · cmux/tmux',
      scope: '데이터 수집기 · 캐시 보안 설계 · 메뉴바 헬퍼 · cmux 연동 (GitHub 공개 저장소)',
    },
    narrative: {
      problem:
        '각 AI 서비스의 남은 사용량과 초기화 시각을 확인하려면 여러 화면을 오가야 했고, 작업 도중 사용량이 소진되는 일도 있었습니다.',
      solution:
        'CodexBar의 로컬 loopback API에서 사용량과 초기화 시각만 읽는 Python 수집기를 만들었습니다. 인증 정보와 프롬프트는 저장하지 않고, 결과를 Swift 메뉴바와 cmux 상태창에 표시합니다.',
      keyContributions: [
        'CodexBar 로컬 루프백 데이터 통합: 기존 검증된 오픈소스(CodexBar)의 출력을 비침습적으로 연계 (CodexBar 자체를 직접 개발했다고 과장하지 않음)',
        '프라이버시 보존형 상태 캐시 설계: 사용자 ID, 토큰, 프롬프트, 쿠키를 일절 배제하고 오직 쿼터 퍼센트와 리셋 타임만 정규화하여 원자적(atomic) 파일 쓰기 구현',
        'Python 표준 라이브러리 기반 Collector: 별도 외부 종속성 없이 필요한 데이터를 주기적으로 수집',
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
        '기존 오픈소스의 역할을 분명히 밝히면서, 제 작업에 필요한 연결 기능과 정보 보호 범위만 더하는 방법을 익혔습니다.',
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
      { label: '공개 상태', value: 'PUBLIC', note: 'Open Source — GitHub 공개 저장소' },
      { label: '보안 격리', value: 'Restricted', note: '로컬 권한 기반 캐시 접근 제한' },
      { label: '프라이버시', value: 'Excluded', note: '자격증명 및 프롬프트 미보관' },
      { label: '통합 환경', value: 'Menubar & CLI', note: 'Swift 메뉴바 + cmux 터미널 지원' },
    ],
    links: [
      {
        label: 'GitHub 저장소',
        url: 'https://github.com/Keyco55/keyco-ai-status-hub',
        isExternal: true,
        icon: 'github',
      },
    ],
    architecture: {
      containerId: 'ai-status-hub-flow-container',
      title: 'AI Usage Status Hub Integration Pipeline',
      description:
        'CodexBar 로컬 루프백에서 Python 수집기와 상태 캐시를 거쳐 Swift 메뉴바와 cmux로 이어지는 구조입니다.',
      diagramType: 'ai-status-hub-flow',
    },
    screenshotPlaceholder: {
      caption: 'macOS 메뉴바와 cmux 상태창에 표시되는 실시간 provider별 쿼터 및 리셋 카운트다운',
      mockupType: 'macos-app',
      badgeText: 'Public · Open Source',
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
    '고객 응대와 콘텐츠 운영 경험을 바탕으로 서비스를 기획하고 만듭니다. 웹 애플리케이션부터 반복 업무를 줄이는 자동화와 macOS 도구까지, 필요한 형태를 직접 찾아 구현합니다.',
  liveStatuses: [
    {
      id: 'kbo-hub',
      label: 'KBO-Hub · HOMEPLATE',
      badge: 'Closed Beta',
      description: '통합 야구팬 라이프스타일 C2C 플랫폼',
      indicatorColor: 'emerald',
      href: '#kbo-hub',
    },
    {
      id: 'multi-agent-orchestration',
      label: 'Multi-Agent Development Orchestration',
      badge: 'Public · Open Source',
      description: '역할 분리와 Git Worktree 격리를 적용한 개발환경',
      indicatorColor: 'blue',
      href: '#multi-agent-orchestration',
    },
    {
      id: 'ai-hub-pet',
      label: 'Doro Hub Pet',
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
