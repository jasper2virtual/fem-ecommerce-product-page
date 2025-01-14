<template>
    <div class="fixed inset-0 bg-black/75 px-[--mobile-main-content-padding]" @click="$emit('close')">
        <div class="max-w-[--grid-width] mx-auto">
            <div @click.stop class=" bg-white flex flex-col rounded-md ml-auto mt-[calc(var(--mobile-main-content-margin-top)+1rem)] max-w-[360px] min-h-[256px] max-h-fit">
                <div>
                    <div class="p-4 font-bold">Cart</div>
                </div>
                <hr>
                <div class="p-4 grow flex flex-col">
                    <div v-if="totalQty>0">test</div>
                    <div v-else class="grid place-content-center grow">Your cart is empty.</div>
                </div>
            </div>
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