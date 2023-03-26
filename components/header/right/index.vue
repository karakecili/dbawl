<template>
    <div class="flex items-center w-full justify-end">
        <div
            class="hidden lg:flex items-center gap-[40px] w-full ltr:border-l rtl:border-r border-white-washed ltr:pl-[30px] rtl:pr-[30px] justify-between text-16 text-white">
            <div>
                <NuxtLink to="#" class="px-[16px] py-[10px] hover:bg-blue-700 -active rounded-[8px] cursor-pointer">{{
                    $t('header.business') }}</NuxtLink>
                <a href="#" class="px-[16px] py-[10px] opacity-40">{{ $t('header.personal')
                }}</a>
            </div>
            <div class="flex justify-end flex-grow">
                <button class="px-[16px] py-[10px] hover:bg-blue-700 -active rounded-[8px] cursor-pointer"
                    @click="clickProduct">
                    {{ $t('header.products') }}
                </button>
                <HeaderLink to="/about" :text="$t('header.about')" />
                <HeaderLink to="/login" :text="$t('header.login')" />
            </div>
            <div>
                <a href="/#contact" class="text-gray-700 bg-white py-[10px] px-[16px] rounded-[8px] whitespace-nowrap">
                    {{ $t('header.joinUs') }}
                </a>
            </div>
        </div>
        <div class="lg:hidden" @click="clickMenu">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzcwXzIzNTMpIj4KPHBhdGggZD0iTTQgMThIMjBDMjAuNTUgMTggMjEgMTcuNTUgMjEgMTdDMjEgMTYuNDUgMjAuNTUgMTYgMjAgMTZINEMzLjQ1IDE2IDMgMTYuNDUgMyAxN0MzIDE3LjU1IDMuNDUgMTggNCAxOFpNNCAxM0gyMEMyMC41NSAxMyAyMSAxMi41NSAyMSAxMkMyMSAxMS40NSAyMC41NSAxMSAyMCAxMUg0QzMuNDUgMTEgMyAxMS40NSAzIDEyQzMgMTIuNTUgMy40NSAxMyA0IDEzWk0zIDdDMyA3LjU1IDMuNDUgOCA0IDhIMjBDMjAuNTUgOCAyMSA3LjU1IDIxIDdDMjEgNi40NSAyMC41NSA2IDIwIDZINEMzLjQ1IDYgMyA2LjQ1IDMgN1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzBfMjM1MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                class="h-[35px] w-auto" />
        </div>
    </div>
</template>

<script setup>
const { clickMenu, clickProduct } = inject('headerClick')

</script>

<style lang="scss" scoped></style>