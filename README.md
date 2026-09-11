# StockAI — UI Prototype v0.1

국내 주식의 AI 분석을 쉽게 이해할 수 있도록 만든 **React 반응형 홈페이지 프로토타입**입니다. 종목을 검색하면 AI Score, 기간별 상승 가능성, 판단 근거를 확인할 수 있습니다.

**모든 시세·점수·예측·성능 수치는 Frontend Mock Data입니다.** API, 데이터베이스, 실제 모델, 로그인, 결제, 주문 기능은 연결하지 않습니다.

## 구현 내용

- 어두운 배경과 민트 강조색, 한글 웹폰트, Sticky Header 및 모바일 메뉴
- 종목명·코드·영문명 검색, 빠른 검색, 결과 없음, 방향키·Enter·Escape 지원
- 삼성전자·SK하이닉스·NAVER·현대차의 분석 카드 및 상세 모달
- AI Score 게이지, 1·5·20거래일 상승 가능성, 종목별 긍정·위험 요인
- 4개 시장 지수, AI 종목 랭킹, 서비스 분석 흐름
- 모델 성능 및 두 전략의 예시 누적 수익률 차트
- 네이티브 dialog, 포커스 복귀, 스킵 링크, 스크린 리더 알림, 모션 감소 설정
- GitHub 링크 Placeholder: 저장소 준비 안내 창.

## 실행

Node.js 22 이상을 설치한 뒤 이 README가 있는 폴더에서 실행합니다.

```bash
npm ci
npm run dev
```

터미널에 표시된 Local 주소를 브라우저에서 엽니다.

```bash
npm run build
npm run preview
```

`npm run build`는 `dist/`에 정적 파일을 생성합니다. `index.html`을 더블클릭하는 `file://` 방식 대신 개발 서버, 미리보기 서버 또는 GitHub Pages로 실행하세요.

## GitHub Pages 배포 — 소스 수정과 자동 배포

1. GitHub 저장소를 만들고, 이 폴더의 **내용물**을 저장소 루트에 올립니다. `package.json`, `index.html`, `src`, `public`, `.github`가 루트에 있어야 합니다.
2. `.github/workflows/deploy-pages.yml`과 `package-lock.json`을 함께 업로드합니다. `node_modules`와 `dist`는 올리지 않습니다.
3. 저장소 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
4. `main` 브랜치에 푸시합니다. 최초 푸시를 먼저 했다면 **Actions → Deploy StockAI to GitHub Pages → Run workflow**로 실행할 수 있습니다.
5. Actions의 build/deploy가 성공하면 Settings → Pages에 표시되는 주소로 접속합니다.

기본 브랜치가 `main`이 아니라면 워크플로의 `branches: [main]`을 실제 브랜치명으로 바꾸세요. Pages 사용 가능 범위는 GitHub 요금제와 저장소 공개 설정에 따릅니다.

이 프로젝트는 `vite.config.js`의 `base: './'`와 페이지 내 해시 링크를 사용합니다. 사용자 사이트와 `/저장소명/` 아래 프로젝트 사이트에 모두 정적 자산을 상대 경로로 로드합니다. 별도의 라우터나 서버 재작성 설정이 필요하지 않습니다.

