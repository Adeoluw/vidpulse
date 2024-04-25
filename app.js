const webDrop = document.querySelector(".website-dropdown");

const emailDrop = document.querySelector(".email-dropdown");

const sellDrop = document.querySelector(".sell-dropdown");

const rescourcesDrop = document.querySelector(".rescources-dropdown");

const web = document.querySelector(".website");

const email = document.querySelector(".email");

const body = document.querySelector(".body");

const sell = document.querySelector(".sell");

const rescources = document.querySelector(".rescources");

const webList = document.querySelector(".web-dropdown-li");

const closeMenu = document.getElementsByClassName("close-menu")[0];

const nav = document.getElementsByTagName("nav")[0];

const openMenu = document.getElementById("open-menu")

web.addEventListener("click", () => {
  webDrop.classList.toggle("visibility");
});

email.addEventListener("click", () => {
  emailDrop.classList.toggle("visibility");
});

sell.addEventListener("click", () => {
  sellDrop.classList.toggle("visibility");
});

rescources.addEventListener("click", () => {
  rescourcesDrop.classList.toggle("visibility");
});

openMenu.addEventListener("click", () => {
  nav.classList.toggle("block-display");
})

closeMenu.addEventListener("click", () => {
  nav.classList.toggle("visibility");
  nav.classList.toggle("block-display");
});



document.addEventListener("click", (e) => {
  if (!webDrop.contains(e.target) && !web.contains(e.target)) {
    webDrop.classList.add("visibility");
  }
  if (!emailDrop.contains(e.target) && !email.contains(e.target)) {
    emailDrop.classList.add("visibility");
  }
  if (!sellDrop.contains(e.target) && !sell.contains(e.target)) {
    sellDrop.classList.add("visibility");
  }
    if (!rescourcesDrop.contains(e.target) && !rescources.contains(e.target)) {
      rescourcesDrop.classList.add("visibility");
    }
});


