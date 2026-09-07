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
    channelOrBlogName: '@Rendezvous',
    url: 'https://blog.naver.com/qjadn02',
    badge: 'Tech · Life Documentation',
    roleScope: ['아티클 작성', '기술 트러블슈팅 기록', 'AI 워크플로우 정리', '일상 · 취미 기록'],
    description:
      '개발과 AI 활용, 기술 트러블슈팅 기록은 물론 일상과 취미까지 함께 담아내는 블로그입니다. 프로젝트 설계 과정과 macOS 생산성 도구 셋업도 투명하게 공유합니다.',
    focusTopics: [
      '개발: 웹 프론트엔드 및 데이터 다루기 실전 기록',
      'AI: 프롬프트 엔지니어링 및 AI 코딩 에이전트 파이프라인',
      '기술 트러블슈팅: 시행착오와 해결 과정을 담은 상세 기록',
      '일상 · 취미: 개발 밖의 관심사와 생활 기록'
    ]
  }
];
