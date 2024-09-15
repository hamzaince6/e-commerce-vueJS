<template>
    <AppHeader />
    <ShopListHeader :title="pageTitle" />
    <AppFooter />
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';

export default defineComponent({
  components: {ShopListHeader, AppFooter, AppHeader},
  data() {
    return {
      pageTitle: 'Card',
    };
  }
});
</script>
