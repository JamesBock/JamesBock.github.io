(function (q){
q.getJSON("/Projects.json", function (j) {
  let magePages = j;
for (let i = 0; i < magePages.projects.length; i++) {
  for (const key in magePages.projects[i]) {
    if (magePages.projects[i].hasOwnProperty(key)) {
      let topDiv = document.createElement("div");

      topDiv.setAttribute("class", "col-lg-4 col-md-6 portfolio-item");

      let image = document.createElement("img");
      image.setAttribute("src", magePages.projects[i][key].src);
      image.setAttribute("class", "img-fluid");
      topDiv.appendChild(image);
      secondDiv = document.createElement("div");
      secondDiv.setAttribute("class", "portfolio-info");

      let hFour = document.createElement("h4");
      hFour.innerHTML = key;

      secondDiv.appendChild(hFour);

      let para = document.createElement("p");
      para.innerHTML = magePages.projects[i][key].p;
      secondDiv.appendChild(para);

      let anchor = document.createElement("a");
      anchor.setAttribute("href", magePages.projects[i][key].href);
      anchor.setAttribute("class", "details-link");
      anchor.setAttribute("title", "More Details");

      secondDiv.appendChild(anchor);
      let icon = document.createElement("i");
      icon.setAttribute("class", "bx bx-link");
      anchor.appendChild(icon);
      secondDiv.appendChild(anchor);
      topDiv.appendChild(secondDiv);
      
      document.getElementById("portfolioDiv").appendChild(topDiv);

    }
  }
}
});})(jQuery);