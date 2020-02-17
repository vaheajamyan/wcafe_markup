const readMore = document.querySelector(".read-more");
const text = document.querySelector(".information__description-text_bottom");
const imageList = document.querySelectorAll(".information__home-list");
const imagePreview = document.querySelector(".image-preview");

imageList.forEach((item) => {
   item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const imgPreview = document.querySelector(".image-preview__img");

      imagePreview.classList.add("show");
      imgPreview.src = img.src;

   })
});

imagePreview.addEventListener("click", () => {
   imagePreview.classList.remove("show");
});

readMore.addEventListener("click", () => {
   text.classList.toggle("auto");
   if(text.classList.contains("auto")) {
      readMore.innerHTML = "Скрыть";
   }  else {
      readMore.innerHTML = "Читать дальше";
   }
   
});

