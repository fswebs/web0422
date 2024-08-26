// src/Card.js

// Card 컴포넌트
// 컴포넌트 첫글자는 대문자로 기록한다.
// return으로 시작한다.
// function 컴포넌트명(속성) {
//      return (
//           XML코드
//           class -> className
//      );    
// }
// props -> properies
// 매개변수를 객체 형식 {값, 값, 값, ...}


function Card({ title, text, image }) {
    return (
        // {표현식} -> 표현식은 변수, 연산자 등 JS문장 (제어문x) -> if제어문 대신 삼항연산자를 사용한다.
        <div className="card">
            <img src={image} alt={title}/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer">
                <button className="card-button">Click Me</button>
            </div>
        </div>
    );
}

// 파일 단위 모듈화
// import: 파일 가져오기
// export: 파일 내보내기
export default Card;