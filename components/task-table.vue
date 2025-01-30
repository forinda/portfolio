<script setup lang="ts">
import moment from "moment";


const { data,refresh,options } = await useAppTasks();
const emit = defineEmits([
	"toggleCreateTask",
	"refresh",
	"next-page",
	"prev-page",
]);

const selectedTasks = ref<string[]>([]);
const filters = ref({ status: "", priority: "" });

const filteredTasks = computed(() => {
	return (
		data.value?.data.docs?.filter(
			(task) =>
				(!filters.value.status || task.status === filters.value.status) &&
				(!filters.value.priority || task.priority === filters.value.priority),
		) ?? []
	);
});

function toggleAllSelection(event: Event) {
	const isChecked = (event.target as HTMLInputElement).checked;
	selectedTasks.value = isChecked
		? data.value!.data.docs.map((task) => task._id)
		: [];
}

function applyFilters() {
	console.log("Applying filters", filters.value);
}

function handleEdit(id: number) {
	console.log("Edit task with ID:", id);
}

function handleDelete(id: number) {
	console.log("Delete task with ID:", id);
}

const formatDate = (date: string | Date) => {
	return moment(date).format("MMM DD, YYYY, hh:mm A");
};
</script>
<template>
	<div class="p-6 space-y-6 bg-gray-50 min-h-screen">
		<!-- Header Section -->
		<div class="flex justify-between items-center">
			<h1 class="text-3xl font-bold text-gray-800">Tasks</h1>
			<div class="flex space-x-4">
				<button
					@click="refresh()"
					class="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg shadow-md transition"
				>
					Refresh
				</button>
				<button
					@click="$emit('toggleCreateTask')"
					class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition"
				>
					Create Task
				</button>
			</div>
		</div>

		<!-- Filters -->
		<div class="flex space-x-4">
			<!-- Per page -->
			<select
				class="p-2 border rounded-lg"
				v-model="options.limit"
				name="perPage"
			>
				<option :value="5">5</option>
				<option :value="10">10</option>
				<option :value="20">20</option>
				<option :value="50">50</option>

			</select>	
			<select
				v-model="filters.status"
				@change="applyFilters"
				class="p-2 border rounded-lg"
			>
				<option value="">All Statuses</option>
				<option value="completed">Completed</option>
				<option value="in-progress">In Progress</option>
				<option value="not-started">Not Started</option>
			</select>
			<select
				v-model="filters.priority"
				@change="applyFilters"
				class="p-2 border rounded-lg"
			>
				<option value="">All Priorities</option>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
		</div>
		<!-- Task Table -->
		<div class="overflow-x-auto bg-white rounded-lg shadow-md">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-100">
					<tr>
						<th class="px-4 py-3">
							<input type="checkbox" @change="toggleAllSelection" />
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Task
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Status
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Priority
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Due Date
						</th>
						<th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
							Actions
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					<tr
						v-for="task in filteredTasks"
						:key="task._id"
						class="hover:bg-gray-50 transition"
					>
						<td class="px-4 py-4">
							<input
								type="checkbox"
								v-model="selectedTasks"
								:value="task._id"
							/>
						</td>
						<td class="px-6 py-4">{{ task.title }}</td>
						<td class="px-6 py-4">{{ task.status }}</td>
						<td class="px-6 py-4">{{ task.priority }}</td>
						<td class="px-6 py-4">{{ formatDate(task.endDate) }}</td>
						<td class="px-6 py-4">
							<button
								class="text-blue-600 hover:underline transition"
								@click="handleEdit(task.id)"
							>
								Edit
							</button>
							<button
								class="text-red-600 hover:underline transition ml-2"
								@click="handleDelete(task.id)"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<!-- Pagination -->
			<div class="flex justify-between items-center p-4">
				<p class="text-gray-600 text-sm">
					Showing {{ filteredTasks.length }} of {{ data?.data.total }} tasks
				</p>
				<div class="flex text-sm text-gray-600 items-center space-x-4">
					<button
						@click="$emit('prev-page')"
						:disabled="data?.data.page === 1"
						class="text-blue-600 hover:underline"
					>
						Previous
					</button>
					<span>Page {{ data?.data.page }} of {{ data?.data.pages }}</span>
					<button
						@click="$emit('next-page')"
						:disabled="data?.data.page === data?.data.pages"
						class="text-blue-600 hover:underline"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
</template>



<style scoped>
button {
	cursor: pointer;
}
</style>
