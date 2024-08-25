import { useEffect, useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
          return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    };
    //console.log(toDos);
    return (
        <div>
            <h1>내가 할 일({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="당신의 할일을 적어주세요."
                />
                <button>할 일 추가</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, idx)=><li key={idx}>{item}</li>)}
            </ul>
        </div>
    );
}

export default App;
