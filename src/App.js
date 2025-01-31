import './App.css';
import {useState} from "react";

const App = () => {
    const [count, SetCount] = useState(0);
    const increase = () => SetCount(count+1);

    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>add</button>
        </div>
    )
}

export default App;