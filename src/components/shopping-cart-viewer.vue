<template>
    <div class="border shadow-lg bg-white flex flex-col rounded-md fixed inset-0 mt-[calc(var(--mobile-main-content-margin-top)+1rem)] mx-auto max-w-[360px] min-h-[256px] max-h-fit">
        <div>
            <div class="p-4 font-bold">Cart</div>
        </div>
        <hr>
        <div class="p-4 grow flex flex-col">
            <div v-if="totalQty>0">test</div>
            <div v-else class="grid place-content-center grow">Your cart is empty.</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { type TshoppingCart } from '../shoppingCart'
const shoppingCart: TshoppingCart | undefined = inject('shoppingCart')
if (!shoppingCart) {
    throw new Error('shoppingCart not provided')
}
const { totalQty } = shoppingCart

</script>