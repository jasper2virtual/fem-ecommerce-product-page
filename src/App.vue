<template>
  <div class="app-desktop:hidden">
    <mobile-header :menu-items="menuItems"></mobile-header>
  </div>
  <div class="hidden app-desktop:block">
    <desktop-header :menu-items="menuItems"></desktop-header>
  </div>

  <main class="main-content mx-auto max-w-[--grid-width] border-t 
   p-[--mobile-main-content-padding] app-desktop:p-[--desktop-main-content-padding]
  ">
    <product :product-item="productItem" />
  </main>
</template>
<script lang="ts" setup>
import { ref, provide } from 'vue'

import MobileHeader from './components/mobile-header.vue'
import DesktopHeader from './components/desktop-header.vue'
import Product from './components/product.vue'
import menuData, { type TmenuItem } from './data/menu'
import productData, { type Tproduct } from './data/product'
import { useShoppingCart } from './shoppingCart'
const menuItems = ref<TmenuItem[]>(menuData)
const productItem = ref<Tproduct>(productData)
provide('shoppingCart', useShoppingCart())

</script>

<style lang="scss" scoped>
.main-content {
  margin-top:--mobile-main-content-margin-top;
}
@media (min-width: theme('screens.app-desktop')) {
  .main-content {
    margin-top:--desktop-main-content-margin-top;
  }
}
</style>