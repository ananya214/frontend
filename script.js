// GSAP Animation for Navbar Links (Initial Animation)
gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.2
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
    // Toggle active class to show/hide nav links
    navLinks.classList.toggle("active");

    // If the menu is opened, animate the nav links
    if (navLinks.classList.contains("active")) {
        gsap.from(".nav-links li", { opacity: 0, x: 50, duration: 0.5, stagger: 0.1 });
    }
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active"); // Close menu when any link is clicked
    });
});

// Hero Section Animations
gsap.from(".text-container h2", { 
    duration: 1, 
    y: -50, 
    opacity: 0, 
    ease: "power2.out" 
});

gsap.from(".text-container p", { 
    duration: 1.2, 
    y: 50, 
    opacity: 0, 
    delay: 0.3, 
    ease: "power2.out" 
});

gsap.fromTo(".btn", 
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: "power2.out" }
);

gsap.from(".image-container.left img", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".image-container.right img", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 1,
    ease: "power2.out"
});

// Hero Section Animations (Flipping Effect)
gsap.from(".flip-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

// Button Animation
gsap.from(".btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});
