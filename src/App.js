import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const input = document.querySelector('#num');
  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + parseInt(input.value));
    input.value = '';
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    setCount(count - input.value);
    input.value = '';
  };
  return (
    <div className="container">
      <h1>01 Counter App</h1>
      <div className="app">
        <button onClick={(_) => setCount(count - 1)} className="dec c-red">
          -
        </button>
        <h1 className={count > 0 ? "c-green" : count < 0 ? "c-red" : ""}>
          {count}
        </h1>
        <button onClick={(_) => setCount(count + 1)} className="inc c-green">
          +
        </button>
      </div>
      <form>
        <input type="number" id="num" />
        <div className="btns">
          <input type="submit" value="Decrease" onClick={handleDecrease} />
          <input type="submit" value="Increase" onClick={handleIncrease} />
        </div>
      </form>
    </div>
  );
};
