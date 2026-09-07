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
      '인문·문화적 스토리텔링과 디지털 콘텐츠 기획을 주전공으로 이수함과 동시에, 정보통신소프트웨어학과를 부전공하며 컴퓨터 과학 및 소프트웨어 프로그래밍의 기초 역량을 융합하여 체득했습니다.',
    verifiedHighlights: [
      '글로벌 문화콘텐츠 기획, 미디어 스토리텔링, 디지털 콘텐츠 제작 실무 이수',
      '소프트웨어 기초 프로그래밍, 자료구조, 데이터베이스 및 네트워크 기초 교과 이수 (부전공)',
      '누적 평점 평균 3.51 / 4.5 (학번 및 비공개 학사 정보 비노출 원칙 준수)'
    ]
  },
  {
    id: 'naver-connect-boostcamp',
    institution: 'NAVER Connect 재단 (네이버 커넥트재단)',
    program: '부스트캠프 2020 챌린지 (Boostcamp 2020 Challenge)',
    period: '2020.07.27 – 2020.08.21',
    degreeOrType: 'training',
    categoryBadge: 'Software Intensive Training',
    description:
      '네이버 커넥트재단이 주관하는 소프트웨어 개발자 양성 과정의 프론트엔드/웹 기초 집중 훈련 프로그램인 [부스트캠프 2020 챌린지]를 수료했습니다.',
    verifiedHighlights: [
      '컴퓨터 공학(CS) 기초 원리, 운영체제 및 네트워크 기본 개념 학습',
      'JavaScript(ES6+) 언어의 동작 원리 분석 및 순수 구현 과제 매일 1개씩 해결',
      '동료 피어 세션(Peer Session)을 통한 일일 상호 코드 리뷰 및 문제 해결 토론 참여',
      '스스로 요구사항을 분석하고 문제를 해결하는 자기주도적 학습 사이클 체득'
    ],
    cautionNotice:
      '※ 본 항목은 부스트캠프 전체 과정이 아닌, 엄격한 선발 및 4주간의 일일 과제 평가를 거쳐 완료한 [Boostcamp 2020 Challenge] 수료 이력임을 명확히 밝힙니다.'
  },
  {
    id: 'hutech-university-training',
    institution: 'HUTECH University of Technology (호치민 기술대학교)',
    program: 'English Language Cabin Crew Service Training Program',
    period: '2022.07',
    degreeOrType: 'global_service',
    categoryBadge: 'Global Customer Service & Communication',
    description: '커스터머 서비스 / 글로벌 커뮤니케이션 과정',
    verifiedHighlights: [
      '다양한 비즈니스 및 비상 상황에서의 실전 영어 대인 응대 및 에티켓 훈련',
      '글로벌 다문화 고객의 심리와 니즈를 배려하는 고객 중심 서비스 마인드셋 학습',
      '돌발 상황 시 침착하고 명확한 안내를 전달하는 위기 대응 커뮤니케이션 시뮬레이션'
    ]
  }
];
