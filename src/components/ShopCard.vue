<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <ShopListBanner/>
  <AppFooter />
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';
import ShopListBanner from "@/components/sections/ShopListBanner.vue";

export default defineComponent({
  name: 'ShopCard',
  components: {
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
