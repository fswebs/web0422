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

function Car2(props) {
    return <h3>I am a {props.brand.model}!</h3>;
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
            <h2>Who lives in my garage2?</h2>
            <Car brand={carName} />
        </>
    );
}

// 속성 값이 객체 변수인 경우 {변수}
function Garage3() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <h2>Who lives in my garage3?</h2>
            <Car2 brand={ carInfo } />
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(myElement);
root.render(<div>{myElement}<Garage /><Garage2 /><Garage3 /></div>);