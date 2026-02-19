console.log("Monkey Wrench Site Loaded Successfully!");

// Function to scroll to quote section
function scrollToQuote() {
    const quoteSection = document.getElementById('quote');
    if(quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
}