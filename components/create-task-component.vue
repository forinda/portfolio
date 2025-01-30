<template>
	<hui-dialog
		:open="show"
		@close="$emit('toggleCreateTask')"
		class="fixed inset-0 bg-black/60 flex justify-center items-center"
	>
		<hui-dialog-panel class="w-full max-w-md bg-white rounded-lg p-4">
			<dynamic-form
				@submit="submit"
				:fields="fields"
				class-name="p-8 bg-white rounded w-full"
				:validation-schema="createTaskFormSchema"
			>
				<template #submit-button>
					<button type="submit" class="bg-[#11143A] text-white p-2 rounded">
						Save Task
					</button>
				</template>
			</dynamic-form>
		</hui-dialog-panel>
	</hui-dialog>
</template>

<script setup lang="ts">
import type { FormFieldType } from "~/types/generic-form";
import { createTaskFormSchema } from "~/lib/schema/create-task-schema";
const { createTask } = await useAppTasks();
defineProps<{
	show: boolean;
}>();
const emit = defineEmits<{
	(e: "toggleCreateTask"): void;
}>();
const submit = async (val: any) => {
	console.log({ val });

	await createTask(val);
	emit("toggleCreateTask");
};
const statusOptions = [
	{ value: "not-started", label: "Not started" },
	{ value: "in-progress", label: "In Progress" },
	{ value: "completed", label: "Completed" },
];

const priorityOptions = [
	{ value: "low", label: "Low" },
	{ value: "medium", label: "Medium" },
	{ value: "high", label: "High" },
];

const fields = reactive<FormFieldType[]>([
	{
		name: "title",
		label: "Task title",
		type: "text",
		placeholder: "Task title",
		as: "input",
	},
	{
		as: "textarea",
		label: "Description",
		name: "description",
		id: "description",
		placeholder: "Description",
	},
	{
		as: "select",
		label: "Status",
		name: "status",
		id: "status",
		children: statusOptions.map((option) => ({
			as: "option",
			label: option.label,
			name: "status",
			id: "status",
			value: option.value,
		})),
	},
	{
		as: "select",
		label: "Priority",
		name: "priority",
		id: "priority",
		children: priorityOptions.map((option) => ({
			as: "option",
			label: option.label,
			name: "priority",
			id: "priority",
			value: option.value,
		})),
	},
	{
		as: "input",
		label: "Start Date",
		name: "startDate",
		type: "datetime-local",
		id: "startDate",
	},
	{
		as: "input",
		label: "Due Date",
		name: "endDate",
		id: "endDate",
		type: "datetime-local",
	},
]);
</script>

<style scoped></style>
