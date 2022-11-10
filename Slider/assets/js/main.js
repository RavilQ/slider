
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
   const slideWidth = slide.clientWidth;
   slidesContainer.scrollLeft += slideWidth;

   if(slidesContainer.scrollLeft===3*slideWidth-2) {

    slidesContainer.scrollLeft=0;
  }
  
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

   if(slidesContainer.scrollLeft===0) {

    slidesContainer.scrollLeft=3*slideWidth;
  }
});

let player = document.getElementById("videoPlay");
let linik = document.getElementById("youtubeLink");

player.addEventListener("click",()=>{
   linik.click();
})