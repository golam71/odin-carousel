document.querySelectorAll(".swiper").forEach((item) => {
  // add pagination to all of them
  let length = item.querySelectorAll("img").length;
  for (let i = 0; i < length; i++) {
    let btn = document.createElement("button");
    btn.class = i;
    item.querySelector(".pagination").appendChild(btn);
  }
});

let list = document.querySelectorAll(".swiper img");

function showImage(image) {
  image.classList.remove("swiper-hidden");
}

function hideAllImage() {
  list.forEach((image) => {
    image.classList.add("swiper-hidden");
  });
}

hideAllImage();
showImage(list[0]);

function next() {
  for (let index = 0; index < list.length; index++) {
    if (!list[index].classList.contains("swiper-hidden")) {
      list[index].classList.add("swiper-hidden");
      if (list[index + 1]) {
        list[index + 1].classList.remove("swiper-hidden");
      }
      break;
    }
  }
}
