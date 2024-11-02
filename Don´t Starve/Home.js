const nav = document.querySelector("header");
const content = document.querySelector(".content");
const subMenu = document.querySelector(".subMenu");

const observerOptions = {
    rootMargin: "-200px 0px 0px 0px",
    threshold: 0.15
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
            nav.classList.add("navScroll"); // Přidá třídu pro nav
            subMenu.classList.add("subMenuColor"); // Přidá třídu pro sub-menu
        } else {
            nav.classList.remove("navScroll"); // Odebere třídu pro nav
            subMenu.classList.remove("subMenuColor"); // Odebere třídu pro sub-menu
        }
    });
}, observerOptions);

observer.observe(content); // Sleduje prvek "content"
