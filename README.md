# Movie Search App

영화 제목을 검색하고 상세 정보를 볼 수 있는 웹 애플리케이션입니다.

## 기능
- 영화 제목 검색 기능
- 검색 결과 목록 표시
- 영화 상세 정보 보기
- 반응형 디자인으로 모바일, 테블릿, 데스크탑 지원

## 기술 스택
- **프레임워크**: Next.js
- **상태 관리**: Zustand
- **데이터 페칭**: TanStack Query
- **스타일링**: TailwindCSS
- **API**: OMDb API

## 설치 및 설정

### 사전 요구사항
- Node.js 18.0.0 이상
- OMDb API 키

### 설치 방법
1. 저장소 클론하기:
   ```sh
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```
2. 의존성 설치:
   ```sh
   npm install
   ```
3. 환경 변수 설정:
   프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:
   ```env
   NEXT_PUBLIC_OMDB_API_KEY=your_omdb_api_key
   ```
4. 개발 서버 실행:
   ```sh
   npm run dev
   ```
5. 브라우저에서 `http://localhost:3000` 접속

## 주요 기능 구현

### 영화 검색
- 검색창에 영화 제목을 입력하면 OMDb API를 통해 실시간으로 결과를 가져옵니다.
- Zustand를 사용하여 검색 상태를 전역적으로 관리합니다.
- TanStack Query를 활용하여 API 요청 상태 관리 및 캐싱을 구현했습니다.

### 상세 정보 보기
- 검색 결과에서 영화를 클릭하면 해당 영화의 상세 정보 페이지로 이동합니다.
- 영화 포스터, 평점, 감독, 배우, 줄거리 등 상세 정보를 확인할 수 있습니다.

## 프로젝트 구조
```
movie-search-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 전역 레이아웃
│   ├── page.tsx            # 홈페이지
│   └── movie/[id]/page.tsx # 영화 상세 페이지
├── components/             # 리액트 컴포넌트
│   ├── SearchBar.tsx       # 검색 컴포넌트
│   └── MovieList.tsx       # 영화 목록 컴포넌트
├── lib/                    # 유틸리티 함수
│   └── api.ts              # API 호출 함수
├── store/                  # Zustand 스토어
│   └── movieStore.ts       # 영화 검색 관련 상태 관리
└── public/                 # 정적 파일
```


