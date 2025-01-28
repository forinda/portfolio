<template>
	<div></div>
</template>

<script setup lang="ts">
import { API_URL } from "~/utils/constants/api";

definePageMeta({
	layout: "task",
	middleware: ["auth"],
});
const router = useRouter();
onMounted(async() => {
	await useAsyncData(async () => {
	// Logout
	return await $fetch(API_URL + "/auth/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});
	
	// Remove token
	// Redirect to login
});
await router.push({name:'task-login'});

});
</script>
