import React from 'react';

export default function useCalculator() {
  const [currentValue, setCurrentValue] = React.useState<string>('0');
  const [secondValue, setSecondValue] = React.useState<string>('');
  const [selectedOperator, setSelectedOperator] = React.useState<string>('');
  const [calculationResult, setCalculationResult] = React.useState<number | null>(null);

  function clear() {
    setCurrentValue('0');
    setSecondValue('');
    setSelectedOperator('');
    setCalculationResult(null);
  }

  function toggleSign() {
    if (secondValue) {
      setSecondValue(prevSecondValue => {
        return prevSecondValue.startsWith('-') ? prevSecondValue.replace('-', '') : `-${prevSecondValue}`;
      });
    } else {
      setCurrentValue(prevCurrentValue => {
        return prevCurrentValue.startsWith('-') ? prevCurrentValue.replace('-', '') : `-${prevCurrentValue}`;
      });
    }
  }

  function percentageFunction() {
    if (!secondValue) {
      const number = parseFloat(currentValue);
      setCurrentValue((number / 100).toString());
    }
  }

  function handleButtonPress(value: string) {
    if (calculationResult !== null && !selectedOperator) {
      setCurrentValue(value);
      setCalculationResult(null);
      return;
    }

    if (value === '0' && (currentValue === '0' || currentValue === '-0')) {
      return;
    }

    if (!selectedOperator) {
      setCurrentValue(prevCurrentValue => (currentValue === '0' || currentValue === '-0' ? value : prevCurrentValue + value).slice(0, 10));
    } else {
      setSecondValue(prevSecondValue => (secondValue === '0' || secondValue === '-0' ? value : prevSecondValue + value).slice(0, 10));
    }
  }

  function handleOperatorPress(value: string) {
    if (value === '=') {
      calculateResult();
      setSelectedOperator('');
      setCurrentValue(calculationResult !== null ? calculationResult.toString() : '');
      setSecondValue('');
      return;
    }

    if (calculationResult !== null) {
      setCurrentValue(calculationResult.toString());
      setCalculationResult(null);
    }

    if (currentValue !== '' && secondValue !== '') {
      calculateResult();
      setSelectedOperator(value);
      setCurrentValue(calculationResult !== null ? calculationResult.toString() : '');
      setSecondValue('');
    } else if (currentValue !== '') {
      if (calculationResult !== null) {
        setSecondValue(calculationResult.toString());
      }
      setSelectedOperator(value);
    }
  }

  function calculateResult() {
    if (currentValue !== '' && secondValue !== '') {
      const number1 = parseFloat(currentValue);
      const number2 = parseFloat(secondValue);
      let result: number | null = null;

      switch (selectedOperator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case 'x':
          result = number1 * number2;
          break;
        case '÷':
          if (number2 !== 0) {
            result = number1 / number2;
          }
          break;
        default:
          break;
      }

      setCurrentValue(result !== null ? result.toString() : 'Error');
      setSecondValue('');
      setSelectedOperator('');
    }
  }

  function display() {
    if (calculationResult !== null) {
      return calculationResult.toString().substring(0, 10);
    }

    if (secondValue !== '') {
      return secondValue.substring(0, 10);
    }

    if (selectedOperator !== '') {
      const operatorPart = selectedOperator.substring(0, 10 - currentValue.toString().length);
      return `${currentValue}${operatorPart}`;
    }

    return currentValue.toString().substring(0, 10);
  }

  return {
    clear,
    toggleSign,
    percentageFunction,
    handleButtonPress,
    handleOperatorPress,
    calculateResult,
    display,
  };
}