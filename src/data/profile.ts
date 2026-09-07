import { ProfileData } from '../types/resume';

export const profileData: ProfileData = {
  name: 'KEYCO',
  title: '고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 사람.',
  shortBio:
    '고객을 직접 응대하고 서비스를 운영하는 일에서 시작해 콘텐츠와 마케팅, 웹페이지 운영을 거쳐 현재는 직접 서비스를 개발하고 있습니다. 필요한 도구나 화면이 없거나 운영 중 불편한 부분을 발견하면 현상을 기록하고 정리해 직접 개선합니다.',
  fullBio: [
    '현장에서 고객의 목소리를 직접 들으며 서비스가 실제로 어떻게 소비되는지 이해하는 것으로 커리어를 시작했습니다.',
    '이후 온·오프라인 콘텐츠 기획과 마케팅, 공식 웹페이지 유지보수와 이벤트 페이지 제작 지원을 담당하며 사용자와 맞닿은 접점을 관리했습니다.',
    '반복되는 엑셀 취합과 수작업 업무를 줄이기 위해 Python 스크립트를 작성하여 자동화하기 시작했고, 점차 직접 필요한 웹 애플리케이션과 내부 도구를 설계하고 개발하는 영역으로 확장했습니다.',
    '과장된 수식어보다 실측 가능한 개선과 명확한 코드베이스, 그리고 현장 사용자의 실제 효용을 최우선으로 생각합니다.'
  ],
  journeySteps: [
    {
      step: '01',
      category: '고객 경험',
      description: '현장 및 온라인 접점에서 사용자의 실제 반응과 목소리를 직접 마주하며 요구사항의 본질을 파악'
    },
    {
      step: '02',
      category: '서비스 운영',
      description: '운영 매뉴얼 정립, VOC 처리 프로세스 체계화, 서비스 가이드 개선으로 반복 문의 및 현장 혼선 최소화'
    },
    {
      step: '03',
      category: '콘텐츠 & 마케팅',
      description: '영상, 블로그, 카드뉴스 등 온·오프라인 채널 특성에 맞춘 콘텐츠 기획·제작 및 메시지 전달'
    },
    {
      step: '04',
      category: 'Web',
      description: '마케팅 랜딩 페이지, 공지 배너, 미디어 임베드, 반응형 UI 컴포넌트 마크업 및 스타일링'
    },
    {
      step: '05',
      category: 'Automation',
      description: 'Python, pandas, openpyxl을 활용한 엑셀 데이터 취합 및 반복 운영 업무 자동화 스크립트 작성'
    },
    {
      step: '06',
      category: 'Product Development',
      description: 'Next.js, TypeScript, Supabase 기반으로 아이디어를 온전한 동작 서비스로 직접 설계 및 구현'
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
      description: '개발, AI 워크플로우, macOS 도구 및 프로젝트 기록'
    }
  ]
};
