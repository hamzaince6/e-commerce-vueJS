<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <ComparisonComponents/>
  <ShopListBanner/>
  <AppFooter />
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';
import ComparisonComponents from "@/components/sections/ComparisonComponents.vue";
import ShopListBanner from "@/components/sections/ShopListBanner.vue";

export default defineComponent({
  components: {ShopListBanner, ComparisonComponents, ShopListHeader, AppFooter, AppHeader},
  data() {
    return {
      pageTitle: 'Product Comparison',
    };
  }
});
</script>

