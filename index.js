const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

DOMSelectors.button.addEventListener("click", function () {
  const year = parseInt(document.getElementById("input").value);
});

if ((year = 1 && year <= 10)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Keith.</p> 
`
  );
} else if ((year = 11 && year <= 20)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Ryan.</p> 
`
  );
} else if ((year = 21 && year <= 30)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Mahamad.</p> 
`
  );
} else if ((year = 31 && year <= 40)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Karen.</p> 
`
  );
} else if ((year = 41 && year <= 50)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was donald.</p> 
`
  );
} else if ((year = 51 && year <= 60)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was gertrud.</p> 
`
  );
} else if ((year = 61 && year <= 70)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was John.</p> 
`
  );
} else if ((year = 71 && year <= 80)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Jakie.</p> 
`
  );
} else if ((year = 81 && year <= 90)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text">  the most popular name at the time was Qui.</p> 
`
  );
} else if ((year = 91 && year <= 100)) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="text"> the most popular name at the time was Sergay.</p> 
`
  );
}
