// src/Card.js

export function Card({ title, text, image }) {
    return (
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