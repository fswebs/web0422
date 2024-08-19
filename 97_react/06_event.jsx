// Event
/* 
    이벤트는 camelCase 구문으로 작성한다.
    이벤트 핸들러는 중괄호 안에 작성한다.

    <태그 onClick={함수}>
*/

// 이벤트 추가
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

// 인수 전달
// 이벤트 핸들러에 인수를 전달하려면 화살표 함수를 사용한다.
function Football2() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

function EventShow() {
  const shoot = () => {
    alert("Great Shot!");
  };

  const shoot2 = (a) => {
    alert(a);
    const ball = ReactDOM.createRoot(document.getElementById("ball"));
    ball.render(<Ball isrc={a} />);
  };

  const aladin = (lamp) => {
    alert("소원이 무엇입니까?" + lamp);
    const hope = ReactDOM.createRoot(document.getElementById("ala"));
    hope.render(<AlaLamp isrc={lamp} />);
  };

  return (
    <>
      <img src="./assets/logoM.png" onMouseOver={() => { aladin("./assets/ala4.jpg") }} />
      <button onClick={shoot}>Take the shot!</button>
      <button onClick={()=>{shoot2("./assets/ball.jpg")}}>Take the shot2!</button>
    </>
  );
}

function AlaLamp(props) {
  return <img src={props.isrc} alt="알라딘 램프" />;
}

function Ball(props) {
  return <img id="bb" src={props.isrc} alt="축구공" title="클릭하시면 공이 날아가요!" onClick={move} />;
}

function move() {
  let bb = document.getElementById("bb");
  bb.style.transform = "translateX(200%) rotate(720deg)";
  bb.style.transition = "2s ease-in-out";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Football /><Football2 /><EventShow /></>);