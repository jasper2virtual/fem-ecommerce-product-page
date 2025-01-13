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
import { ref } from 'vue'
import MobileHeader from './components/mobile-header.vue'
import DesktopHeader from './components/desktop-header.vue'
import Product from './components/product.vue'
import menuData from './data/menu'
import productData from './data/product'
const menuItems = ref(menuData)
const productItem=ref(productData)
</script>

<style lang="scss" scoped>
.main-content {
  margin-top:calc(var(--mobile-header-height) + var(--mobile-header-padding-top) + var(--mobile-header-padding-bottom));
}
@media (min-width: theme('screens.app-desktop')) {
  .main-content {
    margin-top:calc(var(--desktop-header-height) + var(--desktop-header-padding-top) + var(--desktop-header-padding-bottom));
  }
}
</style>