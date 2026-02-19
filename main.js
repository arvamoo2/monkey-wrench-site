console.log("Monkey Wrench Site Loaded Successfully!");

// Function to scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    if(quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 1. Waving Monkey Logic
function monkeyWave(element) {
    element.classList.add('wave-animate');
    // Remove the class after animation ends so it can be clicked again
    setTimeout(() => {
        element.classList.remove('wave-animate');
    }, 1500);
}

// 2. Heart Release Logic
function releaseHearts(event) {
    const monkey = event.target;
    // Create 5 hearts
    for (let i = 0; i < 5; i++) {
        createHeart(monkey);
    }
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart-particle');
    
    // Randomize position slightly
    const randomX = (Math.random() - 0.5) * 50;
    const randomY = (Math.random() - 0.5) * 20;
    
    heart.style.left = `calc(50% + ${randomX}px)`;
    heart.style.top = `calc(50% + ${randomY}px)`;
    
    container.appendChild(heart);
    
    // Remove heart from DOM after animation
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// 3. Wrench Spin Logic
function spinWrench(element) {
    // Toggle the spin class on/off
    if (element.classList.contains('spin-animate')) {
        element.classList.remove('spin-animate');
    } else {
        element.classList.add('spin-animate');
        // Stop spinning after 2 seconds automatically
        setTimeout(() => {
            element.classList.remove('spin-animate');
        }, 2000);
    }
}