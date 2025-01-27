import React from "react";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {

    const [input, setInput] = useState('0');

    const handleClick = (value) => {
        if (value === 'AC') {
          setInput('0');
        } else if (value === '=') {
          try {
            setInput(eval(input).toString());
          } catch (e) {
            setInput('Error');
          }
        } else {
          setInput(input === '0' ? value : input + value);
        }
      };
        

    return (
     <React.Fragment>   
        <h1>Calculator</h1>
        <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
                {['AC', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((item) => (
                    <button
                        key={item}
                        className={`button ${item === '=' ? 'equals' : ''}`}
                            onClick={() => handleClick(item.toString())}
                    >
                    {item}
                    </button>
                ))}
            </div>
    </div>
    </React.Fragment>
    );
};
export default Calculator;