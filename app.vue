<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom reveal animation utility – if not using composable, we'll do inline */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>