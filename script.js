document.addEventListener("DOMContentLoaded", function () {
  // Initial fade-in for the main content
  const title = document.querySelector("h1");
  const firstParagraph = document.querySelector("p:nth-of-type(1)");
  const secondParagraph = document.querySelector("p:nth-of-type(2)");

  title.classList.add("fade-in");
  firstParagraph.classList.add("fade-in-delay-1");
  secondParagraph.classList.add("fade-in-delay-2");

  // Intersection Observer to trigger fade-in on scroll for the "About" section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  // Select the "About" section and observe it
  const aboutSection = document.querySelector(".about");
  observer.observe(aboutSection);
});

// Animation for the blob
const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  // Ensure the blob only animates when it's in the visible viewport
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  if (clientY >= 0 && clientY <= viewportHeight && clientX >= 0 && clientX <= viewportWidth) {
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 1000, fill: "forwards" }
    );
  }
};

// Star Animation Effect for "UX Designer"
let index = 0,
  interval = 1000;

const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animateStar = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animateStar(star);

    setInterval(() => animateStar(star), 1000);
  }, index++ * (interval / 3));
}

