const output = document.querySelector('#output');
let firstValue = '';
let secondValue = '';
let symbol = '';

function appendToOutput(value) {
  if (typeof(firstValue) == 'string') {
    firstValue += value
  } else {
    secondValue += value
  }
  output.innerHTML += value;
  console.log('firstvalue:', firstValue);
  console.log('secondvalue:', secondValue);
}

function calculate(currentSymbol) {
  if (secondValue) {
    displayResult();
    firstValue = parseFloat(firstValue); 
    output.innerHTML = firstValue;
  } else {
    firstValue = parseFloat(firstValue); 
    symbol = currentSymbol;
    output.innerHTML += symbol;
  }
}

function displayResult() {
  switch(symbol) {
    case '+':
      firstValue = firstValue + parseFloat(secondValue);
      firstValue = firstValue.toString();
      secondValue = '';
      output.innerHTML = firstValue;
      console.log( 'type of one', typeof firstValue);
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

function clearOutput() {
  firstValue = '';
  secondValue = '';
  output.innerHTML = '';
}

function deleteValue() {
  if (typeof(firstValue) == 'string') {
    let arrayOutput = output.innerHTML.split(""); 
    arrayOutput.pop(); 
    let newString = arrayOutput.join("");
    firstValue = newString;
    output.innerHTML = firstValue;
    console.log("newFirstValue:", firstValue);
  } else if (secondValue) {
      let arrayOutput = secondValue.split(""); 
      arrayOutput.pop();
      let newString = arrayOutput.join(""); //ok
      secondValue = newString;
      output.innerHTML = firstValue + symbol + secondValue;
      console.log("newFirstValue:", firstValue);
      console.log("newSecondValue:", secondValue);
  } else if (symbol){
      console.log(symbol);
    
      let arrayOutput = symbol.split('');
      // arrayOutput.pop();
      // arrayOutput.pop();
      // let newString = arrayOutput.join("");
      // firstValue = newString;
      // output.innerHTML = newString ;
      console.log(arrayOutput);
      // console.log(firstValue);
  }
}
