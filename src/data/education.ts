import { EducationItem } from '../types/resume';

export const educationData: EducationItem[] = [
  {
    id: 'tongmyong-university',
    institution: '동명대학교 (Tongmyong University)',
    program: '학사 학위 과정 (Bachelor of Arts & Engineering Minor)',
    period: '2014.03 – 2024.02 · 졸업',
    degreeOrType: 'bachelor',
    major: '글로벌문화콘텐츠학과 (주전공)',
    minor: '정보통신소프트웨어학과 (부전공)',
    gpa: '3.51 / 4.5',
    categoryBadge: 'University Degree',
    description:
      '글로벌 문화콘텐츠를 전공하며 스토리텔링과 디지털 콘텐츠 기획을 배웠고, 정보통신소프트웨어학과 부전공으로 프로그래밍과 컴퓨터 과학의 기초를 익혔습니다.',
    verifiedHighlights: [
      '글로벌 문화콘텐츠 기획, 미디어 스토리텔링, 디지털 콘텐츠 제작 실무 이수',
      '소프트웨어 기초 프로그래밍, 자료구조, 데이터베이스 및 네트워크 기초 교과 이수 (부전공)',
      '누적 평점 평균 3.51 / 4.5 (학번 및 비공개 학사 정보 비노출 원칙 준수)'
    ]
  },
  {
    id: 'naver-connect-boostcamp',
    institution: '재단법인 네이버커넥트',
    program: '부스트캠프 2020 챌린지 (Boostcamp 2020 Challenge)',
    period: '2020.07.27 – 2020.08.21',
    degreeOrType: 'training',
    categoryBadge: 'Software Intensive Training',
    description:
      '재단법인 네이버커넥트에서 진행한 [부스트캠프 2020] 챌린지 과정을 수료했습니다.',
    imagePath: '/images/education/training-2020-naver-boostcamp-challenge-certificate.webp',
    imageAlt: 'NAVER Connect 부스트캠프 2020 챌린지 수료증 - 김범우, 2020.07.27~2020.08.21',
    verifiedHighlights: [
      '컴퓨터 과학 기초와 운영체제·네트워크 기본 개념 학습',
      'JavaScript(ES6+) 동작 원리를 다루는 일일 구현 과제 수행',
      '동료 피어 세션에서 코드 리뷰와 문제 해결 토론 참여',
      '요구사항을 분석하고 구현 결과를 점검하는 학습 과정 수행'
    ],
    cautionNotice:
      '※ 전체 부스트캠프 과정이 아닌 [부스트캠프 2020] 챌린지 과정 수료 이력입니다.'
  },
  {
    id: 'hutech-university-training',
    institution: 'HUTECH University of Technology (호치민 기술대학교)',
    program: 'English Language Cabin Crew Service Training Program',
    period: '2022.07',
    degreeOrType: 'global_service',
    categoryBadge: 'Global Customer Service & Communication',
    description: 'HUTECH University에서 진행한 단기 고객 서비스·글로벌 커뮤니케이션 교육을 이수했습니다.',
    imagePath: '/images/education/training-2022-hutech-customer-service-certificate.webp',
    imageAlt: 'HUTECH University Cabin Crew Service Training 수료증 - 2022년 7월 17일',
    verifiedHighlights: [
      '비즈니스와 비상 상황을 가정한 영어 응대·에티켓 훈련',
      '다문화 고객을 고려한 서비스 커뮤니케이션 학습',
      '돌발 상황에서 안내하는 위기 대응 커뮤니케이션 실습'
    ]
  }
];
