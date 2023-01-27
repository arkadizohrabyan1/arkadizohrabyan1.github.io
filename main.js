const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]');

const sliderArrow = document.querySelectorAll('.slider-arrow');

tabHeaders.forEach(function(item){

   item.addEventListener('click', function(){
 
     contentBoxes.forEach(function(item){
         item.classList.add('hidden');
     });

     const contentBox = document.querySelector('#' +  this.dataset.tab);
     contentBox.classList.remove('hidden');

   });

});



let array = [2005,5,1.5,"Arkadi","Pult"];

for(i = 0; i < array.length; i++){
  if(array[i]=="Pult"){
    continue;
  }
  console.log(array[i]);
}

// for (i = 0; i <= 10; i++){
//   if(i % 2 = 0){
//     continue;
    
//   }
//   console.log(i);
// }



// let arrays = [
//   [84,17,15],[0.4,4],[0,54.7]
// ];

// let math = Math.round( arrays[0][1]);
// // console.log(arrays[2][1]);
// console.log(math);


// let pix = 15;
// switch(pix){
//   case "sfx":
//     console.log("14");
//     break;
//   default:
//     console.log("ku");
      
//       break;
// }

























// var slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("slider-dot");

//     if (n>slides.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex=slides.length;
//     }
//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace("active" , "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += "active";
// }
