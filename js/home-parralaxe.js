const img1 = $(".home__image-1")
console.log(img1)

const home = $("#home-section")

console.log(home)


window.onmousemove = function (event) {
    console.log(event)
    img1.style.left = event.pageY + "px";
  
    
};


// var moveDiv = document.getElementById('movediv');

// window.onmousemove = function (e) {
//     var x = e.pageX,
//         y = e.pageY;
//     moveDiv.style.top = (y * 0.1) + 'px';
//     moveDiv.style.left = (x * 0.1) + 'px';
// };