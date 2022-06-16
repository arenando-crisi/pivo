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
});

let thw1 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderw1",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
thw1.to(".header", {
    display: 'flex',
    duration: 0,
});
thw1.to(".header", {
    opacity: '1',
    duration: 0.4,
});
thw1.to(".headerblack",  {
    display: 'none',
    duration: 0,
});

let thb2 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderb2",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
thb2.to(".headerblack", {
    display: 'flex',
    duration: 0,
});
thb2.to(".header", {
    opacity: '0',
    duration: 0.4,
});
thb2.to(".header",  {
    display: 'none',
    duration: 0,
});

let thw2 = gsap.timeline({scrollTrigger: {
    trigger: ".triggerheaderw2",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
thw2.to(".header", {
    display: 'flex',
    duration: 0,
});
thw2.to(".header", {
    opacity: '1',
    duration: 0.4,
});
thw2.to(".headerblack",  {
    display: 'none',
    duration: 0,
});
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
});

gsap.to(".scrittina", {
  opacity: 0,
  duration: 0.4,
  scrollTrigger: {
      trigger: ".trigger2",
      toggleActions: 'restart none none reverse',
      start: "top 0%",
      end: "bottom 0%",
      scrub: true,
  }
});

gsap.to(".scrittina2", {
  opacity: 0,
  duration: 0.4,
  scrollTrigger: {
      trigger: ".trigger2",
      toggleActions: 'restart none none reverse',
      start: "top 0%",
      end: "bottom 0%",
      scrub: true,
  }
});

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
});

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
});

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
});

gsap.to(".titolomobile", {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger5",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".calltoaction", {
    opacity: 1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger8",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",   
    }
});

gsap.to(".scarica1", {
    left:'32.5vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to("#cerchiomouse2", {
    left:'32.5vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".loghinoiniz", {
    left:'17.5vw',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

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
});

gsap.to(".videomobile", {
    height: '94vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger6",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".claim2", {
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger5",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

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
});

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
});

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
});

gsap.fromTo(".videomobile", {position:'fixed', top: '5vh'}, {
    position: 'absolute',
    top:'135vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".trigger7",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

var rectl = gsap.timeline({scrollTrigger: {
    trigger: ".triggerrec",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
    scrub: true,
}});
rectl.to(".rec1", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec5", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec3", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec2", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec7", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec4", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});
rectl.to(".rec6", {
    opacity: 1,
    transform: "scale(1)",
    duration: 0.2,
    ease: Back.easeOut.config(1.2),
});

let hc = gsap.timeline({scrollTrigger: {
    trigger: ".triggerc1",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hc.to(".headerblack2", {
    display: 'flex',
    duration: 0,
});
hc.to(".headerblack2", {
    opacity: '1',
    duration: 0.4,
});
hc.to(".header2",  {
    display: 'none',
    duration: 0,
});
  
let hs1 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers1",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs1.to(".headerblack1", {
    display: 'flex',
    duration: 0,
});
hs1.to(".headerblack1", {
    opacity: '1',
    duration: 0.4,
});
hs1.to(".header1",  {
    display: 'none',
    duration: 0,
});

let hs2 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers2",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs2.to(".header1", {
    display: 'flex',
    duration: 0,
});
hs2.to(".headerblack1", {
    opacity: '0',
    duration: 0.4,
});
hs2.to(".headerblack1",  {
    display: 'none',
    duration: 0,
});

let hs3 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers3",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs3.to(".headerblack1", {
    display: 'flex',
    duration: 0,
});
hs3.to(".headerblack1", {
    opacity: '1',
    duration: 0.4,
});
hs3.to(".header1",  {
    display: 'none',
    duration: 0,
});

let hs5 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers5",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs5.to(".headerblack1", {
    display: 'flex',
    duration: 0,
});
hs5.to(".headerblack1", {
    opacity: '1',
    duration: 0.4,
});
hs5.to(".header1",  {
    display: 'none',
    duration: 0,
});

let hs4 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers4",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs4.to(".header1", {
    display: 'flex',
    duration: 0,
});
hs4.to(".headerblack1", {
    opacity: '0',
    duration: 0.4,
});
hs4.to(".headerblack1",  {
    display: 'none',
    duration: 0,
});

let hs6 = gsap.timeline({scrollTrigger: {
    trigger: ".triggers6",
    toggleActions: 'restart none reverse none',
    start: "top 0%",
    end: "bottom 0%",
}});
hs6.to(".header1", {
    display: 'flex',
    duration: 0,
});
hs6.to(".headerblack1", {
    opacity: '0',
    duration: 0.4,
});
hs6.to(".headerblack1",  {
    display: 'none',
    duration: 0,
});


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
});

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
});

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
});

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
});

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
});

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
});

