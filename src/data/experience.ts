import { ExperienceItem } from '../types/resume';

export const experienceData: ExperienceItem[] = [
  {
    id: 'gom-and-company',
    company: '곰앤컴퍼니 (GOM & Company)',
    role: '마케팅 & 웹 콘텐츠 운영 (Marketing & Web Content Operations)',
    period: '2024.04 – 2025.01',
    dateTime: '2024-04/2025-01',
    department: '마케팅 / 콘텐츠 운영',
    description:
      '국내외 소프트웨어 마케팅과 공식 SNS 채널(Instagram·YouTube·네이버 블로그·TikTok·Threads)을 운영했습니다. 공식 웹사이트와 프로모션 랜딩 페이지는 HTML/CSS로 수정했고, 반복적인 엑셀 데이터 취합 업무는 Python으로 자동화했습니다.',
    verifiedHighlights: [
      '국내 및 글로벌 마케팅 캠페인 지원 및 SNS·블로그 채널용 콘텐츠 기획·제작',
      'Instagram, YouTube, 네이버 블로그, TikTok, Threads 공식 채널 게시물 관리와 커뮤니티 응대',
      '공식 프로모션·이벤트 랜딩 페이지의 HTML/CSS 레이아웃과 요소 수정',
      '신규 기능 안내 배너, 홍보 이미지, 영상 삽입, CTA 버튼과 추적 링크 반영',
      'Python, pandas, openpyxl로 엑셀 마케팅 데이터를 정리·가공하는 자동화 스크립트 작성',
      '해외 사용자를 위한 다국어 콘텐츠 현지화'
    ],
    skills: ['HTML/CSS', 'Python', 'pandas', 'openpyxl', '콘텐츠 기획', '웹 운영', '현지화'],
    contextNote:
      '업무 범위는 프론트엔드·백엔드 서비스 전체 개발이 아니라 콘텐츠·마케팅 페이지 수정과 데이터 자동화였습니다.'
  },
  {
    id: 'songpa-post-office',
    company: '송파우체국 (Songpa Post Office)',
    role: '고객 안내 & 현장 서비스 지원 (Customer Service & Operations)',
    period: '2022.06 – 2023.09',
    dateTime: '2022-06/2023-09',
    department: '우편영업과 / 민원 현장 지원',
    description:
      '우체국 방문 고객의 현장 안내와 접수를 지원하고, 간편사전접수 이용 안내와 홍보 콘텐츠를 만들었습니다.',
    verifiedHighlights: [
      '일일 수백 명의 방문 고객을 대상으로 창구 안내와 민원 1차 응대',
      '우편 접수 편의를 돕는 ‘간편사전접수’ 서비스 현장 홍보 및 디지털 기기 활용이 낯선 고령층·일반 고객 대상 1:1 이용 안내',
      '공공 서비스 이용 절차를 시각화한 카드뉴스 및 안내 콘텐츠 기획·제작',
      '현장 서비스 안내 및 고객 동선 유도를 위한 영상 편집 자료 제작 지원',
      '반복되는 문의와 고객 동선을 관찰해 안내 표지와 현장 안내 개선'
    ],
    skills: ['고객 응대', '서비스 개선', '간편사전접수 안내', '카드뉴스 제작', '영상 편집', '현장 운영'],
    privacyComplianceNote:
      '공공기관 내부 규정에 따라 내부 전산망, 공무 비공개 데이터 및 고객 개인정보는 일체 포함되지 않았습니다.'
  },
  {
    id: 'our-town-commerce',
    company: '우리동네커머스',
    role: '온라인 CS & 스토어 운영 지원 (E-Commerce Customer Support & Operations)',
    period: '2020.11 – 2020.12',
    dateTime: '2020-11/2020-12',
    department: '이커머스 운영팀',
    description:
      '네이버 스마트스토어 고객 문의를 응대하고 주문·배송·교환·반품 업무를 지원했습니다.',
    verifiedHighlights: [
      '네이버 톡톡, Q&A, 유선으로 접수된 고객 문의 응대',
      '정책에 따라 주문 취소·교환·반품·환불을 처리하고 배송 문제 확인',
      '스마트스토어 주문 건 데이터 취합, 송장 등록 및 재고 확인 등 백오피스 운영 지원',
      '반복 접수되는 고객의 소리(VOC) 유형을 분석하여 상품 상세페이지의 상품 안내 문구 및 FAQ 보완 제안'
    ],
    skills: ['스마트스토어 지원', '온라인 CS', '교환/반품 처리', 'VOC 분석', '고객 경험 개선']
  },
  {
    id: 'lotte-world',
    company: '롯데월드 (Lotte World)',
    role: '어트랙션서비스팀 팀장 (Attraction Service Team Lead)',
    period: '2017.04 – 2019.04',
    duration: '약 2년 1개월',
    dateTime: '2017-04/2019-04',
    department: '파크 운영 / 어트랙션 서비스',
    description:
      '어트랙션 안전 운영과 고객 응대, 대기열 동선 관리를 맡고 현장 매뉴얼과 안내 방식을 정립했습니다. 신규 캐스트 OJT 표준화와 사내 라디오 프로그램을 운영했습니다.',
    verifiedHighlights: [
      '어트랙션 탑승 안전 수칙 안내, 안전 장구 점검 및 비상 상황 매뉴얼 준수',
      '성수기 대규모 인파 밀집 시 대기열 동선 통제 및 안전사고 예방',
      '신규 입사 캐스트의 빠른 업무 적응을 돕는 OJT 매뉴얼 보완 및 서비스 표준 절차 정립 지원',
      '현장에서 빈번하게 발생하는 고객 불편 사항을 파악하고 동선 안내 멘트 및 사인 개선',
      '모범적인 고객 응대 및 안전 운영 성과를 인정받아 ‘베스트로티상’ 수상'
    ],
    skills: ['어트랙션 서비스', '팀 리딩', '고객 응대', '현장 안전 운영', 'OJT 매뉴얼', '베스트로티상']
  }
];
