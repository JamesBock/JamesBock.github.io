/**
 * Template Name: Day - v2.0.0
 * Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

themes = {
  "Hook 'em": "assets/css/hookem.css",
  Sonic: "assets/css/sonic.css",
  "Graffiti Park": "assets/css/graffiti.css",
  "undefined ": "assets/css/undefinedStyle.css",
};

//monitors and applies theme
(function (global) {
  if (
    sessionStorage.getItem("theme") ==
      document.getElementById("cssTheme").href ||
    sessionStorage.getItem("theme") == null
  ) {
    document.getElementById("cssTheme").href = "assets/css/hookem.css";
    sessionStorage.setItem("theme", document.getElementById("cssTheme").href);
  } else {
    document.getElementById("cssTheme").href = sessionStorage.getItem("theme");
  }
})(window);

(function (global) {
  sessionStorage.setItem("theme", document.getElementById("cssTheme").href);
})(window);

function GetThemes(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      let item = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.innerHTML = key;
      anchor.setAttribute("data-toggle", "tooltip");
      anchor.setAttribute("data-placement", "left");
      anchor.setAttribute("title", "Click to set");
      item.appendChild(anchor);
      document.getElementById("themeDrop").appendChild(item);
    }
  }
}

// function portfolioList(array) {
//   let list = document.createElement("ul");
//   array.forEach((element) => {
//     let item = document.createElement("li");
//     let anchor = document.createElement("a");

//     for (const key in element) {
//       if (element.hasOwnProperty(key)) {
//         anchor.innerHTML = key;
//         anchor.href = element[key];
//         item.appendChild(anchor);
//         list.appendChild(item);
//       }
//     }
//   });
//   return list;
// }
// document.getElementById("portfolioDrop").after(portfolioList(pages));

!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(300)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  GetThemes(themes);

  // $("#themeDrop a").on("mouseover", function (e) {
  //     sessionStorage.setItem("theme", themes[e.target.innerHTML]);
  //     document.getElementById("cssTheme").href = themes[e.target.innerHTML];
  //   });
  $("#themeDrop a").on({
    mouseover : function (e) {
      document.getElementById("cssTheme").href = themes[e.target.innerHTML];
    }
    ,
    
    click: function (e) {
      
      sessionStorage.setItem("theme", themes[e.target.innerHTML]);
      document.getElementById("cssTheme").href = themes[e.target.innerHTML];
    }

    
  });

  $("#themeDrop").on("mouseleave", function (e) {
    if (document.getElementById("cssTheme").href !== sessionStorage.theme) {
      document.getElementById("cssTheme").href = sessionStorage.theme;
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
    e
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($("#header").length) {
          scrollto -= $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  let list = document.createElement("ul");
  $.getJSON("Projects.json", function (j) {
    let magePages = j;
    console.log(j);
    for (let i = 0; i < magePages.projects.length; i++) {
      for (const key in magePages.projects[i]) {
        if (magePages.projects[i].hasOwnProperty(key)) {
          let item = document.createElement("li");
          let anchorPortfolio = document.createElement("a");

          anchorPortfolio.innerHTML = key;
          anchorPortfolio.href = magePages.projects[i][key].href;
          item.appendChild(anchorPortfolio);
          list.appendChild(item);
        }
      }
    }
  });

  document.getElementById("portfolioDrop").after(list);

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  //if there is no topbar section,
  $(window).scroll(function () {
    if ($(document.getElementById("topbar").length)) {
      if ($(this).scrollTop() > 260) {
        $("#header").addClass("header-scrolled");
        $("#topbar").addClass("topbar-scrolled");
        $("#hero").addClass("hero-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
        $("#topbar").removeClass("topbar-scrolled");
        $("#hero").removeClass("hero-scrolled");
      }
    }
  });

  // if ($(window).scrollTop() > 260 && $(document.getElementById("topbar").length)) {
  //   $("#header").addClass("header-scrolled");
  //   $("#topbar").addClass("topbar-scrolled");
  //   $("#hero").addClass("hero-scrolled");
  // }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox
    $(document).ready(function () {
      $(".venobox").venobox({
        share: [],
        spinner: "double-bounce",
        // spinColor: "#cf751b",
        // arrowsColor: "#cf751b",
        // closeColor: "#cf751b",
        infinigall: true,
        frameHeight: "auto",
      });
    });
  });

  $(".profile-carousel").owlCarousel({
    //autoplay: true,
    lazyLoad: true,
    touchDrag: true,
    nav: true,
    navText: ["", ""],
    loop: true,
    items: 1,
    margin: 150,
    center: true,
    autoWidth: true,
    //,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 2,
    //   },
    //   1000: {
    //     itemes: 3,
    //   },
    // },
  });

  // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  aos_init();
})(jQuery);
