const sliderBanner = $(".slider--banner");
const btnOpenModal = document.querySelector(".modal__open");
const btnCloseModal = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const form = $("form");

AOS.init({
  once: true,
  mirror: true,
  duration: 800,
  easing: 'ease-in-out-quart'
});

sliderBanner.slick({
  draggable: true,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: false,
  speed: 600,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  nextArrow: '<button type="button" class="slick-next"></button>',
  prevArrow: '<button type="button" class="slick-prev"></button>',
});

const start = new Litepicker({
  element: document.getElementById("arrival")
});

const end = new Litepicker({
  element: document.getElementById("departure")
});

btnOpenModal.addEventListener("click", () => {
  modal.classList.add("modal--active");
})

btnCloseModal.addEventListener("click", () => {
  modal.classList.remove("modal--active");
})

form.validate({
  rules: {
    arrival: "required",
    departure: "required",
    guests: "required",
    child: "required",
  }
});