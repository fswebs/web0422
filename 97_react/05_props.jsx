// props
/* 
    function 함수(props) {
        ... {props.속성} ...
    }

    <태그 속성="값" />
*/

const myElement = <Car brand="Ford" />;

function Car(props) {
    return <h3>I am a {props.brand}!</h3>;
}

// props는 매개변수로 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달한다.
// 속성 값이 문자열인 경우
function Garage() {
    return (
        <>
            <h2>Who lives in my garage?</h2>
            <Car brand="Benz" />
        </>
    );
}

// 속성 값이 변수인 경우 {변수}
function Garage2() {
    const carName = "BMW";
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carName} />
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(myElement);
root.render(<div>{myElement}<Garage /><Garage2 /></div>);