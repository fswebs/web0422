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
        setToDo("");
    };
    return (
        <div>
            <form>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="당신의 할일을 적어주세요."
                />
                <button>할 일 추가</button>
            </form>
        </div>
    );
}

export default App;
