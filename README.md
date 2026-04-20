# MITI (Make It Take It)

전국 농구 경기 참여 및 호스팅 플랫폼

MITI는 농구를 사랑하는 사람들을 위한 올인원 플랫폼입니다.  
원하는 시간, 원하는 장소에서 농구 경기를 예약, 참여, 모집, 결제까지 간편하게!

우리 동네 경기에 바로 참가하거나 직접 경기를 열고 함께할 사람을 모집하세요.  
근처 농구장도 쉽게 검색 가능!

---

## 링크

| 플랫폼 | 링크 |
|--------|------|
| Web | https://www.makeittakeit.kr/ |
| Android | https://play.google.com/store/apps/details?id=com.miti.miti&hl=ko |
| iOS | https://apps.apple.com/us/app/miti/id6503062372 |

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트 3000)
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사 (경고 0개 허용)
npm run lint

# 단위/컴포넌트 테스트
npm run test

# E2E 테스트 (개발 서버가 포트 3000에서 실행 중이어야 함)
npm run test:e2e

# Storybook 실행 (포트 6006)
npm run storybook

# 미사용 익스포트 스캔
npm run check:unused
```

---

## 디렉토리 구조

```
src/
├── pages/              # 라우트 레벨 컴포넌트 (feature 컴포넌트를 조합하는 얇은 래퍼)
│   ├── auth/           # 로그인, 카카오 OAuth 콜백, 회원 탈퇴
│   ├── community/      # 커뮤니티 목록 및 게시글 상세
│   ├── courts/         # 농구장 목록 및 상세
│   ├── faq/            # 자주 묻는 질문
│   ├── games/          # 경기 목록 및 상세
│   ├── hosting-guide/  # 호스팅 가이드 (루트 레이아웃 미사용)
│   ├── inquiries/      # 문의 목록, 작성, 상세
│   ├── landing/        # 랜딩 페이지
│   ├── other/          # 404 페이지
│   └── policies/       # 이용약관 및 정책
│
├── features/           # 기능 모듈 (아래 구조 참고)
│   ├── auth/           # 인증 관련 기능
│   ├── common/         # 공통 컴포넌트 및 훅
│   ├── community/      # 커뮤니티 기능
│   ├── courts/         # 농구장 기능
│   ├── faq/            # FAQ 기능
│   ├── game-detail/    # 경기 상세 기능
│   ├── games/          # 경기 목록 기능
│   ├── header/         # 헤더 기능
│   ├── hosting-guide/  # 호스팅 가이드 기능
│   ├── inquiries/      # 문의 기능
│   ├── landing/        # 랜딩 페이지 기능
│   ├── naver-map/      # 네이버 지도 기능
│   └── policies/       # 정책 기능
│
├── store/              # 전역 Zustand 스토어 (기능 간 공유)
├── utils/              # axios 인스턴스, 날짜 유틸리티
├── mocks/              # MSW 브라우저 워커 설정
├── components/         # (레거시) 공유 UI 컴포넌트
└── interfaces/         # (레거시) 공유 TypeScript 인터페이스
```

### Feature 모듈 내부 구조

```
src/features/<feature>/
├── api/          # axios API 호출 함수
├── interface/    # TypeScript 타입 정의
├── hooks/
│   └── query/    # TanStack Query 서버 상태 훅
├── components/   # 기능별 UI 컴포넌트
├── store/        # 기능별 Zustand 스토어
├── mocks/        # MSW 핸들러 (로컬 개발용)
├── enum/         # 열거형
└── constants/    # 상수 및 표시 값
```

---

## 사용 라이브러리

### 핵심

| 라이브러리 | 버전 | 용도 |
|-----------|------|------|
| React | 18 | UI 프레임워크 |
| TypeScript | 5 | 정적 타입 |
| Vite | 5 | 빌드 도구 |
| React Router DOM | 6 | 클라이언트 사이드 라우팅 |

### 상태 관리

| 라이브러리 | 버전 | 용도 |
|-----------|------|------|
| TanStack Query (React Query) | 5 | 서버 상태 관리 |
| Zustand | 4 | 클라이언트 UI 상태 관리 |

### UI / 스타일

| 라이브러리 | 버전 | 용도 |
|-----------|------|------|
| Tailwind CSS | 3 | 유틸리티 CSS |
| MUI (Material UI) | 5 | UI 컴포넌트 |
| MUI X Date Pickers | 7 | 날짜/시간 선택 |
| react-icons | 5 | 아이콘 |
| react-slick | 0.30 | 캐러셀/슬라이더 |
| react-modal | 3 | 모달 |
| react-rating-stars-component | 2 | 별점 UI |
| @splinetool/react-spline | 4 | 3D 인터랙티브 렌더링 |

### 폼 / 유효성 검사

| 라이브러리 | 용도 |
|-----------|------|
| react-hook-form | 폼 상태 및 제출 관리 |
| @hookform/resolvers | 유효성 검사 스키마 연동 |

### API / 네트워크

| 라이브러리 | 용도 |
|-----------|------|
| axios | HTTP 클라이언트 |
| qs | 쿼리스트링 직렬화 |
| react-jwt | JWT 파싱 |
| DOMPurify | XSS 방지 (HTML 살균) |

### 지도

| 라이브러리 | 용도 |
|-----------|------|
| @types/navermaps | 네이버 지도 API 타입 |

### 기타

| 라이브러리 | 용도 |
|-----------|------|
| react-daum-postcode | 주소 검색 (다음 우편번호) |
| react-copy-to-clipboard | 클립보드 복사 |
| react-intersection-observer | Intersection Observer 훅 |

### 개발 / 테스트

| 라이브러리 | 용도 |
|-----------|------|
| Vitest | 단위/컴포넌트 테스트 |
| Playwright | E2E 테스트 |
| Testing Library | 컴포넌트 렌더링 테스트 유틸 |
| MSW (Mock Service Worker) | API 목킹 (개발/테스트) |
| Storybook | 컴포넌트 문서화 |
| ESLint | 코드 품질 검사 |
| ts-prune | 미사용 익스포트 탐지 |

---

## 사용자 흐름

### 비로그인 사용자

```
랜딩 페이지
  ├── 경기 목록 조회 (/games)
  │     └── 경기 상세 조회 (/games/:id)
  ├── 농구장 목록 조회 (/courts)
  │     └── 농구장 상세 조회 (/courts/:id)
  ├── 커뮤니티 조회 (/community)
  │     └── 게시글 상세 (/community/:id)
  ├── 자주 묻는 질문 (/faq)
  ├── 이용약관 및 정책 (/policies)
  └── 로그인 (/auth)
        ├── 이메일/비밀번호 로그인
        └── 카카오 OAuth 로그인 → /kakao/login (콜백 처리)
