import { ExperienceItem } from '../types/resume';

export const experienceData: ExperienceItem[] = [
  {
    id: 'gom-and-company',
    company: '곰앤컴퍼니 (GOM & Company)',
    role: '마케팅 & 웹 콘텐츠 운영 (Marketing & Web Content Operations)',
    period: '2024.06 – 2025.01',
    dateTime: '2024-06/2025-01',
    department: '마케팅 / 콘텐츠 운영',
    description:
      '국내 및 글로벌 소프트웨어 마케팅 지원, 공식 SNS 채널(Instagram·YouTube·네이버 블로그·TikTok·Threads) 운영, 공식 웹사이트 및 프로모션 랜딩페이지의 HTML/CSS 기반 페이지 수정 작업, 그리고 Python을 활용한 엑셀 데이터 취합 및 반복 업무 자동화를 담당했습니다.',
    verifiedHighlights: [
      '국내 및 글로벌 마케팅 캠페인 지원 및 SNS·블로그 채널용 콘텐츠 기획·제작',
      'Instagram, YouTube, 네이버 블로그, TikTok, Threads 등 공식 SNS 채널 콘텐츠 업로드 및 커뮤니티 응대 운영',
      '공식 프로모션 및 이벤트 랜딩페이지의 HTML/CSS 기반 page modification (레이아웃 수정 및 요소 배치)',
      '신규 기능 안내 배너, 홍보 이미지, 비디오 embed, CTA 버튼 및 추적 링크 직접 반영',
      'Python, pandas, openpyxl 라이브러리를 활용해 수작업으로 취합하던 대용량 엑셀 마케팅 데이터를 정리·가공하는 업무 자동화 스크립트 구축',
      '해외 사용자를 위한 글로벌 다국어 콘텐츠 현지화(Localization) 작업 진행'
    ],
    skills: ['HTML/CSS', 'Python', 'pandas', 'openpyxl', '콘텐츠 기획', '웹 운영', '현지화'],
    contextNote:
      '비개발 직군과 개발 직군 사이의 간극을 좁히며, 실제 배포된 웹 환경에 요소를 코드로 직접 반영하고 반복 데이터 작업을 자동화하는 경험을 축적했습니다. (프론트엔드/백엔드 서비스 전체 개발이 아닌 콘텐츠 및 마케팅 페이지 수정·자동화 업무 범위임)'
  },
  {
    id: 'songpa-post-office',
    company: '송파우체국 (Songpa Post Office)',
    role: '고객 안내 & 현장 서비스 지원 (Customer Service & Operations)',
    period: '2022.06 – 2023.09',
    dateTime: '2022-06/2023-09',
    department: '우편영업과 / 민원 현장 지원',
    description:
      '우체국 방문 고객 대상 현장 안내 및 접수 지원을 담당하며, 간편사전접수 시스템 도입 안내와 고객 친화형 홍보 콘텐츠를 기획·제작했습니다.',
    verifiedHighlights: [
      '일일 수백 명의 방문 고객 대상 창구 안내 및 민원 1차 응대',
      '우편 대기 시간을 줄이기 위한 ‘간편사전접수’ 서비스 현장 홍보 및 디지털 기기 활용이 낯선 고령층·일반 고객 대상 1:1 이용 안내',
      '공공 서비스 이용 절차를 시각화한 카드뉴스 및 안내 콘텐츠 기획·제작',
      '현장 서비스 안내 및 고객 동선 유도를 위한 영상 편집 자료 제작 지원',
      '방문 고객의 반복되는 병목 구간과 문의 패턴(VOC)을 관찰하여 안내 표지 동선 및 안내 가이드 개선'
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
      '네이버 스마트스토어 등 온라인 커머스 플랫폼의 고객 문의 응대 및 주문·배송·교환/반품 처리 전반을 지원했습니다.',
    verifiedHighlights: [
      '온라인 고객 문의(네이버 톡톡, Q&A, 유선) 1:1 신속 응대 및 친절한 상담 제공',
      '주문 취소, 교환, 반품, 환불 요청에 대한 정책 기반 신속 처리 및 물류 배송 이슈 추적',
      '스마트스토어 주문 건 데이터 취합, 송장 등록 및 재고 확인 등 백오피스 운영 지원',
      '반복 접수되는 고객의 소리(VOC) 유형을 분석하여 상품 상세페이지의 상품 안내 문구 및 FAQ 보완 제안'
    ],
    skills: ['스마트스토어 지원', '온라인 CS', '교환/반품 처리', 'VOC 분석', '고객 경험 개선']
  },
  {
    id: 'lotte-world',
    company: '롯데월드 (Lotte World)',
    role: '어트랙션 서비스 & 현장 운영 (Attraction Service & Operations)',
    period: '근무기간 확정 필요 (Resume Master 검증 중)',
    periodNeedsConfirmation: true,
    department: '파크 운영 / 어트랙션 서비스',
    description:
      '대형 테마파크 어트랙션의 안전 운영과 고객 응대, 대기열 동선 관리를 수행하고, 현장 서비스 품질 개선과 매뉴얼 정립에 기여했습니다.',
    verifiedHighlights: [
      '어트랙션 탑승 안전 수칙 안내, 안전 장구 점검 및 비상 상황 매뉴얼 준수',
      '성수기 대규모 인파 밀집 시 대기열 동선 통제 및 안전사고 예방',
      '신규 입사 캐스트의 빠른 업무 적응을 돕는 OJT 매뉴얼 보완 및 서비스 표준 절차 정립 지원',
      '현장에서 빈번하게 발생하는 고객 불편 사항을 파악하고 동선 안내 멘트 및 사인 개선',
      '모범적인 고객 응대 및 안전 운영 성과를 인정받아 ‘베스트로티상’ 수상'
    ],
    skills: ['어트랙션 서비스', '고객 응대', '현장 안전 운영', 'OJT 매뉴얼', '서비스 개선', '베스트로티상'],
    contextNote:
      '현재 공식 증빙 및 Resume Master 확정 전 이력 간 일자 충돌을 방지하기 위해 정확한 근무 기간은 [확정 필요] 상태로 관리하고 있습니다.'
  }
];
