const author = document.querySelector(".author");
const tags = document.querySelector(".tags");
const quote = document.querySelector(".quote");
const btnRandom = document.querySelector(".random");
const btnCopy = document.querySelector(".copy");

function quoteLoad() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      author.textContent = data.author;
      quote.textContent = `"${data.content}"`;
      tags.innerHTML = "";
      data.tags.forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.classList = "py-1 px-3 border rounded-full";
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
      });
    })
    .catch((error) => {
      throw error;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  quoteLoad();
});

btnRandom.addEventListener("click", quoteLoad);
