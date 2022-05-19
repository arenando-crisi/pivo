gsap.registerPlugin(ScrollTrigger);

gsap.to(".titolo", {
    scale: 0.2,
    y: 200,
    duration: 1,
    scrollTrigger: {
        trigger: ".trigger1",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})

gsap.to(".claim", {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".trigger1",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})

gsap.to(".tagline1", {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger1",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})