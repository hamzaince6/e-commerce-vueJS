<template>
  <AppHeader />
  <HomeSlider />
  <ThreeCategories/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import HomeSlider from "@/components/sections/HomeSlider.vue";
import ThreeCategories from "@/components/sections/ThreeCategories.vue";

export default defineComponent({
  components: {AppFooter, AppHeader, HomeSlider,ThreeCategories},
});
</script>

<style scoped>

</style>
