document.addEventListener("DOMContentLoaded", function () {
  let ketik = new TypeIt("#typeing", {});
  for (let i = 1; i <= 100; i++) {
    ketik.type("Aku Pelajar").pause(700).delete(11).type("Ingin Sukses").pause(700).delete(13);
  }
  ketik.go();
});

//toggle header
let hamburger = document.getElementById("hamburger-button");
let header = document.getElementById("header");
let main = document.getElementById("main");

let isHidden = false;
hamburger.addEventListener("click", function () {
  if (isHidden == false) {
    header.classList.add("hidden");
    hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>";
    main.classList.add("full-width");
    isHidden = true;
  } else {
    header.classList.remove("hidden");
    hamburger.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    main.classList.remove("full-width");
    isHidden = false;
  }

  console.log(isHidden);
});

window.onscroll = function () {
  if (document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop) {
    hamburger.classList.add("active");
  } else {
    hamburger.classList.remove("active");
  }
};
