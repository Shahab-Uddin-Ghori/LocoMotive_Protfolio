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
      delay: .3,
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
    opacity:0,
  });
};
loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.08,
});


let elem = document.querySelectorAll(".elem")
let page2 = document.querySelector("#page2")

elem.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        let bgImg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgImg})`
        // console.log(page2);
        // console.log(bgImg);
    })
})

// document.addEventListener('DOMContentLoaded', () => {
//   const imgDivs = document.querySelectorAll('.img-div');

//   imgDivs.forEach((imgDiv, index) => {
//     const randomHeight = 34 + Math.random() * 2; // Random height between 34vw and 36vw
//     const randomWidth = 29 + Math.random() * 2;  // Random width between 29vw and 31vw

//     imgDiv.style.height = `${randomHeight}vw`;
//     imgDiv.style.width = `${randomWidth}vw`;
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const imgDivs = document.querySelectorAll('.img-div');
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

