let photos = document.querySelectorAll(".photos");


for (let i = 0;  i < photos.length; i++) {
     photos[i].addEventListener("mouseover", GreyIt, true);
     photos[i].addEventListener("mouseout", ColorIt, true);
  }


function GreyIt() {
     for (let i = 0 ; i < photos.length; i++) {
        photos[i].style.filter = "grayscale(100%)";
   }
   this.style.filter = "none";

 }

 function ColorIt() {
    for (let i = 0 ; i < photos.length; i++) {
       photos[i].style.filter = "none";
  }
 

}