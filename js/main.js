const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

/* Mobile Menu Toggle */
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Mobile Dropdown Toggle */
if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
}
const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("moreText");

readBtn.addEventListener("click", function(){

    if(moreText.style.display === "block"){

        moreText.style.display = "none";
        readBtn.innerText = "Read More";

    }else{

        moreText.style.display = "block";
        readBtn.innerText = "Read Less";

    }

});


const track = document.getElementById("sdgTrack");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let position = 0;

const moveSlide = () => {

position -= 185;

if(Math.abs(position) >= track.scrollWidth/2){

position = 0;

}

track.style.transform = `translateX(${position}px)`;

};

let autoSlide = setInterval(moveSlide,3000);

next.addEventListener("click",()=>{

position -= 185;

track.style.transform = `translateX(${position}px)`;

});

prev.addEventListener("click",()=>{

position += 185;

track.style.transform = `translateX(${position}px)`;

});