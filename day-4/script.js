var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgDiv = document.querySelector("#image");
main.addEventListener("mousemove",function (dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"power2.out"
    })
})

imgDiv.addEventListener("mouseenter",function (dets){
    cursor.innerHTML = "View More";

    gsap.to(cursor,{
        scale:2,
        backgroundColor:"#e9e9e957",
        color:"#fff"
    })
})
imgDiv.addEventListener("mouseleave",function (dets){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff",
        color:"#000"
    })
})