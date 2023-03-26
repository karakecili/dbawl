<template>
    <NuxtLink :to="to" class="px-[16px] py-[10px] hover:bg-[#003cb2] rounded-[8px] cursor-pointer">
        {{ text }}
    </NuxtLink>
</template>

<script setup>
defineProps({
    text: String,
    to: String,
})
</script>