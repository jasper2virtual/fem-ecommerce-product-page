<template>
    <div class="relative">
        <Transition name="viewer">
            <img :key="currentIndex" :src="currentImage.src" :alt="currentImage.alt" />
        </Transition>
        <button class="nav-btn absolute top-1/2 left-4" @click="goPreviousImage"><img src="/src/assets/images/icon-previous.svg" alt="previous icon" /></button>
        <button class="nav-btn absolute top-1/2 right-4" @click="goNextImage"><img src="/src/assets/images/icon-next.svg" alt="next icon" /></button>
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
    @apply bg-white rounded-full aspect-square w-[40px] grid place-content-center;
}
.viewer-enter-active,
.viewer-leave-active {
    // transition: all 0.5s;
}
</style>