<template>
    <div class="flex flex-col gap-4">
        <div>
            <mobile-images-viewer :images="props.productItem.images" />
        </div>
        <div class="flex flex-col gap-4">
            <span class="uppercase">{{ props.productItem.brand }}</span>
            <h1>{{ props.productItem.name }}</h1>
            <p>{{ props.productItem.desc }}</p>
            <div class="flex gap-2">
                <div class="flex gap-2">
                    <span>${{ (props.productItem.price * props.productItem.discount / 100).toFixed(2) }}</span>
                    <span class="bg-black text-white rounded px-2">{{ props.productItem.discount }}%</span>
                </div>
                <span class="ml-auto line-through">${{ props.productItem.price.toFixed(2) }}</span>
            </div>

            <div class="flex flex-col gap-4">
                <div class="flex rounded bg-[#F6F8FD] p-4">
                    <button @click="qty -= 1"><img src="/src/assets/images/icon-minus.svg" alt="minus" /></button>
                    <span class=" grow text-center">{{ qty }}</span>
                    <button @click="qty += 1"><img src="/src/assets/images/icon-plus.svg" alt="plus" /></button>
                </div>
                <button class="bg-[#FF7E1B] text-black rounded p-4 flex gap-4 justify-center shadow-2xl shadow-[#FFC599]"
                @click="shoppingCart.add(props.productItem, qty);qty=0"
                >
                    <div class="icon-cart" v-html="iconCart"></div>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import iconCart from '/src/assets/images/icon-cart.svg?raw'
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

import MobileImagesViewer from './mobile-images-viewer.vue'
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
</style>