배포 설정 참고: [GitHub Pages 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Vite 정적 배포 공식 문서](https://vite.dev/guide/static-deploy.html#github-pages).

## 빠른 배포 — 이미 빌드된 정적 파일

다운로드 ZIP의 `github-pages/`는 빌드가 완료된 사이트입니다. 코드 수정 없이 바로 올릴 때 사용할 수 있습니다.

1. 별도 GitHub 저장소의 루트에 `github-pages/` **안의 내용물**(`index.html`, `assets/`, `favicon.svg`, `.nojekyll`, `THIRD-PARTY-NOTICES.txt`)을 올립니다.
2. **Settings → Pages → Source → Deploy from a branch**를 선택합니다.
3. **Branch: main / Folder: /(root)**를 선택하고 Save 합니다.

이 방법은 `.github/workflows`가 필요하지 않습니다. 화면 코드를 수정했다면 `source/`에서 다시 빌드한 `dist/` 내용물로 교체하세요. 소스용 `index.html`과 빌드된 `index.html`을 같은 루트에 섞지 마세요.

## 데이터와 컴포넌트

| 경로 | 역할 |
| --- | --- |
| `src/data/mockData.js` | 종목·시장·모델·차트 데이터, 검색 및 포맷 함수 |
| `src/App.jsx` | 선택 종목, 상세/랭킹 모달, 공통 상태 |
| `src/components/Header.jsx` | Sticky Header, 메뉴, 검색 이동 |
| `src/components/Hero.jsx` | 서비스 설명과 대표 분석 배치 |
| `src/components/StockSearch.jsx` | Mock 검색, 키보드 탐색, 빠른 검색 |
| `src/components/FeaturedStock.jsx` | 대표 종목 가격·점수·예측 |
| `src/components/AIScore.jsx` | 원형 점수 게이지 |
| `src/components/ForecastCard.jsx` | 기간별 상승 가능성 |
| `src/components/MarketSnapshot.jsx` | 시장 지수와 스파크라인 |
| `src/components/SignalAnalysis.jsx` | 종목별 긍정·위험 근거 |
| `src/components/AITopPicks.jsx` | 20거래일 기준 랭킹 카드 |
| `src/components/HowItWorks.jsx` | 예정된 분석 흐름 설명 |
| `src/components/ModelPerformance.jsx` | 성능 지표와 예시 수익률 차트 |
| `src/components/Disclaimer.jsx` | 투자 안내 및 Mock 고지 |
| `src/components/Footer.jsx` | 푸터 메뉴와 GitHub Placeholder |
| `src/components/Modal.jsx` | 네이티브 dialog 및 포커스 관리 |
| `src/components/Shared.jsx` | 로고, 종목 마크, Signal, SVG 차트 |
| `src/styles.css` | 공통 토큰, 컴포넌트 스타일, 반응형 레이아웃 |
| `src/utils/stockTools.js` | 지원 브라우저에서만 등록되는 선택적 종목 분석 도구 |
| `.github/workflows/deploy-pages.yml` | GitHub Actions 정적 배포 |

## 수치 해석

- 요청 예시에 삼성전자 AI Score **76점**과 랭킹 **86점**이 함께 있어, 대표 분석은 **5거래일**, 랭킹은 **20거래일** 기준으로 구분했습니다. 이는 UI 구분을 위한 설정이며 실제 산식은 없습니다.
- **AI Score는 상승 확률이 아닙니다.** 1/5/20일의 UP 수치는 각각 해당 기간의 가상 상승 가능성입니다. 기간은 거래일 기준입니다.
- 현대차는 5일 분석에서 Neutral, 20일 랭킹에서 Neutral+로 표시됩니다.
- 모델의 학습 기간은 `2020.01–2025.12`, 예시 백테스트 기간은 `2026.01–2026.06`입니다. 실제 학습, 검증, 거래 비용, 슬리피지, 배당 조정이 수행된 것은 아닙니다.
- XGBoost v1.0은 예시 모델의 표시 이름입니다. XGBoost 패키지는 설치하거나 사용하지 않습니다.
- 모든 차트는 로컬 Mock 배열을 SVG로 그립니다. 한글 폰트와 아이콘도 배포 파일에 포함되어 외부 CDN 없이 로드됩니다.

## 추후 API 연결

`mockData.js`의 종목 객체 구조를 API 응답의 기준으로 삼을 수 있습니다. 다음 단계에서는 서비스 계층에서 응답을 이 구조로 변환하고, `App.jsx`에 로딩·오류 상태를 추가하면 UI 컴포넌트를 재사용할 수 있습니다. API 인증키를 프런트엔드 코드에 넣지 마세요.

현재는 Fetch, WebSocket, 외부 금융 SDK 또는 브라우저 저장소를 사용하지 않습니다. 페이지를 새로고침하면 삼성전자로 초기화됩니다.

## 검증 범위

프로덕션 빌드, 정적 자산 상대 경로, 핵심 React 렌더링 및 Mock 검색/데이터 정합성을 확인합니다. 실제 GitHub 저장소에 대한 배포와 브라우저 실기기 테스트는 이 패키지 생성 단계에서 실행하지 않았습니다. 선택적인 WebMCP는 기능 감지 후 등록되며, 지원 브라우저 환경에서의 통합 검증은 별도입니다.

## 오픈소스 고지

React, Vite, Lucide 및 Noto Sans KR을 사용합니다. 배포에 포함된 폰트와 런타임 아이콘의 라이선스는 `public/THIRD-PARTY-NOTICES.txt`에 있습니다.

StockAI의 분석 결과는 투자 판단을 돕기 위한 데이터 기반 참고 정보이며 투자 권유가 아닙니다. 투자의 최종 판단과 책임은 사용자에게 있습니다.
