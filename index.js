const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("box"),
};

DOMSelectors.button.addEventListener("click", function () {
  const year = parseInt(document.getElementById("input").value);
  const age = year;

  if (year > 0 && year <= 10) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Keith.</p> 
`
    );
  } else if (year > 10 && year <= 20) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Ryan.</p> 
`
    );
  } else if (year > 20 && year <= 30) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Mahamad.</p> 
`
    );
  } else if (year > 30 && year <= 40) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Karen.</p> 
`
    );
  } else if (year > 40 && year <= 50) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was donald.</p> 
`
    );
  } else if (year > 50 && year <= 60) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was gertrud.</p> 
`
    );
  } else if (year > 60 && year <= 70) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was John.</p> 
`
    );
  } else if (year > 70 && year <= 80) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Jakie.</p> 
`
    );
  } else if (year > 80 && year <= 90) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  the most popular name for ${age} year olds was Qui.</p> 
`
    );
  } else if (year > 90 && year <= 100) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> the most popular name for ${age} year olds was Sergay.</p> 
`
    );
  }
  DOMSelectors.input.value = "";
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
