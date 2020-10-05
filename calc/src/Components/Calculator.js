import React, {useState} from 'react';
import '../App.css';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

function Calculator() {
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState({first:null, second:null, operation:null});
  function calc(s) {
    return math.evaluate(s);
  }
  return (
    <div className="canvas">
        <div className="answer-container">
            <div className="answer">{value}</div>
        </div>
        <div className="operations">
            <div className="row">
                <div onClick={() => setValue(value + 7) }>7</div>
                <div onClick={() => setValue(value + 8) }>8</div>
                <div onClick={() => setValue(value + 9) }>9</div>
                <div onClick={() => setValue("0")}>CLR</div>
            </div>
            <div className="row">
                <div onClick={() => setValue(value + 4) }>4</div>
                <div onClick={() => setValue(value + 5) }>5</div>
                <div onClick={() => setValue(value + 6) }>6</div>
                <div onClick={() => setValue(value + "*")}>*</div>
            </div>
            <div className="row">
                <div onClick={() => setValue(value + 1) }>1</div>
                <div onClick={() => setValue(value + 2) }>2</div>
                <div onClick={() => setValue(value + 3) }>3</div>
                <div onClick={() => setValue(value + "/")}>/</div>
            </div>
            <div className="row">
                 <div onClick={() => setValue(value + 0) }>0</div>
                <div onClick={() => setValue(value + "+")}>+</div>
                <div onClick={() => setValue(value + "-")}>-</div>
                <div onClick={() => setValue(calc(value))}>=</div>
            </div>
        </div>
    </div>
  );
}

export default Calculator;