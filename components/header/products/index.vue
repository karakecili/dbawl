<template>
    <div class="absolute w-full h-[80px] top-[130px]">
        <div
            class="flex flex-col bg-white rounded-[24px] border border-gray-100 max-w-[1080px] w-full mx-auto px-[70px] py-[50px] shadow-xl">
            <h1 class="text-[24px] text-black">{{ $t('header.products') }}</h1>
            <div class="flex gap-[50px] text-black mt-[20px]">
                <a href="/#products/letter-of-guarantee"
                    class="flex flex-col p-[24px] bg-white hover:bg-gray-100 rounded-[24px] cursor-pointer w-full">
                    <p class="text-[20px] font-bold">{{ $t('header.letterOfGuarantee') }}</p>
                    <p class="text-[14px]-big-line mt-[8px]">
                        {{ $t('header.letterOfGuaranteeExplain') }}
                    </p>
                </a>
                <a href="/#products/accounts"
                    class="flex flex-col p-[24px] bg-white hover:bg-gray-100 rounded-[24px] cursor-pointer w-full">
                    <p class="text-[20px] font-bold">{{ $t('header.accounts') }}</p>
                    <p class="text-[14px]-big-line mt-[8px]">
                        {{ $t('header.accountsExplain') }}
                    </p>
                </a>
                <a href="/#products/payments"
                    class="flex flex-col p-[24px] bg-white hover:bg-gray-100 rounded-[24px] cursor-pointer w-full">
                    <p class="text-[20px] font-bold">{{ $t('header.paymentsAndTransfers') }}</p>
                    <p class="text-[14px]-big-line mt-[8px]">
                        {{ $t('header.paymentsAndTransfersExplain') }}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>