const title = document.querySelector(".title h1");

const rule = document.querySelector(".rule");

const pick = document.querySelector(".pick");

const gameSections = document.querySelectorAll(".game");
const pointBoxes = document.querySelectorAll(".score");

const outcome = document.querySelector(".outcome");

function sectionsOpacity(sections) {
  sections.forEach(section => {
    section.style.opacity = "0";
  });
}
function sectionsAnimation(sections) {
  sections.forEach(section => {
    section.style.opacity = "1";
    section.classList.add("pop-in");
  });
}
sectionsOpacity(gameSections);
sectionsOpacity(pointBoxes);

function itemOpacity(item) {
  item.style.opacity = "0";
}
itemOpacity(rule);
itemOpacity(pick);
itemOpacity(outcome);

window.addEventListener("load", () => {
  title.classList.add("title-ani");
  setTimeout(() => {
    outcome.classList.add("outcome-ani");
    outcome.style.opacity = "1";
  }, 2500);
  setTimeout(() => {
    rule.classList.add("title-ani");
    rule.style.opacity = "1";
  }, 4000);
  setTimeout(() => {
    pick.classList.add("pop-in");
    pick.style.opacity = "1";
  }, 6000);
  setTimeout(() => {
    sectionsAnimation(gameSections);
    sectionsAnimation(pointBoxes);
  }, 7000);
});
