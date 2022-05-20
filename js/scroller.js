gsap.registerPlugin(ScrollTrigger);

gsap.to(".titolo", {
    scale: 0.75,
    y: 470,
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
        trigger: ".trigger3",
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

gsap.to(".tagline2", {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger2",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})

gsap.to(".video", {
    scaleX: 0.2,
    scaleY: 0.6,
    duration: 1,
    scrollTrigger: {
        trigger: ".trigger2",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})

gsap.to(".buttonbig", {
    opacity:  1,
    duration: 1,
    scrollTrigger: {
        trigger: ".trigger2",
        markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
    }
})