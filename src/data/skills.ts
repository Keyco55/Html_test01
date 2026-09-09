import { SkillCategory } from '../types/resume';

export const skillsData: SkillCategory[] = [
  {
    category: 'WEB',
    description: '반응형 웹 UI 구현 및 타입 안정적인 모던 프론트엔드',
    items: ['Next.js', 'React', 'TypeScript', 'HTML', 'CSS'],
    practicalContext:
      '시맨틱 HTML 마크업 및 접근성을 고려한 UI 설계, TypeScript를 통한 엄격한 타입 정의, React 컴포넌트 기반 모듈화 구현.'
  },
  {
    category: 'BACKEND & DATA',
    description: '관계형 데이터베이스 모델링 및 인증·스토리지 연동',
    items: ['Supabase', 'PostgreSQL', 'Auth', 'RLS', 'Storage'],
    practicalContext:
      'PostgreSQL 기반 테이블 스키마 및 외래키 설계, Row Level Security(RLS)를 통한 접근 권한 제어, OAuth 인증 및 파일 스토리지 파이프라인 구성.'
  },
  {
    category: 'DEVELOPMENT',
    description: '효율적인 협업 및 브랜치 관리, 인프라 배포 환경',
    items: ['Git', 'GitHub', 'Worktree', 'Cloudflare'],
    practicalContext:
      'Git Worktree를 활용한 다중 기능 동시 병렬 격리 작업, GitHub 협업 브랜치 전략, Cloudflare Workers/Pages·DNS를 통한 웹 배포.'
  },
  {
    category: 'AUTOMATION',
    description: '반복적인 데이터 가공 및 오피스 업무 자동화 스크립트',
    items: ['Python', 'pandas', 'openpyxl'],
    practicalContext:
      '수작업으로 처리되던 다량의 엑셀 시트 취합, 비정형 데이터 정제 및 마케팅 보고서용 데이터 파싱 자동화 구현.'
  },
  {
    category: 'MAC / NATIVE',
    description: 'macOS 환경 도구 및 네이티브 개발 생태계 이해',
    items: ['Swift', 'macOS'],
    practicalContext:
      'macOS 개발자 워크스페이스 최적화, Swift 기본 문법과 애플 플랫폼 구조에 대한 기초 탐구 및 활용.'
  },
  {
    category: 'AI WORKFLOW',
    description: '터미널 멀티플렉서 기반 AI/CLI 에이전트 병렬 제어 및 QA',
    items: ['Claude Code', 'Codex CLI', 'Google Antigravity', 'Aider', 'OpenCode', 'cmux', 'Multi-Agent', 'Human QA'],
    practicalContext:
      'cmux 환경에서 복수의 전문 AI 에이전트를 역할별로 분업 조율하고, 결과물을 직접 인간 관점에서 엄격히 검증하는 하이브리드 개발 사이클 운영.'
  },
  {
    category: 'CONTENT',
    description: '기획부터 제작, 채널 운영까지의 콘텐츠 파이프라인',
    items: ['Final Cut Pro', 'Google Analytics', 'Video Editing', 'Blog', 'SNS', 'Content Planning'],
    practicalContext:
      '영상 컷편집 및 자막·오디오 작업, Google Analytics 유입 흐름 확인, 기술 블로그 아티클 작성, 소셜 미디어 채널 커뮤니케이션 및 타깃 맞춤형 콘텐츠 기획.'
  }
];
