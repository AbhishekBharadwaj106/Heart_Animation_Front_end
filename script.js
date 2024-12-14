function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const span = document.createElement('span');
    span.textContent = 'I Love You';
    span.style.transform = "rotate(-45deg)"; // Align text within the rotated heart
    heart.appendChild(span);

    // Randomize position and size
    const size = Math.random() * 30 + 30 + "px";
    heart.style.width = size;
    heart.style.height = size;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.body.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 200); // Create hearts continuously