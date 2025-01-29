<template>
	<div>
		<Form
			:validation-schema="loginFormSchema"
			@submit="onSubmit"
			class="flex flex-col gap-4 px-8 py-10 border border-gray-200 rounded-md max-w-md mx-auto"
			><div>
				<div
					class="border-dotted mx-auto rounded-full text-white text-center p-1 flex items-center justify-center border border-[#11143A] h-20 w-20"
				>
					<img
						src="https://avatar.iran.liara.run/public"
						alt=""
						class="w-full h-full rounded-full"
					/>
				</div>
				<h1 class="text-center text-2xl font-bold">Login to your account</h1>
			</div>
			<div class="flex flex-col gap-2">
				<label for="emailOrUsername"> Email or Username </label>
				<Field
					type="text"
					name="emailOrUsername"
					class="border focus:border-blue-300 focus:ring-0 focus:outline-none p-2 rounded"
					label="Email or email"
					placeholder="Email or Username"
				/>
				<ErrorMessage name="emailOrUsername" class="text-red-400 text-sm" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="password"> Password </label>
				<Field
					type="password"
					name="password"
					class="border focus:border-blue-300 focus:ring-0 focus:outline-none p-2 rounded"
					label="Password"
					placeholder="Password"
				/>
				<ErrorMessage name="password" class="text-red-400 text-sm" />
			</div>
			<button type="submit" class="bg-[#11143A] text-white p-2 rounded">
				Submit
			</button>
			<!-- Footer -->
			<div class="mt-4 text-center">
				<p class="text-sm text-gray-600">
					Don't have an account?
					<nuxt-link
						:to="{ name: 'task-register' }"
						class="text-blue-600 hover:underline font-medium"
					>
						Create an account
					</nuxt-link>
				</p>
			</div>
		</Form>
	</div>
</template>

<script setup lang="ts">
import { loginFormSchema } from "~/utils/schema/login-form-schema";
const { $swal } = useNuxtApp();
const auth = useAuth();
definePageMeta({
	layout: "default",
	middleware: ["no-auth"],
});

async function onSubmit(val: any) {
	await (
		await auth
	).loginUser(val, {
		onSuccess: async () => {
			await $swal.fire({
				title: "Success",
				text: "You have successfully logged in",
				icon: "success",
			});
			navigateTo({ name: "task" });
		},
		onError(error) {
			$swal.fire({
				title: "Error",
				text: error.message,
				icon: "error",
			});
		},
	});
}
</script>
