const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__conten-item");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

function openTab(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => {
    item.classList.remove("active");
  });
  tabContent.forEach((item) => {
    item.classList.remove("active");
  });

  tabTarget.classList.add("active");

  document.getElementById(button).classList.add("active");
}

tabItem.forEach((item) => {
  item.addEventListener("click", openTab);
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
