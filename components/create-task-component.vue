<template>
	<hui-dialog
		:open="show"
		@close="$emit('toggleCreateTask')"
		class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
	>
		<hui-dialog-panel>
			<hui-dialog-title>
				<h1 class="text-2xl font-bold">Create Task</h1>
			</hui-dialog-title>
			<hui-dialog-description>
				<p class="text-gray-600">Create a new task</p>
			</hui-dialog-description>
			<Form class="p-8 bg-white rounded" :validation-schema="createTaskSchema"> 
				<div class="flex flex-col gap-2">
					<label for="name"> Task Name </label>
					<Field
						type="text"
						name="name"
						class="border focus:border-blue-300 focus:ring-0 focus:outline-none p-2 rounded"
						label="Task Name"
						placeholder="Task Name"
					/>
					<ErrorMessage name="name" class="text-red-400 text-sm" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="dueDate"> Due Date </label>
					<Field
						type="date"
						name="dueDate"
						class="border focus:border-blue-300 focus:ring-0 focus:outline-none p-2 rounded"
						label="Due Date"
						placeholder="Due Date"
					/>
					<ErrorMessage name="dueDate" class="text-red-400 text-sm" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="status"> Status </label>
					<Field
						type="text"
						name="status"
						class="border focus:border-blue-300 focus:ring-0 focus:outline-none p-2 rounded"
						label="Status"
						placeholder="Status"
						:as="'select'"
					/>
					<ErrorMessage name="status" class="text-red-400 text-sm" />
				</div>
				<button type="submit" class="bg-[#11143A] text-white p-2 rounded">
					Submit
				</button>
			</Form>
		</hui-dialog-panel>
	</hui-dialog>
</template>

<script setup lang="ts">
import { createTaskSchema } from '~/utils/schema/create-task-schema';

defineProps<{
	show: boolean;
}>();
defineEmits<{
	toggleCreateTask: () => void;
}>();
</script>

<style scoped></style>
