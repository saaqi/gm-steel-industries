/* ## HIDE PRELOADER
--------------------------------------------- */
// HIDE PRELOADER
document.getElementById("atf-preloader").classList.add("preloader-hide");

window.onload = setTimeout(function () {
  document.querySelector(".preloader-hide").style.display = "none";
}, 1000);
