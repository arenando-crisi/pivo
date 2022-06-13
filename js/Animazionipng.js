gsap.registerPlugin(ScrollTrigger);

let splashscr = gsap.timeline();
splashscr.to(".splash", {
  delay: 2.5,
})
splashscr.to(".splash", {
  opacity: 0,
  duration: 0.5,
})
splashscr.to(".splash", {
  display: "none",
})

let atxt1 = gsap.timeline();
atxt1.to(".atxt1", 0.1, {
  delay: 3,
  opacity: 1,
});
atxt1.to(".atxt1", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1.to(".atxt2", 0.1, {
  opacity: 1,
},"<50%");
atxt1.to(".atxt2", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1.to(".atxt3", 0.1, {
  opacity: 1,
},"<50%");
atxt1.to(".atxt3", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1.to(".atxt4", 0.1, {
  opacity: 1,
},"<50%");
atxt1.to(".atxt4", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1.to(".cerchio1", 1, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
});

let atxt1_1 = gsap.timeline();
atxt1_1.to(".atxt5", 0.1, {
  delay: 3.5,
  opacity: 1,
});
atxt1_1.to(".atxt5", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1_1.to(".atxt6", 0.1, {
  opacity: 1,
},"<50%");
atxt1_1.to(".atxt6", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1_1.to(".atxt7", 0.1, {
  opacity: 1,
},"<50%");
atxt1_1.to(".atxt7", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt1_1.to(".atxt8", 0.1, {
  opacity: 1,
},"<50%");
atxt1_1.to(".atxt8", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");


let atxt2 = gsap.timeline({scrollTrigger: {
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
},"<50%");
atxt2.to(".atxt10", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt10", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt11", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt11", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt12", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt12", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt13", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt13", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt14", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt14", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt15", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt15", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt16", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt16", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt17", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt17", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt18", 0.1, {
  opacity: 1,
},"<250%");
atxt2.to(".atxt18", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt19", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt19", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt20", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt20", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt21", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt21", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt22", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt22", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt23", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt23", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");
atxt2.to(".atxt24", 0.1, {
  opacity: 1,
},"<50%");
atxt2.to(".atxt24", 0.2, {
  top: '0vh',
  ease: "back.out(4)",
},"<50%");


var cm1 = gsap.to("#cerchiomouse1", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse1").onmouseover = () => cm1.play();
document.querySelector("#cerchiomouse1").onmouseleave = () => cm1.reverse();

var cm2 = gsap.to("#cerchiomouse2", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse2").onmouseover = () => cm2.play();
document.querySelector("#cerchiomouse2").onmouseleave = () => cm2.reverse();

var cm3 = gsap.to("#cerchiomouse3", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse3").onmouseover = () => cm3.play();
document.querySelector("#cerchiomouse3").onmouseleave = () => cm3.reverse();

var cm4 = gsap.to("#cerchiomouse4", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse4").onmouseover = () => cm4.play();
document.querySelector("#cerchiomouse4").onmouseleave = () => cm4.reverse();

var cm5 = gsap.to("#cerchiomouse5", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse5").onmouseover = () => cm5.play();
document.querySelector("#cerchiomouse5").onmouseleave = () => cm5.reverse();

var cm6 = gsap.to("#cerchiomouse6", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse6").onmouseover = () => cm6.play();
document.querySelector("#cerchiomouse6").onmouseleave = () => cm6.reverse();

gsap.to(".cerchio2", 1, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  scrollTrigger: {
    trigger: ".trigger8",
    toggleActions: 'restart none none reverse',
    start: "top 0%",
    end: "bottom 0%",
}
});

let cosacerchi = gsap.timeline({scrollTrigger: {
  trigger: ".triggerheaderb1",
  toggleActions: 'play none none none',
  start: "top 0%",
  end: "bottom 0%",
}})
cosacerchi.to(".cerchio3", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  duration: 0.5,
})
cosacerchi.to(".cerchio4", {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
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
