/* ==========================================
MURTAZA MEHRAJ PORTFOLIO
PREMIUM SCRIPT.JS
========================================== */

/* =========================
SCROLL REVEAL
========================= */

const sections = document.querySelectorAll(".section");

function revealSections() {
sections.forEach(section => {
const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        section.classList.add("show");
    }
});

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* =========================
TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

if (typingElement) {

const words = [
    "Technology • Economics • Governance • Human Behavior",
    "Artificial Intelligence • Systems Thinking",
    "Learning • Building • Exploring",
    "Ideas Across Disciplines"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

    }

    if (!deleting && charIndex > currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

    if (deleting && charIndex < 0) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) % words.length;
    }

    setTimeout(
        typeEffect,
        deleting ? 40 : 70
    );
}

typeEffect();

}

/* =========================
NAVBAR SHADOW ON SCROLL
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if (!navbar) return;

if (window.scrollY > 50) {

    navbar.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.25)";

} else {

    navbar.style.boxShadow = "none";
}

});

/* =========================
ACTIVE NAV LINK
========================= */

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

    const sectionTop =
        section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

        current = section.getAttribute("id");
    }
});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href")
        === `#${current}`
    ) {
        link.classList.add("active");
    }
});

});

/* =========================
SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
    "click",
    function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
);

});

/* =========================
CARD HOVER ANIMATION
========================= */

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener(
    "mouseenter",
    () => {

        card.style.transform =
            "translateY(-8px)";
    }
);

card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
            "translateY(0)";
    }
);

});

/* =========================
PARALLAX HERO
========================= */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

if (!hero) return;

const offset =
    window.scrollY * 0.2;

hero.style.transform =
    `translateY(${offset}px)`;

});

/* =========================
FADE-IN FOOTER
========================= */

const footer =
document.querySelector("footer");

function revealFooter() {

if (!footer) return;

const top =
    footer.getBoundingClientRect().top;

if (top < window.innerHeight - 50) {

    footer.style.opacity = "1";
    footer.style.transform =
        "translateY(0)";
}

}

if (footer) {

footer.style.opacity = "0";
footer.style.transform =
    "translateY(30px)";
footer.style.transition =
    "1s ease";

}

window.addEventListener(
"scroll",
revealFooter
);

revealFooter();

/* =========================
CONSOLE SIGNATURE
========================= */

console.log(
"%cMurtaza Mehraj",
"font-size:20px;font-weight:bold;color:#7dd3fc;"
);

console.log(
"Building systems. Understanding people. Exploring the future."
);
