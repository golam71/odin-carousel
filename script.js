const swiper = document.querySelector(".swiper");


function getFirstNonSwiperStuffChild() {
  let idx = 0;
  while (
    idx < swiper.children.length &&
    swiper.children[idx].classList[0]?.includes("swiper-stuff")
  ) {
    idx++;
  }
  return swiper.children[idx];
}

async function Next() {
  let firstImage = getFirstNonSwiperStuffChild();

  if (!firstImage) return;

  firstImage.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 300));
  swiper.appendChild(firstImage);
  firstImage.style.opacity = 1;
}

/**
 * Animates the transition to the previous image in the carousel.
 * 
 * This function finds the first non-swiper child element (assumed to be an image),
 * fades it out, moves it to the end of the swiper container, and then fades it back in.
 * 
 * @async
 * @function Previous
 * @returns {Promise<void>} Resolves when the transition animation is complete.
 */
/**
 * Asynchronously moves the first non-swiper child element to the end of the swiper container with a fade-out and fade-in animation.
 *
 * This function:
 * 1. Retrieves the first child element that is not part of the swiper's internal structure.
 * 2. If such an element exists, it fades out the element by setting its opacity to 0.
 * 3. Waits for 300 milliseconds to allow the fade-out animation to complete.
 * 4. Appends the faded-out element to the end of the swiper container.
 * 5. Fades the element back in by setting its opacity to 1.
 *
 * @async
 * @function Previous
 * @returns {Promise<void>} Resolves when the animation and DOM manipulation are complete.
 *
 * @throws {Error} If `getFirstNonSwiperStuffChild` or `swiper` is not defined in the scope.
 *
 * @example
 * // Moves the first image to the end with animation
 * await Previous();
 */
async function Previous() {
  let firstImage = getFirstNonSwiperStuffChild();

  if (!firstImage) return;

  firstImage.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 300));
  swiper.appendChild(firstImage);
  firstImage.style.opacity = 1;
}

document.getElementById("prev").addEventListener("click", Previous);
document.getElementById("next").addEventListener("click", Next);
