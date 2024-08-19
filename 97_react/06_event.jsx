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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Football /><Football2 /></>);