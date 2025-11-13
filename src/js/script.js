/* Code effectuer sur la console du navigateur web:
nav = docuement.querySelector('.menu')
nav.ariaHidden = "false"

toggle = document.querySelector('.menu-btn')
toggle.ariaExpanded = "true"
*/


// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');

// Ajoutez un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener('click', () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    // Mise à jour des attributs ARIA pour accessibilité
    nav.setAttribute('aria-hidden', isOpen);
    toggle.setAttribute('aria-expanded', isClosed);
    // Ajout de la classe noscroll à body
    document.body.classList.toggle('noscroll', isOpen);
});