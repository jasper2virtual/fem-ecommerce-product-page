<template>
    <div
        class="fixed inset-0 bg-black/75 px-[--desktop-main-content-padding] grid  grid-cols-[40vw] grid-rows-[80vh] place-content-center z-10">
        <div class="flex flex-col gap-4">
            <button v-html="iconClose" class="btn-close ml-auto" @click="$emit('close')"></button>
            <div class="relative w-[550px] h-[550px] mx-auto grid">
                <Transition name="viewer">
                    <img :key="currentIndex" :src="currentImage.src" :alt="currentImage.alt"
                        class=" object-contain mx-auto rounded-2xl col-span-full row-span-full" />
                </Transition>
                <button v-html="previousSvg" class="move-btn -translate-x-1/2" @click="goPreviousImage"></button>
                <button v-html="nextSvg" class="move-btn right-0 translate-x-1/2" @click="goNextImage"></button>
            </div>
            <div class="flex gap-6 items-center mx-auto">
                <button v-for="(image, index) in images" :key="index" class="h-[88px] w-[88px] hover:opacity-50"
                    :class="{ 'rounded-2xl border-2 border-[#FF7E1B] opacity-25': currentIndex === index }"
                    @click="currentIndex = index">
                    <img :src="image.thumbnailSrc" :alt="image.alt" class="rounded-xl" />
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import iconClose from '/src/assets/images/icon-close.svg?raw'
import previousSvg from '/src/assets/images/icon-previous.svg?raw'
import nextSvg from '/src/assets/images/icon-next.svg?raw'
const props = defineProps<{
    images: {
        src: string;
        alt: string;
        thumbnailSrc: string;
    }[];
}>()
const images = computed(() => {
    return props.images.map(image => ({
        ...image,
        src: new URL(`/src/assets/images/${image.src}`, import.meta.url).href,
        thumbnailSrc: new URL(`/src/assets/images/${image.thumbnailSrc}`, import.meta.url).href
    }))
})
const currentIndex = ref(0)
const currentImage = computed(() => images.value[currentIndex.value])
const goPreviousImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
const goNextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
}
</script>
<style lang="scss" scoped>
.btn-close * {
    @apply fill-white;
}

.btn-close:hover * {
    @apply fill-[#FF7E1B];
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

.move-btn {
    @apply absolute inset-y-1/2 -translate-y-1/2 rounded-full p-4 bg-white w-12 h-12;
}

.move-btn:hover * {
    @apply stroke-[#FF7E1B];
}
</style>