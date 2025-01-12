<template>
    <img src="/src/assets/images/logo.svg" alt="logo" class="logo" />
</template>
<style lang="scss" scoped>
.logo {
    max-height: var(--mobile-header-height);
}

@media (min-width: theme('screens.app-desktop')) {
    .logo {
        max-height: var(--desktop-header-height);
    }
}
</style>