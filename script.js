let length;
document.querySelectorAll(".swiper").forEach((item) => {
  // add pagination to all of them
  length = item.querySelectorAll("img").length;
  for (let i = 0; i < length; i++) {
    let btn = document.createElement("button");
    btn.className = i;
    item.querySelector(".pagination").appendChild(btn);
  }
});

let list = document.querySelectorAll(".swiper img");

function showImage(image) {
  //   image.classList.remove("swiper-hidden");
  image.classList.add("active-image");
}

function hideAllImage() {
  list.forEach((image) => {
    // image.classList.add("swiper-hidden");
    image.classList.remove("active-image");
  });
}

hideAllImage();
showImage(list[0]);

let number = 0;

function next() {
  number++;
  if (number == length) {
    number = 0;
  }
  hideAllImage();
  showImage(list[number]);
  resetAllActiveButtons();
  setButton(number);
}

function previous() {
  number--;
  if (number == -1) {
    number = list.length - 1;
  }
  hideAllImage();
  showImage(list[number]);
  resetAllActiveButtons();
  setButton(number);
}

document.querySelector(".next").onclick = () => {
  next();
};

document.querySelector(".prev").onclick = () => {
  previous();
};

function resetAllActiveButtons() {
  document.querySelectorAll(".pagination button").forEach((btn) => {
    btn.classList.remove("active");
  });
}

function setButton(number) {
  let btn = document.querySelectorAll(".pagination button")[number];
  btn.classList.add("active");
}

document.querySelectorAll(".pagination button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let number = e.target.classList[0];
    hideAllImage();
    showImage(list[number]);
    resetAllActiveButtons();
    e.target.classList.add("active");
  });
});

let intervalId;

function startLogging() {
  intervalId = setInterval(() => {
    next();
    console.log(1);
  }, 2000);
}

function stopLogging() {
  clearInterval(intervalId);
}

startLogging();

document.querySelector(".swiper").addEventListener("mouseover", stopLogging);
document.querySelector(".swiper").addEventListener("mouseleave", startLogging);
