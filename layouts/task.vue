<template>
  <div class="flex max-w-7xl mx-auto">
    <task-sidebar />
    <div class="w-full">
      <task-dashboard-header />
      <slot />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: "task",
//   middleware: ["auth"],
// });
</script>

<style scoped></style>
