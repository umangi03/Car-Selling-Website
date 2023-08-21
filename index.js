const buyButtons = document.querySelectorAll(".buynow");
buyButtons.forEach(button => {
    button.onclick = () => {
        document.querySelector(".buyformcontainer").classList.toggle("active");
    };
});

document.querySelector("#closebtn").onclick= () =>{
    document.querySelector(".buyformcontainer").classList.remove("active");
};

var swiper=new Swiper(".VehiclesSlider",{
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

