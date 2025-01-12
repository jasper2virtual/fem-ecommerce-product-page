<template>
        <img src="/src/assets/images/icon-cart.svg" alt="cart" class="cart hover:cursor-pointer" />
</template>
<style lang="scss" scoped>
.cart{
    max-height:var(--mobile-header-height);
}
@media (min-width: theme('screens.app-desktop')) {
    .cart{
        max-height:var(--desktop-header-height);
    }
}
</style>