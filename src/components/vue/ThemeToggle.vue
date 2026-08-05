<script setup lang="ts">
import { onMounted, ref } from 'vue';

const dark = ref(false);

onMounted(() => {
  dark.value = document.documentElement.classList.contains('dark');
});

function toggle() {
  dark.value = !dark.value;
  document.documentElement.classList.toggle('dark', dark.value);
  localStorage.setItem('osify-theme', dark.value ? 'dark' : 'light');
}
</script>

<template>
  <button
    type="button"
    class="rounded-sm border border-rule p-2 text-muted transition-colors hover:border-stamp hover:text-stamp"
    :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="dark"
    @click="toggle"
  >
    <svg v-if="dark" class="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <circle cx="10" cy="10" r="3.4" />
      <path d="M10 1.6v2.2M10 16.2v2.2M18.4 10h-2.2M3.8 10H1.6M16 4l-1.6 1.6M5.6 14.4 4 16M16 16l-1.6-1.6M5.6 5.6 4 4" stroke-linecap="round" />
    </svg>
    <svg v-else class="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <path d="M17 12.3A7.4 7.4 0 0 1 7.7 3a7.4 7.4 0 1 0 9.3 9.3Z" stroke-linejoin="round" />
    </svg>
  </button>
</template>
