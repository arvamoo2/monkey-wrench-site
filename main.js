console.log("Monkey Wrench Site Loaded Successfully!");

// Function to scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    if(quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
}

console.log("Monkey Wrench Site Loaded Successfully!");

// Function to scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    if(quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- BANANA TREE REDIRECT LOGIC ---
function dropBananasAndGo() {
    const btn = document.querySelector('.banana-btn');
    const bananas = btn.querySelectorAll('.banana');

    // 1. Add the falling class to each banana
    bananas.forEach(banana => {
        banana.classList.add('falling');
    });

    // 2. Wait 800ms (0.8 seconds) for animation to finish, then go to page
    setTimeout(() => {
        window.location.href = 'dispatch.html';
    }, 800);
}