<template>
  <Html :lang="locale" :dir="direction">
  <!-- <NuxtWelcome /> -->
  <NuxtLayout>
    <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
    <NuxtPage />
  </NuxtLayout>

  </Html>
</template>

<script setup>
const { locale } = useI18n()
const direction = computed(() => locale.value == "ar" ? "rtl" : "ltr")

</script>