<template>
  <div class="p-2">
    <!-- Card graphs -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="item in summary"
        :key="item.status"
        class="bg-white p-4 rounded-md shadow-md"
      >
        <div class="flex flex-col gap-2">
          <!-- <p class="text-gray-500">{{ item.status }}</p>
          <p class="text-gray-800 font-bold">{{ item.count }}</p> -->
          <div
            class="p-1 rounded-lg border w-12 h-12 flex items-center justify-center"
          >
            <icon
              :name="'lucide-activity'"
              class="h-6 w-6"
              :class="getStatusBadge(item.status)"
            />
          </div>
          <hr />
          <div class="flex items-center justify-between">
            <div class="text-gray-500">{{ item.status }}</div>
            <div class="text-gray-800 font-bold">{{ item.count }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const summary = reactive([
  {
    status: "In Progress",
    count: 5,
  },
  {
    status: "Completed",
    count: 10,
  },
  {
    status: "Pending",
    count: 3,
  },
  {
    status: "Overdue",
    count: 2,
  },
]);
const getStatusBadge = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    case "Pending":
      return "bg-blue-500";
    case "Overdue":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
</script>

<style scoped></style>
