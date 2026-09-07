import { DeveloperToolItem } from '../types/projects';

/**
 * Developer Tooling data for KEYCO Portfolio v1.
 * Showcases actual engineering productivity systems KEYCO built and operates daily.
 */
export const DEVELOPER_TOOLS: readonly DeveloperToolItem[] = [
  {
    id: 'cmux-worktree-multiplexer',
    title: 'cmux + Git Worktree Multi-Session Pipeline',
    subtitle: '병렬 트랙 분할 및 충돌 없는 다중 터미널 워크스페이스 제어',
    category: 'Terminal & Workspace',
    badge: 'Daily Production',
    status: 'Active In Use',
    purpose:
      '단일 프로젝트의 대규모 작업을 Foundation, Platform, Projects, Resume 등 독립된 Git worktree로 분리하고, cmux 터미널 멀티플렉서를 통해 각 트랙에 AI 에이전트와 수동 작업자를 병렬 배치하여 작업 컨텍스트 간 간섭을 완벽히 방지합니다.',
    keyFeatures: [
      'Git Worktree 기반 물리 디렉토리 완전 격리 (메인 브랜치 오염 방지)',
      'cmux 세션 스크립팅을 통한 원클릭 병렬 에이전트 동시 기동 및 상태 감시',
      '작업자(Worker)와 독립 리뷰어(Senior Reviewer) 세션 분리 운영',
      '트랙별 독립 빌드 및 타입 체크 자동 트리거 연계',
    ],
    techStack: ['cmux', 'Git Worktree', 'Zsh', 'Shell Scripting', 'tmux'],
    terminalCommand: 'cmux new-workspace --tracks "foundation,platform,projects,resume"',
  },
  {
    id: 'native-macos-hud-and-menubar',
    title: 'macOS Native Menu Bar & Floating HUD System',
    subtitle: 'Swift AppKit / SwiftUI 기반 초경량 개발 리소스 관찰 데스크톱 앱',
    category: 'macOS Native',
    badge: 'Universal App',
    status: 'Active In Use',
    purpose:
      '화면 상단 메뉴바와 플로팅 펫 윈도우를 통해 현재 작업 중인 AI 모델, 남은 쿼터(Quota), 리셋 시간 카운트다운을 시스템 부하 없이 실시간 확인하고, 더블클릭 한 번으로 해당 작업 세션의 터미널/에디터 창을 즉각 활성화합니다.',
    keyFeatures: [
      'Apple Silicon 및 Intel Mac을 완벽 지원하는 네이티브 Universal 바이너리',
      '경량 네이티브 구현으로 시스템 자원 점유율 극소화',
      '프라이버시 최우선: 토큰, 프롬프트, 쿠키 비접근 원칙',
      '동적 2줄 상태 말풍선 및 세션 자동 포커싱 AppleScript/AppKit 브리지',
    ],
    techStack: ['Swift 6', 'macOS AppKit', 'SwiftUI', 'AppleScript', 'CoreAnimation'],
    terminalCommand: 'open /Applications/DoroHubPet.app',
  },
  {
    id: 'privacy-preserving-usage-collector',
    title: 'Privacy-Preserving AI Resource Collector',
    subtitle: 'Python 표준 라이브러리 기반 안전한 로컬 사용량 파싱 및 캐시 엔진',
    category: 'Local Infrastructure',
    badge: 'Zero Credentials',
    status: 'Active In Use',
    purpose:
      'CodexBar 로컬 루프백 엔드포인트를 안전하게 조회하여 표시 가능한 핵심 수치만 추출하고, 사용자 식별자나 계정 토큰을 배제한 채 제한된 시스템 파일 권한을 적용한 원자적 로컬 캐시를 구성하여 메뉴바 및 터미널에 공급합니다.',
    keyFeatures: [
      '무거운 외부 의존성 없는 Python 표준 라이브러리 (urllib, json, os) 구현',
      '원자적(atomic) 파일 쓰기로 다중 프로세스 동시 접근 시 데이터 오염 방지',
      '오프라인/네트워크 장애 시 이전 정상 캐시(stale)와 현재 불능 상태 구분',
      'Multi-Agent 리소스 잔여량에 기반한 모델 라우팅 판단 데이터 제공',
    ],
    techStack: ['Python 3', 'POSIX File Permissions', 'Atomic IO', 'JSON Schema'],
    terminalCommand: 'python3 -m collectors.usage_sync --cache-dir ~/.cache/ai-status',
  },
  {
    id: 'automated-quality-security-gates',
    title: 'Automated Quality, Security & QA Verification Gates',
    subtitle: '타입스크립트 컴파일, 시크릿 누출 차단, 런타임 접근성 자동 검증 체계',
    category: 'Quality & Security',
    badge: 'Zero Blocker',
    status: 'Production Tooling',
    purpose:
      '코드 병합 전 staging 환경에서 TypeScript strict 타입 체크, 번들 무결성, 민감 정보(API Key, 개인정보, 로컬 경로) 누출 여부, 키보드 접근성 및 모바일 레이아웃 오버플로우를 사전에 자동 검사하여 dev 브랜치의 안전성을 보장합니다.',
    keyFeatures: [
      'TypeScript strict compile 검사 (any 타입 배제 원칙)',
      'Git 커밋 전 시크릿/환경변수 누출 방지 스캔 훅',
      '모바일 375px~1440px 가로 스크롤 오버플로우 검증',
      'Human Runtime QA와 병행하는 자동화 체크리스트 레포팅',
    ],
    techStack: ['TypeScript', 'Git Hooks', 'Node.js', 'Bash', 'Security Audit'],
    terminalCommand: 'npm run verify:all && git status',
  },
] as const;
