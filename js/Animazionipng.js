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