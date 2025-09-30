const tabs = document.querySelectorAll(".tabMenu li");
const panes = document.querySelectorAll(".tabPane");

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
    // 탭 버튼 상태 변경
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // 콘텐츠 전환
    panes.forEach(p => p.classList.remove("active"));
    panes[i].classList.add("active");
    });
});

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

AOS.init({
  duration: 1000,
  once: false,
  offset: 500,
});