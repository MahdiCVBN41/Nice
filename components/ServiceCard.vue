<template>
  <div :class="['bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1', animatedClass]">
    <div class="mb-4 text-5xl">{{ icon }}</div>
    <h3 class="mb-2 text-xl font-bold text-gray-900">{{ title }}</h3>
    <p class="mb-4 leading-relaxed text-gray-600">{{ description }}</p>
    <div class="flex items-start gap-2 p-3 text-sm text-blue-600 rounded-lg bg-blue-50">
      <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{{ features }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  features: String,
  isVisible: Boolean,
  delay: Number
})

const animatedClass = computed(() => {
  if (!props.isVisible) return 'opacity-0 translate-y-8'
  return `opacity-100 translate-y-0 transition-all duration-700 delay-${props.delay}`
})
</script>

<style scoped>
.delay-0 { transition-delay: 0ms; }
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
.delay-400 { transition-delay: 400ms; }
.delay-500 { transition-delay: 500ms; }
</style>