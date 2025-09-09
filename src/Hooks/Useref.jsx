import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Useref() {
    const [counter, setCounter] = useState(0);
    const val = useRef(0);
    const btn_col = useRef();  //over write nhi hota hai imp piont//

    const handleChange = () => {
        setCounter(counter + 1);
        val.current = val.current + 1;
        console.log("The value of val:", val.current);
    };

    const changeColor = () => {
        btn_col.current.style.backgroundColor = "yellow";
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
          
            <div ref={btn_col} className=" shadow rounded p-5 text-center" style={{ maxWidth: '500px', width: '100%' }}>
                <h1  className="mb-4">🔢 Counter: {counter}</h1>

                <button
                    // ref={btn_col}
                    onClick={handleChange}
                    className="btn btn-primary w-100 mb-3"
                >
                    ➕ Increment Counter
                </button>

                <button
                    onClick={changeColor}
                    className="btn btn-warning w-100"
                >
                    🎨 Change Button Color
                </button>
            </div>
        </div>
    );
}
