import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

new Swiper(".gold-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: { nextEl: ".gold-next", prevEl: ".gold-prev" },
  pagination: { el: ".gold-swiper .swiper-pagination", clickable: true },
});

new Swiper(".silver-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: { nextEl: ".silver-next", prevEl: ".silver-prev" },
  pagination: { el: ".silver-swiper .swiper-pagination", clickable: true },
});

new Swiper(".bronze-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: { nextEl: ".bronze-next", prevEl: ".bronze-prev" },
  pagination: { el: ".bronze-swiper .swiper-pagination", clickable: true },
});
