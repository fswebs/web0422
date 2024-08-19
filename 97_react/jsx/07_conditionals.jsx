// 조건부 렌더링

function MissedGoal() {
    return <h2>MISSED!</h2>;
}

function MadeGoal() {
    return <h2>Goal!</h2>;
}

// if문
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
root1.render(<Goal isGoal={false} />);

// && 연산자
function Garage(props) {
    const cars = props.cars;
    return (
        <>
            <h2>Garage</h2>
            {cars.length > 3 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
root2.render(<Garage cars={cars} />);

// 삼항 연산자
// 
