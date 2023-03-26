<template>
    <header class="flex w-full bg-blue-700 justify-center fixed transition-all duration-500 z-[99999] h-[80px] "
        :class="y > 90 ? 'lg:h-[80px] lg:py-[25px]' : 'lg:h-[120px] lg:py-[45px]'">
        <HeaderNav />
        <HeaderProducts v-if="productNav" />
    </header>
    <HeaderResponsive class="lg:hidden" v-if="responsiveMenu" />
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
const { x, y } = useWindowScroll()
const responsiveMenu = ref(false)
const clickMenu = () => {
    responsiveMenu.value = !responsiveMenu.value
}

const productNav = ref(false)
const clickProduct = () => {
    productNav.value = !productNav.value
}

provide('headerClick', { clickMenu, clickProduct })
</script>

<style lang="scss" scoped></style>
