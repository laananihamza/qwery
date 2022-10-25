$(document).ready(() => {

    window.addEventListener('scroll',() => {
        if (window.scrollY > 100) {
            $('#toUp').css('opacity', '1');
            $('#toUp').css('bottom', '10px');
            
        }else {
            $('#toUp').css('bottom', '-10px');
            $('#toUp').css('opacity', '0');
            
        }

    })
    $('#toUp').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

    /* Controle */
    /*Close Buttons */
    let closeLeft = document.querySelector('[data-control=close]');
    let closeSearch = document.querySelector('[data-control=closeSearch]')
    let closeTop = document.querySelector('[data-control=closeTop]');
    /* Open Button */
    let leftSideButton = $('[data-control=leftSide]')
    let searchSideButton = $('[data-control=searchSide]')
    let topSideButton = $('[data-control=topSide]')

    /* Slides */
    let slideLeft = $('[data-slide=slideLeft]')
    let slideSearch = $('[data-slide=slideSearch]')
    let slideTop = $('[data-slide=slideTop]')

    
    closeLeft.addEventListener('click', () => {

        // slideLeft.classList.remove('show')
        slideLeft.removeClass('show');

    })

    leftSideButton.click(() => {
        // slideLeft.classList.toggle("show");
        slideLeft.toggleClass('show');

    })

    closeTop.addEventListener('click', () => {
        slideTop.removeClass('show')
    })

    topSideButton[0].addEventListener("click", function() {
        slideTop.toggleClass("show");

    })

    document.addEventListener("click", function(el) {

        if (!slideLeft[0].contains(el.target) && !leftSideButton[0].contains(el.target)) {
            slideLeft.removeClass('show');
        }
        if (!slideSearch[0].contains(el.target) && !searchSideButton[0].contains(el.target)) {
            slideSearch.removeClass("show");
        }
        if (!slideTop[0].contains(el.target) && !topSideButton[0].contains(el.target)) {
            slideTop.removeClass("show");
        }
    })
    closeSearch.addEventListener('click', function() {
        slideSearch.removeClass("show")

    })

    searchSideButton.click(() => {
        slideSearch.toggleClass("show");

    })
});

/* agree to Privacy Policy */
$('.parent').click(function () {
    if ($(this).hasClass('psd')) {
        $('.parent').removeClass('psd')
    }else {
        $('.parent').addClass('psd')

    }
})


/*  */

let goals = document.querySelectorAll('.statistics .num')
let workSet = document.querySelector('.about .work')
let started = false;

// setInterval(() => {}, )

window.addEventListener('scroll', () => {
    if (window.scrollY >= workSet.offsetTop - 500) {
        if (!started) {
            goals.forEach((num) => startCount(num))
        }
        started = true
    
        function startCount(num) {
            let goal = num.dataset.goal
            let count = setInterval(() => {
                num.textContent++;
                if (num.textContent == goal) {
                    clearInterval(count)
                }
            }, 2000 / goal)
        }
    }
})


/* Mouse Dot Follower */

let dot = document.querySelector('.follow-dot');
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    dot.style.left = `${x + 40}px`;
    dot.style.top = `${y + 40}px`;
    // console.log(window.scrollY)
})

window.addEventListener('scroll', () => {
        document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        dot.style.left = `${x + 40}px`;
        dot.style.top = `${y + 40 + window.scrollY}px`;
        // console.log(window.scrollY)
    })
    })

    //! slides
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // centreSlide: 'true',
    fade: 'true',
    // slidesPerView: 5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.fa-angle-right',
      prevEl: '.fa-angle-left',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
