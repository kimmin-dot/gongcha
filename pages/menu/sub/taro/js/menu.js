const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll === 0) {
    // 맨 위일 때 투명
    header.classList.remove("colored");
  } else if (currentScroll < lastScroll) {
    // 스크롤 올릴 때
    header.classList.add("show", "colored");
    header.classList.remove("hide");
  } else {
    // 스크롤 내릴 때
    header.classList.add("hide");
    header.classList.remove("show");
  }

  lastScroll = currentScroll;
});
