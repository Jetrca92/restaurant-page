const btnNav = document.querySelectorAll('.button-nav');
// Add active class if button clicked and remove it from the rest
btnNav.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.value === "button-nav active") return;
        const oldButton = document.querySelector('.active');
        oldButton.classList.remove('active');
        button.classList.add('active');
    });
});