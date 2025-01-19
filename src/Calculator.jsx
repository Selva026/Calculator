import React, { useState } from "react";
import styles from "./Calculator.module.css"; // Import the CSS module styles

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // Safely evaluate the expression using eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className={styles.display} // Use the `display` class from CSS
      />
      <div className={styles.buttons}>
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((symbol) => (
          <button
            key={symbol}
            type="button"
            onClick={
              symbol === "C"
                ? handleClear
                : symbol === "="
                ? handleCalculate
                : () => handleClick(symbol)
            }
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
