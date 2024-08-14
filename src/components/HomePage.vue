<template>
  <AppHeader />
  <HomeSlider />
  <ThreeCategories/>
  <OurProducts/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import HomeSlider from "@/components/sections/HomeSlider.vue";
import ThreeCategories from "@/components/sections/ThreeCategories.vue";
import OurProducts from "@/components/sections/OurProducts.vue";

export default defineComponent({
  components: {AppFooter, AppHeader, HomeSlider,ThreeCategories,OurProducts},
});
</script>

<style scoped>

</style>
