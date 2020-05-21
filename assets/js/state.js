//monitors and applys theme
(function (global) {
  
//   console.log("initial: " + localStorage.getItem("theme"));
  if (localStorage.getItem("theme") == document.getElementById("cssTheme").href ) {
    document.getElementById("cssTheme").href = "assets/css/hookem.css";
    localStorage.setItem("theme",document.getElementById("cssTheme").href);
    // console.log("if true");
  } else {
    document.getElementById("cssTheme").href = localStorage.getItem("theme");
    // console.log("if false");
  }
})(window);
