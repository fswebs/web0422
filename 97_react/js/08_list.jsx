// 리스트

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

// 목록 항목에 대한 "키"가 제공되지 않았다는 경고 발생!
function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h2>Who lives in my garage?</h2>
            <ul>
                {/* map()을 사용하여 목록을 렌더링한다. */}
                {cars.map(car => <Car brand={car} />)}
            </ul>
        </>
    );
}

const root1 = ReactDOM.createRoot(document.querySelectorAll('#root div')[0]);
root1.render(<Garage />);

// 키 포함!
function Garage2() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <>
            <h2>Who lives in my garage?</h2>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

const root2 = ReactDOM.createRoot(document.querySelectorAll('#root div')[1]);
root2.render(<Garage2 />);