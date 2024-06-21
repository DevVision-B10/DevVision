# Dev Vision

## 🏆 기획

**개발관련 영상 모음 사이트**

Youtube API 를 활용해 개발에 관련된 영상을 모아, 관리하며 볼 수 있는 사이트

**`서비스 링크`** : [서비스 링크](https://dev-vision.vercel.app/)

**`피그마 링크`** : [피그마 초안 링크](https://www.figma.com/design/YgcBE1bkFKvhkeaSiuJwZC/%EC%99%95%EC%9D%B4%EB%90%A0-%EC%A1%B0%EC%9D%B8%EA%B0%80?node-id=0-1&t=CNoB5UMghz9bmKUF-1)

## 🍳 사용 기술

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)![React](https://img.shields.io/badge/react%20zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## 📂 폴더 구조

```
📦 Dev-Vision
├── 📜 package.json
├── 📂 public
│   └── 📜 vite.svg
├── 📂 src
│   ├── 📜 App.jsx
│   ├── 📂 Layout
│   │   ├── 📜 Layout.jsx
│   │   └── 📜 Menubar.jsx
│   ├── 📂 api
│   │   ├── supabase
│   │   │   ├── 📜 comment.api.js
│   │   │   └── 📜 user.api.js
│   │   └── 📂 youtube
│   │       ├── 📜 api.js
│   │       └── 📜 youtube.api.js
│   ├── 📂 assets
│   │   ├── 📜 banner1.png
│   │   ├── 📜 banner2.png
│   │   ├── 📜 banner3.png
│   │   ├── 📜 blank_profile.png
│   │   ├── 📜 ellipsis-menu-icon.png
│   │   ├── 📜 github-icon.png
│   │   ├── 📜 google-icon.png
│   │   ├── 📜 kakao-icon.png
│   │   ├── 📜 logo-icon.png
│   │   ├── 📜 logo2.png
│   │   ├── 📜 mypage_icon.png
│   │   ├── 📜 pikachu.png
│   │   ├── 📜 playBtn.png
│   │   ├── 📜 react-thumbnail.jpg
│   │   ├── 📜 react.svg
│   │   ├── 📜 sad-icon.png
│   │   ├── 📜 search-icon.png
│   │   ├── 📜 spinner-icon.gif
│   │   └── 📜 up-icon.png
│   ├── 📂 components
│   │   ├── 📂 BackModal
│   │   │   ├── 📜 BackModal.jsx
│   │   │   └── 📜 BackModalStyle.jsx
│   │   ├── 📂 EditComment
│   │   │   ├── 📜 EditComment.jsx
│   │   │   └── 📜 EditCommentStyle.jsx
│   │   ├── 📂 HomePage
│   │   │   ├── 📜 CourseCard.jsx
│   │   │   ├── 📜 CourseCardStyle.jsx
│   │   │   ├── 📜 MainBanner.jsx
│   │   │   └── 📜 MainBannerStyle.jsx
│   │   ├── 📂 LogIn
│   │   │   ├── 📜 LogIn.jsx
│   │   │   ├── 📜 LogInRedirect.jsx
│   │   │   └── 📜 LoginRedirectStyle.jsx
│   │   └── 📂 MyPage
│   │       ├── 📜 RecentlyVideosComponent.jsx
│   │       └── 📜 RecentlyVideosComponentStyle.jsx
│   ├── 📂 const
│   │   └── 📜 data.js
│   ├── 📂 hooks
│   │   ├── 📜 useCourses.js
│   │   └── 📜 useLogOut.jsx
│   ├── 📂 layouts
│   │   ├── 📜 SideBar.jsx
│   │   └── 📜 SideBarStyle.jsx
│   ├── 📜 main.jsx
│   ├── 📂 pages
│   │   ├── 📂 HomePage
│   │   │   ├── 📜 HomePage.jsx
│   │   │   └── 📜 HomePageStyle.jsx
│   │   ├── 📂 MyPage
│   │   │   └── 📜 MyPage.jsx
│   │   ├── 📂 PlayListDetail
│   │   │   ├── 📜 PlayListDetail.jsx
│   │   │   └── 📜 PlayListDetailStyle.jsx
│   │   ├── 📂 UnknownPage
│   │   │   ├── 📜 UnknownPage.jsx
│   │   │   └── 📜 UnknownPageStyle.jsx
│   │   └── 📂 VideoPage
│   │       ├── 📜 VideoPage.jsx
│   │       └── 📜 VideoPageStyle.jsx
│   ├── 📂 query
│   │   └── 📜 QueryProvider.jsx
│   ├── 📂 shared
│   │   └── 📜 Router.jsx
│   ├── 📂 styles
│   │   ├── 📂 GlobalStyle
│   │   │   └── 📜 GlobalStyle.js
│   │   └── 📜 color.css
│   ├── 📂 supabase
│   │   └── 📜 config.js
│   ├── 📂 utils
│   │   ├── 📂 common
│   │   │   └── 📜 date.js
│   │   └── 📂 validations
│   │       └── 📜 validations
│   └── 📂 zustand
│       ├── 📜 modal.js
│       ├── 📜 recent-video.js
│       └── 📜 user-log.js
├── 📜 vercel.json
├── 📜 vite.config.js
└── 📜 yarn.lock

```

## 🧨 트러블 슈팅

<details>
<summary>youtube API 한도</summary>
<br>

**`원인`** : 개발 중에 유튜브 API 호출할 때 403 Forbidden 에러가 발생함.
이를 조사한 결과, API 할당량을 초과하여 인가되지 않는 문제임을 확인.

**`해결방법모색`** :

1. 할당량 사용 파악
   : 메인 페이지에서 API 호출 시 maxResults를 50으로
   설정하여 할당량을 많이 소모하는 것을 확인했습니다.

2. 대안 모색 :
    유튜브 API를 처음 받아온 후 데이터를 DB에
   저장하고, 이후 DB와 통신하는 방법
    `maxResults` 값을 최소화하는 방법
    API 데이터를 변수에 할당하여 사용하고,
   기능 구현 테스트 시에만 API를 호출하는 방법

3. 최적화 적용 :

- 두 번째 방법을 선택하여 maxResults 값을 10으로
  줄였습니다. 이를 통해 불필요한 API 호출을 줄였습니다.
- 비공개 영상의 경우 thumbnails 객체에 데이터가
  존재하지 않기 때문에 옵셔널 체이닝을 사용하여 에러를
  방지했습니다.

**`결과`** :

- 불필요한 API 호출을 줄여 할당량 초과 문제를 해결했습니다.
- 비공개 영상에 대한 데이터 처리를 개선하여 안정성을 높였습니다.

</details>

<details>
<summary>강의 데이터 문제</summary>
<br>

**`원인`** : 메인페이지에서 강의 클릭 시 특정 강의들만 데이터 정보를 읽지 못하는 에러 발생

**`해결방법모색`** :

정상적인 페이지의 경우 썸네일 안에 데이터들이 정상적으로 들어온 걸 확인 할 수 있었지만,
에러를 출력하는 페이지의 경우 비공개 영상을 설정되어 있어서 썸네일 객체에 데이터가 들어가 있지 않았다.

**`결과`**: 비공개 영상은 thumbnails 객체 안에 데이터가 존재하지 않기에 옵셔널제이닝을 걸어 해당 데이터가 없어도 페이지에 접근할 수 있도록 해결

</details>

## 👨‍👩‍👧 구성원

| 역할 | 이름   | 분담                | 깃허브                           |
| ---- | ------ | ------------------- | -------------------------------- |
| 팀장 | 전은겸 | 메인페이지          | https://github.com/eunkyum       |
| 팀원 | 정현우 | 영상 상세페이지     | https://github.com/junghyunwoo02 |
| 팀원 | 이수진 | 로그인, 검색 페이지 | https://github.com/leeejin       |
| 팀원 | 윤문열 | 마이페이지          | https://github.com/munyeol-Yoon  |
