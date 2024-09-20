<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <ShopCardComponents/>
  <ShopListBanner/>
  <AppFooter />
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';
import ShopListBanner from "@/components/sections/ShopListBanner.vue";
import ShopCardComponents from "@/components/sections/ShopCardComponents.vue";

export default defineComponent({
  name: 'ShopCard',
  components: {
    ShopCardComponents,
    ShopListBanner,
    AppHeader,
    ShopListHeader,
    AppFooter
  },
  data() {
    return {
      pageTitle: 'Cart',
    };
  }
});
</script>
