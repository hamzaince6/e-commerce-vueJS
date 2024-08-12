<template>
  <div class="container-fluid">
    <div class="col-md-12 main-slider">
      <SwiperComponent
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
          :mousewheel="true"
          @slideChange="onSlideChange"
      >
        <SwiperSlideComponent>
          <img src="@/assets/img/home-slider/1.jpg" alt="Slide 1" class="main-swiper-slide-img" />
          <div class="main-cta-box">
            <h1>New Arrival</h1>
            <h2>Discover Our <br> New Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <a href="#" class="slider-btn">
              Buy Now
            </a>
          </div>
        </SwiperSlideComponent>
        <SwiperSlideComponent>
          <img src="@/assets/img/home-slider/1.jpg" alt="Slide 1" class="main-swiper-slide-img" />
          <div class="main-cta-box">
            <h1>New Arrival</h1>
            <h2>Discover Our <br> New Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <a href="#" class="slider-btn">
              Buy Now
            </a>
          </div>
        </SwiperSlideComponent>
      </SwiperComponent>
    </div>
  </div>
</template>

<script>
import { Swiper as SwiperComponent, SwiperSlide as SwiperSlideComponent } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    SwiperComponent,
    SwiperSlideComponent
  }
};
</script>

<style scoped>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
