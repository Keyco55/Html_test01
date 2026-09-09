import { AwardItem } from '../types/resume';

export const awardsData: AwardItem[] = [
  {
    id: 'award-2023-content',
    year: '2023',
    title: '콘텐츠 기획·제작 경진대회 대상',
    organizationConfirmed: false,
    description:
      '대상 사용자를 정하고 기획부터 제작까지 진행한 영상·디지털 콘텐츠로 대상을 수상했습니다.',
    imagePath: '/images/awards/award-2023-content-competition-grand-prize.webp',
    imageAlt: '2023 콘텐츠 기획·제작 경진대회 대상 상장 - 2023년 12월 수여'
  },
  {
    id: 'award-2022-blue-ladder',
    year: '2022',
    title: '파란사다리 Team Project 최우수상',
    organizationConfirmed: false,
    description:
      '글로벌 연수 중 다국적 구성원과 진행한 팀 프로젝트로 최우수상을 수상했습니다.'
  },
  {
    id: 'award-2021-content',
    year: '2021',
    title: '콘텐츠 제작/경진대회 최우수상',
    organizationConfirmed: false,
    description:
      '직접 기획하고 시각 구성을 맡은 디지털 미디어 콘텐츠로 최우수상을 수상했습니다.',
    imagePath: '/images/awards/award-2021-content-competition-excellence.webp',
    imageAlt: '2021 콘텐츠 제작 경진대회 최우수상 상장 - 동명대학교 글로벌문화콘텐츠학과'
  },
  {
    id: 'award-2017-lotte-world',
    year: '2017',
    title: '롯데월드 베스트로티상',
    organizationConfirmed: true,
    organization: '롯데월드',
    description:
      '어트랙션 현장에서 고객 응대와 안전 수칙 준수, 동료 협업을 인정받아 우수 캐스트 표창을 받았습니다.',
    imagePath: '/images/awards/award-2017-lotteworld-best-lotty-certificate-v2.webp',
    imageAlt: '2017 롯데월드 베스트로티상 표창장과 BEST LOTTY 배지'
  }
];
