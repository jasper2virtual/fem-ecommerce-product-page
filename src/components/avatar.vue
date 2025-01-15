<template>
        <img src="/src/assets/images/image-avatar.png" class="avatar  rounded-full  hover:cursor-pointer hover:border hover:border-[#FF7E1B]"  alt="avatar" >
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