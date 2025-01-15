<template>
    <header class="fixed inset-0 bg-white h-fit  z-10 max-w-[--grid-width] mx-auto
       pt-[--desktop-header-padding-top]
        pb-[--desktop-header-padding-bottom]
        pl-[--desktop-header-padding-left]
        pr-[--desktop-header-padding-right]
        border-b">
        <div class="h-[--desktop-header-height] flex items-center">

            <div class="flex items-center gap-12">
                <header-logo />
                <nav>
                    <ul class="flex gap-8 h-full items-center">
                        <li v-for="item in props.menuItems" :key="item">
                            <div class="grid place-items-center">
                                <a href="#" class=" col-span-full row-span-full text-[#69707D] hover:text-black peer">{{
                                    item }}</a>
                                <hr
                                    class="w-full col-span-full row-span-full peer-hover:border-b-2 peer-hover:border-b-[#FF7E1B] border-none peer-hover:border-solid translate-y-[calc(var(--desktop-header-height)/2+var(--desktop-header-padding-bottom))] ">
                            </div>

                        </li>
                    </ul>
                </nav>
            </div>
            <div class="ml-auto flex gap-8 items-center">
                <ShoppingCart />
                <Avatar />
            </div>

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