<template>
  <AppHeader />
  <ShopListHeader :title="pageTitle" />
  <shop-card-components/>
  <ShopListBanner/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ShopListHeader from "@/components/sections/ShopListHeader.vue";
import ShopListBanner from "@/components/sections/ShopListBanner.vue";
import ShopCardComponents from "@/components/sections/ShopCardComponents.vue";

export default defineComponent({
  components: {ShopListBanner, ShopListHeader, AppFooter, AppHeader,ShopCardComponents},
  data() {
    return {
      pageTitle: 'Shop'
    };
  }
});
</script>
