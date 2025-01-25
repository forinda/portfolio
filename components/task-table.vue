<template>
  <div class="p-6 space-y-6 bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Tasks</h1>
      <button
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
            v-for="task in data"
            :key="task.id"
            class="hover:bg-gray-50 transition"
          >
            <td class="px-6 py-4 text-sm text-gray-800">{{ task.name }}</td>
            <td class="px-6 py-4 text-sm">
              <span
                :class="{
                  'bg-green-100 text-green-600 px-2 py-1 rounded-lg':
                    task.status === 'Completed',
                  'bg-yellow-100 text-yellow-600 px-2 py-1 rounded-lg':
                    task.status === 'In Progress',
                  'bg-red-100 text-red-600 px-2 py-1 rounded-lg':
                    task.status === 'Overdue',
                }"
              >
                {{ task.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-600">{{ task.dueDate }}</td>
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
import { ref } from "vue";

type Task = {
  id: number;
  name: string;
  status: string;
  dueDate: string;
};

const data = ref<Task[]>([
  {
    id: 1,
    name: "Design homepage",
    status: "In Progress",
    dueDate: "2025-02-01",
  },
  { id: 2, name: "Fix login bug", status: "Completed", dueDate: "2025-01-20" },
  {
    id: 3,
    name: "Update user settings",
    status: "Overdue",
    dueDate: "2025-01-15",
  },
]);

function handleEdit(id: number) {
  console.log("Edit task with ID:", id);
}

function handleDelete(id: number) {
  console.log("Delete task with ID:", id);
}
</script>

<style scoped>
/* Add hover effects and transitions */
button {
  cursor: pointer;
}
</style>
