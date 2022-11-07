# 원티드 프리온보딩 프론트엔드 3팀 - Assignment #3

> 목적 : 광고 관리 간편화 서비스 사이트 구축
> 
> 
> 프로젝트 기간 : 2022년 11월 5일 ~ 2022년 11월 7일
> 
> ### [배포링크](https://preonboarding-2-2-3.netlify.app/)
> 

### ✨주요기능

### 1. 반응형 Layout

![반응형Layout.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be592b8e-b720-42e1-97ab-fabff12d6349/%EB%B0%98%EC%9D%91%ED%98%95Layout.gif)

반응형으로 사이드 바를 구현했습니다. useOnClickOutside 훅 사용하여, 목록 버튼으로 사이드 바 연 상태일 경우, 사이드 바 바깥 클릭하면 닫히도록 UX에 신경썼습니다. 

### 2. datePicker

![datePicker.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4503f65c-8423-4adb-8077-d74812db9fe8/datePicker.gif)

 KPI 변화를 확인하고자 하는 기간을 설정합니다. 데이터가 존재하는 기간 동안만 영역 선택이 가능하게 해두었습니다.   

### 3. KPIGraph

![graph.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/031c5086-9c47-4a57-a8e6-170b043762d6/graph.gif)

일간/주간 filter에 따라, 일간에는 선택 기간 시작일의 데이터를 보여주고, 주간 에는 선택 기간의 변화 추세를 보여줍니다.

좌측 dropbox에서의 선택에 따라, 2가지 지표를 동시에 확인할 수 있습니다. 

## 📖 목차

