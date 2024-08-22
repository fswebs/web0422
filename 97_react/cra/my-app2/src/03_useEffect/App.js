import { useEffect, useState } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("매 번 실행");
    // const iRunOnlyOnce = () => {
    //     console.log("한 번 실행");
    // };
    // 처음 렌더링될 때 한 번만 실행된다.
    // useEffect(iRunOnlyOnce, []);
    // useEffect(함수, [dependency])
  useEffect(() => {
      console.log("한 번 실행");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("keyword 비어있지 않고 5를 초과 시 실행", keyword);
    }
  }, [keyword]);
  useEffect(() => {
      console.log("keyword 입력시만 실행", keyword);
  }, [keyword]);
  useEffect(() => {
      console.log("counter 입력시만 실행", keyword);
  }, [counter]);
  useEffect(() => {
      console.log("counter 또는 keyowrd 입력 시 실행", keyword);
  }, [counter, keyword]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="여기서 검색"
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>클릭</button>
        </div>
    );
}

export default App;
