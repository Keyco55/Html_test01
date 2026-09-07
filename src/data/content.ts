import { ContentItem } from '../types/resume';

export const contentData: ContentItem[] = [
  {
    id: 'youtube-channel',
    platform: 'youtube',
    title: 'KEYCO YouTube 채널',
    channelOrBlogName: '@keyco55',
    url: 'https://www.youtube.com/@keyco55',
    badge: 'Video & Content Production',
    roleScope: ['콘텐츠 기획', '영상 촬영', '컷편집 및 사운드', '썸네일 디자인', '시리즈 운영'],
    description:
      '단순 링크 공유를 넘어 기획, 촬영, 컷편집, 자막, 썸네일 제작, 채널 운영까지 전 과정을 1인 제작 파이프라인으로 직접 수행하는 비디오 프로덕션 채널입니다.',
    focusTopics: [
      '개발 및 생산성 도구 워크플로우',
      '테크 라이프스타일 및 장비 환경',
      '시각적 스토리텔링과 영상 연출',
      '시청자 피드백 기반 지속적 포맷 개선'
    ]
  },
  {
    id: 'naver-blog',
    platform: 'naver_blog',
    title: 'KEYCO 네이버 블로그',
    channelOrBlogName: 'qjadn02',
    url: 'https://blog.naver.com/qjadn02',
    badge: 'Tech & Project Documentation',
    roleScope: ['아티클 작성', '기술 트러블슈팅 기록', 'AI 워크플로우 정리', '프로젝트 아카이빙'],
    description:
      '소프트웨어 개발 과정에서 겪은 기술적 문제 해결, AI 멀티 에이전트 도구 활용법, macOS 생산성 도구 셋업 및 개인 프로젝트의 상세한 설계 과정을 투명하게 기록하고 공유합니다.',
    focusTopics: [
      'Development: 웹 프론트엔드 및 데이터 다루기 실전 기록',
      'AI: 프롬프트 엔지니어링 및 AI 코딩 에이전트 파이프라인',
      'Mac: 터미널 CLI 환경, 키바인딩 및 생산성 셋업',
      'Project Documentation: 시행착오와 설계 의도를 담은 상세 기술 문서'
    ]
  }
];
