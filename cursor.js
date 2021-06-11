let mousecursor= document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.navigation li , .logo_container');


window.addEventListener('mousemove' , cursor)
function cursor (e) {
mousecursor.style.top = e.pageY + "px";
mousecursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
link.addEventListener('mouseover' , () => {
    mousecursor.classList.add("link-grow");
});
});

navLinks.forEach(link => {
    link.addEventListener('mouseleave' , () => {
        mousecursor.classList.remove("link-grow");
    })
});
