import "./style/main.scss";
import Swiper, {Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const menuBurger = document.querySelector('.menu-burger');
const navbar = document.querySelector('.navbar');

menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('menu-burger_active');
  navbar.classList.toggle('navbar__active')
})

var swiper = new Swiper(".swiper", {
  loop: true,

  modules: [Navigation, Pagination],

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    clickable: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    350: {
      slidesPerView: 2.2
    },
    420: {
      slidesPerView: 2.5
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3
    },
    700: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 3
    },
    900: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 3.2,
    },
    1000: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 4,
    },
    1650: {
      slidesPerView: 4,
    },
    1800: {
      slidesPerView: 4,
    }

  }
});

///////////////////////////////anchors

///////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = document.querySelector('.header') // находим header и записываем в константу

    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.add('header_hidden') // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })

  }

  onScrollHeader() // вызываем основную функцию onScrollHeader

});


let modal = document.querySelector("#modal"),
  modalOverlay = document.querySelector("#modal-overlay"),
  closeButton = document.querySelector("#close-button"),
  openButtonAuth = document.querySelector("#open-button-auth"),
  openButtonReg = document.querySelector("#open-button-reg"),
  exitButton = document.querySelector("#exit-button");

function close (){
  modal.classList.add("closed");
  modalOverlay.classList.add("closed");
};

function open(){
  modal.classList.remove("closed");
  modalOverlay.classList.remove("closed");
};

closeButton.addEventListener('click', close);
exitButton.addEventListener('click', close);

openButtonAuth.addEventListener('click', open);
openButtonReg.addEventListener('click', open);

