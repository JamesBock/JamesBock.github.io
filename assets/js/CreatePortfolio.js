(function ($) {
  $.getJSON("Projects.json", function (j) {
    let magePages = j;
    for (let i = 0; i < magePages.projects.length; i++) {
      for (const key in magePages.projects[i]) {
        if (magePages.projects[i].hasOwnProperty(key)) {
          let topDiv = document.createElement("li");

          topDiv.setAttribute("class", "p-2 px-1 mb-3 mx-auto portfolio-item");
          topDiv.setAttribute(
            "style",
            "box-shadow: -1px 1px 50px 1px lightgrey;  border: 1px solid lightgrey; width: 85% "
          );
          let listSpan = document.createElement("span");
          listSpan.setAttribute("class", "w-100 row");
          let image = document.createElement("img");
          let labelDiv = document.createElement("div");
          let label = document.createElement("h2");
          labelDiv.setAttribute("class", "col-lg");
          topDiv.appendChild(listSpan);
          label.innerHTML = key;
          label.setAttribute("style", "font-weight: bold;")
          image.setAttribute("src", magePages.projects[i][key].src);
          image.setAttribute("class", "py-3 col-lg-7 my-auto img-fluid");

          secondDiv = document.createElement("div");
          secondDiv.setAttribute("class", "portfolio-info");

          let hFour = document.createElement("h4");
          hFour.innerHTML = key;

          secondDiv.appendChild(hFour);

          let para = document.createElement("p");
          para.innerHTML = magePages.projects[i][key].p;
          para.setAttribute("class", "pl-2");
          secondDiv.appendChild(para);

          let descList = document.createElement("ul");
          for (let ii = 0; ii < magePages.projects[i][key].list.length; ii++) {
            const element = document.createElement("li");
            element.innerText = magePages.projects[i][key].list[ii];
            descList.appendChild(element);
          }
          descList.setAttribute("id", "toolsList");

          let anchor = document.createElement("a");
          anchor.setAttribute("href", magePages.projects[i][key].href);
          anchor.setAttribute("class", "details-link");
          anchor.setAttribute("title", "More Details");

          let icon = document.createElement("i");
          icon.setAttribute("class", "bx bx-link");

          labelDiv.appendChild(label);
          labelDiv.appendChild(para);
          labelDiv.appendChild(descList);

          listSpan.appendChild(labelDiv);

          listSpan.appendChild(image);
          anchor.setAttribute("class", "w-100");
          anchor.appendChild(topDiv);
          document.getElementById("portfolioDiv").appendChild(anchor);
        }
      }
    }
  });
})(jQuery);
