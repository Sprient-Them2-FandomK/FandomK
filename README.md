
<div align="center">
  <h1>
    Fandom-K
  </h1>
</div>
<img width="1920" height="1384" alt="screencapture-fandom-k-blue-vercel-app-list-2025-11-21-00_04_02" src="https://github.com/user-attachments/assets/a8f1b4b8-c038-4e41-8db5-cc1ec731975b" />

## 발표 자료 
https://gamma.app/docs/-7f7hu5tlj04jikb

## 프로젝트 개요
[팬덤케이]는 좋아하는 아이돌 후원, 투표, 차트 불러오기 기능을 구현하는 아이돌 팬덤 플랫폼입니다.
### 기술 스택
- **프론트엔드** : JavaScript, React
- **스타일링** : styled-component
- **라이브러리** : Rechart, react-router
- **데이터 요청** : axios
- **패키지 관리** : npm
- **소스 코드 관리** : GitHub
- **배포** : vercel
### 프로젝트 실행 방법 
Node 버전 : 22.18.0 
```
// 로컬 개발 서버
npm run dev

// 프로덕션 빌드
npm run build

// 빌드 결과 확인
npm run preview
```
### 🗂️ 폴더 구조
```
src/             // 애플리케이션의 모든 소스 코드가 위치하는 루트 디렉터리
├─ app/          // 앱 전역 상태 및 전체 구조를 구성하는 핵심 파일 관리
├─ pages/        // 페이지 단위 컴포넌트 관리.
├─ components/   // 여러 페이지에서 공통으로 사용하는 UI 컴포넌트 관리
├─ styles/       // 전역 스타일 및 스타일 관련 파일 관리
├─ assets/       // 이미지, 폰트 등 정적 리소스 관리
├─ api/          // 서버 통신 관련 함수 및 API 요청 로직 관리
├─ hooks/        // 커스텀 훅 정의 및 상태/로직 재사용 관리
├─ utils/        // 공통 유틸리티 함수 모음
├─ storage/      // localStorage 접근 및 저장 로직 관리
└─ main.jsx      // 애플리케이션의 진입점 파일

```
### 브랜치 전략
**기본 브랜치**
- **main**: 배포(프로덕션)용 브랜치. 배포 태그만 여기서 생성.
- **develop**: 개발 통합 브랜치. 모든 기능/수정이 머지된 뒤 배포 후보가 됨.
**작업 브랜치**
- **feature/**: 기능 구현용. `develop`에서 분기 → 완료 후 `develop`으로 PR
- **fix/**: 버그 수정용. 원칙적으로 `develop`에서 분기 → 긴급 핫픽스는 아래 참조
- **hotfix/**: 프로덕션 긴급 수정. `main`에서 분기 → `main`에 머지 & 즉시 배포 → `develop` 최신화

### 컨벤션 규칙
**🧩 컴포넌트**
- 화살표 함수 사용
- 컴포넌트는 `export default`로 내보내기
- 아이콘은 **SVG 컴포넌트**로 제작
    - assets/svg 경로
    - 네이밍 룰 ~Svg.jsx
- 자식 요소가 없는 컴포넌트는 **셀프 클로징 태그** 사용
- 컴포넌트는 **폴더 단위로 구분**, 이름은 **소문자로 시작**
    - 예: `layout`, `common` 폴더
- 페이지 컴포넌트는 파일명 끝에 `Page.jsx`를 붙임
---
**🎨 스타일 시트**
- 스타일 파일은 **별도의 파일로 분리**
    - 파일명 규칙: `{컴포넌트이름}.style.js`
    - 예시: `import * as S from './Button.style'`











