<template>
	<div class="p-2">
		<!-- Card graphs -->
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div
				v-for="item in analysis"
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
const { data, status, error } = await useTaskAnalytics();
const defaultSummary = ref([
	{
		status: "In Progress",
		key: "in-progress",
		count: 0,
		icon: "lucide-activity",
	},
	{
		status: "Completed",
		key: "completed",
		icon: "lucide-checkmark",
		count: 0,
	},
	{
		status: "Not Started",
		key: "not-started",
		icon: "lucide-clock",
		count: 0,
	},
	{
		status: "Overdue",
		key: "overdue",
		icon: "lucide-alarm",
		count: 0,
	},
]);
const analysis = computed(() => {
	const toAnalyse = data.value?.data ?? [];
	const total = toAnalyse.reduce<
		{
			status: string;
			count: number;
			icon: string;
		} & Record<string, any>
	>((acc, curr) => {
		const inDefault = defaultSummary.value.find(
			(item) => item.key === curr.status,
		);
		if (inDefault) {
			const lookupKey = inDefault.key as string;
			acc[lookupKey] = {
				...inDefault,
				count: curr.count,
			};
		}
		return acc;
	}, {} as any);
	return Object.values(total);
});
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
