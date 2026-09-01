// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });

    });
}


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

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


revealElements.forEach(element => {
    observer.observe(element);
});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});