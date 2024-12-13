var menu = document.querySelector("#nav i")
var close = document.querySelector("#full i")
var tl = gsap.timeline();

tl.to("#full",{
    right: 0,
    duration: 0.5,
})
tl.from("#full h4",{
    x:100,
    duration:0.5,
    opacity:0,
    stagger:0.25
})
tl.from("#full i",{
    opacity:0,
    stagger:0.5
})
tl.pause();

menu.addEventListener("click",function(){
    tl.play();
})
close.addEventListener("click",function(){
    tl.reverse();
})