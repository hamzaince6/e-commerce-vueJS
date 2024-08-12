<template>
  <AppHeader />
  <HomeSlider />
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import HomeSlider from "@/components/sections/HomeSlider.vue";

export default defineComponent({
  components: {AppFooter, AppHeader, HomeSlider}
});
</script>

<style scoped>

</style>
