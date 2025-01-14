import { type Ref, type ComputedRef, ref, computed } from 'vue'
import { type Tproduct } from './data/product'
import uniqid from 'uniqid'

export type TshoppingCartItem = {
    product: Tproduct;
    qty: number;
}

export type TshoppingCartItemId = string

export type TshoppingCart={
    items: Ref<Map<TshoppingCartItemId, TshoppingCartItem>>;
    add: (product: Tproduct, qty: number) => TshoppingCartItemId|null;
    remove: (id: TshoppingCartItemId) => void;
    totalQty: ComputedRef<number>;
}

export function useShoppingCart(): TshoppingCart {
    const items = ref<Map<TshoppingCartItemId, TshoppingCartItem>>(new Map())
    function add(product: Tproduct, qty: number): TshoppingCartItemId|null {
        if (qty <= 0) return null
        const id: TshoppingCartItemId = uniqid()
        items.value.set(id, { product, qty })
        return id
    }
    function remove(id: TshoppingCartItemId): void {
        items.value.delete(id)
    }
    const totalQty = computed<number>(() => {
        if (items.value.size === 0) return 0
        return Array.from<TshoppingCartItem>(items.value.values())
            .reduce((acc: number, item: TshoppingCartItem) => acc + item.qty, 0)
    })
    return { items, add, remove, totalQty }
}
