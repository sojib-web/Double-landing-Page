// @ts-nocheck
const containerElement = document.querySelector(".container");
const leftEle = document.querySelector(".left");
const rightEle = document.querySelector(".right");

// @ts-ignore
leftEle.addEventListener("mouseenter", () => {
  containerElement.classList.add("active-left");
});

leftEle.addEventListener("mouseleave", () => {
  containerElement.classList.remove("active-left");
});

rightEle.addEventListener("mouseenter", () => {
  containerElement.classList.add("active-right");
});

rightEle.addEventListener("mouseleave", () => {
  containerElement.classList.remove("active-right");
});
