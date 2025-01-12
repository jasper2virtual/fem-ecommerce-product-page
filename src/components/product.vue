<template>
    <mobile-images-viewer :images="props.productItem.images" />
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