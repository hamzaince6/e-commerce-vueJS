<template>
  <section class="slider-category-section pt-100 pb-100">
    <div class="container slider-category">
      <div class="row">
        <div class="col-md-4 slider-category-title">
          <h1>50+ Beautiful rooms<br>inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <a href="#" class="slider-category-btn mt-20 mb-20">
            Explore More
          </a>
        </div>
        <div class="col-md-8">
          <Swiper
              :slides-per-view="2"
              :space-between="2"
              :loop="true"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
              :pagination="false"
              :modules="[Autoplay, Navigation]"
              class="category-swiper"
              :breakpoints="{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              570: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
            }"
              @slideChange="handleSlideChange"
          >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
              <div class="category-img">
                <img :src="slide.image" class="img-fluid" :alt="slide.alt"/>
                <div class="overlay-box">
                  <div class="category-img-box">
                    <h2>
                      {{ slide.number }}
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="2" viewBox="0 0 27 2" fill="none">
                        <path d="M0 1H27" stroke="#616161"/>
                      </svg>
                      {{ slide.title }}
                    </h2>
                    <h3>{{ slide.subtitle }}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div class="swiper-button-prev swiper-button-prev-category" ref="categoryprevButton"></div>
            <div class="swiper-button-next swiper-button-prev-category"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: './assets/img/slider-category/11.jpg',
          alt: 'Slide 1',
          number: '01',
          title: 'Bed Room',
          subtitle: 'Inner Peace',
        },
        {
          image: './assets/img/slider-category/12.jpg',
          alt: 'Slide 2',
          number: '02',
          title: 'Living Room',
          subtitle: 'Comfort Zone',
        },
        {
          image: './assets/img/slider-category/13.jpg',
          alt: 'Slide 3',
          number: '03',
          title: 'Dining Room',
          subtitle: 'Family Time',
        },
      ],
    };
  },
  methods: {
    handleSlideChange(swiper) {
      const prevButton = this.$refs.categoryprevButton;
      if (swiper.activeIndex > 0) {
        prevButton.style.display = 'block';
      } else {
        prevButton.style.display = 'none';
      }
    },
  },
  setup() {
    return {
      Autoplay,
      Navigation,
    };
  },
};
</script>
