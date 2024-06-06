var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	effect: "fade",
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    function myFunction() {
       document.getElementById("myDropdown").classList.toggle("show");
    }

