window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        // Scrolling Up
        gsap.to(".marque", {
            x: "-200%", 
            duration: 4,
            repeat: -1, 
            ease: "none", 
        });
        gsap.to(".marque img", {
            rotate:180
        })
    } else {
        gsap.to(".marque", {
            x: "0%", 
            duration: 4,
            repeat: -1, 
            ease: "none", 
        });
        gsap.to(".marque img", {
            rotate:0
        })
    }
});
