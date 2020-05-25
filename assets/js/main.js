/**
 * Template Name: Day - v2.0.0
 * Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
var pages = [
  { "Drug Interactions": "/DrugInteracionsdetails.html" },
  { "Clinical Compounding": "/Compoundingdetails.html" },
  { DrugInteractionAPI: "/APIdetails.html" },
  { "Web design": "/WebDesigndetails.html" },
  { "Health Research": "/Researchdetails.html" },
  { "Neonatal Nutrition": "/NeonatalNutritiondetails.html" },
];

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

// var str = "<ul>";
// pages.forEach(function (p) {
//   str += "<li>" + p "</li>";
// });

// str += "</ul>";
// document.getElementById("porfolioDrop").innerHTML = str;
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

!(function (q) {
  "use strict";

  // Preloader
  q(window).on("load", function () {
    if (q("#preloader").length) {
      q("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          q(this).remove();
        });
    }
  });

  GetThemes(themes);

  q("#themeDrop a").on({
    mouseover: function (e) {
      document.getElementById("cssTheme").href = themes[e.target.innerHTML];
    },

    click: function (e) {
      sessionStorage.setItem("theme", themes[e.target.innerHTML]);

      document.getElementById("cssTheme").href = themes[e.target.innerHTML];
    },
  });

  q("#header").on("mouseleave", function (e) {
    if (document.getElementById("cssTheme").href !== sessionStorage.theme) {
      document.getElementById("cssTheme").href = sessionStorage.theme;
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  q(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
    e
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = q(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;

        if (q("#header").length) {
          scrollto -= q("#header").outerHeight();

          if (!q("#header").hasClass("header-scrolled")) {
            scrollto += scrolled;
          }
        }

        if (q(this).attr("href") == "#header") {
          scrollto = 0;
        }

        q("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if (q(this).parents(".nav-menu, .mobile-nav").length) {
          q(".nav-menu .active, .mobile-nav .active").removeClass("active");
          q(this).closest("li").addClass("active");
        }

        if (q("body").hasClass("mobile-nav-active")) {
          q("body").removeClass("mobile-nav-active");
          q(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          q(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });
  
  let list = document.createElement("ul");
  q.getJSON("/Projects.json", function (j) {
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
  if (q(".nav-menu").length) {
    var qmobile_nav = q(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    q("body").append(qmobile_nav);
    q("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    q("body").append('<div class="mobile-nav-overly"></div>');

    q(document).on("click", ".mobile-nav-toggle", function (e) {
      q("body").toggleClass("mobile-nav-active");
      q(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      q(".mobile-nav-overly").toggle();
    });

    q(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      q(this).next().slideToggle(300);
      q(this).parent().toggleClass("active");
    });

    q(document).click(function (e) {
      var container = q(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (q("body").hasClass("mobile-nav-active")) {
          q("body").removeClass("mobile-nav-active");
          q(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          q(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if (q(".mobile-nav, .mobile-nav-toggle").length) {
    q(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = q("section");
  var main_nav = q(".nav-menu, #mobile-nav");

  q(window).on("scroll", function () {
    var cur_pos = q(this).scrollTop() + 80;

    nav_sections.each(function () {
      var top = q(this).offset().top,
        bottom = top + q(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + q(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        q(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  //if there is no topbar section,
  q(window).scroll(function () {
    if (q(document.getElementById("topbar").length)) {
      if (q(this).scrollTop() > 260) {
        q("#header").addClass("header-scrolled");
        q("#topbar").addClass("topbar-scrolled");
        q("#hero").addClass("hero-scrolled");
      } else {
        q("#header").removeClass("header-scrolled");
        q("#topbar").removeClass("topbar-scrolled");
        q("#hero").removeClass("hero-scrolled");
      }
    }
  });

  // if (q(window).scrollTop() > 260 && q(document.getElementById("topbar").length)) {
  //   q("#header").addClass("header-scrolled");
  //   q("#topbar").addClass("topbar-scrolled");
  //   q("#hero").addClass("hero-scrolled");
  // }

  // Back to top button
  q(window).scroll(function () {
    if (q(this).scrollTop() > 100) {
      q(".back-to-top").fadeIn("slow");
    } else {
      q(".back-to-top").fadeOut("slow");
    }
  });

  q(".back-to-top").click(function () {
    q("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Porfolio isotope and filter
  q(window).on("load", function () {
    var portfolioIsotope = q(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    q("#portfolio-flters li").on("click", function () {
      q("#portfolio-flters li").removeClass("filter-active");
      q(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: q(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox
    q(document).ready(function () {
      q(".venobox").venobox({
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

  q(".profile-carousel").owlCarousel({
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
