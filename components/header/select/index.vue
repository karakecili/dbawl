<template>
    <div>
        <select v-model="locale" class="bg-blue-700 text-white text-[14px] focus-visible:outline-none">
            <option value="en">EN</option>
            <option value="ar">AR</option>
        </select>
    </div>
</template>

<script setup>
const { locale } = useI18n()

</script>