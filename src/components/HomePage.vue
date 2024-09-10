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
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import HomeSlider from "@/components/sections/HomeSlider.vue";
import ThreeCategories from "@/components/sections/ThreeCategories.vue";
import OurProducts from "@/components/sections/OurProducts.vue";
import SliderCategory from "@/components/sections/SliderCategory.vue";
import HomeGallery from "@/components/sections/HomeGallery.vue";

export default defineComponent({
  components: {AppFooter, AppHeader, HomeSlider,ThreeCategories,OurProducts,SliderCategory,HomeGallery},
});
</script>
