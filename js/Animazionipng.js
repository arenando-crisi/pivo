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

gsap.to(".cerchio1", 1, {
  delay: 3,
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
});

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
