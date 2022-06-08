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

let thw1 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderw1",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}})
thw1.to(".header", {
    display: 'flex',
    duration: 0,
})
thw1.to(".header", {
    opacity: '1',
    duration: 0.4,
})
thw1.to(".headerblack",  {
    display: 'none',
    duration: 0,
})

let thb2 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderb2",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}})
thb2.to(".headerblack", {
    display: 'flex',
    duration: 0,
})
thb2.to(".header", {
    opacity: '0',
    duration: 0.4,
})
thb2.to(".header",  {
    display: 'none',
    duration: 0,
})

let thw2 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderw2",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}})
thw2.to(".header", {
    display: 'flex',
    duration: 0,
})
thw2.to(".header", {
    opacity: '1',
    duration: 0.4,
})
thw2.to(".headerblack",  {
    display: 'none',
    duration: 0,
})
//-----------------------CAMBIAMENTO COLORE HERO-------------------------------------------------

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

gsap.to(".freccinascroll", {
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

gsap.to(".cerchio1", {
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
        trigger: ".trigger8",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",   
    }
})

gsap.fromTo(".scarica1",{left:'42vw'}, {
    left:'32.5vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".loghinoiniz",{left:'23vw'}, {
    left:'17.5vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.fromTo(".titolo",{fontSize:'9vw', left:'-1vw'}, {
    fontSize: '8vW',
    left:'-6.5vw',
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

gsap.fromTo(".video", {width:'50vw'}, {
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

gsap.to(".rec1", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.to(".rec2", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.to(".rec3", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.to(".rec4", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.to(".rec5", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
    }
})

gsap.to(".rec6", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.4,
    ease: Back.easeOut.config(1.2),
    scrollTrigger: {
        trigger: ".triggerheaderw2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
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

gsap.to(".slide1", {
    top: '280vh',
    left: '-80vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerslider",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".slide2", {
    top: '280vh',
    left: '-45vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerslider",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".slide3", {
    top: '280vh',
    left: '20vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerslider",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".slidec1", {
    top: '280vh',
    left: '-80vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerc2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".slidec2", {
    top: '280vh',
    left: '-45vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerc2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".slidec3", {
    top: '280vh',
    left: '20vw',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerc2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".titolettosl", {
    top: '270vh',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerslider",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})

gsap.to(".titolettosl2", {
    top: '270vh',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerc2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
})