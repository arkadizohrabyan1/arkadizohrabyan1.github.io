$("body").on('click', '[href*="#"]', function(e){
    let fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
  });

const prev = document.getElementById('slider-prev'),
      next = document.getElementById('slider-next'),
      slides = document.querySelectorAll('[data-tab-content]'),
      dots = document.querySelectorAll('.slider-dot');

let index = 0;


const activeSlide = n => {
    for(slide of slides){
        slide.classList.add('hidden');
    }
    slides[n].classList.remove('hidden');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);

    } else{
        index++;
        prepareCurrentSlide(index);
    }
    
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const prevSlide = () =>{
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else{
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const hamButton = document.getElementById('ham-button');
const navBar = document.querySelector('#nav');

    hamButton.addEventListener('click', () =>{
        navBar.classList.toggle('nav-hidden');
    })



















// const dots = document.querySelectorAll('[data-tab]');

// const contentBoxes = document.querySelectorAll('.blue-back');

// const sliderArrow = document.querySelectorAll('.slider-arrow');

// const sliderPrev = document.getElementById('slider-prev');
// const sliderNext = document.getElementById('slider-next');

// let index = 1;

// dots.forEach(function(item){

//    item.addEventListener('click', function(){
 
//      contentBoxes.forEach(function(item){
//          item.classList.add('hidden');
//      });
//      const contentBox = document.querySelector('#' +  this.dataset.tab);
//      contentBox.classList.remove('hidden');
//      index += contentBox;

//    });
// });



// sliderArrow.forEach(function(item){

//   sliderPrev.addEventListener('click', () => {
//     index = index - 1;
//     if(index < 1){
//       index = contentBoxes.length;
//     }
//   });

//   sliderNext.addEventListener('click', () => {
//     index++;
//     if(index > contentBoxes.length){
//       index = 1;
//     }
//     console.log(index);
//   });


//   item.addEventListener('click', function(){
    
//     contentBoxes.forEach(function(item){
//         item.classList.add('hidden');


//     const contentBox = document.querySelector('#' +  this.dataset.tab);
//     contentBox.classList.remove('hidden');
//     });
//   });

// });

// const headButtons = document.querySelectorAll('[data-button]');

// headButtons.forEach(function(item){

// item.addEventListener('click', function(event){
//   event.preventDefault();

//     document.querySelector('#' +  this.dataset.button).animate({
//       scrollTop: this.getAttribute('href').offset().top
//   }, 400);
//   return false;;
    
//   // item.setAttribute('href',section);
//  });

// });



// let array = [2005,5,1.5,"Arkadi","Pult"];

// for(i = 0; i < array.length; i++){
//   if(array[i]=="Pult"){
//     continue;
//   }
//   console.log(array[i]);
// }








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
