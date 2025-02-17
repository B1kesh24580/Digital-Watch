// Helper function to select elements
const $ = (selector) => {
    return document.querySelector(selector);
}

// Select elements
const Hour = $('#hour');
const Dot1 = $('#dot1');
const Dot2 = $('#dot2');
const Min = $('#min');
const Sec = $('#sec');
const Week = $('.week');
let showDot = true;

// Function to update the clock
function update() {
    showDot = !showDot;
    const now = new Date();

    // Toggle the visibility of the colons (blinking effect)
    if (showDot) {
        Dot1.classList.remove('invisible');
        Dot2.classList.remove('invisible');
    } else {
        Dot1.classList.add('invisible');
        Dot2.classList.add('invisible');
    }

    // Update hours, minutes, and seconds
    Hour.textContent = String(now.getHours()).padStart(2, '0');
    Min.textContent = String(now.getMinutes()).padStart(2, '0');
    Sec.textContent = String(now.getSeconds()).padStart(2, '0');

    // Update the active day of the week
    Array.from(Week.children).forEach((ele) => {
        ele.classList.remove('active');
    });
    Week.children[now.getDay()].classList.add('active');
}

// Update the clock every 500ms (half a second)
setInterval(update, 500);

// Initialize the clock immediately
update();