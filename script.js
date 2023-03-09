const kamote = document.querySelectorAll(".links__item h4");
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});


// const btnShow = document.querySelector('.btn__show');
// const btnBack = document.querySelector('.btn__back');
// const body = document.querySelector('body');

// if(btnShow) {
//     btnShow.addEventListener('click', () => {
//         body.classList.add('show');
//     })
// }
// if(btnBack) {
//     btnBack.addEventListener('click', () => {
//         body.classList.remove('show');
//     })
// }