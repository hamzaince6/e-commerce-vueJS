<template>
  <AppHeader />
  <ProductDetail/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ProductDetail from "@/components/sections/ProductDetail.vue";

export default defineComponent({
  components: {ProductDetail, AppFooter, AppHeader,},
});
</script>
