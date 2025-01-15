<template>
    <div class="fixed inset-0 bg-black/75 px-[--mobile-main-content-padding]" @click="$emit('close')">
        <div class="max-w-[--grid-width] mx-auto">
            <div @click.stop
                class=" bg-white flex flex-col rounded-md ml-auto mt-[calc(var(--mobile-main-content-margin-top)+1rem)] max-w-[360px] min-h-[256px] h-fit max-h-[calc(100vh*2/3)]">
                <div class="p-4 font-bold">Cart</div>
                <hr>
                <div v-if="totalQty > 0" class="flex flex-col gap-4 p-4 overflow-y-hidden">
                    <div class="flex flex-col gap-4 overflow-y-scroll">
                        <div class="flex gap-4" v-for="item in itemsArray" :key="item.key">
                            <img :src="item.picSrc" class="w-[50px] aspect-square rounded" alt="product picture" />
                            <div class="flex flex-col">
                                <div>{{ item.name }}</div>
                                <div class="flex gap-4">
                                    <span>${{ item.unitPrice }}</span>
                                    <span>x</span>
                                    <span>{{ item.qty }}</span>
                                    <span class="font-bold">${{ item.total }}</span>
                                </div>
                            </div>
                            <button @click="removeItem(item.key)"><img src="/src/assets/images/icon-delete.svg"
                                    alt="delete button" /></button>
                        </div>
                    </div>
                    <button class="bg-[#FF7E1B] py-4 rounded-md">Checkout</button>
                </div>
                <div v-else class="grid place-content-center grow">Your cart is empty.</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { inject, computed } from 'vue'
import { type TshoppingCart } from '../shoppingCart'
const shoppingCart: TshoppingCart | undefined = inject('shoppingCart')
if (!shoppingCart) {
    throw new Error('shoppingCart not provided')
}
const { totalQty, items, remove: removeItem } = shoppingCart
const itemsArray = computed(() =>
    Array.from(items.value.entries()).map(([key, value]) => {
        const picSrc = new URL(`/src/assets/images/${value.product.images[0].thumbnailSrc}`, import.meta.url).href
        const name = value.product.name
        const unitPrice = value.product.price * value.product.discount / 100
        const qty = value.qty
        const total = unitPrice * qty
        return {
            key,
            picSrc,
            name,
            unitPrice,
            qty,
            total
        }

    }
    ))
</script>