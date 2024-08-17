// 변수 선언
const ele1 = <h2>JSX 사용</h2>;

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
root1.render(ele1);

const ele2 = React.createElement("h2",{},"JSX 사용 안함");
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
root2.render(ele2);