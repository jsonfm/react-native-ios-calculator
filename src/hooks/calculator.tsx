import {useState, useEffect, useCallback} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [result, setResult] = useState(0);
  const clean = () => {
    setNumber('0');
    setResult(0);
  };

  const operatorIsValid = (numberString: string) => {
    if (number.endsWith('+') && numberString === '+') {
      return false;
    }
    if (number.endsWith('-') && numberString === '-') {
      return false;
    }
    if (number.endsWith('x') && numberString === 'x') {
      return false;
    }
    if (number.endsWith('/') && numberString === '/') {
      return false;
    }
    return true;
  };

  const deleteLastNumber = () => {
    if (number.length - 1 === 0) {
      return setNumber('0');
    }
    const numberString = number.substring(0, number.length - 1);
    setNumber(numberString);
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      const numberString = number.replace('-', '');
      setNumber(numberString);
    } else {
      const numberString = '-' + number;
      setNumber(numberString);
    }
  };

  const calculate = useCallback(() => {
    try {
      if (number.includes('const')) return;
      // eslint-disable-next-line no-eval
      const value = eval(number.replace('x', '*'));
      setResult(value);
    } catch (error) {}
  }, [number]);

  const buildNumber = (numberString: string) => {
    if (!operatorIsValid(numberString)) return;

    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (number === '.') {
        return setNumber(number + numberString);
      }
      if (numberString === '0' && number.startsWith('0')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
    }

    setNumber(number + numberString);
  };

  useEffect(() => {
    calculate();
  }, [number, calculate]);
  return {
    number,
    clean,
    buildNumber,
    deleteLastNumber,
    toggleSign,
    result,
    calculate,
  };
};
