/* =========================================================
   DEEKSHA A — PORTFOLIO INTERACTIONS
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if (
    revealElements.length &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (sections.length && navigationLinks.length) {

    const sectionObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            rootMargin: "-30% 0px -60% 0px"
        }

    );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

}


/* =========================================================
   SUBTLE HERO PARALLAX
   ========================================================= */

const heroVisual = document.querySelector(".hero-visual");

if (
    heroVisual &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    window.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (
        navLinks &&
        menuButton &&
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        navLinks.classList.remove("open");

    }

});