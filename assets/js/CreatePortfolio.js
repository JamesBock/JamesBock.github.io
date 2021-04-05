(function ($){
$.getJSON("Projects.json", function (j) {
  let magePages = j;
for (let i = 0; i < magePages.projects.length; i++) {
  for (const key in magePages.projects[i]) {
    if (magePages.projects[i].hasOwnProperty(key)) {
      let topDiv = document.createElement("li");

      topDiv.setAttribute("class", "w-100 py-2 px-1 my-2 portfolio-item");
      topDiv.setAttribute("style", "box-shadow: -1px 1px 50px 1px lightgrey");
      
      let listSpan = document.createElement("span");
      listSpan.setAttribute("class", "w-100 row");
      let image = document.createElement("img");
      let labelDiv = document.createElement("div");
      let label = document.createElement("h2");
      labelDiv.setAttribute("class", "col-lg")
      topDiv.appendChild(listSpan);
      label.innerHTML = key;
      image.setAttribute("src", magePages.projects[i][key].src);
      image.setAttribute("class", "py-3 col-lg-6 img-fluid");
      // topDiv.appendChild(image);
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
      
      // secondDiv.appendChild(anchor);
      let icon = document.createElement("i");
      icon.setAttribute("class", "bx bx-link");
      // anchor.appendChild(icon);
      // secondDiv.appendChild(anchor);
      // topDiv.appendChild(secondDiv);
      
      labelDiv.appendChild(label)
      labelDiv.appendChild(para)
      // labelDiv.appendChild(icon)
      // image.appendChild(anchor)
      listSpan.appendChild(labelDiv)
      // listSpan.appendChild(label);
      listSpan.appendChild(image);
      anchor.setAttribute("class", "w-100");
      anchor.appendChild(topDiv)
      document.getElementById("portfolioDiv").appendChild(anchor);
      
    }
  }
}
});})(jQuery);