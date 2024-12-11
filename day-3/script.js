var Path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");
string.addEventListener("mousemove", function(dets){
    // console.log(dets);
    path = `M 10 80 Q ${dets.x} ${dets.y} 990 80`;
    gsap.to("svg path",{
       attr:{
           d:path,
           duration:0.3,
           ease:"power1.Out"
       }              
})
})
string.addEventListener("mouseleave", function(dets){
    gsap.to("svg path",{
       attr:{
           d:finalPath,
           duration:0.3,
           ease:"elastic.Out(1, 0.3)"
       }              
})
})