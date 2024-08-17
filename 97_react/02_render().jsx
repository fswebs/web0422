// JSX(JavaScript XML) - return ()안의 HTML태그는 따옴표 없이 사용
// JSX 파일명: *.jsx
// 함수명의 첫 글자는 대문자로 기록한다.
function MyFirstReact(){
    return (
        <div>
            <h2>ReactJS?</h2>
            {/* XML - 빈 요소는 <태그명 />로 기록한다. */}
            <p>1. 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리<br/>2. SPA(Single Page Application, 단일 페이지 애플리케이션)을 만드는 데 사용!<br/>3. 재사용 가능한 UI 구성 요소 제작</p>
        </div>
    );
}

/* 
    ReactDOM.render(요소, 컨테이너)
        ReactDOM은 가상 DOM 생성 객체
        render()은 리액트 요소를 HTML DOM 컨테이너에 넣는 메소드
        리액트요소는 요소를 리턴하는 함수명을 빈 태그 형식으로 쓴다.
        컨테이너는 HTML 페이지의 div.myRoot
*/
// HTML 페이지에 요소 삽입
ReactDOM.render(<MyFirstReact/>, document.querySelector(".myRoot"));