// 변수 선언
const myElement1 = <h2>I do use JSX!</h2>;

/* 
    ReactDOM
    createRoot() ~ React 구성 요소가 표시될 HTML 요소 정의 메소드 
    render()

    [출력 방법1]
        ReactDOM.render(요소, 컨테이너);
    [출력 방법2]
        const 변수 = ReactDOM.createRoot(컨테이너);
        변수.render(요소);
*/
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
root1.render(myElement1);

// createElement("태그", {표현식}, 내용) ~ React 요소 생성 메소드
const myElement2 = React.createElement("h2", {}, "I do not use JSX!");
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
root2.render(myElement2);

// JSX 표현식 - { } 안에 React 변수, 속성, JS 표현식을 사용한다.
const num = 5;
const myElement3 = <h2>React is {num + num} times better with JSX</h2>;
const root3 = ReactDOM.createRoot(document.querySelectorAll("#root div")[2]);
root3.render(myElement3);

// 최상위 요소는 하나
// 최상위 요소는 HTML 태그, <React.Fragment></React.Fragment> 또는 <></>로 한다.
const myElement4 = (
    <React.Fragment>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </React.Fragment>
);
const root4 = ReactDOM.createRoot(document.querySelectorAll("#root div")[3]);
root4.render(myElement4);

// 빈 요소는 />로 닫는다.
const myElement5 = <input type="text" />;
const root5 = ReactDOM.createRoot(document.querySelectorAll("#root div")[4]);
root5.render(myElement5);

// class 대신 className으로 기록한다.
const myElement6 = <h2 className="myclass">Hello World</h2>;
const root6 = ReactDOM.createRoot(document.querySelectorAll("#root div")[5]);
root6.render(myElement6);