const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail-button");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const src = thumbnail.getAttribute("data-src");
    const alt = thumbnail.getAttribute("data-alt");

    mainImage.src = src;
    mainImage.alt = alt;

    thumbnails.forEach((t) => t.classList.remove("active"));
    thumbnail.classList.add("active");
  });
});
