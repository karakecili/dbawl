<template>
    <div class="w-full bg-gray-200 text-black flex justify-center">
        <a id="faq" href="#" class="anchor"></a>
        <div
            class="w-full lg:max-w-[1133px] xl:max-w-[1440px] py-[32px] px-[29px] pb-[66px] lg:pb-[100px] lg:px-[56px] lg:py-[50px] xl:px-[180px] flex flex-col">
            <div class="w-full text-center">
                <h1 class="font-bold text-[32px] lg:text-[56px]">
                    {{ $t('homeFaq.title') }}
                </h1>
            </div>
            <div class="w-full flex flex-col mt-[24px] lg:mt-[56px] gap-[16px]">
                <FaqSection v-for="(item, index) in faqList" :key="index" :Answer="item.faqAnswer"
                    :Question="item.faqQuestion" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { messages, locale } = useI18n()
const faqList = computed(() => {
    const faqs = messages.value[locale.value].homeFaq
    let vals = []
    for (let index = 1; index <= Object.keys(faqs).filter((key) => key.includes('faqQuestion')).length; index++) {
        vals.push({ "faqQuestion": faqs["faqQuestion" + index], "faqAnswer": faqs["faqAnswer" + index] })
    }
    return vals
})

</script>

<style lang="scss" scoped></style>