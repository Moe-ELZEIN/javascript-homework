var name = prompt("What's your name?");

switch (name) {
  case "1":
    alert('Hello, ' + name);
    break;

  default:
  alert("Hi mystery person");
}

var selectCalculator = prompt("Which calculator would you like to use?")

if (selectCalculator == "a") {
  alert("You have selected advanced");
}
else {
  alert("You have selected basic");
}

var a,b,result;
function setValues()
  {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
  }
  function add() {
    setValues();
    result = a + b;
    alert("Is equal to " + result);
  }
  function minus() {
    setValues();
    result = a - b;
    alert("Is equal to " + result);
  }
  function multiply() {
    setValues();
    result = a * b;
    alert("Is equal to " + result);
  }
  function div() {
    setValues();
    result = a / b;
    alert("Is equal to " + result);
  }
  function sqrt() {
    setValues();
    result = sqrt(a);
    alert("Square root is equal to " + result);
  }
  function pow() {
    setValues();
    result = pow(a, b);
    alert("Power is equal to " + result);
  }
