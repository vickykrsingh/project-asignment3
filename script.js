let menu = document.getElementById("menu");
let bar = document.getElementById("barBtn");
let tokenBtn = document.getElementById("tokenBtn");

let toggleMenu = () => {
  if (menu.style.left == "0%") {
    menu.style.left = "-100%";
    tokenBtn.style.display = "none";
  } else {
    menu.style.left = "0%";
    tokenBtn.style.display = "block";
  }
};

bar.addEventListener("click", toggleMenu);