- [실행 방법](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#%EF%B8%8F-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95)
- [협업 과정](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#-%ED%98%91%EC%97%85-%EA%B3%BC%EC%A0%95)
- [Best Practice 및 채택 근거](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#%EF%B8%8F-best-practice-%EB%B0%8F-%EC%B1%84%ED%83%9D-%EA%B7%BC%EA%B1%B0)
- [팀 코드 컨벤션](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#-%ED%8C%80-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [사용 기술](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#-%EC%82%AC%EC%9A%A9-%EA%B8%B0%EC%88%A0)
- [폴더 구조](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
- [팀원](notion://www.notion.so/2-2-3-madup-779d1755c57745a687ffbdfc2fadf530#-%ED%8C%80%EC%9B%90)

</br>

## ⌨️ 실행 방법

```
$ git clone <https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3.git>
$ npm install
$ npm run start
```

## 📃 협업 과정

1. 우선 노션에서 프로젝트를 페이지 별로 나누고 또 다시 페이지 별로 필요한 컴포넌트를 나열하여 작업을 최대한 세분화 하려고 했습니다.
    - [https://www.notion.so/2-1-498c225b2d814eb8b77bf1d6d312037d](https://www.notion.so/2-1-498c225b2d814eb8b77bf1d6d312037d)
2. 본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)을 활용해서 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백 및 리팩토링 후 `페어 프로그래밍` 방식으로 Best Practice를 채택했습니다.
3. 게더타운에 모여 화면공유를 하며 실시간으로 피드백을 주고 받았습니다.

</br>

# 예시

## ☑️ Best Practice 및 채택 근거

### 1. barrel 방식의 폴더구조

각 컴포넌트에 해당되는 폴더를 만들고 그 안에 index.js를 만듭니다.

예를 들어 index.js안에 `export { default } from './Header'` 라고 해두면 VS CODE상에서 해당 파일을 링크하여 열었을때(ctrl를 누른상태로 클릭) vs code 에디터 상단에 `Header.jsx` 라고 뜹니다.

이는 여러개의 파일을 link로 열었을때 `index.jsx` 라는 이름이 여러개가 떠서 헷갈리는 상황을 막아줍니다.

![https://user-images.githubusercontent.com/65995664/199855960-df2b2f70-3668-4777-8c57-4bedece6d857.gif](https://user-images.githubusercontent.com/65995664/199855960-df2b2f70-3668-4777-8c57-4bedece6d857.gif)

### 2. recoil

 저희 팀은 상태 관리를 위해 recoil을 사용했습니다. recoil은 주로 페이지 간 이동 후에도 filter나 날짜 같은 선택사항들의 상태 저장을 위해 사용했습니다. 

앱을 실행 하면, atom에서 get요청을 하여 json 데이터를 store에 저장하게 하였고, select를 이용해, component에는 필요한 데이터만 전달 될 수 있도록 하였습니다. 

```jsx
export const adListState = selector({
  key: "adListState",
  get: async ({ get }) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/ad_list_data`);
    return data.ads;
  },
});

export const adListFilterQuery = selector({
  key: "adListFilterQuery",
  get: ({ get }) => {
    const filter = get(adListFilterState);
    const adList = get(adListState);

    switch (filter) {
      case "전체": {
        return adList;
      }
      case "진행중": {
        return adList.filter((ad) => ad.status === "active");
      }
      case "중단됨": {
        return adList.filter((ad) => ad.status === "ended");
      }
      default:
        throw new Error("Error finding adList");
    }
  },
});
```

 또, Suspense 대신, recoil에서 제공하는 비동기 처리를 돕기 위한 Loadable이라는 객체를 이용해, 데이터를 받아오는 동안, Loading 상태를 처리하였습니다.  

```jsx
const { state, contents } = useRecoilValueLoadable(trendDataQuery);

return (
	<>
      {state === "loading" && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}
      {state === "hasValue" && kpiValues && (
        <Container>
          <ROAS value={kpiValues[0]?.roas} exValue={kpiValues[1]?.roas} />
          <Cost value={kpiValues[0]?.cost} exValue={kpiValues[1]?.cost} />
          <Imp value={kpiValues[0]?.imp} exValue={kpiValues[1]?.imp} />
          <Click value={kpiValues[0]?.click} exValue={kpiValues[1]?.click} />
          <Conv value={kpiValues[0]?.conv} exValue={kpiValues[1]?.conv} />
          <Revenue value={kpiValues[0]?.revenue} exValue={kpiValues[0]?.revenue} />
        </Container>
      )}
	</>);
```

### 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 여기하고 있었습니다 !

## 🔒 팀 코드 컨벤션

- [ ]  git commit message 컨벤션

| 커밋명 | 내용 |
| --- | --- |
| feat | 파일, 폴더, 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 제품 코드 수정 없음 |
| style | 코드 형식, 정렬, 주석 등의 변경 |
| refactor | 코드 리팩토링 |
| test | 테스트 코드 추가 |
| chore | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix | 치명적이거나 급한 버그 수정 |
| remove | 사용하지 않는 변수, 파일 etc 삭제 |
| working | 이미 만들어진 기능, 함수 작업중 |
| merge | branch merge |
- [ ]  branch 컨벤션

| 브랜치명 | 내용 |
| --- | --- |
| develop | 파일, 폴더, 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 제품 코드 수정 없음 |
| refactor | 코드 리팩토링 |
| hotfix | 치명적이거나 급한 버그 수정 |
- issue 컨벤션과 pr컨벤션도 branch 컨벤션과 동일
    - 단 `[ Fix ]` 이런식으로 포맷이 달라짐

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="[https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white](https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white)"/> <img alt="CSS3" src ="[https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white](https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white)"/> <img alt="JavaScript" src ="[https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white](https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white)"/> <img alt="React" src ="[https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white](https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white)"/> 

<img alt="Axios" src ="[https://img.shields.io/badge/Axios-5A29E4?&style=flat&logo=Axios&logoColor=white](https://img.shields.io/badge/Axios-5A29E4?&style=flat&logo=Axios&logoColor=white)"/> <img alt="styled-components" src ="[https://img.shields.io/badge/styled](https://img.shields.io/badge/styled) components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> 

<img alt="react-responsive" src ="[https://img.shields.io/badge/react](https://img.shields.io/badge/react) responsive-000000?&style=flat&logoColor=white"/>

<img alt="Git" src ="[https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white](https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white)"/> <img alt="GitHub" src ="[https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white](https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white)"/> <img alt="Notion" src ="[https://img.shields.io/badge/Notion-000000?&style=flat&logo=Notion&logoColor=white](https://img.shields.io/badge/Notion-000000?&style=flat&logo=Notion&logoColor=white)"/>

</br>

## 📦 폴더 구조

```
📂 src
├──

```

</br>

## 👨‍👩‍👧‍👦 팀원

| 조은지<br/>(팀장) | 고영훈<br/>(서기) | 김창희<br/>(팀원) | 박정민<br/>(팀원) |
| --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="100" height="100"> |
| Joeunji0119 | YeonghunKO | PiperChang | ono212 |

| 문지원<br/>(팀원) | 이상민<br/>(공지) | 이지원<br/>(팀원) | 조수진<br/>(팀원) |
| --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" with="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="100" height="100"> |
| moonkorea00 | dltkdals224 | 365support | suzz-in |
