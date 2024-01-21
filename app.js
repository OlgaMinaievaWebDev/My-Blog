const currentYear = new Date().getFullYear();
console.log(currentYear);

document.getElementById("year").textContent = currentYear;

const viewMore = document.getElementById("view-more");

viewMore.addEventListener("click", function () {
  const elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    element.classList.remove("hidden");
  });
});
