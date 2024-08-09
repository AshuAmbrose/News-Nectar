gsap.to("nav", {
    backgroundColor: "#6b8e23",
    duration: 0.5,
    height: "50px",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
      //markers: true,
    },
  });