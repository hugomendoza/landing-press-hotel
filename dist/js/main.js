const sliderBanner=$(".slider--banner"),btnOpenModal=document.querySelector(".modal__open"),btnCloseModal=document.querySelector(".modal__close"),modal=document.querySelector(".modal"),form=$("form");AOS.init({once:!0,mirror:!0,duration:800,easing:"ease-in-out-quart"}),sliderBanner.slick({draggable:!0,fade:!0,infinite:!0,autoplay:!0,autoplaySpeed:8e3,pauseOnHover:!1,speed:600,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>'});const start=new Litepicker({element:document.getElementById("arrival")}),end=new Litepicker({element:document.getElementById("departure")});btnOpenModal.addEventListener("click",()=>{modal.classList.add("modal--active")}),btnCloseModal.addEventListener("click",()=>{modal.classList.remove("modal--active")}),form.validate({rules:{arrival:"required",departure:"required",guests:"required",child:"required"}});