let DOMSelectors = {
  set: document.getElementById("submit"),
  container: document.getElementById("container"),
  temp: document.querySelector(".false"),
  getRid: document.getElementById("remove"),
  form: document.getElementById("form"),
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  Img: document.getElementById("Img"),
  remove: document.querySelectorAll("#remove"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.Img.value;

  create(DOMSelectors.container, song, artist, img);

  query();
  clear();
});

function create(container, song, artist, img) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="false">
      <image src></image>
      <h1 class="son">${song}</h1>
      <h2 class="art">${artist}</h2>
      <img src="${img}" class="myImage"alt="">
      <br>
      <button id="remove" >Delete</button>
    </div>`
  );
}

function clear() {
  DOMSelectors.songName.value = "";
  DOMSelectors.artistName.value = "";
  DOMSelectors.Img.value = "";
}

function query() {
  DOMSelectors.remove = document.querySelectorAll("#remove");
  DOMSelectors.remove.forEach((button) =>
    button.addEventListener("click", function () {
      this.parentElement.remove();
    })
  );
}
