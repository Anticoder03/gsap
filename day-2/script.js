// gsap.from("#page1 #box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360
// })


// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start: "top 60%",
//         end:"top 30%",
//         scrub:5
//     }
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:1,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start: "top 60%",
        
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:1,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start: "top 60%",
        
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",  
//         scroller:"body",
//         markers:true,
//         start: "top 60%",
//         end:"top 30%",
//         scrub:5,
//         pin:true
//     }
// })

gsap.to("#page2 h1",{
    transform:"translateX(-300%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start: "top 0%",
        end:"top -100%",
        scrub:5,
        pin:"#page2",
    }
})
gsap.from("#page1 h1",{
    opacity:0,
    delay:1,
    duration:1,
    scale:0.2,
    yoyo:true,
    
})
gsap.from("#page3 h1",{
    opacty:0,
    color:"#000",
    delay:1,
    duration:1,
    scale:0.2,
    yoyo:true,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start: "top 60%",
        end:"top 30%",
        scrub:5
    }   
})