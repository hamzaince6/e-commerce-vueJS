<template>
  <AppHeader />
  <HomeSlider />
  <ThreeCategories/>
  <OurProducts/>
  <SliderCategory/>
  <HomeGallery/>
  <AppFooter />
</template>

<script>
import OurProducts from "@/components/sections/OurProducts.vue";
import SliderCategory from "@/components/sections/SliderCategory.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import HomeSlider from "@/components/sections/HomeSlider.vue";
import HomeGallery from "@/components/sections/HomeGallery.vue";
import ThreeCategories from "@/components/sections/ThreeCategories.vue";
import AppHeader from "@/components/global/AppHeader.vue";

export default {
  components: {
    AppHeader, ThreeCategories, HomeGallery, HomeSlider, AppFooter, SliderCategory, OurProducts,
  }
}
</script>
