<template>
    <div class="flex flex-col w-[445px] gap-4">
        <img :src="currentImageSrc" class="rounded-2xl" alt="current image" />
        <div class="flex justify-center gap-8 ">
            <button v-for="(thumbnailSrc, index) in thumbailSrcList" :key="index" @click="currentIndex = index"
                class="hover:opacity-50"
                :class="{ 'rounded-2xl border-2 border-[#FF7E1B] opacity-25': currentIndex === index }">
                <img class="rounded-2xl" :src="thumbnailSrc" alt="thumbail image" />
            </button>
        </div>
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
const currentImageSrc = computed(() => {
    const image = props.images[currentIndex.value]
    return new URL(`/src/assets/images/${image.src}`, import.meta.url).href
})
const thumbailSrcList = computed(() =>
    props.images.map(image =>
        new URL(`/src/assets/images/${image.thumbnailSrc}`, import.meta.url).href
    )
)    
</script>