// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", e => {

//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+e.pageX+"px; ")
// })

// ANIM                 ----
$( document ).ready(function() {
    $("#screen").delay(4000).fadeOut(3000, function(){
        $("#screen").hide()
    });

    $(".home").fadeOut().delay(5000).fadeIn(3000);
});

// CTA                 -----

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".cta-wrapper").classList.add("fadeIn");
        }
    })
});

observer.observe(document.querySelectorAll(".cta"));