const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearElement = document.getElementById("year");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const storyCards = document.querySelectorAll(".story-card");
const prevStory = document.getElementById("prevStory");
const nextStory = document.getElementById("nextStory");
const storyDots = document.getElementById("storyDots");

let currentStory = 0;

function showStory(index) {
  if (!storyCards.length) return;

  currentStory = (index + storyCards.length) % storyCards.length;

  storyCards.forEach((card, i) => {
    card.classList.toggle("active", i === currentStory);
  });

  document.querySelectorAll(".story-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentStory);
  });
}

if (storyCards.length && storyDots) {
  storyCards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "story-dot";
    dot.setAttribute("aria-label", `Go to story ${i + 1}`);
    dot.addEventListener("click", () => showStory(i));
    storyDots.appendChild(dot);
  });

  if (prevStory) {
    prevStory.addEventListener("click", () => showStory(currentStory - 1));
  }

  if (nextStory) {
    nextStory.addEventListener("click", () => showStory(currentStory + 1));
  }

  showStory(0);
}
