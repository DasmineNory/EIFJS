document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const copyBtn = document.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      const contractAddress = document
        .querySelector(".contract-address")
        .textContent.trim();
      navigator.clipboard.writeText(contractAddress).then(() => {
        console.log("Copied: " + contractAddress);
      });

      // GSAP Click Animation
      gsap.to(".copy-btn", {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });

      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "COPY";
      }, 2000);
    });
  }

  // Navbar Animation
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Hero Section Animation
  gsap.from(".hero-content h1, .hero-content h2", {
    opacity: 0,
    x: -50,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".contract-container", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.from(".hero-image img", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out",
  });

  // Marquee Animation
  gsap.to(".marquee", {
    x: "-100%",
    duration: 10,
    repeat: -1,
    ease: "linear",
  });

  // Tokenomics Card Animation
  gsap.from(".tokenomics-card", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.3,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".tokenomics-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Join community button logic
  const joinButton = document.querySelector(".join-btn");
  if (joinButton) {
    joinButton.addEventListener("click", function () {
      window.location.href = "https://t.me/BaseNutsCommunity";
    });
  }
});
