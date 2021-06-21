"use strict";
// Please don't delete the 'use strict' line above

console.log({ nobels });

const getMain = () => document.querySelector(".main");

const createTitle = () => {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "NOBEL PRIZES!!";
  getMain().appendChild(title);
};

const createYear = (year) => {
  const yearElement = document.createElement("h2");
  yearElement.classList.add("year");
  yearElement.innerText = year;
  getMain().appendChild(yearElement);
};

const createCategory = (category) => {
  const categoryEl = document.createElement("h3");
  categoryEl.classList.add("category");
  categoryEl.innerText = category;
  getMain().appendChild(categoryEl);
};

const createMotivation = (motivation) => {
  if (motivation === undefined) {
    return;
  }
  const motivationEl = document.createElement("h4");
  motivationEl.classList.add("motivation");
  motivationEl.innerText = motivation;
  getMain().appendChild(motivationEl);
};

const createLaureates = (laureates) => {
  const ul = document.createElement("ul");
  ul.classList.add("laureates");
  for (const laureate of laureates) {
    const li = document.createElement("li");
    li.innerText = `firstname: ${laureate.firstname}, lastname: ${laureate.surname}, motivation:${laureate.motivation}, share:${laureate.share}`;
    ul.appendChild(li);
  }
  getMain().appendChild(ul);
};

createTitle();

for (const prize of nobels.prizes) {
  createYear(prize.year);
  createCategory(prize.category);
  createMotivation(prize.overallMotivation);
  createLaureates(prize.laureates);
}
