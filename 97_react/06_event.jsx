// Event
/* 
    이벤트는 camelCase 구문으로 작성한다.
    이벤트 핸들러는 중괄호 안에 작성한다.

    <태그 onClick={함수}>
*/

function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);