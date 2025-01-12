<template>
    <div class="fixed inset-0 h-fit bg-white max-w-[--grid-width] w-full mx-auto
    pt-[--mobile-header-padding-top]
    pb-[--mobile-header-padding-bottom]
    pl-[--mobile-header-padding-left]
    pr-[--mobile-header-padding-right]">
        <header class="h-[--mobile-header-height] flex items-center">
            <div class="flex items-center gap-4">
                <button @click="isMenuOpen = !isMenuOpen">
                    <img src="/src/assets/images/icon-menu.svg" alt="Menu" />
                </button>
                <header-logo></header-logo>
            </div>
            <div class="ml-auto flex gap-4 items-center">
                <shopping-cart></shopping-cart>
                <avatar></avatar>
            </div>
        </header>
    </div>
    <transition>
        <div v-if="isMenuOpen" class="fixed inset-0 mx-auto bg-black/75 w-full max-w-[--grid-width]">
            <div class="max-w-[200px] bg-white flex flex-col h-full
            pt-[--mobile-header-padding-top]
            pb-[--mobile-header-padding-bottom]
            pl-[--mobile-header-padding-left]
            pr-[--mobile-header-padding-right]">
                <div class="flex items-center h-[--mobile-header-height]">
                    <button @click="isMenuOpen = !isMenuOpen">
                        <img src="/src/assets/images/icon-close.svg" alt="Close" />
                    </button>
                </div>
                <div class="max-h-[100px] grow"></div>
                <nav>
                    <ul class="flex flex-col gap-4">
                        <li v-for="item in props.menuItems" :key="item"><a href="#">{{ item }}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ShoppingCart from './shopping-cart.vue'
import Avatar from './avatar.vue'
import HeaderLogo from './header-logo.vue'
const isMenuOpen = ref(false)
const props = defineProps<{
    menuItems: string[]
}>()
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: transform .5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(-100%);
}

.v-enter-to,
.v-leave-from {
    transform: translateX(0);
}
</style>