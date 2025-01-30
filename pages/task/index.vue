<script setup lang="ts">
definePageMeta({
	layout: "task",
	middleware: ["auth"],
});
const showCreateTask = ref(false);
</script>
<template>
	<main>
		<!-- <client-only> -->
		<create-task-component
			:show="showCreateTask"
			@toggleCreateTask="showCreateTask = !showCreateTask"
		/>
		<task-cards></task-cards>
		<task-table
			@toggle-create-task="showCreateTask = !showCreateTask"
		></task-table>
		<!-- </client-only> -->
	</main>
</template>
