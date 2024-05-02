$( function() {

    var wind = $(window);

    // wow = new WOW({
    //     boxClass: 'wow',
    //     animateClass: 'animated',
    //     offset: 200,
    //     mobile: false,
    //     live: false
    // });
    // wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    /* ==  float_box_container button  == */
  $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    /* ==  Button Animation  == */
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // -------- counter --------
  $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

});

// ------------ working in desktop -----------
if ($(window).width() > 991) {
    $('.parallaxie').parallaxie({
    });
}

// ------------ swiper sliders -----------
$(document).ready(function() {

    // tc-portfolio-slider5
    var swiper = new Swiper('.tc-portfolio-slider5', {
        slidesPerView: 2,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".tc-portfolio-slider5 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-portfolio-slider5 .swiper-button-next',
            prevEl: '.tc-portfolio-slider5 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


    // logos-slider5
    var swiper = new Swiper('.logos-slider5', {
        spaceBetween: 50,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    // tc-testimonials-slider5
    var swiper = new Swiper('.tc-testimonials-slider5', {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        speed: 30000,
        autoplay: {
            delay: 1,
        },
        //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            },
            480: {
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            },
            787: {
                slidesPerView: 2,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            },
            991: {
                slidesPerView: 2,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            },
            1200: {
                speed: 30000,
                autoplay: {
                    delay: 1,
                },
            }
        }
    });

});


// ------------ scripts -----------
$(document).ready(function(){

});


// ------------ gsap scripts -----------
$( function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 2,
    normalizeScroll: true,
    ignoreMobileResize: true,
        effects: true,
    //preventDefault: true,
    //ease: 'power4.out',
    //smoothTouch: 0.1, 
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
    let headingIndex = i + 1;
    let mySplitText = new SplitText(heading, { type: "chars" });
    let chars = mySplitText.chars;

    chars.forEach((char, i) => {
    smoother.effects(char, { lag: (i + headingIndex) * 0.03, speed: 1 });
    });
    });


    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        duration: 1,
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
        // toggleActions: 'play none play reset'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
    // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
    tl.from(itemSplitted.lines, { duration: 1, delay: 0, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

});

