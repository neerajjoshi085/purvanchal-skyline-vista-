  
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // seconds it takes to "catch up" to the native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements
      normalizeScroll: true, // prevents address bar from showing/hiding on most mobile browsers
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resize
      smoothTouch: 0.1, // much shorter smoothing time on touch devices
    });
    // Add gsap-header class to header when scrolling past 100px
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const header = document.querySelector('.header');
        const header_main_logo = document.querySelectorAll('.header .main_logo');
        const header_divider = document.querySelector('.header .header-divider');

        const SAHEEL_WHITE_LOGO = 'assets/images/logo/Saheel_logo_white.png';
        const SAHEEL_COLOR_LOGO = 'assets/images/logo/Saheel_logo.png';

        if (self.scroll() >= 200) {
          // After scroll
          header.classList.add('gsap-header', 'pin-active');

          header_main_logo.forEach(logo => {
            logo.setAttribute('src', SAHEEL_COLOR_LOGO);
          });

          header_divider?.style.setProperty('display', 'none', 'important');

        } else {
          // Top of page
          header.classList.remove('gsap-header', 'pin-active');

          header_main_logo.forEach(logo => {
            logo.setAttribute('src', SAHEEL_WHITE_LOGO);
          });

          header_divider?.style.setProperty('display', 'block', 'important');
        }
      }
    });



    // handle navigation links
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          document.querySelector('#sidebarMenu')?.classList.remove('active');
          document.querySelector('#hamburgerMenu')?.classList.remove('active');
          document.querySelector('#mobileHamburgerMenu')?.classList.remove('active');

          // smooth scroll
          smoother.scrollTo(targetSection, true);

          // URL update without reload
          history.pushState(null, '', targetId);
        }
      });
    });

    const button = document.querySelector('.hero-buttons');
    const screenHeight = window.innerHeight;
    window.addEventListener('scroll', () => {
      if (window.scrollY > screenHeight) {
        button.classList.add('scrolled');
      } else {
        button.classList.remove('scrolled');
      }
    })
    console.log(window.scrollTop);
    // Sidebar elements fade in animation
    gsap.from(".sidebar-logo", {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2.out",
      delay: 0.2
    });
    gsap.from(".sidebar-e-logo", {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2.out",
      delay: 0.4
    });
    gsap.from(".hamburger-menu", {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2.out",
      delay: 0.6
    });
    // Add animation for header buttons - use set to establish initial state then to for animation
    gsap.set(".header-buttons .btn", {
      opacity: 0,
      x: 20
    });
    gsap.set(".header-buttons:after", {
      opacity: 0,
      x: 10
    });
    gsap.to(".header-buttons .btn", {
      duration: 0.3,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.9,
      clearProps: "all" // Clear properties after animation completes
    });
    gsap.from(".sidebar-text", {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power2.out",
      delay: 0.8
    });
    // Header elements fade in animation
    gsap.from(".header-logo", {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "power2.out",
      delay: 1
    });
    gsap.from(".header-divider", {
      duration: 1,
      opacity: 0,
      scaleX: 0,
      ease: "power2.out",
      delay: 1
    });
    // Set initial state for hero buttons
    gsap.set(".hero-buttons", {
      opacity: 0
    });
    // Set initial states for flowers
    gsap.set([".hero-flower", ".overview-flower"], {
      opacity: 0
    });
    // Fade in hero buttons
    gsap.to(".hero-buttons", {
      duration: 0.5,
      opacity: 1,
      x: 0,
      ease: "power2.in",
      delay: 1
    });
    // Fade in hero flower
    gsap.to(".hero-flower", {
      duration: 1.5,
      opacity: 1,
      ease: "power2.out",
      delay: 2.5
    });
    // Fade in overview flower when scrolled to overview section
    ScrollTrigger.create({
      trigger: ".overview-section",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".overview-flower", {
          duration: 1.5,
          opacity: 1,
          ease: "power2.out"
        });
      }
    });
    // Overview section content animations
    ScrollTrigger.batch(".overview-subtitle, .overview-title, .overview-description, .counter-item", {
      interval: 0.1,
      batchMax: 3,
      onEnter: (elements) => {
        gsap.set(elements, {
          visibility: "visible"
        });
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out"
        });
      },
      start: "top 80%"
    });

    // Hero content animations
    gsap.from(".hero-left-image", {
      duration: 1,
      opacity: 0,
      scale: 1.1,
      ease: "power2.out",
      delay: 1
    });
    gsap.from(".hero-multi-flowers", {
      duration: 1.5,
      opacity: 0,
      y: 30,
      ease: "power2.out",
      delay: 2
    });
    gsap.from(".hero-title-image", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1.5
    });
    gsap.from(".hero-content .tagline", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1.6
    });
    gsap.from(".hero-content .sub_tagline", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1.7
    });
    gsap.from(".hero-address", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1.7
    });
    gsap.from(".hero-description", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 1.9
    });
    gsap.from(".hero-arrow", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 2.3
    });
    // Highlights section animations
    ScrollTrigger.create({
      trigger: ".highlights-section",
      start: "top 80%",
      markers: false, // Visual markers for debugging
      once: true,
      onEnter: function () {
        console.log("Highlights section entered viewport");
        // Force elements to be visible first
        gsap.set(".highlights-subtitle, .highlights-title, .highlights-image, .highlights-table tr", {
          visibility: "visible"
        });
        // Fade in flower
        gsap.to(".highlights-flower", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        // Subtitle animation
        gsap.to(".highlights-subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
        // Title animation
        gsap.to(".highlights-title", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        });
        // Image animation
        gsap.to(".highlights-image", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3
        });
        // Table rows animation - one by one
        const rows = document.querySelectorAll(".highlights-table tr");
        rows.forEach((row, index) => {
          gsap.to(row, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5 + (index * 0.15)
          });
        });
      }
    });
    // Contact Us section animations
    ScrollTrigger.create({
      trigger: ".contact-us-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Contact us section entered viewport");
        // Add animated class to enable CSS transitions
        document.querySelector('.contact-us-section').classList.add('animated');
        // Fade in flowers
        gsap.to(".contact-us-flower-right", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        // Form animation
        gsap.to(".contact-form-parent", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5
        });
        // Contact info animation
        gsap.to(".contact-info-container", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.7
        });
      }
    });
    // Price List section animations
    ScrollTrigger.create({
      trigger: ".price-list-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Price list section entered viewport");
        // Make sure the subtitle is visible and properly positioned
        gsap.set(".price-list-subtitle", {
          opacity: 1,
          y: 0
        });
        // Fade in flower
        gsap.to(".price-list-flower", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        // Only animate title and boxes
        gsap.from(".price-list-title", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out"
        });
        gsap.from(".price-box", {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        });
      }
    });
    // Floor Plans section animations
    ScrollTrigger.create({
      trigger: ".floor-plans-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Floor plans section entered viewport");
        // Subtitle and title animations
        gsap.to(".floor-plans-subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
        // Fade in flower
        gsap.to(".floor-plans-flower", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        gsap.to(".floor-plans-title", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        });
        // Plan images and swiper animations
        gsap.from(".plan-image-container", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          delay: 0.4
        });
        gsap.from(".planSwiper", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          delay: 0.6
        });
      }
    });
    // Gallery section animations
    ScrollTrigger.create({
      trigger: ".gallery-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Gallery section entered viewport");
        // Subtitle animation
        gsap.to(".gallery-subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
        // Fade in flower
        gsap.to(".gallery-flower", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        // Title animation
        gsap.to(".gallery-title", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        });
        // Slider animation
        gsap.from(".gallery-slider-container", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          delay: 0.4
        });
      }
    });
    // Footer section animations


    // Amenities section animations
    ScrollTrigger.create({
      trigger: ".amenities-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Amenities section entered viewport");
        // Subtitle and title animations
        gsap.from(".amenities-subtitle", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out"
        });
        gsap.from(".amenities-title", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        });
        gsap.from(".amenities-slider", {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
          delay: 0.4
        });
        // Table rows animation - one by one
        const rows = document.querySelectorAll(".amenities-table tr");
        rows.forEach((row, index) => {
          gsap.from(row, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5 + (index * 0.15)
          });
        });
      }
    });
    // Location section animations
    ScrollTrigger.create({
      trigger: ".location-section",
      start: "top 80%",
      markers: false,
      once: true,
      onEnter: function () {
        console.log("Location section entered viewport");
        // Force elements to be visible first
        gsap.set(".location-subtitle, .location-title, .location-table tr", {
          visibility: "visible"
        });
        // Fade in flower
        gsap.to(".location-flower", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        });
        // Multi flowers animation
        gsap.from(".location-multi-flowers", {
          opacity: 0,
          y: 30,
          duration: 1.5,
          ease: "power2.out"
        });
        // Subtitle animation
        gsap.to(".location-subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
        // Title animation
        gsap.to(".location-title", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2
        });
        // Table rows animation - one by one
        const rows = document.querySelectorAll(".location-table tr");
        rows.forEach((row, index) => {
          gsap.to(row, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5 + (index * 0.15)
          });
        });
      }
    });
    $(document).ready(function () {
      // Make sure price list subtitle is visible on page load
      document.querySelector('.price-list-subtitle').style.opacity = '1';
      document.querySelector('.price-list-subtitle').style.transform = 'translateY(0)';
      // Make sure amenities subtitle is visible on page load
      if (document.querySelector('.amenities-subtitle')) {
        document.querySelector('.amenities-subtitle').style.opacity = '1';
        document.querySelector('.amenities-subtitle').style.transform = 'translateY(0)';
      }
      // Smooth scroll for all anchor links
      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
          smoother.scrollTo(target, true);
        }
      });
      // Smooth scroll for hero arrow
      $('.hero-arrow').on('click', function () {
        smoother.scrollTo('.overview-section', true);
      });
      // Fallback to ensure visibility if animations don't fire
      setTimeout(function () {
        document.body.classList.add('js-animation-fallback');
      }, 3000);
      // Desktop sidebar menu toggle
      $('#hamburgerMenu').click(function () {
        $(this).toggleClass('active');
        $('#sidebarMenu').toggleClass('active');
      });
      // Mobile hamburger menu toggle
      $('#mobileHamburgerMenu').click(function () {
        $(this).toggleClass('active');
        $('#sidebarMenu').toggleClass('active');
      });
      // Sidebar close button
      $('#sidebarCloseBtn').click(function () {
        $('#sidebarMenu').removeClass('active');
        $('#mobileHamburgerMenu').removeClass('active');
      });

      const planSwiper = new Swiper(".planSwiper", {
        slidesPerView: 3,
        spaceBetween: 2,
        centeredSlides: false,
        loop: true, // IMPORTANT
        allowTouchMove: true, // Desktop move enable
        initialSlide: 0,

        navigation: {
          nextEl: ".plan-nav-next",
          prevEl: ".plan-nav-prev",
          disabledClass: "never-disable"
        },

        observer: true,
        observeParents: true,

        on: {
          slideChange: function () {
            updateActiveTab(this.realIndex);
          }
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          }
        }
      });


      $(".planSwiper .swiper-slide").on("click", function () {
        const index = $(this).data("swiper-slide-index");

        planSwiper.slideToLoop(index, 400); // move slide
        updateActiveTab(index);
      });


      function updateActiveTab(index) {
        const slide = $(".planSwiper .swiper-slide")
          .filter(`[data-swiper-slide-index="${index}"]`)
          .first();

        const planType = slide.data("plan");

        // TAB ACTIVE
        $(".planSwiper .swiper-slide").removeClass("swiper-slide-active");
        slide.addClass("swiper-slide-active");

        // IMAGE ACTIVE
        $(".plan-image").removeClass("active");
        $(`.plan-image[data-plan="${planType}"]`).addClass("active");
      }

      $(window).on("load", function () {
        updateActiveTab(0);
      });

      // Initialize Gallery Swiper
      const gallerySwiper = new Swiper(".gallerySwiper", {
        slidesPerView: 1.5,

        centeredSlides: true,

        spaceBetween: 30,

        loop: true,

        effect: "slide",

        speed: 600,

        navigation: {
          nextEl: ".gallery-nav-next",

          prevEl: ".gallery-nav-prev",
        },

        breakpoints: {
          320: {
            slidesPerView: 1.2,

            spaceBetween: 10,
          },

          576: {
            slidesPerView: 1.2,

            spaceBetween: 15,
          },

          768: {
            slidesPerView: 1.3,

            spaceBetween: 20,
          },

          992: {
            slidesPerView: 1.5,

            spaceBetween: 70,
          },
        },
      });

      // Initialize Amenities Swiper
      const amenitiesSwiper = new Swiper('.amenitiesSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChange: function () {
            const activeSlide = this.slides[this.activeIndex];
            const amenityType = activeSlide.getAttribute('data-amenity');
            // Remove active class from all rows
            $('.amenity-row').removeClass('active');
            // Add active class to matching row
            $(`.amenity-row[data-amenity="${amenityType}"]`).addClass('active');
          }
        }
      });
      // Counter Animation
      let counted = false;
      $(window).scroll(function () {
        const overviewSection = $('.overview-section');
        if (overviewSection.length) {
          const top_of_element = overviewSection.offset().top;
          const bottom_of_element = overviewSection.offset().top + overviewSection.outerHeight();
          const bottom_of_screen = $(window).scrollTop() + $(window).height();
          const top_of_screen = $(window).scrollTop();
          if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !counted) {
            counted = true;
            $('.counter').each(function () {
              const $this = $(this);
              const target = parseInt($this.attr('data-target'));
              $({
                Counter: 0

              }).animate({
                Counter: target
              }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                  const current = Math.ceil(this.Counter);
                  $this.text(current);
                },
                complete: function () {
                  $this.text(target);
                }
              });
            });
          }
        }
      });
    });
    
  
  
  
  
  
  
  
    const scrollBtn = document.getElementById("sample_tour");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollBtn.classList.add("showBtn");
      } else {
        scrollBtn.classList.remove("showBtn");
      }
    });
  

  
    $(".moreless-button").click(function () {
      $(".moretext").slideToggle(200);
      if ($(".moreless-button").text() == "Read more") {
        $(this).text("Read less");
      } else {
        $(this).text("Read more");
      }
    });
  

  
    $(window).ready(function () {
      setTimeout(function () {
        $('#enquiryModal').modal("show")
      }, 14000)
    });
  

  
    document.addEventListener("DOMContentLoaded", function () {
      const sidebarMenu = document.getElementById("sidebarMenu");
      const closeMenu = document.querySelector(".closemenu");

      if (closeMenu && sidebarMenu) {
        closeMenu.addEventListener("click", function () {
          sidebarMenu.classList.remove("active");
        });
      }
    });
  