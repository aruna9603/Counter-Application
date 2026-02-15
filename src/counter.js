import { useState } from "react";
import "./style.css";


function Counter() {
    const [count, setcount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);


    function increament() {
        setcount(count + 1);
        setShowMessage(false);
    }

    function decreament() {
        if (count > 0) {
            setcount(count - 1);
            setShowMessage(false);
        }
        else {
            setShowMessage(true);
        }
    }

    function reset() {
        setcount(0);
        setShowMessage(false);
    }
    return (
        <div className="box">
            <h1>Counter Application</h1>
            <h2>{count}</h2>
            <p>
                {showMessage ? "Minimum limit reached" : ""}
            </p>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default Counter