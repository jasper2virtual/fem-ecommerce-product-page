<template>
    <div class="relative">

        <button class="cart" @click="showViewer = true" v-html="cartSvg">
        </button>
        <span
            class=" absolute top-0 end-0 translate-x-1/3 -translate-y-1/2  bg-[#FF7E1B] text-white rounded-lg p-[6px] py-0 text-[calc(10rem/16)]"
            v-if="totalQty > 0">{{
                totalQty
            }}</span>
    </div>

    <Transition name="viewer">
        <shopping-cart-viewer v-if="showViewer" @close="showViewer=false" />
    </Transition>

</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'
import { type TshoppingCart } from '../shoppingCart'
import shoppingCartViewer from './shopping-cart-viewer.vue'
import cartSvg from '/src/assets/images/icon-cart.svg?raw'

const shoppingCart: TshoppingCart | undefined = inject('shoppingCart')
if (!shoppingCart) {
    throw new Error('shoppingCart not provided')
}
const { totalQty } = shoppingCart
const showViewer = ref(false)
</script>
<style lang="scss" scoped>
.cart{
    max-height:var(--mobile-header-height);
}
.cart * {
    @apply hover:fill-black;
}
@media (min-width: theme('screens.app-desktop')) {
    .cart{
        max-height:var(--desktop-header-height);
    }
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