<template>
    <header class="fixed inset-0 bg-white mx-auto h-fit max-w-[--grid-width] flex z-10
       pt-[--desktop-header-padding-top]
        pb-[--desktop-header-padding-bottom]
        pl-[--desktop-header-padding-left]
        pr-[--desktop-header-padding-right]
        border-b">
        <div class="flex items-center gap-12">
            <header-logo />
            <nav>
                <ul class="flex gap-8 h-full items-center">
                    <li v-for="item in props.menuItems" :key="item">
                        <div>
                            <a href="#" class="text-[#69707D] hover:text-black peer">{{ item }}</a>
                            <hr class="peer-hover:shadow-[0_2px_#FF7E1B] border-none peer-hover:border-solid translate-y-7 ">
                        </div>

                    </li>
                </ul>
            </nav>
        </div>
        <div class="ml-auto flex gap-8 items-center">
            <ShoppingCart />
            <Avatar />
        </div>
    </header>
</template>
<script lang="ts" setup>
import ShoppingCart from './shopping-cart.vue'
import Avatar from './avatar.vue'
import HeaderLogo from './header-logo.vue'
const props = defineProps<{
    menuItems: string[]
}>()
</script>