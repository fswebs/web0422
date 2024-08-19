import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./DC/Layout";
import CHARACTERS from "./DC/CHARACTERS";
import COMICS from "./DC/COMICS";
import GAMES from "./DC/GAMES";
import MOVIES from "./DC/MOVIES";
import NEWS from "./DC/NEWS";
import VIDEO from "./DC/VIDEO";

/* 
  리액트 라우터? 컴포넌트를 연결하여 특정 이벤트에 모듈을 변경해주는 중계 역할
  BrowserRouter ~ 라우터 루트
  Routes ~ 개별 라우터 그룹핑
  Route ~ 개별 라우터
    path ~ 경로 설정 -> Link의 to속성 경로와 일치함!
    element ~ 연결할 컴포넌트 지정
  루트 역할을 하는 Route(Layout 컴포넌트)는 하위 Route를 가질 수 있다.
  예) <Route path="/">
        <Route />
      </Route>
*/


// 라우터를 이용한 컴포넌트 구성
// 컴포넌트 내보내기
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 컴포넌트를 루트로 지정한다. */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MOVIES />}/>
          <Route path="ct" element={<CHARACTERS />}/>
          <Route path="co" element={<COMICS />}/>
          <Route path="gm" element={<GAMES />}/>
          <Route path="mv" element={<MOVIES />}/>
          <Route path="nw" element={<NEWS />}/>
          <Route path="vd" element={<VIDEO />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// index.html의 div#root에 <App /> 컴포넌트 출력 지정
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);