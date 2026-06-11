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

/* Story Gallery Stacked Carousel */
const storyCards = document.querySelectorAll(".story-card-stack");
const prevStory = document.getElementById("prevStory");
const nextStory = document.getElementById("nextStory");
const storyDots = document.getElementById("storyDots");

let currentStory = 0;

function updateStoryStack() {
  storyCards.forEach((card, index) => {
    card.classList.remove("active", "next", "back");

    const relativeIndex =
      (index - currentStory + storyCards.length) % storyCards.length;

    if (relativeIndex === 0) {
      card.classList.add("active");
    } else if (relativeIndex === 1) {
      card.classList.add("next");
    } else if (relativeIndex === 2) {
      card.classList.add("back");
    }
  });

  document.querySelectorAll(".story-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStory);
  });
}

if (storyCards.length && storyDots) {
  storyCards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "story-dot";
    dot.setAttribute("aria-label", `Go to story ${index + 1}`);
    dot.addEventListener("click", () => {
      currentStory = index;
      updateStoryStack();
    });
    storyDots.appendChild(dot);
  });

  if (prevStory) {
    prevStory.addEventListener("click", () => {
      currentStory = (currentStory - 1 + storyCards.length) % storyCards.length;
      updateStoryStack();
    });
  }

  if (nextStory) {
    nextStory.addEventListener("click", () => {
      currentStory = (currentStory + 1) % storyCards.length;
      updateStoryStack();
    });
  }

  updateStoryStack();
}
