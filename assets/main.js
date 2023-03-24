
/* ## Set Mobile Navigation stuff
--------------------------------------------- */
// selecting the element
const menuLinks  = document.querySelectorAll('.primary-menu .menu-item a, .go-top a, .site-title a');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav.nav-primary');

// Functionality for main menu-toggle button
menuButton.addEventListener("click", function() {

    // Show site navigation
    navigation.classList.toggle('show');

    // toggle activated class
    menuButton.classList.toggle('activated');

    // toggle attrs
    // var ariaEvent = ['aria-expanded', 'aria-pressed'];
    // for ( eachAttr of ariaEvent ) {
    //  if(menuButton.getAttribute(eachAttr) === 'true') {
    //    menuButton.setAttribute(eachAttr, 'false');
    //  } else {
    //    menuButton.setAttribute(eachAttr, 'true');
    //  }   
    // }

});

// Functionality of individual links
for (var eachLink of menuLinks) {

    eachLink.addEventListener('click', function() {
        // Hide Main Navigation on click
        navigation.classList.remove('show');
        // remove activated class and attrs from menu-toggle button
        menuButton.classList.remove('activated');
        // menuButton.setAttribute('aria-expanded', 'false');
        // menuButton.setAttribute('aria-pressed', 'false');

    });

    // eachLink.addEventListener('click', function (e) {
    //  // Smooth Scrolling
    //    e.preventDefault();
    //    document.querySelector(this.getAttribute('href')).scrollIntoView({
    //       behavior: 'smooth'
    //    });
    // });

}




/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        document.querySelector('body').classList.add('dark');
    } else {
        document.querySelector('body').classList.remove('dark');
    }
});




/* ## SETUP SCROLL SPY
--------------------------------------------- */
let menuSection = document.querySelectorAll('.nav-primary li.menu-item a');
// for clickable event
menuSection.forEach(v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'));
            v.classList.add('active');
        }, 100);
    });
});
// for window scrolldown event
window.onscroll = (() => {
    let mainSection = document.querySelectorAll('main section');

    mainSection.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y;

        if (rect < window.innerHeight - window.innerHeight + 100) { /* caculate till section reaches to top */
            menuSection.forEach(v => v.classList.remove('active'));
            menuSection[i].classList.add('active');
        }
    });
});




// Show current year
document.getElementById("year").innerHTML = new Date().getFullYear();








/* ## Setup FS LightBox
--------------------------------------------- */
// const producGallery = document.querySelectorAll(".our-products .product-widget a:has(> img)");
// for (var lightBoxAttrs of producGallery) {
//   lightBoxAttrs.setAttribute('data-fslightbox', 'prods');
// };

// const gallery = document.querySelectorAll(".gallery-section .homegallery a:has(> img)");
// for (var lightBoxAttrs of gallery) {
//   lightBoxAttrs.setAttribute('data-fslightbox', 'gallery');
// };




// JavaScript form validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    // const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    let isValid = true;

    // Validate name input
    if (nameInput.value === "") {
      isValid = false;
      nameInput.setCustomValidity("Please enter your name.");
    } else {
      nameInput.setCustomValidity("");
    }

    // Validate email input
    if (emailInput.value === "") {
      isValid = false;
      emailInput.setCustomValidity("Please enter your email address.");
    } else if (!emailInput.checkValidity()) {
      isValid = false;
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }

    // Validate message input
    if (messageInput.value === "") {
      isValid = false;
      messageInput.setCustomValidity("Please enter a message.");
    } else {
      messageInput.setCustomValidity("");
    }

    // Submit form if all inputs are valid
    if (!isValid) {
      event.preventDefault();
    }
});

// JavaScript form submission
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const receiveEmail = "gm.steelindustries@gmail.com"
    const emailButton = document.querySelector('button.main-btn');

    // Compose email message
    const subject = `[Contact-Form] ${nameInput.value}`;
    const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;

    // Open default email app and fill in appropriate fields
    const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open Email client on click
    window.open(mailtoUrl);

    // Prevent default form submission
    event.preventDefault();
});
