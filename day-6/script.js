var h1 = document.querySelector("h1");
var letters = h1.textContent.split("");
h1.textContent = "";
var cluter = "";
halfValue = Math.floor(letters.length/2)
console.log(halfValue)
letters.forEach(function(letter,idx){
    // console.log(letter,idx)
    if(idx<halfValue){
        cluter = cluter + `<span class="first">${letter}</span>`
    }
    else{
        cluter = cluter + `<span class="second">${letter}</span>`
    }
})
h1.innerHTML = cluter

gsap.from("h1 .first",{
    duration: 0.6,
    delay: 0.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out",
    skewY: 7,
    stagger:0.3
})
gsap.from("h1 .second",{
    duration: 0.6,
    delay: 0.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out",
    skewY: 7,
    stagger:-0.3
})