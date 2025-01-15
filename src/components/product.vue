<template>
    <div class="product-wrapper">
        <div class="app-desktop:hidden">
            <mobile-images-viewer :images="props.productItem.images" />
        </div>
        <div class="hidden app-desktop:block app-desktop:col-span-6">
            <desktop-images-viewer :images="props.productItem.images" />
        </div>
        <div class="flex flex-col gap-4 
        app-desktop:col-span-6 app-desktop:max-w-[445px] app-desktop:gap-8">
            <span class="uppercase text-xs font-bold tracking-widest text-[#69707D]">{{ props.productItem.brand }}</span>
            <h1 class="font-bold text-[calc(28rem/16)]">{{ props.productItem.name }}</h1>
            <p class="text-[#69707D] text-[calc(15rem/16)]">{{ props.productItem.desc }}</p>
            <div class="flex gap-2 items-center app-desktop:flex-col app-desktop:items-start">
                <div class="flex gap-2 items-center">
                    <span class="font-bold text-[calc(28rem/16)]">${{ (props.productItem.price * props.productItem.discount / 100).toFixed(2) }}</span>
                    <span class="bg-black font-bold text-white rounded px-2">{{ props.productItem.discount }}%</span>
                </div>
                <span class="line-through font-bold
                ml-auto app-desktop:ml-0 text-[#69707D]
                ">${{ props.productItem.price.toFixed(2) }}</span>
            </div>

            <div class="flex flex-col gap-4
            app-desktop:flex-row 
            ">
                <div class="flex rounded bg-[#F6F8FD] p-4 app-desktop:grow-[2]">
                    <button class="btn-minus" @click="qty -= 1" v-html="iconMinus"></button>
                    <span class=" grow text-center">{{ qty }}</span>
                    <button class="btn-plus" @click="qty += 1" v-html="iconPlus"></button>
                </div>
                <button
                    class="bg-[#FF7E1B] hover:bg-[#FFAB6A] text-black rounded p-4 flex gap-4 justify-center shadow-2xl shadow-[#FFC599]
                    app-desktop:grow-[3]
                    "
                    @click="shoppingCart.add(props.productItem, qty); qty = 0">
                    <div class="icon-cart" v-html="iconCart"></div>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import MobileImagesViewer from './mobile-images-viewer.vue'
import desktopImagesViewer from './desktop-images-viewer.vue';
import iconCart from '/src/assets/images/icon-cart.svg?raw'
import iconMinus from '/src/assets/images/icon-minus.svg?raw'
import iconPlus from '/src/assets/images/icon-plus.svg?raw'
import { inject } from 'vue'


interface ProductItem {
    brand: string;
    name: string;
    desc: string;
    price: number;
    discount: number;
    images: {
        src: string;
        alt: string;
        thumbnailSrc: string;
    }[];
}
const props = defineProps<{
    productItem: ProductItem
}>();

const qty = ref(0)
watch(qty, (newVal) => {
    if (newVal < 0) {
        qty.value = 0
    }
})

const shoppingCart = inject('shoppingCart')

</script>
<style lang="scss" scoped>
.icon-cart * {
    @apply fill-black;
}

.btn-minus:hover *, .btn-plus:hover * {
    @apply fill-[#FFAB6A];
}

.product-wrapper {
    @apply flex flex-col gap-4;
}

@media (min-width: theme('screens.app-desktop')) {
    .product-wrapper {
        display: grid;
        grid-template-columns: repeat(var(--grid-column-count), var(--grid-column-width));
        grid-gap: var(--grid-gutter-width);
        place-items: center;
    }
}
</style>
