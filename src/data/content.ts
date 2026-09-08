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
      '주제를 정하고 촬영한 뒤 컷 편집, 자막, 썸네일 제작과 채널 운영까지 직접 맡는 YouTube 채널입니다.',
    focusTopics: [
      '개발 및 생산성 도구 워크플로우',
      '테크 라이프스타일 및 장비 환경',
      '시각적 스토리텔링과 영상 연출',
      '시청자 피드백을 반영한 포맷 개선'
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
      '개발과 AI 활용, 문제 해결 과정부터 일상과 취미까지 기록하는 블로그입니다. 프로젝트를 만들며 내린 결정과 macOS 도구 설정도 함께 공유합니다.',
    focusTopics: [
      '개발: 웹 프론트엔드 및 데이터 다루기 실전 기록',
      'AI: 프롬프트 작성과 AI 코딩 도구 활용',
      '기술 트러블슈팅: 시행착오와 해결 과정',
      '일상 · 취미: 개발 밖의 관심사와 생활 기록'
    ]
  }
];
