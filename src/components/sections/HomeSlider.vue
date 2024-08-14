<template>
  <div class="container-fluid">
    <div class="col-md-12 main-slider">
      <SwiperComponent
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :mousewheel="true"
          :modules="[Autoplay, Navigation]"
      >
        <SwiperSlideComponent v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="main-swiper-slide-img" />
          <div class="main-cta-box">
            <h1>{{ slide.title }}</h1>
            <h2 v-html="slide.subtitle"></h2>
            <p>{{ slide.description }}</p>
            <a href="#" class="slider-btn">Buy Now</a>
          </div>
        </SwiperSlideComponent>
      </SwiperComponent>
    </div>
  </div>
</template>

<script>
import { Autoplay, Navigation } from 'swiper/modules';

export default {
  data() {
    return {
      slides: [
        {
          image: require('@/assets/img/home-slider/1.jpg'),
          alt: 'Slide 1',
          title: 'New Arrival',
          subtitle: 'Discover Our <br> New Collection',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
        },
        {
          image: require('@/assets/img/home-slider/2.jpg'),
          alt: 'Slide 2',
          title: 'Featured Item',
          subtitle: 'Check Out Our <br> Latest Designs',
          description: 'Aliquam euismod sapien vel turpis facilisis, eget laoreet elit lacinia.'
        }
      ]
    };
  },
  setup() {
    return {
      Autoplay,
      Navigation
    };
  }
};
</script>



