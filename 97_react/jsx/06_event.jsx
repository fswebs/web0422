// Event
/* 
    이벤트는 camelCase 구문으로 작성한다.
    이벤트 핸들러는 중괄호 안에 작성한다.

    <태그 onClick={함수}>
*/

function Soccer() {
  const shoot = () => {
    alert("Great Shot!");
  };
  
  const shoot2 = (a) => {
    alert(a);
    const ball = ReactDOM.createRoot(document.getElementById("ball"));
    ball.render(<Ball isrc={a} />);
  };
  
  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
      {/* 이벤트 핸들러에 인수를 전달하려면 화살표 함수를 사용한다. */}
      <button onClick={() => { shoot2("./assets/ball.png") }}>Take the shot2!</button>
    </>
  );
}

function Ball(props) {
  return <img src={props.isrc} alt="축구공" title="클릭해보세요." onClick={move} />;
}

function move() {
  const ball = document.getElementById("ball");
  ball.classList.add("on");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Soccer /></>);