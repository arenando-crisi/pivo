gsap.registerPlugin(ScrollTrigger);

var cm7 = gsap.to("#cerchiomouse7", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse7").onmouseover = () => cm7.play();
document.querySelector("#cerchiomouse7").onmouseleave = () => cm7.reverse();

var cm8 = gsap.to("#cerchiomouse8", 0.3, {
  backgroundPosition:  "100% 50%",
  ease:SteppedEase.config(26),
  paused: true,
});
document.querySelector("#cerchiomouse8").onmouseover = () => cm8.play();
document.querySelector("#cerchiomouse8").onmouseleave = () => cm8.reverse();