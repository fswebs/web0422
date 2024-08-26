// src/App.js

// 1. 컴포넌트(일종의 함수) 
// 예) App, Card
// - 첫 글자는 대문자로
// - 반드시 return 키워드로 시작한다.
// - JSX 언어를 사용한다.
// - JSX? JS + XML(HTML+사용자가 태그를 만들어 쓴다.)
function App() {
    return (
        <div>
            {/* XML 영역에서 생긴 주석 */}
            {cards.map((card, index) => (
                // {표현식}
                // 표현식 -> 변수, 값, JS문장(조건 연산자)
                // 제어문은 사용할 수 없다.
                // <App />
                // <Card 속성="문자열" 속성={변수} /> -> Card 컴포넌트
                // function Card() {}
                // XML
                <Card
                    key={index}
                    title={card.title}
                    text={card.text}
                    image={card.image}
                />
            ))}
        </div>
    );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
