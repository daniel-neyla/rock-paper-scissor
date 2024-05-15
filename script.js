var element = document.querySelector(".move-container");

element.addEventListener("mousedown", function () {
  this.classList.add("clicked");
});

element.addEventListener("mouseup", function () {
  this.classList.remove("clicked");
});

// buttons
function showRules() {
  document.querySelector(".rules").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
}

function hideRules() {
  document.querySelector(".rules").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}
