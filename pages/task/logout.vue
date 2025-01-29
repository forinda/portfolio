<template>
	<div></div>
</template>

<script setup lang="ts">
const auth = useAuth();
definePageMeta({
	layout: "task",
	middleware: ["auth"],
});
const router = useRouter();
onMounted(async() => {
	await (await auth).logout();
	router.push({ name: "task-login" });

});
</script>
