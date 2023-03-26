<template>
    <div class="w-full bg-blue-700  text-white fixed top-[80px]">
        <div class="w-full flex text-16 px-[16px] py-[10px] pb-[20px] gap-[20px]">
            <div class="flex flex-col">
                <a href="#" class="px-[16px] py-[10px]">{{ $t('header.business') }}</a>
                <a href="#" class="px-[16px] py-[10px] opacity-40">{{ $t('header.personal') }}</a>
            </div>
            <div class="flex flex-col"><span class="px-[16px] py-[10px]">{{ $t('header.products') }}</span>
                <div class="flex flex-col text-14 px-[20px]">
                    <a href="/#products/letter-of-guarantee" class="px-[16px] py-[10px]">
                        {{ $t('header.letterOfGuarantee') }}
                    </a>
                    <a href="/#products/accounts" class="px-[16px] py-[10px]">
                        {{ $t('header.accounts') }}
                    </a>
                    <a href="/#products/payments" class="px-[16px] py-[10px]">
                        {{ $t('header.paymentsAndTransfers') }}
                    </a>
                </div>
                <a href="/about" class="px-[16px] py-[10px]">{{ $t('header.about') }}</a>
                <a href="#" class="px-[16px] py-[10px]">{{ $t('header.login') }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>