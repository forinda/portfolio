<template>
	<div class="p-6 space-y-6 bg-gray-50 min-h-screen">
		<!-- Header Section -->
		<div class="flex justify-between items-center">
			<h1 class="text-3xl font-bold text-gray-800">Tasks</h1>
			<button
				@click="$emit('toggleCreateTask')"
				class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition"
			>
				Create Task
			</button>
		</div>

		<!-- Task Table -->
		<div class="overflow-x-auto bg-white rounded-lg shadow-md">
			<table class="min-w-full divide-y divide-gray-200">
				<!-- Table Head -->
				<thead class="bg-gray-100">
					<tr>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							#
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Task
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Status
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Due Date
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Actions
						</th>
					</tr>
				</thead>

				<!-- Table Body -->
				<tbody class="divide-y divide-gray-200">
					<tr
						v-for="(task,index) in data?.docs??[]"
						:key="task._id"
						class="hover:bg-gray-50 transition"
					>
						<td class="px-6 py-4 text-sm text-gray-800">{{ index+1 }}</td>
						<td class="px-6 py-4 text-sm text-gray-800">{{ task.title }}</td>
						<td class="px-6 py-4 text-sm">
							<span
							v-if="!task.isOverdue"
								:class="{
									'bg-green-100 text-green-600 px-2 py-1 rounded-lg':
										task.status === 'completed',
									'bg-yellow-100 text-yellow-600 px-2 py-1 rounded-lg':
										task.status === 'in-progress',
									'bg-blue-100 text-blue-600 px-2 py-1 rounded-lg':
										task.status === 'not-started',
								}"
							>
								{{ task.status }}
							</span>
							<span
							v-else
								class="bg-red-100 text-red-600 px-2 py-1 rounded-lg"
							>

								Overdue
							</span>
						</td>
						<td class="px-6 py-4 text-sm text-gray-600">{{ formatDate(task.endDate) }}</td>
						<td class="px-6 py-4 text-sm space-x-2">
							<button
								class="text-blue-600 hover:underline transition"
								@click="handleEdit(task.id)"
							>
								Edit
							</button>
							<button
								class="text-red-600 hover:underline transition"
								@click="handleDelete(task.id)"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";
import type { PaginatedHttpResponseType } from "~/types";
import type { ITaskDocument } from "~/types/schema";

const props = defineProps<{
	data: PaginatedHttpResponseType<ITaskDocument>['data'];
}>();
defineEmits<{
	toggleCreateTask: () => void;
}>();
function handleEdit(id: number) {
	console.log("Edit task with ID:", id);
}

function handleDelete(id: number) {
	console.log("Delete task with ID:", id);
}

const formatDate = (date: string|Date) => {
	return moment(date).format("MMM DD, YYYY, hh:mm A");
};
</script>

<style scoped>
/* Add hover effects and transitions */
button {
	cursor: pointer;
}
</style>
