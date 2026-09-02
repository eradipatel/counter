// HTML: <button id="myButton">Click Me!</button>
// HTML: <span id="displayArea">0</span>

let count = 0;
const button = document.getElementById("myButton");
const display = document.getElementById("displayArea");

button.addEventListener("click", function() {
  count+1;
  display.innerText = count;
});