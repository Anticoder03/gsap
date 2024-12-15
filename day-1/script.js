// gsap.to("#box",{
//     x:500,
//     y:500,
//     duration:2,

// })
// gsap.from("#box2",{
//     x:800,
//     y:500,
//     duration:2,
//     delay:2
// })
// gsap.to("#box",{
//     x:500,
//     // y:500,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:.75
// })
// gsap.from("#box",{
//     x:500,
//     // y:500,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:.75
// })

// gsap.from("h1",{
//     color:"red",
//     duration:2,
//     delay:1,
//     y:200,
//     opacity:1,
//     stagger:-1
// })


// gsap.to("#box",{    
//     x:1200,
//     rotate:360,
//     delay:1,
//     duration:2,
//     repeat:-1,
//     yoyo:true
// })

//*  --------- timeline -----------
// gsap.to("#box",{
//     x:1200,
//     rotate:360,
//     borderRadious:"50%",
//     delay:1,
//     duration:2,
//     backgroundColor:"blue",
// })
// gsap.to("#box2",{
//     x:1200,
//     rotate:360,
//     borderRadious:"50%",
//     delay:2.5,
//     duration:2,
//     backgroundColor:"lightblue",
// })
// gsap.to("#box3",{
//     x:1200,
//     rotate:360,
//     borderRadious:"50%",
//     delay:4,
//     duration:2,
//     backgroundColor:"lightgreen",
// })


//* --------------- craeting time line ---------------------
// var tl = gsap.timeline()
// tl.to("#box",{
//     x:1000,
//     rotate:360,
//     borderRadious:"50%",
//     delay:1,
//     duration:2,
//     backgroundColor:"blue",
// })
// tl.to("#box2",{
//     x:1000,
//     rotate:360,
//     borderRadious:"50%",
 
//     duration:2,
//     backgroundColor:"lightblue",
// })
// tl.to("#box3",{
//     x:1000,
//     rotate:360,
//     borderRadious:"50%",
  
//     duration:2,
//     backgroundColor:"lightgreen",
// })


var tl = gsap.timeline();
tl.from(".logo",{   
    y:"-30px",
    opacity:0,
    duration:1,
    delay:1
})
tl.from(".links h4",{
    y:"-30px",
    opacity:0,
    duration:1,
 
    stagger:.5
})
tl.from(".main",{
    y:"-30px",
    opacity:0,
    duration:1,
     
    scale:0.3,
})