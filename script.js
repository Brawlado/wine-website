// variables
let mobileMenu = document.getElementById("mobile-menu-panel");
let navBar = document.getElementById("nav-bar");

function toggleMenu() {
  if (mobileMenu.classList.contains("mobile-menu-toggle")) {
    mobileMenu.classList.remove("mobile-menu-toggle");
  } else {
    mobileMenu.classList.add("mobile-menu-toggle");
  }
}

//  back to top function
// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    // Show after scrolling 200px
    backToTopButton.classList.add("back-to-top-visible");
  } else {
    backToTopButton.classList.remove("back-to-top-visible");
  }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

document
  .getElementById("close-mobile-menu-icon")
  .addEventListener("click", () => {
    if (mobileMenu.classList.contains("mobile-menu-toggle")) {
      mobileMenu.classList.remove("mobile-menu-toggle");
    }
  });

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    // Show after scrolling 200px
    navBar.classList.add("no-display");
  } else {
    navBar.classList.remove("no-display");
  }
});

// Select the navigation elements
const desktopNav = document.getElementById("desktop-navigation");
const mobileNav = document.getElementById("mobile-navigation");

// Function to toggle classes based on screen size
function handleResize() {
  if (window.innerWidth <= 1199) {
    // Mobile view
    desktopNav.classList.add("breakpoint");
    mobileNav.classList.add("mobile-breakpoint");
  } else {
    // Desktop view
    desktopNav.classList.remove("breakpoint");
    mobileNav.classList.remove("mobile-breakpoint");
  }
}

// Run on page load and when resizing
window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);

const images = [
  "media/wine-sample.png",
  "media/wine-sample.png",
  "media/wine-sample.png",
]; // Replace with actual paths to your images
let currentIndex = 0;

const wineBottle = document.getElementById("wine-bottle");

function switchBottle() {
  // Prepare the next image for sliding in
  currentIndex = (currentIndex + 1) % images.length;
  wineBottle.classList.add("slide-out");

  // Wait for the fade-out and slide-out animation
  setTimeout(() => {
    wineBottle.src = images[currentIndex];
    wineBottle.classList.remove("slide-out");
    wineBottle.classList.add("prep-slide");

    // Wait briefly before sliding the new image in
    setTimeout(() => {
      wineBottle.classList.remove("prep-slide");
      wineBottle.classList.add("slide-in");

      // Remove the slide-in class after animation
      setTimeout(() => {
        wineBottle.classList.remove("slide-in");
      }, 500);
    }, 100);
  }, 500); // Match the CSS transition duration
}

// Switch image every 5 seconds
setInterval(switchBottle, 5000);

//featured slider
const slider = document.querySelector(".product-slider");
const leftBtn = document.querySelectorAll(".left");
const rightBtn = document.querySelectorAll(".right");

const cardList = [
  {
    type: "Red",
    title: "Wine Corvo Rosso",
    image: "./media/RedWineBottle.png",
    color: "#5c221e",
  },
  {
    type: "White",
    title: "Fantini Farnese Trebbiano d'Abruzzo",
    image: "./media/WhiteWineBottle.png",
    color: "#ffecb3",
  },
  {
    type: "sparkling",
    title: "Fantini Pinot Grigio",
    image: "./media/SparklingWineBottle.png",
    color: "#d0943a",
  },
  {
    type: "Red",
    title: "Wine Corvo Rosso",
    image: "./media/RedWineBottle.png",
    color: "#5c221e",
  },
  {
    type: "White",
    title: "Fantini Farnese Trebbiano d'Abruzzo",
    image: "./media/WhiteWineBottle.png",
    color: "#ffecb3",
  },
  {
    type: "sparkling",
    title: "Fantini Pinot Grigio",
    image: "./media/SparklingWineBottle.png",
    color: "#d0943a",
  },
];

let index = 0;

function updateSlider() {
  cardList.forEach((card) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <div>
                <img src=${card.image} alt=${card.title} />
            </div>
            <div class="clip" style="background-color: ${card.color};"></div>
            <div class="product-info">
                <div class="product-type">
                    <div class="card-color-indicator" style="background-color: ${card.color};"></div>
                    <p class="type" style="color: ${card.color};">${card.type}</p>
                </div>
                <h2>${card.title}</h2>
                <p>Italy</p>
                <div class="price">
                    <p>$29,99</p>
                    <span>$27,90</span>
                </div>
            </div>
        `;
    slider.appendChild(productDiv);
  });
  slider.style.transform = `translateX(${-index * 284}px)`;
}

updateSlider();

leftBtn[0].addEventListener("click", () => {
  index = Math.max(0, index - 1);
  updateSlider();
});

rightBtn[0].addEventListener("click", () => {
  index = Math.min(cardList.length - 1, index + 1);
  updateSlider();
});
