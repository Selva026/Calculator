import styles from './Calculator.module.css';
import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            if (input.trim() === '') {
                setInput('Error'); // Handle empty input case
                return;
            }
            setInput(eval(input).toString()); // Evaluate the input expression
        } catch (error) {
            setInput('Error'); // Handle invalid expressions
        }
    };

    return (
        <div className={styles.calculator}>
            <h1>React Calculator</h1>
            <input
                type="text"
                value={input}
                readOnly
                className={styles.display}
            />
            <div className={styles.buttons}>
                <button type="button" onClick={() => handleClick('7')}>7</button>
                <button type="button" onClick={() => handleClick('8')}>8</button>
                <button type="button" onClick={() => handleClick('9')}>9</button>
                <button type="button" onClick={() => handleClick('+')}>+</button>
                <button type="button" onClick={() => handleClick('4')}>4</button>
                <button type="button" onClick={() => handleClick('5')}>5</button>
                <button type="button" onClick={() => handleClick('6')}>6</button>
                <button type="button" onClick={() => handleClick('-')}>-</button>
                <button type="button" onClick={() => handleClick('1')}>1</button>
                <button type="button" onClick={() => handleClick('2')}>2</button>
                <button type="button" onClick={() => handleClick('3')}>3</button>
                <button type="button" onClick={() => handleClick('*')}>*</button>
                <button type="button" onClick={handleClear}>C</button>
                <button type="button" onClick={() => handleClick('0')}>0</button>
                <button type="button" onClick={handleCalculate}>=</button>
                <button type="button" onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
