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
      delay: .5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anima"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
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
