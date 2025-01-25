<script setup lang="ts">
definePageMeta({
  layout: "task",
  middleware: ["auth"],
});
const tasks = useAppTasks()
</script>
<template>
  <main>
    <task-cards></task-cards>
    <task-table></task-table>
  </main>
</template>
