<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <CheckoutForm />
  <ShopListBanner />
  <AppFooter />
</template>

<script>
import {defineComponent} from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';
import ShopListBanner from "@/components/sections/ShopListBanner.vue";
import CheckoutForm from "@/components/sections/CheckoutForm.vue";

export default defineComponent({
  name: 'ShopCard',
  components: {
    AppHeader,
    AppFooter,
    ShopListHeader,
    ShopListBanner,
    CheckoutForm
  },
  data() {
    return {
      pageTitle: 'Checkout',
    };
  }
});
</script>
