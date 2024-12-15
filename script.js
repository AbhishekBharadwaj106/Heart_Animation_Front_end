
const makeItButton = document.getElementById('makeIt');
const landingPage = document.querySelector('.landing-page');
const animationPage = document.querySelector('.animation-page');
const yourNameInput = document.getElementByI('yourName');
const yourLoveNameInput = document.getElementById('yourLoveName');
const nameDisplay = document.getElementById('nameDisplay');

makeItButton.addEventListener('click', () => {
    const yourName = yourNameInput.value.trim();
    const yourLoveName = yourLoveNameInput.value.trim();

    if (!yourName || !yourLoveName) {
        alert("Please fill in both fields!");
        return;
    }

    nameDisplay.textContent = `${yourName} ❤️ ${yourLoveName}`;

    landingPage.classList.add('hidden');
    animationPage.classList.remove('hidden');

    startHeartAnimation(yourLoveName);
});

function startHeartAnimation(loveName) {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const size = Math.random() * 20 + 40;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        const colors = ['#ff4d6d', '#ff7eb3', '#ff9aa2', '#f08080', '#ffae42'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';

        heart.textContent = `${loveName} ❤️ I love you`;

        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }, 300);
}
