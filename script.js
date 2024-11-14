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

//*Flag
let flag = false;

function sendMsg() {
  let inputMsg = document.getElementById("inputText").value;
  if (inputMsg !== "") {
  
    let chatWindow = document.getElementById("chat-window");
    let parentDiv = document.createElement("div");
    let roundChildDiv = document.createElement("div");
    let squareChildDiv = document.createElement("div");

    let letter = document.createTextNode("P");
    roundChildDiv.appendChild(letter);
    roundChildDiv.classList.add("round");

    if (flag) {
      roundChildDiv.classList.add("hidden");
    }
    flag = true;

    let inputText = document.getElementById("inputText").value;
    let msg = document.createTextNode(`${inputText}`);
    squareChildDiv.appendChild(msg);
    squareChildDiv.classList.add("square");

    parentDiv.appendChild(roundChildDiv);
    parentDiv.appendChild(squareChildDiv);
    parentDiv.classList.add("primary");
    parentDiv.classList.add("reverse");
    chatWindow.appendChild(parentDiv);
    document.getElementById("inputText").value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight; //*imp
    }
}
  
document.getElementById("send").addEventListener(
  "click",
  sendMsg,
  false
);

document.querySelector(".secondary > input").addEventListener(
  "keydown",
  function (event) {
    if (event.key === "Enter") {
      sendMsg();
    }
  },   
  false
);
