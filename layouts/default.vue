<template>
    <div class="min-w-full">
        <div class="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <div class="flex flex-col w-full justify-center">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>


</script>