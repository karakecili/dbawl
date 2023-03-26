<template>
    <div class="w-full flex flex-col bg-white text-black rounded-[8px] p-[26px] lg:p-[34px]">
        <div class="w-full text-[15px] lg:text-[24px] flex items-center justify-between cursor-pointer"
            @click="dropdown = !dropdown">
            <span class="flex-grow font-bold">{{ Question }}</span>
            <img src="~assets/images/arrow-down.svg" class="w-[24px] p-[5px] h-auto transition-all"
                :class="dropdown ? 'rotate-180' : ''">
        </div>
        <div class="w-full pt-[24px] text-18" v-if="dropdown">
            <span v-html="Answer"></span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    Question: String,
    Answer: String,
})
const dropdown = ref(false)

</script>

<style lang="scss" scoped></style>