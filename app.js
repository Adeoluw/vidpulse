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

const openMenu = document.getElementById("open-menu");

const platform = document.getElementById("platform");

const support = document.getElementById("support");

const features = document.getElementById("features");

const compare = document.getElementById("compare");

const rescourcesFooter = document.getElementById("rescources");

const vidpulse = document.getElementById("vidpulse");

const social = document.getElementById("social");

const platformList = document.querySelectorAll(".platform-footer li");

const supportList = document.querySelectorAll(".support li");

const featuresList = document.querySelectorAll(".features-footer li");

const compareList = document.querySelectorAll(".compare li");

const rescourcesList = document.querySelectorAll(".Rescources li");

const vidpulseList = document.querySelectorAll(".vidpulse li");

const socialList = document.querySelectorAll(".Social li");

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
});

closeMenu.addEventListener("click", () => {
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

// 1.give all the firstchild of the lists ids
// 2.use Js to do the dropdown

platform.addEventListener("click", () => {
  platformList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

support.addEventListener("click", () => {
  supportList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

features.addEventListener("click", () => {
  featuresList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

compare.addEventListener("click", () => {
  compareList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

rescourcesFooter.addEventListener("click", () => {
  rescourcesList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

vidpulse.addEventListener("click", () => {
  vidpulseList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});

social.addEventListener("click", () => {
  socialList.forEach((item) => {
    // Toggle the 'block-display' class on each li element
    item.classList.toggle("block-display");
  });
});



// document.addEventListener("click", (e) => {
//   for (let i = 0; i < platformList.length; i++) {
//     if (!platformList[i].contains(e.target) && !web.contains(e.target)) {
//       platformList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < supportList.length; i++) {
//     if (!supportList[i].contains(e.target) && !web.contains(e.target)) {
//       supportList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < featuresList.length; i++) {
//     if (!featuresList[i].contains(e.target) && !web.contains(e.target)) {
//       featuresList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < compareList.length; i++) {
//     if (!compareList[i].contains(e.target) && !web.contains(e.target)) {
//       compareList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < rescourcesList.length; i++) {
//     if (!rescourcesList[i].contains(e.target) && !web.contains(e.target)) {
//       rescourcesList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < vidpulseList.length; i++) {
//     if (!vidpulseList[i].contains(e.target) && !web.contains(e.target)) {
//       vidpulseList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });

// document.addEventListener("click", (e) => {
//   for (let i = 0; i < socialList.length; i++) {
//     if (!socialList[i].contains(e.target) && !web.contains(e.target)) {
//       socialList.forEach((item) => {
//         // Toggle the 'block-display' class on each li element
//         item.classList.toggle("block-display");
//       });
//     }
//   }
// });
