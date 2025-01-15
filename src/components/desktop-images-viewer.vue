<template>
    <div class="flex flex-col w-[445px] gap-4">
        <div class="grid">
        <Transition name="viewer">
            <img :src="currentImageSrc"  :key="currentIndex" class="rounded-2xl col-span-full row-span-full
             hover:cursor-pointer hover:border-[#FF7E1B] hover:border-2" alt="current image" @click="showPopup = true" />
        </Transition>
        </div>
        <div class="flex justify-center gap-8 ">
            <button v-for="(thumbnailSrc, index) in thumbailSrcList" :key="index" @click="currentIndex = index"
                class="hover:opacity-50"
                :class="{ 'rounded-2xl border-2 border-[#FF7E1B] opacity-25': currentIndex === index }">
                <img class="rounded-2xl" :src="thumbnailSrc" alt="thumbail image" />
            </button>
        </div>
    </div>
    <desktop-image-popup-viewer v-if="showPopup" :images="props.images" @close="showPopup = false" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import desktopImagePopupViewer from './desktop-image-popup-viewer.vue'
const props = defineProps<{
    images: {
        src: string;
        alt: string;
        thumbnailSrc: string;
    }[];
}>()

const currentIndex = ref(0)
const currentImageSrc = computed(() => {
    const image = props.images[currentIndex.value]
    return new URL(`/src/assets/images/${image.src}`, import.meta.url).href
})
const thumbailSrcList = computed(() =>
    props.images.map(image =>
        new URL(`/src/assets/images/${image.thumbnailSrc}`, import.meta.url).href
    )
)
const showPopup = ref(false)
</script>

<style lang="scss" scoped>
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