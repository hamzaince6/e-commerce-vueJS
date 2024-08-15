<template>
  <section class="pt-100 mb-100">
    <div class="container-fluid">
      <div class="gallery-swiper">
        <Swiper
            :slides-per-view="4"
            :space-between="10"
            :loop="true"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :pagination="{ clickable: false }"
            :modules="[Navigation, Pagination]"
            class="swiper-container"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" class="gallery-img" :alt="'Image ' + (index + 1)">
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
        { image: './assets/img/home-gallery/3.jpg' },
      ],
    };
  },
  setup() {
    return {
      Navigation,
      Pagination,
    };
  },
};
</script>

<style scoped>
.gallery-swiper {
  position: relative;
}

.swiper-container {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-img:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>
