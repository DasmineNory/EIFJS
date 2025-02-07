document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function startMarquee() {
    const marqueeContent = document.querySelector(".marquee-content");

    marqueeContent.innerHTML += marqueeContent.innerHTML;

    gsap.to(".marquee-content", {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.wrap(["0%", "-50%"]),
      },
    });
  }

  startMarquee();
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const copyBtn = document.querySelector(".copy-btn");
  const contractInput = document.querySelector(".contract-address");

  if (copyBtn && contractInput) {
    copyBtn.addEventListener("click", function () {
      let contractText = contractInput.value.replace(/^CA:\s*/, ""); // Remove "CA:" from the value

      navigator.clipboard
        .writeText(contractText)
        .then(() => {
          console.log("Copied: " + contractText);
          copyBtn.textContent = "Copied!";
          setTimeout(() => {
            copyBtn.textContent = "COPY";
          }, 2000);
        })
        .catch((err) => {
          console.error("Copy failed:", err);
        });

      // GSAP Click Animation
      gsap.to(".copy-btn", {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    });
  } else {
    console.error("Copy button or contract address input not found.");
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

  // Join Community Button Logic
  const joinButton = document.querySelector(".join-btn");
  if (joinButton) {
    joinButton.addEventListener("click", function () {
      window.location.href = "";
    });
  }
});
