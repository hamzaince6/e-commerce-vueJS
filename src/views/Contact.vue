<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <ContactForm />
  <ShopListBanner />
  <AppFooter />
</template>

<script>
import {defineComponent} from 'vue';
import AppHeader from '@/components/global/AppHeader.vue';
import AppFooter from '@/components/global/AppFooter.vue';
import ShopListHeader from '@/components/sections/ShopListHeader.vue';
import ShopListBanner from "@/components/sections/ShopListBanner.vue";
import ContactForm from "@/components/sections/ContactForm.vue";

export default defineComponent({
  name: 'ShopCard',
  components: {
    AppHeader,
    AppFooter,
    ShopListHeader,
    ShopListBanner,
    ContactForm,
  },
  data() {
    return {
      pageTitle: 'Contact',
    };
  }
});
</script>
