<template>
  <AppHeader />
  <ProductDetail/>
  <ProductDescription/>
  <RelatedProducts/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ProductDetail from "@/components/sections/ProductDetail.vue";
import ProductDescription from "@/components/sections/ProductDescription.vue";
import RelatedProducts from "@/components/sections/RelatedProducts.vue";

export default defineComponent({
  components: {RelatedProducts, ProductDescription, ProductDetail, AppFooter, AppHeader,},
});
</script>

