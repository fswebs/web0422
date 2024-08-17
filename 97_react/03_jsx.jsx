// 변수에 태그를 할당한다.
// 최상위 부모는 1개 이어야 한다.

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

// 출력
ReactDOM.render(myelement, document.querySelector("#root"));