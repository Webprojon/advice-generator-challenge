"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // Selectors
  const adviceId = document.querySelector(".advice__id");
  const advice = document.querySelector(".advice");
  const randomAdvice = document.querySelector(".random__advice");

  let currentIndex = 0;
  let items;
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      items = data;
      renderData(items);
    })
    .catch((error) => {
      console.error(error);
    });

  function renderData(items) {
    currentIndex = Math.floor(Math.random() * items.length);
    adviceId.textContent = `Advice # ${currentIndex}`;
    advice.textContent = items[currentIndex].text;
  }

  randomAdvice.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    renderData(items);
  });
});
