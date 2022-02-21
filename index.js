console.log("NEWS website using javascript");
// d5efdb5ad5a54a788e87af194eb20507
//grab the news container
let newsAccordion = document.getElementById("newsAccordion");
//creating the variables
let sources = "bbc-news";
let apikey = "d5efdb5ad5a54a788e87af194eb20507";
//create the xhr request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,
  true
);
xhr.onprogress = function () {
  console.log("on progresss");
};
xhr.onload = function () {
  if (xhr.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index);
      // console.log(articles[news]);
      let news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index}"
            aria-expanded="false"
            aria-controls="collapse${index}"
          >
           <b>Breking News ${index + 1}:-</b> ${element["title"]}
          </button>
        </h2>
        <div
          id="collapse${index}"
          class="accordion-collapse collapse"
          aria-labelledby="heading${index}"
          data-bs-parent="#newsAccordion"
        >
          <div class="accordion-body">
           ${element["description"]}
           <a href="${element["url"]}" target="_blank">Read more here</a>
          </div>
        </div>
      </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("error");
  }
};
xhr.send();
