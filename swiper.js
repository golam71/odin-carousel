//refactored script.js

function setSwiper(element) {
  let currentIndex = 0;
  //adding left right button
  let btnCcontainer = document.createElement("div");
  btnCcontainer.className = "swiper-stuff btn-container";
  btnCcontainer.innerHTML = `
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>`;
  element.appendChild(btnCcontainer);

  // adding pagination
  let pagination = document.createElement("div");
  pagination.className = "swiper-stuff pagination";
  let list = Array.from(element.querySelectorAll("img"));

  list.forEach((item, index) => {
    let button = document.createElement("button");
    button.className = index;
    button.addEventListener("click", (e) => {
      let index = e.target.className;
      hideAllImages();
      showImage(index);
      clearButtons();
      setButton(index);
    });
    pagination.appendChild(button);
  });
  element.appendChild(pagination);

  function showImage(number) {
    list[number].classList.add("active-image");
  }
  showImage(0);

  function hideAllImages() {
    console.log(list);
    list.forEach((img) => {
      img.classList.remove("active-image");
    });
  }
  function clearButtons() {
    element
      .querySelectorAll(".pagination button")
      .forEach((item) => item.classList.remove("active"));
  }
  function setButton(index) {
    element
      .querySelectorAll(".pagination button")
      [index].classList.add("active");
  }

  setButton(0);
  function next() {
    currentIndex++;
    hideAllImages();
    if (currentIndex == list.length) {
      currentIndex = 0;
    }
    clearButtons();
    setButton(currentIndex);
    showImage(currentIndex);
  }

  function previous() {
    currentIndex--;
    hideAllImages();
    if (currentIndex == list.length) {
      currentIndex = this.length;
    }
    clearButtons();
    setButton(currentIndex);
    showImage(currentIndex);
  }

  element.querySelector(".next").onclick = () => next();
  element.querySelector(".prev").onclick = () => next();
}
