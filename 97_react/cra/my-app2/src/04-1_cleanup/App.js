import { useEffect, useState } from "react";

function Hello() {
    // function byFn() {
    //   console.log("destoryed");
    // }
    // function hiFn() {
    //   console.log("created");
    //   return byFn;
    // }
    //   useEffect(hiFn, []);
    //   return <h1>헬로우!</h1>;

    // 두 번째
    // useEffect(function () {
    //     console.log("created");
    //     return function () {
    //         console.log("destroyed");
    //     };
    // }, []);
    // return <h1>헬로우!</h1>;

    // 세 번째
    useEffect(() => {
        console.log("created");
        return () => console.log("destroyed");
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
