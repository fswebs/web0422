import Card from "./Card";

// Render cards
function App() {
    return (
        <div>
            {cards.map((card, index) => (
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
ReactDOM.render(<App />, document.getElementById("root"));
