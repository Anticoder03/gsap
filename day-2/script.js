// Animation for #box on page 1: starts from scale 0, then scales up and rotates 360 degrees
gsap.from("#page1 #box",{
    scale:0, // Starting scale
    duration:1, // Duration of the animation
    delay:1, // Delay before animation starts
    rotate:360 // Rotation degree
})

// Animation for #box on page 2: scales up from 0, fades in, and rotates, triggered by scroll
gsap.from("#page2 #box",{
    scale:0, // Starting scale
    opacity:0, // Starting opacity
    duration:1, // Duration of the animation
    rotate:360, // Rotation degree
    scrollTrigger:{
        trigger:"#page2 #box", // Trigger element
        scroller:"body", // Scroller element
        markers:true, // Show markers for debugging
        start: "top 60%", // Animation starts when top of element reaches 60% of the viewport
        end:"top 30%", // Animation ends when top of element reaches 30% of the viewport
        scrub:5 // Smoothly scrubs through the animation based on scroll position
    }
})

// Animation for h1 on page 2: moves in from the right with opacity fade, triggered by scroll
gsap.from("#page2 h1",{
    opacity:0, // Starting opacity
    duration:1, // Duration of the animation
    x:500, // Moves element 500px from the right
    scrollTrigger:{
        trigger:"#page2 h1", // Trigger element
        scroller:"body", // Scroller element
        markers:true, // Show markers for debugging
        start: "top 60%" // Animation starts when the top of h1 reaches 60% of the viewport
    }
})

// Animation for h2 on page 2: moves in from the left with opacity fade, triggered by scroll
gsap.from("#page2 h2",{
    opacity:0, // Starting opacity
    duration:1, // Duration of the animation
    x:-500, // Moves element 500px from the left
    scrollTrigger:{
        trigger:"#page2 h2", // Trigger element
        scroller:"body", // Scroller element
        markers:true, // Show markers for debugging
        start: "top 60%" // Animation starts when top of h2 reaches 60% of the viewport
    }
})

// Animation for #box on page 2: scales and fades in, rotates, and pins while scrolling
gsap.from("#page2 #box",{
    scale:0, // Starting scale
    opacity:0, // Starting opacity
    duration:1, // Duration of the animation
    rotate:360, // Rotation degree
    scrollTrigger:{
        trigger:"#page2 #box", // Trigger element
        scroller:"body", // Scroller element
        markers:true, // Show markers for debugging
        start: "top 60%", // Animation starts when top of element reaches 60% of the viewport
        end:"top 30%", // Animation ends when top of element reaches 30% of the viewport
        scrub:5, // Smoothly scrubs through the animation based on scroll position
        pin:true // Pins the element in place while scrolling
    }
})

// Animation for h1 on page 2: slides out horizontally while the page is scrolled
gsap.to("#page2 h1",{
    transform:"translateX(-300%)", // Moves the element 300% to the left
    scrollTrigger:{
        trigger:"#page2", // Trigger element
        scroller:"body", // Scroller element
        start: "top 0%", // Animation starts when the top of page 2 reaches the top of the viewport
        end:"top -100%", // Animation ends when the top of page 2 reaches -100% of the viewport
        scrub:5, // Smoothly scrubs through the animation based on scroll position
        pin:"#page2", // Pins the page during the scroll animation
    }
})

// Animation for h1 on page 1: fades in with scaling effect, with delay and yoyo for a repeating effect
gsap.from("#page1 h1",{
    opacity:0, // Starting opacity
    delay:1, // Delay before animation starts
    duration:1, // Duration of the animation
    scale:0.2, // Starts at 20% scale
    yoyo:true, // Makes the animation play in reverse after completing
})

// Animation for h1 on page 3: fades in and scales with scroll-triggered effect
gsap.from("#page3 h1",{
    opacity:0, // Starting opacity
    color:"#000", // Starting color
    delay:1, // Delay before animation starts
    duration:1, // Duration of the animation
    scale:0.2, // Starts at 20% scale
    yoyo:true, // Makes the animation play in reverse after completing
    scrollTrigger:{
        trigger:"#page3", // Trigger element
        scroller:"body", // Scroller element
        start: "top 60%", // Animation starts when the top of page 3 reaches 60% of the viewport
        end:"top 30%", // Animation ends when top of page 3 reaches 30% of the viewport
        scrub:5 // Smoothly scrubs through the animation based on scroll position
    }   
})
