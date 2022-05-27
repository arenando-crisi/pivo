gsap.registerPlugin(ScrollTrigger);


//-----------------------CAMBIAMENTO COLORE HEADER-------------------------------------------------

gsap.fromTo(".headerblack", {top: "-10vh"} , {
    top: "0vh",
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerheaderb1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".header", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".header", {opacity: 1} , {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerheaderb2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".header", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerheaderw1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

//-----------------------CAMBIAMENTO COLORE HERO-------------------------------------------------

gsap.fromTo(".hero",{backgroundColor: '#FA4928'},{
    backgroundColor: '#000000',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger7",
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
    }
})

gsap.to(".claim", {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".titolo", {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger5",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".calltoaction", {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger7",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",   
    }
})

gsap.fromTo(".titolo",{fontSize:'20vw'}, {
    fontSize: '8vW',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".claim2", {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger4",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".claim2",{opacity: 1}, {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger5",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".video", {width:'60vw'}, {
    width:'98vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger6",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".video", {width:'43vw'}, {
    width:'60vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".video", {position:'fixed', top: '1vh'}, {
    position: 'absolute',
    top:'131vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger7",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".headerblack2", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerc1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})
  
gsap.fromTo(".headerblack1", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".headerblack1", {opacity: 1} , {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".headerblack1", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".headerblack1", {opacity: 1} , {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers4",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".headerblack1", {opacity: 1} , {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers6",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.fromTo(".headerblack1", {opacity: 0} , {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggers5",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})


