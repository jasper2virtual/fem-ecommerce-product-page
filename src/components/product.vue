<template>
    <div class="app-desktop:hidden">
        <mobile-images-viewer :images="props.productItem.images" />
        <div class="flex flex-col gap-4">
            <span>{{ props.productItem.brand }}</span>
            <h1>{{ props.productItem.name }}</h1>
            <p>{{ props.productItem.desc }}</p>
            <div class="flex gap-2">
                <span>${{ (props.productItem.price * props.productItem.discount / 100).toFixed(2) }}</span>
                <span class="bg-black text-white rounded px-2">{{ props.productItem.discount }}%</span>
                <span class="ml-auto">${{ props.productItem.price.toFixed(2) }}</span>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
interface ProductItem {
    brand: string;
    name: string;
    desc: string;
    price: number;
    discount: number;
    images: {
        src:string;
        alt:string;
        thumbnailSrc:string;
    }[];
}
const props = defineProps<{
    productItem: ProductItem
}>();

import MobileImagesViewer from './mobile-images-viewer.vue'



</script>