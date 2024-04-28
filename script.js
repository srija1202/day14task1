let memory = 0;
let heading = document.createElement("h1");
heading.id = "title";
let heading_para = document.createElement("p");
heading_para.id = "description";
heading_para.innerHTML = "Calculator";
heading_para.className ="fa fa-calculator"
heading.appendChild(heading_para);
let container = document.createElement("div");
container.className = "container";
let calculator = document.createElement("div");
calculator.className = "calculator";
let output_screen = document.createElement("input");
output_screen.setAttribute("type","text");
output_screen.setAttribute("placeholder","0");
output_screen.setAttribute("id","result");
function button_create(tagname,attrname,attrvalue,attr1name,attr1value,content){
    let button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    button.setAttribute(attr1name,attr1value);
    button.innerHTML = content;
    button.className = "btn btn-primary"
    calculator.append(button);
}
calculator.append(output_screen);
button_create("button","onclick","erase()","id","clear","C");
button_create("button","onclick","del()","id","del","DEL");
button_create("button","onclick","display('%')","id","modulas","%");
button_create("button","onclick","display('/')","id","divide","/");
button_create("button","onclick","display('7')","id","7","7");
button_create("button","onclick","display('8')","id","8","8");
button_create("button","onclick","display('9')","id","9","9");
button_create("button","onclick","display('*')","id","mul","*");
button_create("button","onclick","display('4')","id","4","4");
button_create("button","onclick","display('5')","id","5","5");
button_create("button","onclick","display('6')","id","6","6");
button_create("button","onclick","display('-')","id","subtract","-");
button_create("button","onclick","display('1')","id","1","1");
button_create("button","onclick","display('2')","id","2","2");
button_create("button","onclick","display('3')","id","3","3");
button_create("button","onclick","display('+')","id","add","+");
button_create("button","onclick","display('.')","id","dot",".");
button_create("button","onclick","display('0')","id","0","0");
button_create("button","onclick","display('00')","id","00","00");
button_create("button","onclick","calculate()","id","equal","=");
button_create("button","onclick","memoryAdd()","id","memoryAdd","M+");
button_create("button","onclick","memorySubtract()","id","memorySubtract","M-");
button_create("button","onclick","memoryClear()","id","memoryClear","MC");
container.append(calculator);
document.body.append(heading, container);
function erase() {
  document.getElementById("result").value = "";
}
function del() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  let result = document.getElementById("result").value;
  let finalResult = eval(result);
  document.getElementById("result").value = finalResult;
}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    display(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    del();
  } else if (key === "Delete") {
    erase();
  }
});
function memoryAdd() {
    let currentValue = parseFloat(document.getElementById("result").value) || 0;
    memory += currentValue;
}

function memorySubtract() {
    let currentValue = parseFloat(document.getElementById("result").value) || 0;
    memory -= currentValue;
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById("result").value = memory;
}