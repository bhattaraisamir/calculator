const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Scientific functions
function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function cube() {
  display.value = Math.pow(eval(display.value), 3);
}

function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function cbrt() {
  display.value = Math.cbrt(eval(display.value));
}

function log() {
  display.value = Math.log10(eval(display.value));
}

function ln() {
  display.value = Math.log(eval(display.value));
}

function sin() {
  display.value = Math.sin(eval(display.value));
}

function cos() {
  display.value = Math.cos(eval(display.value));
}

function tan() {
  display.value = Math.tan(eval(display.value));
}