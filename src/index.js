const btnNav = document.querySelectorAll('.button-nav');
const btnMenu = document.querySelector('#menu');
const btnHome = document.querySelector('#home');
const btnContact = document.querySelector('#contact');

// Add active class if button clicked and remove it from the rest
btnNav.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.value === "button-nav active") return;
        const oldButton = document.querySelector('.active');
        oldButton.classList.remove('active');
        button.classList.add('active');
    });
});

// Manage display for menu
btnMenu.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.menu').style.display = 'grid';
    document.querySelector('body').style.backgroundImage = "url('../src/images/background2.jpg')";
})

// Manage display for home
btnHome.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'flex';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('body').style.backgroundImage = "url('../src/images/background.jpg')";
})

// Manage display for contact
btnContact.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.contact').style.display = 'flex';
    document.querySelector('.menu').style.display = 'none';
})