// Animate the #box element to move to (500, 500) over 2 seconds
gsap.to("#box", {
    x: 500,
    y: 500,
    duration: 2,
});

// Animate the #box2 element starting from (800, 500) over 2 seconds with a delay of 2 seconds
gsap.from("#box2", {
    x: 800,
    y: 500,
    duration: 2,
    delay: 2,
});

// Add multiple transformations to #box: rotate, change background color, round corners, and scale down
gsap.to("#box", {
    x: 500,
    duration: 2,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    scale: 0.75,
});

// Animate #box starting with a specific style and ending at its current state
gsap.from("#box", {
    x: 500,
    duration: 2,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    scale: 0.75,
});

// Animate an h1 element to appear with a red color, move upward, and fade in, with staggered effects
gsap.from("h1", {
    color: "red",
    duration: 2,
    delay: 1,
    y: 200,
    opacity: 1,
    stagger: -1,
});

// Create a looping animation for #box with a yoyo effect (oscillating motion)
gsap.to("#box", {
    x: 1200,
    rotate: 360,
    delay: 1,
    duration: 2,
    repeat: -1, // Infinite loop
    yoyo: true, // Reverse animation after completion
});

// Timeline animations for synchronized control of multiple animations
// Animate #box with transformations and style changes
gsap.to("#box", {
    x: 1200,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    delay: 1,
    duration: 2,
    backgroundColor: "blue",
});

// Animate #box2 with transformations and style changes
gsap.to("#box2", {
    x: 1200,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    delay: 2.5,
    duration: 2,
    backgroundColor: "lightblue",
});

// Animate #box3 with transformations and style changes
gsap.to("#box3", {
    x: 1200,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    delay: 4,
    duration: 2,
    backgroundColor: "lightgreen",
});

// Creating a timeline for sequential animations
var tl = gsap.timeline();

// Animate #box with transformations and style changes within the timeline
tl.to("#box", {
    x: 1000,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    delay: 1,
    duration: 2,
    backgroundColor: "blue",
});

// Animate #box2 within the timeline
tl.to("#box2", {
    x: 1000,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    duration: 2,
    backgroundColor: "lightblue",
});

// Animate #box3 within the timeline
tl.to("#box3", {
    x: 1000,
    rotate: 360,
    borderRadius: "50%", // Fix typo: changed borderRadious to borderRadius
    duration: 2,
    backgroundColor: "lightgreen",
});

// Timeline animations for page elements like logo, links, and main content
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