import { ProfileData } from '../types/resume';

export const profileData: ProfileData = {
  /** Public email — approved by HQ (2026-09). */
  publicEmail: '9ren5dezvous@gmail.com',
  name: 'KEYCO',
  title: '고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 사람.',
  shortBio:
    '고객 응대와 서비스 운영에서 시작해 콘텐츠와 마케팅, 웹 운영을 경험했고 지금은 직접 서비스를 만듭니다. 일하면서 반복되는 불편을 발견하면 기록하고, 필요한 화면이나 도구로 해결합니다.',
  fullBio: [
    '현장에서 고객을 직접 만나며 서비스가 실제로 어떻게 사용되는지 배웠습니다.',
    '이후 온·오프라인 콘텐츠와 마케팅, 공식 웹페이지 유지보수, 이벤트 페이지 제작 지원을 맡으며 고객과 만나는 여러 접점을 다뤘습니다.',
    '반복되는 엑셀 취합 업무는 Python 스크립트로 줄였고, 그 경험을 바탕으로 필요한 웹 애플리케이션과 도구를 직접 만들기 시작했습니다.',
    '큰 수식어보다 확인할 수 있는 변화와 이해하기 쉬운 코드, 실제 사용자의 편의를 중요하게 생각합니다.'
  ],
  journeySteps: [
    {
      step: '01',
      category: '고객 경험',
      description: '현장과 온라인에서 고객의 반응을 직접 듣고, 무엇이 필요한지 파악'
    },
    {
      step: '02',
      category: '서비스 운영',
      description: '운영 매뉴얼과 안내 방식을 정리해 반복 문의와 현장 혼선을 줄임'
    },
    {
      step: '03',
      category: '콘텐츠 & 마케팅',
      description: '영상, 블로그, 카드뉴스 등 채널에 맞는 콘텐츠를 기획하고 제작'
    },
    {
      step: '04',
      category: 'Web',
      description: '마케팅 랜딩 페이지와 공지 배너, 미디어, 반응형 UI를 마크업하고 수정'
    },
    {
      step: '05',
      category: 'Automation',
      description: 'Python, pandas, openpyxl로 엑셀 데이터 취합과 반복 업무를 자동화'
    },
    {
      step: '06',
      category: 'Product Development',
      description: 'Next.js, TypeScript, Supabase로 아이디어를 실제 동작하는 서비스로 구현'
    }
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/Keyco55',
      type: 'github',
      description: '오픈소스 저장소 및 프로젝트 코드베이스'
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@keyco55',
      type: 'youtube',
      description: '기획부터 편집까지 직접 운영하는 영상 채널'
    },
    {
      label: 'Naver Blog',
      url: 'https://blog.naver.com/qjadn02',
      type: 'blog',
      description: '@Rendezvous — 개발 · AI · 기술 트러블슈팅 · 일상 · 취미'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/springrainfa11s/',
      type: 'other',
      description: '@springrainfa11s'
    }
  ]
};
