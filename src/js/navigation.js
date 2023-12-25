/* ## Set Mobile Navigation stuff
--------------------------------------------- */
// selecting the element
const menuLinks = document.querySelectorAll(
  ".primary-menu .menu-item a, .go-top a, .site-title a"
);
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav.nav-primary");

// Functionality for main menu-tosggle button
menuButton.addEventListener("click", function () {
  // Show site navigation
  navigation.classList.toggle("show");

  // toggle activated class
  menuButton.classList.toggle("activated");

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
  eachLink.addEventListener("click", function () {
    // Hide Main Navigation on click
    navigation.classList.remove("show");
    // remove activated class and attrs from menu-toggle button
    menuButton.classList.remove("activated");
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
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});

/* ## SETUP SCROLL SPY
--------------------------------------------- */
let menuSection = document.querySelectorAll(".nav-primary li.menu-item a");
// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    setTimeout(() => {
      menuSection.forEach((j) => j.classList.remove("active"));
      v.classList.add("active");
    }, 100);
  };
});
// for window scrolldown event
window.onscroll = () => {
  let mainSection = document.querySelectorAll("main section");

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;

    if (rect < window.innerHeight - window.innerHeight + 100) {
      /* caculate till section reaches to top */
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};
