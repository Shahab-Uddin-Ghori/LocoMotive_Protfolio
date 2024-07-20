// gsap animation function
const loading = () => {
  let tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.4,
    duration: 0.4,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.3,
      duration: 0.7,
      ease: "expo.out",
    },
    "anima"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.3,
      duration: 0.5,
      color: "black",
    },
    "anima"
  );
  tl.to("#loader", {
    display: "none ",
    opacity: 0,
  });
};
loading();

const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.08,
  });

  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  let elem = document.querySelectorAll(".elem");
  let page2 = document.querySelector("#page2");

  elem.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      let bgImg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgImg})`;
    });
  });
};
loco();

// function for adjust columns
const imgAdj = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const imgDivs = document.querySelectorAll(".img-div");
    const baseHeight = 35; // Base height in vw
    const heightVariation = 1; // Minor height variation in vw

    imgDivs.forEach((imgDiv, index) => {
      const rowIndex = Math.floor(index / 3);
      const posInRow = index % 3;

      if (rowIndex % 2 === 0) {
        // For even rows (1, 3, 5, ...)
        if (posInRow === 0) {
          imgDiv.style.height = `${baseHeight + heightVariation}vw`;
        } else if (posInRow === 1) {
          imgDiv.style.height = `${baseHeight - heightVariation}vw`;
        } else {
          imgDiv.style.height = `${baseHeight + heightVariation}vw`;
        }
      } else {
        // For odd rows (2, 4, 6, ...)
        if (posInRow === 0) {
          imgDiv.style.height = `${baseHeight - heightVariation}vw`;
        } else if (posInRow === 1) {
          imgDiv.style.height = `${baseHeight + heightVariation}vw`;
        } else {
          imgDiv.style.height = `${baseHeight - heightVariation}vw`;
        }
      }
    });
  });
};
imgAdj();

// document.addEventListener('DOMContentLoaded', () => {
//   const imgDivs = document.querySelectorAll('.img-div');

//   imgDivs.forEach((imgDiv, index) => {
//     const randomHeight = 34 + Math.random() * 2; // Random height between 34vw and 36vw
//     const randomWidth = 29 + Math.random() * 2;  // Random width between 29vw and 31vw

//     imgDiv.style.height = `${randomHeight}vw`;
//     imgDiv.style.width = `${randomWidth}vw`;
//   });
// });
let ul = document.querySelectorAll("ul li");
let svg = document.querySelector(".core-logo");
let toggle = document.querySelector("#toggle i");

let firstLi = ul[0];
const toggleFunc = () => {
  toggle.addEventListener("click", () => {
    for (let i = 1; i < ul.length; i++) {
      ul[i].style.display = ul[i].style.display === "none" ? "block" : "none";
      if (ul[i].style.display === "none") {
        firstLi.style = `position:absolute;right:15vw;`;
        toggle.style = `transform: rotate(0deg)`;
      }
      if (ul[i].style.display === "block") {
        firstLi.style = `position: relative;transition: all ease .5s;`;
        toggle.style = `transform: rotate(45deg)`;
      }
    }
  });
};
toggleFunc();

document.querySelector("#page2").addEventListener("mouseenter", () => {
  console.log("howa");
  toggle.style = `transform: rotate(0deg);color:white;`;
  ul[1].style.display = `none`;
  ul[2].style.display = `none`;
  firstLi.style = `position:absolute;right:15vw;color:white`;
});
document.querySelector("#page3").addEventListener("mouseenter", () => {
  console.log("howa");
  toggle.style = `transform: rotate(0deg);color:white;`;
  ul[1].style.display = `none`;
  ul[2].style.display = `none`;
  firstLi.style = `position:absolute;right:15vw;color:white`;
});

document.querySelector("#page1").addEventListener("mouseenter", () => {
  console.log("howa");
  firstLi.style = `position: relative;transition: all ease .5s;`;
  toggle.style = `transform: rotate(45deg)`;
  ul[1].style.display = `inline`;
  ul[2].style.display = `inline`;
});
