gsap.registerPlugin(ScrollTrigger);

var frame_count  = 9,
    offset_value = 10;

gsap.to(".cerchio1", {
  backgroundPosition:  (offset_value * frame_count) + "% 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  duration: 10,
  repeat: -1,
});