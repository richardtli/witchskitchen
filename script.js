let STOP_SET_INTERVAL_COUNTER = 0;
const STOP_SET_INTERVAL = 150;
let timesInterval;

let scrollValue = 1;
const html = document.documentElement;
const body = document.body;
let pageHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

let introTitleText = document.querySelector(".IntroTitleText");
let introLogo = document.querySelector(".IntroLogo");
let introSubText = document.querySelector(".IntroSubText");
let averageTime = document.querySelector(".AverageTime");
let bestTime = document.querySelector(".BestTime");

window.addEventListener("scroll", () => {
  if (window.scrollY < document.documentElement.clientHeight * 3) {
    introTitleText.style.top = `${window.scrollY /3.5}px`;
    introSubText.style.top = `${window.scrollY / 3.5}px`;
    introLogo.style.top = `${window.scrollY / 2.5}px`;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("hidden")) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("Time")
    ) {
      timesInterval = setInterval(changeTime, 20);
      observer.unobserve(entry.target);
    }
  });
});

const toBeObserved = document.querySelectorAll(".being-observed");
toBeObserved.forEach((element) => observer.observe(element));

function changeTime() {
  STOP_SET_INTERVAL_COUNTER += 1;
  averageTime.innerText = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}:${Math.floor(Math.random() * 6)}${Math.floor(Math.random() * 10)}`;
  bestTime.innerText = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}:${Math.floor(Math.random() * 6)}${Math.floor(Math.random() * 10)}`;
  if (STOP_SET_INTERVAL_COUNTER > STOP_SET_INTERVAL) {
    clearInterval(timesInterval);
    averageTime.innerText = "26:12";
    bestTime.innerText = "19:45";
  }
}
