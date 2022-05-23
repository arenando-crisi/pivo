gsap.registerPlugin(ScrollTrigger);

gsap.to(".header", {
    y: '10vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".hero",{backgroundColor: '#A07EFF'},{
    backgroundColor: '#FA4928',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
}})
  

