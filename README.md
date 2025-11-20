# fandom-K

> fandom-K는 팬덤 기반 콘텐츠를 시각화하고 관리하기 위한 React 기반 프론트엔드 프로젝트입니다.

## 기술 스택

- **프론트엔드** : JavaScript, React
- **스타일링** : styled-component
- **라이브러리** : Rechart, react-router
- **데이터 요청** : axios
- **패키지 관리** : npm
- **소스 코드 관리** : GitHub
- **배포** : vercel

## 폴더 구조

```
src/
├─ app/
├─ pages/
├─ components/
├─ styles/
├─ assets/
├─ api/
├─ hooks/
├─ utils/
└─ main.jsx
```

| 경로              | 설명                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **src/**          | 애플리케이션의 모든 소스 코드가 위치하는 루트 디렉터리입니다.                                                                                                                   |
| ┣ **app/**        | **앱의 핵심 구조와 진입점 역할을 하는 폴더**로, 라우팅(`AppRouter.jsx`), 레이아웃(`RootLayout.jsx`), 전역 상태 관리 등 전체 앱의 뼈대를 구성하는 파일들이 위치합니다.           |
| ┣ **pages/**      | **페이지 단위 컴포넌트**를 저장하는 폴더입니다.                                                                                                                                 |
| ┣ **components/** | **UI 컴포넌트**를 모아두는 폴더입니다.                                                                                                                                          |
| ┣ **styles/**     | **전역 스타일과 테마 관련 파일**을 관리하는 폴더입니다. 예를 들어, `GlobalStyle.js`(전역 CSS 정의)와 `theme.js`(색상, 폰트 크기 등 테마 정의)가 포함됩니다.                     |
| ┣ **assets/**     | **정적 리소스(Static Assets)**를 저장하는 폴더입니다. 이미지(`images/`), 아이콘(`icons/`) 등과 같은 파일이 여기에 들어갑니다.                                                   |
| ┣ **api/**        | **서버 통신 관련 코드**를 관리하는 폴더입니다. `axios` 인스턴스 설정(`client.js`), 각 엔드포인트별 API 함수(`userApi.js`, `postApi.js`) 등을 작성합니다.                        |
| ┣ **hooks/**      | **React 커스텀 훅(Custom Hooks)**을 정의하는 폴더입니다.                                                                                                                        |
| ┣ **utils/**      | **공통 유틸리티 함수**를 관리하는 폴더입니다.                                                                                                                                   |
| ┗ **main.jsx**    | **앱의 진입점(entry point)**입니다. `ReactDOM.createRoot()`를 통해 애플리케이션을 렌더링하며, `ThemeProvider`, `BrowserRouter`, `GlobalStyle` 등을 이곳에서 한 번만 설정합니다. |
