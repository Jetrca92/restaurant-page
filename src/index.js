// Generate main
const content = document.querySelector('#content');
const main = document.createElement('main');
main.setAttribute('class', 'main');
content.appendChild(main);

const homeContent = ["Podjetje Berosi d.o.o. je bilo ustanovljeno leta 2003 s strani treh gostincev, Roberta Štojsa, Bena in Simona Božiča, ki so se odločili popestriti gostinsko ponudbo v Savinjski dolini.", 
"Njihova picerija in restavracija na Petrovem trgu,imenovana Nekropolis, je že dolgo priljubljena med gosti zaradi prijaznosti, široke ponudbe hrane in pijače, okusnosti ter posebej prijetnega vzdušja. Naša ponudba vključuje več kot 20 vrst različnih vsakodnevnih malic in dve dnevni malici, slovenske pivovarje, vinarje ter jedi iz lokalnih sestavin. V naši ponudbi lahko izbirate med široko ponudbo pic, domačih testenin, mehiške ponudbe, lignjev, solat in sladic ter burgerjev.",
"Za tiste, ki si želijo uživati v naših dobrotah doma ali drugje, pa pripravimo tudi catering. Pridite in se prepričajte sami o naši ponudbi, krožnikih in okusih, ki jih pripravlja uigran #NekropolsTeam."]

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
  });

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
    document.querySelector('body').style.backgroundImage = "url('../src/images/home_slika.jpg')";
})

// Append footer
const footerContent = ["Delovni čas", "PON - ČET: 8:00 - 22:00", "PET - SOB: 8:00 - 22:00", "NED: 8:00 - 22:00"];
function appendFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const footerText = document.createElement('div');
    footerText.setAttribute('class', 'footer-text');
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.innerHTML = footerContent[i];
        footerText.appendChild(div);
    }
    footer.appendChild(footerText);
    content.appendChild(footer);
}

// Generate content for home
const home = document.createElement('div');
home.setAttribute('class', 'home');
for (let i = 0; i < 3; i++) {
    const p = document.createElement('p');
    p.setAttribute('class', 'paragraph');
    p.innerHTML = homeContent[i];
    home.appendChild(p);
}
main.appendChild(home);
appendFooter();