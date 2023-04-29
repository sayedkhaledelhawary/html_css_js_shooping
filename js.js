serch = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    serch.classList.toggle('active');
}



clos = document.querySelector('.login-frome-continer');
document.querySelector('#login-btn').onclick = () => {
    clos.classList.toggle('active');
}


document.querySelector('#clos-login-btn').onclick = () => {
    clos.classList.remove('active');
}




window.onscroll = () => {
    serch.classList.remove('active');


    if (window.scrollY > 80 ){
        document.querySelector('.header-2').classList.add('active');
    }
    else {
        document.querySelector('.header-2').classList.remove('active')
    }
    }





    window.onload = () => {
        if (window.scrollY > 80 ){
            document.querySelector('.header-2').classList.add('active');
        }
        else {
            document.querySelector('.header-2').classList.remove('active')
        }
        }








        var swiper = new Swiper(".home-slider", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,

            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
              },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });











          
        var swiper = new Swiper(".featcured-slider", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            spaceBetween:20,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
              },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,},
                 
               
                450: {
                  slidesPerView: 2,
                  
                },
                768: {
                  slidesPerView: 3,
                
                },
              },
            
             } );







               
        var swiper = new Swiper(".reviow-slide", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            spaceBetween:20,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
           
            breakpoints: {
                0: {
                  slidesPerView: 1,},
                 
               
              
                768: {
                    slidesPerView: 3,
                
                  },    
               
                  1200: {
                    slidesPerView: 3,
                    
                  },
              },
            
             } );




             


                       
        var swiper = new Swiper(".blog-slider", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            spaceBetween:20,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
           
            breakpoints: {
                0: {
                  slidesPerView: 1,},
                 
               
              
                768: {
                    slidesPerView: 3,
                
                  },    
               
                  1200: {
                    slidesPerView: 3,
                    
                  },
              },
            
             } );





             let type = new Typed ('.auto-input' ,{
                strings: ['Front End Developer!', 'Freelancer!'],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 2000,
                loop: true,
            })







          


