<template>
    <div class="relative -mx-[--mobile-main-content-padding] -mt-[--mobile-main-content-padding]">
        <div class="grid place-items-center">
            <Transition name="viewer">
                <img :key="currentIndex" :src="currentImage.src" :alt="currentImage.alt" class=" object-cover w-full col-span-full row-span-full" />
            </Transition>
        </div>
        <button class="nav-btn left-4" @click="goPreviousImage"><img src="/src/assets/images/icon-previous.svg"
                alt="previous icon" /></button>
        <button class="nav-btn right-4" @click="goNextImage"><img src="/src/assets/images/icon-next.svg"
                alt="next icon" /></button>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps<{
    images: {
        src: string;
        alt: string;
        thumbnailSrc: string;
    }[];
}>()
const currentIndex = ref(0)
const goPreviousImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
const goNextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
}
const currentImage = computed(() => {
    const image = props.images[currentIndex.value]
    return {
        ...image,
        src: new URL(`/src/assets/images/${image.src}`, import.meta.url).href
    }
})

</script>
<style lang="scss" scoped>
.nav-btn{
    @apply bg-white rounded-full aspect-square w-[40px] grid place-content-center absolute top-1/2 -translate-y-1/2;
}
.viewer-enter-active,
.viewer-leave-active {
    transition: opacity 0.5s;
}

.viewer-enter-from,
.viewer-leave-to {
    opacity: 0;
}


.viewer-enter-to,
.viewer-leave-from {
    opacity: 1;
}


</style>