gsap.to(".cerchio38", {
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
});

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
});

gsap.to(".cerchio5", {
    top: '269vh',
    duration: 0.4,
    ease:Linear.easeNone,
    scrollTrigger: {
        trigger: ".triggerslider",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

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
});

gsap.to(".imgscreen1", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen2", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen3", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen1",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen4", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen5", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen6", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen2",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen7", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen8", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

gsap.to(".imgscreen9", {
    height: '80vh',
    duration: 0.4,
    scrollTrigger: {
        trigger: ".triggerscreen3",
        toggleActions: 'restart none none reverse',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
    }
});

let splashscr = gsap.timeline();
splashscr.to(".splash", {
  delay: 2.5,
});
splashscr.to(".splash", {
  opacity: 0,
  duration: 0.5,
});
splashscr.to(".splash", {
  display: "none",
});

let atxt1 = gsap.timeline();
atxt1.to(".atxt1", 0.1, {
  delay: 3,
  opacity: 1,
});
atxt1.to(".atxt1", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1.to(".atxt2", 0.1, {
  opacity: 1,
},"<70%");
atxt1.to(".atxt2", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1.to(".atxt3", 0.1, {
  opacity: 1,
},"<70%");
atxt1.to(".atxt3", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1.to(".atxt4", 0.1, {
  opacity: 1,
},"<70%");
atxt1.to(".atxt4", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1.to(".cerchio1", 1, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
});
atxt1.to(".scrittina", 1.2, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(30),
},"<1%");
atxt1.to(".scrittina2", 1.2, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(41),
},"<1%");

let atxt1_1 = gsap.timeline();
atxt1_1.to(".atxt5", 0.1, {
  delay: 3.5,
  opacity: 1,
});
atxt1_1.to(".atxt5", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1_1.to(".atxt6", 0.1, {
  opacity: 1,
},"<70%");
atxt1_1.to(".atxt6", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1_1.to(".atxt7", 0.1, {
  opacity: 1,
},"<70%");
atxt1_1.to(".atxt7", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt1_1.to(".atxt8", 0.1, {
  opacity: 1,
},"<70%");
atxt1_1.to(".atxt8", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");


let atxt2 = gsap.timeline({
  scrollTrigger: {
  trigger: ".trigger3",
  toggleActions: 'play none none none',
  start: "top 0%",
  end: "bottom 0%",
  scrub: true,
}});
atxt2.to(".atxt9", 0.1, {
  opacity: 1,
});
atxt2.to(".atxt9", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt10", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt10", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt11", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt11", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt12", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt12", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt13", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt13", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt14", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt14", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt15", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt15", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt16", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt16", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt17", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt17", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt18", 0.1, {
  opacity: 1,
},"<250%");
atxt2.to(".atxt18", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt19", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt19", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt20", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt20", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt21", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt21", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt22", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt22", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt23", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt23", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
atxt2.to(".atxt24", 0.1, {
  opacity: 1,
},"<70%");
atxt2.to(".atxt24", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");

gsap.to(".cerchio2", 1, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  scrollTrigger: {
    trigger: ".trigger8",
    toggleActions: 'restart none none reverse',
    start: "top 0%",
    end: "bottom 0%",
}
});

let cosacerchi = gsap.timeline({
  scrollTrigger: {
  trigger: ".trigger10",
  toggleActions: 'play none none none',
  start: "top 0%",
  end: "bottom 0%",
}});
cosacerchi.to(".cerchio3", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.5,
});
cosacerchi.to(".atxt25", 0.1, {
  opacity: 1,
});
cosacerchi.to(".atxt25", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt26", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt26", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt27", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt27", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt28", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt28", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt29", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt29", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt30", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt30", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt31", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt31", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt32", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt32", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt33", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt33", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt34", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt34", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".atxt35", 0.1, {
  opacity: 1,
},"<70%");
cosacerchi.to(".atxt35", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cosacerchi.to(".cerchio4", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio5", {
  scrollTrigger: {
    trigger: ".triggerheaderw1",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio6", {
  scrollTrigger: {
    trigger: ".triggerheaderw1",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  delay: 0.6,
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio7", {
  scrollTrigger: {
    trigger: ".triggerslc1",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio8", {
  scrollTrigger: {
    trigger: ".triggerslc2",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio9", {
  scrollTrigger: {
    trigger: ".triggerheaderw1",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  delay: 0.6,
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio10", {
  scrollTrigger: {
    trigger: ".triggerslc1",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio11", {
  scrollTrigger: {
    trigger: ".triggerslc2",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

let cerchiobiettivi = gsap.timeline({
  scrollTrigger: {
  trigger: ".trigger11",
  toggleActions: 'play none none none',
  start: "top 0%",
  end: "bottom 0%",
}});
cerchiobiettivi.to(".cerchio12", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.5,
});
cerchiobiettivi.to(".atxt36", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt36", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt37", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt37", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt38", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt38", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt39", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt39", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt40", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt40", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt41", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt41", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt42", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt42", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt43", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt43", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt44", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt44", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".atxt45", 0.1, {
  opacity: 1,
});
cerchiobiettivi.to(".atxt45", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<70%");
cerchiobiettivi.to(".cerchio13", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.5,
});

gsap.to(".cerchio14", {
  scrollTrigger: {
    trigger: ".trigger9",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  },  
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".freccinascroll", 2, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(30),
  repeat: -1,
});

gsap.to(".freccinaorizzontale", 2, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(30),
  repeat: -1,
});

gsap.to(".cerchio15", { 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio16", { 
    delay: 0.6,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio17", {
    scrollTrigger: {
      trigger: ".triggersc1",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio18", {
    scrollTrigger: {
      trigger: ".triggersc1",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    delay: 0.3,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio19", {
    scrollTrigger: {
      trigger: ".triggersc1",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    }, 
    delay: 0.6, 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio23", { 
    scrollTrigger: {
        trigger: ".triggersc2",
        toggleActions: 'play none none none',
        start: "top 0%",
        end: "bottom 0%",
      }, 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio24", { 
    scrollTrigger: {
        trigger: ".triggersc2",
        toggleActions: 'play none none none',
        start: "top 0%",
        end: "bottom 0%",
      }, 
    delay: 0.6,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio25", {
    scrollTrigger: {
      trigger: ".triggersc3",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio26", {
    scrollTrigger: {
      trigger: ".triggersc3",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    delay: 0.3,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio27", {
    scrollTrigger: {
      trigger: ".triggersc3",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    }, 
    delay: 0.6, 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio31", { 
    scrollTrigger: {
        trigger: ".triggersc4",
        toggleActions: 'play none none none',
        start: "top 0%",
        end: "bottom 0%",
      }, 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio32", { 
    scrollTrigger: {
        trigger: ".triggersc4",
        toggleActions: 'play none none none',
        start: "top 0%",
        end: "bottom 0%",
      }, 
    delay: 0.6,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio33", {
    scrollTrigger: {
      trigger: ".triggersc5",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio34", {
    scrollTrigger: {
      trigger: ".triggersc5",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    },  
    delay: 0.3,
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio35", {
    scrollTrigger: {
      trigger: ".triggersc5",
      toggleActions: 'play none none none',
      start: "top 0%",
      end: "bottom 0%",
    }, 
    delay: 0.6, 
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    duration: 0.8,
});

gsap.to(".cerchio36", { 
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio37", { 
  delay: 0.6,
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio38", {
  scrollTrigger: {
    trigger: ".triggerc3",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  }, 
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio39", {
  scrollTrigger: {
    trigger: ".triggerc3",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  }, 
  delay: 0.6,
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio40", {
  scrollTrigger: {
    trigger: ".triggerc4",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  }, 
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

gsap.to(".cerchio41", {
  scrollTrigger: {
    trigger: ".triggerc5",
    toggleActions: 'play none none none',
    start: "top 0%",
    end: "bottom 0%",
  }, 
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(32),
  duration: 0.8,
});

var cm1 = gsap.to("#cerchiomouse1", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse1").onmouseover = () => cm1.play();
  document.querySelector("#cerchiomouse1").onmouseleave = () => cm1.reverse();
  
  var cm2 = gsap.to("#cerchiomouse2", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse2").onmouseover = () => cm2.play();
  document.querySelector("#cerchiomouse2").onmouseleave = () => cm2.reverse();
  
  var cm3 = gsap.to("#cerchiomouse3", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse3").onmouseover = () => cm3.play();
  document.querySelector("#cerchiomouse3").onmouseleave = () => cm3.reverse();
  
  var cm4 = gsap.to("#cerchiomouse4", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse4").onmouseover = () => cm4.play();
  document.querySelector("#cerchiomouse4").onmouseleave = () => cm4.reverse();
  
  var cm5 = gsap.to("#cerchiomouse5", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse5").onmouseover = () => cm5.play();
  document.querySelector("#cerchiomouse5").onmouseleave = () => cm5.reverse();
  
  var cm6 = gsap.to("#cerchiomouse6", 0.3, {
    backgroundPosition:  "100% 50%",
    ease:SteppedEase.config(32),
    paused: true,
  });
  document.querySelector("#cerchiomouse6").onmouseover = () => cm6.play();
  document.querySelector("#cerchiomouse6").onmouseleave = () => cm6.reverse();
  
  