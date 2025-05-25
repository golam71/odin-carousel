async function Next() {
  const swiper = document.querySelector(".swiper");
  let firstImage = swiper.children[0];

  if (firstImage.classList[0]?.includes("btn-container")) {
    firstImage = swiper.children[1];
  }

  firstImage.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 300));
  swiper.appendChild(firstImage);
  firstImage.style.opacity = 1;
}

async function Previous() {
  const swiper = document.querySelector(".swiper");
  let lastImage = swiper.children[swiper.children.length - 1];

  if (lastImage.classList[0]?.includes("btn-container")) {
    lastImage = swiper.children[swiper.children.length - 2];
  }

  lastImage.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 300));
  swiper.insertBefore(lastImage, swiper.children[0]);
  lastImage.offsetHeight;

  lastImage.style.opacity = 1;
}

document.getElementById("prev").addEventListener("click", Previous);
document.getElementById("next").addEventListener("click", Next);
