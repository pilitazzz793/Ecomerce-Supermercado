//inicializar el swiper

new Swiper(".promoSwiper",{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: "horizontal",
});

//añadiendo funcionalidad al swiper de cards de productos

const swiper = new Swiper(".mySwiper",{
    slidePerview: 1,
    spaceBetween: 20,
    loop: true,

    pagination:{
        el: ".swiper-paginacion",
        clikeable: true,

    },

    navigation:{
        nextEl: ".swiperbutton-next",
        prevEl: ".swiperbutton-prev",
    },

    breakpoints : {
        640:{
            slidePreview: 2,
        },
        1024:{
            slidePerview: 4,
        },
    },
});