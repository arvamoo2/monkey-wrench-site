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

// --- FLIP CARD LOGIC ---
// This function adds or removes the 'is-flipped' class when a card is clicked
function flipCard(card) {
    card.classList.toggle('is-flipped');
}

// --- AJAX FORM SUBMISSION (PREVENTS REDIRECT) ---

document.addEventListener("DOMContentLoaded", function() {
    // Find all forms on the site with your custom class
    const forms = document.querySelectorAll('.custom-contact-form');
    
    forms.forEach(form => {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); // Stops the page from redirecting
            
            // Get the submit button to change its text while loading
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            // Show a loading state
            submitBtn.innerText = "SENDING...";
            submitBtn.style.opacity = "0.7";
            submitBtn.disabled = true;

            // Gather the form data
            const data = new FormData(event.target);
            
            try {
                // Send the data to Formspree silently
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json' // Tells Formspree to not send the HTML redirect page
                    }
                });
                
                if (response.ok) {
                // SUCCESS! Replace the form with a sleek confirmation message
                    form.innerHTML = `
                        <div style="text-align: center; padding: 40px 20px;">
                            <h3 style="color: #ffe599; font-family: 'Oswald', sans-serif; font-size: 34px; margin-bottom: 15px; letter-spacing: 1px; display: flex; align-items: center; justify-content: center; gap: 15px;">
                                REQUEST RECEIVED! 
                                <img src="gears-turning.gif" alt="Processing" style="height: 45px; width: auto;">
                            </h3>
                            <p style="color: #d1d5db; font-size: 1.1rem; line-height: 1.6;">Thanks for reaching out. Our dispatch team has your information and will be in touch shortly.</p>
                        </div>
                    `;
                } else {
                    // Formspree returned an error (e.g. missing required field)
                    submitBtn.innerText = originalBtnText;
                    submitBtn.style.opacity = "1";
                    submitBtn.disabled = false;
                    alert("Oops! There was a problem submitting your form. Please try again.");
                }
            } catch (error) {
                // Network error (e.g. user lost internet)
                submitBtn.innerText = originalBtnText;
                submitBtn.style.opacity = "1";
                submitBtn.disabled = false;
                alert("Oops! There was a network error. Please check your connection and try again.");
            }
        });
    });
});