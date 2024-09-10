<template>
  <AppHeader />
  <ShopListHeader />
  <ShopListFilterComponents/>
  <ShopListComponents/>
  <AppFooter />
</template>

<script>
import {defineComponent} from "vue";
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import ShopListHeader from "@/components/sections/ShopListHeader.vue";
import ShopListFilterComponents from "@/components/sections/ShopListFilterComponents.vue";
import ShopListComponents from "@/components/sections/ShopListComponents.vue";

export default defineComponent({
  components: {ShopListComponents, ShopListFilterComponents, ShopListHeader, AppFooter, AppHeader,},
});
</script>
