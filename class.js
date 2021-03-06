const output = document.querySelector('#output');
let firstValue = '';
let secondValue = '';
let symbol = '';

class Calculator {
  appendToOutput(value) {
    if (typeof(firstValue) == 'string') {
      firstValue += value
    } else {
      secondValue += value
    }
    output.innerHTML += value;
  }

  calculate(currentSymbol) {
    if (secondValue) {
      calculator.displayResult();
      firstValue = parseFloat(firstValue); 
      symbol = currentSymbol;
      output.innerHTML = firstValue + symbol;
    } else {
      firstValue = parseFloat(firstValue); 
      symbol = currentSymbol;
      output.innerHTML = firstValue + symbol;
    }
  }

  displayResult() {
    switch(symbol) {
      case '+':
        firstValue = firstValue + parseFloat(secondValue);
        secondValue = '';
        output.innerHTML = firstValue.toString();
      break;
      case '-':
        firstValue = firstValue - parseFloat(secondValue);
        firstValue = firstValue.toString();
        secondValue = '';
        output.innerHTML = firstValue;
      break;
      case '*':
        firstValue = firstValue * parseFloat(secondValue);
        firstValue = firstValue.toString();
        secondValue = '';
        output.innerHTML = firstValue;
      break;
      case '÷':
        firstValue = firstValue / parseFloat(secondValue);
        firstValue = firstValue.toString();
        secondValue = '';
        output.innerHTML = firstValue;
      break;
    }
  }

  deleteValue() {
    if (typeof(firstValue) == 'string') {
      let arrayOutput = output.innerHTML.split(''); 
      arrayOutput.pop(); 
      let newString = arrayOutput.join('');
      firstValue = newString;
      output.innerHTML = firstValue;
    } else if (secondValue) {
        let arrayOutput = secondValue.split(''); 
        arrayOutput.pop();
        let newString = arrayOutput.join('');
        secondValue = newString;
        output.innerHTML = firstValue + symbol + secondValue;
    } else {
      let arrayOutput = output.innerHTML.split(''); 
      arrayOutput.pop();
      let newString = arrayOutput.join('');
      firstValue = newString;
      output.innerHTML = firstValue;
    }
  }

  clearOutput() {
    firstValue = '';
    secondValue = '';
    output.innerHTML = '';
  }
}

const calculator = new Calculator();
