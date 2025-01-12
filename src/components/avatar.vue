<template>
        <img src="/src/assets/images/image-avatar.png" class="avatar hover:cursor-pointer"  alt="avatar" >
</template>
<style lang="scss" scoped>
.avatar{
    max-height:var(--mobile-header-height);
}
@media (min-width: theme('screens.app-desktop')) {
    .avatar{
        max-height:var(--desktop-header-height);
    }
}
</style>