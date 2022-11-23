const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  Img: document.getElementById("Img"),
  set: document.getElementById("submit"),
  container: document.getElementById("container"),
  temp: document.querySelector(".fake"),
  getRid: document.getElementById("remove"),
  form: document.getElementById("form"),
  reset: document.getElementById("reset"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let outimg = DOMSelectors.Img.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="fake">
        <image src></image>
        <h1 class="son">${song}</h1>
        <h2 class="art">${artist}</h2>
        <img src="${outimg}" class="myImage"alt="">
        <br>
        <button id="remove" onclick="this.parentElement.remove()">Delete</button>
    </div>`
  );
});

DOMSelectors.reset.addEventListener("click", function (e) {
  e.container.remove();
});
