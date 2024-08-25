// app.js
import Card from './Card';
import cards from './data';

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

export default App;

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

