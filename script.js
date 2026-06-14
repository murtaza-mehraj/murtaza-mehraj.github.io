/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

// Function to reveal sections when they enter viewport
function revealSections() {
    sections.forEach((section) => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        // When section is 100px before entering view
        if (elementTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
}

// Run on scroll
window.addEventListener("scroll", revealSections);

// Run once on page load
revealSections();

/* =========================
   OPTIONAL: SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});