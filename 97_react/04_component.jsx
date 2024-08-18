// import된 *.js 또는 *.jsx 파일 확장자는 생략 가능
import Car5 from "./Car5";

/* 
    extends React.Component ~ React.Component에 대한 상속을 생성하고, 컴포넌트에 React.Component의 함수에 대한 액세스를 제공한다.
    render() ~ HTML 반환
*/

// 클래스 컴포넌트 생성
class Car extends React.Component {
    render() {
        return (
            <>
                <h2>Hi, I am a Car!</h2>
                <img src="assets/car.jpg" alt="카" />
            </>
        );
    }
}

// 컴포넌트 렌더링
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
root1.render(<Car />);

// 함수 컴포넌트 생성
function Car2() {
    return <h2>Hi, I am a Car!</h2>;
}

const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
root2.render(<Car2 />);

/* 
    props ~ 함수의 인수와 같으며, 속성으로 컴포넌트에 전송한다. 
    
    function 함수명(props) {
        return XML문장 내에서 {props.속성명}
    }

    render(<함수명 속성="값" />);
*/
function Car3(props) {
    return <h2>I am a {props.color} and I drive a {props.brand} Car!</h2>;
}

const root3 = ReactDOM.createRoot(document.querySelectorAll("#root div")[2]);
root3.render(<Car3 color="yellow" brand="Ford" />);

// 컴포넌트 재사용
const root4 = ReactDOM.createRoot(document.querySelectorAll("#root div")[3]);
root4.render(<Car3 color="red" brand="Benz" />);

// 컴포넌트 내의 컴포넌트
function Car4() {
    return <h2>I am a Car!</h2>;
} 

function Garage() {
    return (
        <>
            <h2>Who lives in my Garage?</h2>
            <Car4 />
        </>
    );
}

const root5 = ReactDOM.createRoot(document.querySelectorAll("#root div")[4]);
root5.render(<Garage />);


// 컴포넌트를 별도의 파일로 분할(.js)
// 파일 이름은 대문자로 시작해야 한다.


const root6 = ReactDOM.createRoot(document.querySelectorAll("#root div")[5]);
root6.render(<Car5 />);