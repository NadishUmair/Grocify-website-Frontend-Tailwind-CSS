

document.addEventListener("DOMContentLoaded", function() {
    const onclickbutton = document.getElementById("onclick");
    const myList = document.getElementById("mylist");
    const crossbutton=document.getElementById("crossbtn");

    onclickbutton.addEventListener("click", function() {
        // Toggle the "hidden" class to show/hide the list
        myList.classList.toggle("hidden");
        this.style.background="grey";
        const bg=this;
        onclickbutton.classList.toggle("bg")
    });
    crossbutton.addEventListener("click",function(){
        myList.classList.toggle("hidden");
        // myList.style.display="none";
    })
});

// const sliderWrapper=document.getElementById('sliderwrapper');
// const prevbutton=document.getElementById('prevButton');
// const nextbutton=document.getElementById('nextButton');
// const itemWidth=400;

// let currentPosition=0;

// prevbutton.addEventListener("click",()=>{
//     currentPosition += itemWidth;
//     updateSliderPosition();
// })


// nextbutton.addEventListener("click",()=>{
//     currentPosition -= itemWidth;
//     updateSliderPosition();
// })

// function updateSliderPosition(){
//     const maxScroll=sliderWrapper.scrollWidth-sliderWrapper.clientWidth;
//     if(currentPosition > 0){
//         currentPosition=0;
//     }
//     else if (currentPosition < -maxScroll){
//         currentPosition= -maxScroll;
//     }
//     sliderWrapper.style.transform =  `translateX(${currentPosition}px)`;
// }

const slider = document.getElementById('sliderwrapper');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let slideIndex=0;
const slidecount=5;
const slideWidth=90;

function slideshow(){
  slider.style.transform=`translateX(-${slideIndex * slideWidth}%)`;
}
function nextSlide(){
    if(slideIndex < slidecount -1){
        slideIndex++;

    }else{
        slideIndex=0
    }
    slideshow();
}

function prevSlide(){
    if(slideIndex>0){
        slideIndex--;
    }else{
        slideIndex=slidecount-1;
    }
    slideshow();
}
// function nextSlide() {
//         if (slideIndex < slidecount - 1) {
//           slideIndex++;
//         } else {
//           slideIndex = 0;
//         }
//         slideshow();
//       }
    
//       function prevSlide() {
//         if (slideIndex > 0) {
//           slideIndex--;
//         } else {
//           slideIndex = slidecount - 1;
//         }
//         slideshow();
//       }
prevButton.addEventListener("click",()=>{
    prevSlide();
});

nextButton.addEventListener("click",()=>{
    nextSlide();
})



const slideInterval=3000;

let autoSlideInterval=setInterval(nextSlide,slideInterval)

slider.addEventListener('mouseenter',()=>{
    clearInterval(autoSlideInterval);
});
slider.addEventListener('mouseleave',()=>{
    autoSlideInterval=setInterval(nextSlide,slideInterval);
});


document.addEventListener('DOMContentLoaded',function(){
    const bycash = document.getElementById('bycash');
    const payonline=document.getElementById('payonline');
    const payementdiv=document.getElementById('online-payment');
    
    function togglesection(){
    if(payonline.checked){
        payementdiv.style.display='block';
    }
    else{
        payementdiv.style.display="none";
    }
    }
    bycash.addEventListener('change',togglesection)
    payonline.addEventListener('change',togglesection)
})








