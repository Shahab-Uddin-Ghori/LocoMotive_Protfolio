const loading = () =>{
    let tl = gsap.timeline()


tl.to("#yellow1",{
    top: "-100%",
    delay:.5,
    duration: 0.5,
    ease: "expo.out"
})

tl.from("#yellow2",{
    top: "100%",
    delay:3,
    duration: 0.5,
    ease: "expo.out" 
},"anima")
tl.to("#loader h1",{
    delay: 0.1,
    duration: 0.5,
    color: "black"
},"anima")
tl.to("#loader",{
    display: "none "
})

}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.08
});