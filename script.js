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

