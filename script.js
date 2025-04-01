// GSAP Navbar Animation
gsap.from(".navbar", { y: -50, opacity: 0, duration: 1 });

// GSAP Hero Section Animation
gsap.from(".hero h1", { opacity: 0, y: -20, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 20, duration: 1, delay: 1 });

// GSAP Product Cards Animation
gsap.from(".product-card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3, delay: 1.5 });
