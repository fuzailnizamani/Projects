let x = document.getElementById("x");
let y = document.getElementById("y");
let symbal;

function Calculator(x, y, symbal) {
  num1 = Number(x.value);
  num2 = Number(y.value);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter only number");
  }
  else if (symbal === '+'){
    console.log(num1 + num2);
  } else if (symbal === '-'){
    console.log(num1 - num2);
  } else if(symbal === '*'){
    console.log(num1 * num2);
  } else if (symbal === '/'){
    console.log(num1 / num2);
  } else{
    console.log('symbal is not defined');
  }
}