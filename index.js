const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(back, text) {
  back.style.backgroundColor = "red";
  text.innerHTML = "this is a big blue box, now go look at console";
  text.style.fontSize = "40px";
}
console.log(DOMSelectors.box);

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