```

### 로그인 사용자

```
로그인 완료
  ├── 경기 참가 신청 (경기 상세 페이지)
  ├── 경기 호스팅
  │     └── 호스팅 가이드 확인 (/host-guide)
  ├── 문의 등록 (/inquiries/new)
  │     └── 내 문의 목록 및 상세 (/inquiries, /inquiries/:id)
  ├── 커뮤니티 게시글 작성
  └── 회원 탈퇴 (/withdraw)
```

---

## 인증

- **카카오 OAuth**: `/kakao/login` 라우트에서 OAuth 콜백 처리
- **이메일/비밀번호 로그인**: 자체 인증 엔드포인트
- **토큰 저장**: httpOnly 쿠키 (모든 요청에 `withCredentials: true` 적용)

---

## API 연동

- **기본 인스턴스**: `src/utils/axios.ts` — `https://api.makeittakeit.kr`을 바라보는 단일 axios 인스턴스
- **인증 예외**: `src/features/auth/api/auth.ts`는 공유 인스턴스 대신 raw axios 직접 사용
- **경로 별칭**: `@/`는 `src/`로 해석 (예: `import { foo } from '@/utils/axios'`)

---

## 상태 관리 구조

| 상태 종류 | 도구 | 위치 |
|----------|------|------|
| 서버 상태 (API 데이터) | TanStack Query v5 | `features/*/hooks/query/` |
| 전역 UI 상태 (필터, 위치, 날짜) | Zustand | `src/store/` |
| 기능별 UI 상태 | Zustand | `features/*/store/` |

---

## 라우트 목록

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 페이지 |
| `/auth` | 로그인 / 회원가입 |
| `/kakao/login` | 카카오 OAuth 콜백 |
| `/withdraw` | 회원 탈퇴 |
| `/games` | 경기 목록 |
| `/games/:id` | 경기 상세 |
| `/courts` | 농구장 목록 |
| `/courts/:id` | 농구장 상세 |
| `/community` | 커뮤니티 목록 |
| `/community/:id` | 커뮤니티 게시글 상세 |
| `/faq` | 자주 묻는 질문 |
| `/inquiries` | 문의 목록 |
| `/inquiries/new` | 문의 작성 |
| `/inquiries/:id` | 문의 상세 |
| `/policies` | 이용약관 및 정책 목록 |
| `/policies/:id` | 정책 상세 |
| `/host-guide` | 호스팅 가이드 (독립 레이아웃) |
