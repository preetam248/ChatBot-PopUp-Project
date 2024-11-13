document.getElementById("icon-holder").addEventListener(
  "click",
  function () {
      let hold = document.getElementById("chat-box");
      //   console.log(hold);
      hold.style.display = "block";
  },
  false
);
document.getElementById("cross").addEventListener(
  "click",
  function () {
      let hold = document.getElementById("chat-box");
      //   console.log(hold);
      hold.style.display = "none";
  },
  false
);

document.getElementById("send").addEventListener("click", function () {
  let chatWindow = document.getElementById("chat-window");
  let parentDiv = document.createElement("div");
  let roundChildDiv = document.createElement("div");
  let squareChildDiv = document.createElement("div");
  
  let letter = document.createTextNode("P");
  roundChildDiv.appendChild(letter);
  roundChildDiv.classList.add("round");
  

  let inputText = document.querySelector(".secondary > input").value;
  let msg = document.createTextNode(`${inputText}`);
  squareChildDiv.appendChild(msg);
  squareChildDiv.classList.add("square");

  parentDiv.appendChild(roundChildDiv);
  parentDiv.appendChild(squareChildDiv);
  parentDiv.classList.add("primary");
  parentDiv.classList.add("reverse");
  chatWindow.appendChild(parentDiv);

},false)