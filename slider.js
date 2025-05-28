// refactored swiper.js

export class SliderJs {
  constructor(element, time) {
    this.element = element;
    this.index = 0;
    this.list = Array.from(element.querySelectorAll("img"));
    this.intervalId = null;
    this.time = time;

    this.init();
  }
  init() {
    this.createButtons();
    this.createPagination();
    this.showImage(0);
    this.setButton(0);
    this.startAutoSlide();

    this.startAutoSlide = this.startAutoSlide.bind(this);
    this.stopAutoSlide = this.stopAutoSlide.bind(this);

    this.element.addEventListener("mouseover", this.stopAutoSlide);
    this.element.addEventListener("mouseleave", this.startAutoSlide);
  }

  createButtons() {
    const btnContainer = document.createElement("div");
    btnContainer.className = "swiper-stuff btn-container";
    btnContainer.innerHTML = `
      <button class="prev">&lt;</button>
      <button class="next">&gt;</button>`;
    this.element.appendChild(btnContainer);

    this.element.querySelector(".next").onclick = () => this.next();
    this.element.querySelector(".prev").onclick = () => this.previous();
  }

  createPagination() {
    const pagination = document.createElement("div");
    pagination.className = "swiper-stuff pagination";

    this.list.forEach((item, index) => {
      const button = document.createElement("button");
      button.className = index;
      button.addEventListener("click", (e) => {
        let index = e.target.className;
        this.goto(index);
      });
      pagination.appendChild(button);
    });
    this.element.appendChild(pagination);
  }
  goto(index) {
    this.hideAllImages();
    this.showImage(index);
    this.clearButtons();
    this.setButton(index);
  }
  showImage(index) {
    this.list[index].classList.add("active-image");
  }
  hideAllImages() {
    this.list.forEach((img) => img.classList.remove("active-image"));
  }
  setButton(index) {
    this.element
      .querySelectorAll(".pagination button")
      [index].classList.add("active");
  }
  clearButtons() {
    this.element
      .querySelectorAll(".pagination button")
      .forEach((item) => item.classList.remove("active"));
  }
  next() {
    this.index = (this.index + 1) % this.list.length;
    this.goto(this.index);
  }

  previous() {
    this.index = (this.index - 1) % this.list.length;
    this.goto(this.index);
  }
  startAutoSlide() {
    this.intervalId = setInterval(() => this.next(), this.time);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }
}
