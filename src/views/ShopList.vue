<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <ShopListFilterComponents/>
  <ShopListComponents/>
  <ShopListBanner/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ShopListHeader from "@/components/sections/ShopListHeader.vue";
import ShopListFilterComponents from "@/components/sections/ShopListFilterComponents.vue";
import ShopListComponents from "@/components/sections/ShopListComponents.vue";
import ShopListBanner from "@/components/sections/ShopListBanner.vue";

export default defineComponent({
  components: {ShopListBanner, ShopListComponents, ShopListFilterComponents, ShopListHeader, AppFooter, AppHeader,},
  data() {
    return {
      pageTitle: 'Shop'
    };
  }
});
</script>
