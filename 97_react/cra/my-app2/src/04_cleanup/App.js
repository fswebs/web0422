import { useEffect, useState } from "react";

function Hello() {
    useEffect(() => {
      console.log("created");
      return () => console.log("destoryed");
    }, []);
    return <h1>헬로우!</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "숨김" : "보임"}</button>
        </div>
    );
}

export default App;
