<template>
  <div>
    <Navbar />
    <main class="pt-16">
      <slot />
    </main>
    <Footer />
    <FloatingButtons />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import FloatingButtons from '@/components/FloatingButtons.vue'
</script>