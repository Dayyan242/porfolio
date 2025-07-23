gsap.from(".gsap-1", {
    x: -1000,
    duration: 5,
    delay: 0.5,
    ease: "power2.out",
})

gsap.from(".img-fluid", {
    x: 1200,
    rotate: 90,
    duration: 5,
    delay: 0.5,
    ease: "power2.out",
})
gsap.from(".img-fluid-1", {
  x: 1200,
  duration: 5,
  delay: 0.5,
  ease: "power2.out",
})
gsap.from("#box", {
    x: -1000,
    duration: 5,
    delay: 0.5,
    ease: "power2.out",
})
gsap.to('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    x: 500
});
gsap.registerPlugin(ScrollTrigger);

    // Animate Section 2
    gsap.from("#section1", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: "#section1",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
gsap.registerPlugin(ScrollTrigger);

// Sab spans select karo
const bars = document.querySelectorAll('.bar .thumb span');

bars.forEach((bar) => {
  const finalWidth = bar.style.width; // Jaise "80%"

  // Pehle sabki width 0% kar do
  bar.style.width = '0%';

  // GSAP animation apply karo
  gsap.to(bar, {
    width: finalWidth,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: bar,
      start: "top 80%",   // Jab bar top se 80% viewport pe aayega
      toggleActions: "play none none none"
    }
  });
});
const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
  gsap.fromTo(
    box,
    { scale: 0.8, y: -20 },
    {
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "bounce.out"
    }
  );
});
// Animate form on load
gsap.from(".contact-container", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "bounce.out"
});

// Focus effect on input fields
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    gsap.to(input, {
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out"
    });
  });

  input.addEventListener("blur", () => {
    gsap.to(input, {
      scale: 1,
      duration: 0.2,
      ease: "power1.out"
    });
  });
});
  // Animate footer content on load
  gsap.from(".footer-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".footer-links li", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.5,
    ease: "back.out(1.7)"
  });

  gsap.from(".footer-credit", {
    opacity: 0,
    duration: 1,
    delay: 1.5
  });
  




  