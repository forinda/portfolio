<script setup lang="ts">
definePageMeta({
  layout: "task",
  middleware: ["auth"],
});
const tasks = useAppTasks();
</script>
<template>
  <main>
    <!-- <client-only> -->
    <task-cards></task-cards>
    <task-table></task-table>
    <!-- </client-only> -->
  </main>
</template>
