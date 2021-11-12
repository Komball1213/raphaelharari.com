


// ANIM                 ----
$(document).ready(function () {
    $("#screen").delay(4000).fadeOut(3000, function () {
        $("#screen").hide()
    });

    $(".home").fadeOut().delay(5000).fadeIn(3000);
});

// CTA                 -----

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll(".cta-wrapper").classList.add("fadeIn");
//         }
//     })
// });

// observer.observe(document.querySelectorAll(".cta"));


// HOME ANIMATION 

const el = $("#home-section")

el.addEventListener("mousemove", function (e) {
    console.log(e);
    // e.specifique value selectionne dans tout ce que mousemove produit certaine valeur
    // offsetX et Y correspondent au pixel sur l'axe x ou y en partant de la droite
    // diviser par 10 réduit la vitesse
    // -150 = la moitier de la largeur et hauteur du div permet de le recentrer

    // target1.style.left = (e.screenX/10 - 150) + "px";
    // target1.style.top = (e.screenY/10 - 150) + "px";

    // target1.style.left = ((e.screenX/8) - 150) + "px";
    // target1.style.top = ((e.screenY/8) - 150) + "px";

});