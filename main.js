console.log("Monkey Wrench Site Loaded Successfully!");

// Function to scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    if(quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- NEW INTERACTIVE FUNCTIONS ---

// 1. Peeking Monkey "Pop & Wave" Logic (SVG)
function monkeyPopWave(element) {
    // Prevent double-clicking while animating
    if (element.classList.contains('pop-wave-animate')) return;

    element.classList.add('pop-wave-animate');
    
    // Remove the class after animation ends so it can be clicked again
    setTimeout(() => {
        element.classList.remove('pop-wave-animate');
    }, 1200); // Matches longest animation duration
}

// 2. Heart Release Logic (Keep for other sections if needed later)
function releaseHearts(event) {
    // Check if the target is the SVG or a path inside it
    let monkeyContainer = event.target.closest('.monkey-icon-container');
    if (!monkeyContainer) return;

    // Create 5 hearts
    for (let i = 0; i < 5; i++) {
        createHeart(monkeyContainer);
    }
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart-particle');
    
    // Randomize position slightly around the center of the container
    const randomX = (Math.random() - 0.5) * 40;
    const randomY = (Math.random() - 0.5) * 40;
    
    heart.style.left = `calc(50% + ${randomX}px)`;
    heart.style.top = `calc(50% + ${randomY}px)`;
    
    container.appendChild(heart);
    
    // Remove heart from DOM after animation
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// 3. Wrench Spin Logic (Keep for other sections if needed later)
function spinWrench(event) {
     let monkeyContainer = event.target.closest('.monkey-icon-container');
     if (!monkeyContainer) return;
     
    // Toggle the spin class on/off
    if (monkeyContainer.classList.contains('spin-animate')) {
        monkeyContainer.classList.remove('spin-animate');
    } else {
        monkeyContainer.classList.add('spin-animate');
        // Stop spinning after 2 seconds automatically
        setTimeout(() => {
            monkeyContainer.classList.remove('spin-animate');
        }, 2000);
    }
}