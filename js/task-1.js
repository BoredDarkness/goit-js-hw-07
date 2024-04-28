document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelector("#categories");
  const elements = categories.querySelectorAll(".item");

  console.log(`Number of categories: ${elements.length}`);

  elements.forEach((element) => {
    const title = element.querySelector("h2").textContent;
    const numElements = element.querySelectorAll("li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${numElements}`);
  });
});
