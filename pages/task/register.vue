<template>
	<div class="flex items-center justify-center px-4">
		<Form
			:validation-schema="registerUserFormSchema"
			@submit="onSubmit"
			class="flex flex-col gap-6 p-8 bg-white shadow-lg border border-gray-200 rounded-lg max-w-4xl w-full"
		>
			<!-- Header Section -->
			<div class="text-center mb-6">
				<div
					class="pattern-background mx-auto rounded-full text-white flex items-center justify-center border border-gray-300 shadow-md h-20 w-20"
				>
					<img
						src="https://avatar.iran.liara.run/public"
						alt="User avatar"
						class="w-full h-full rounded-full"
					/>
				</div>
				<h1 class="mt-4 text-2xl font-extrabold text-gray-800">
					Register an Account
				</h1>
				<p class="text-sm text-gray-500 mt-1">
					Fill in your details to create an account
				</p>
			</div>

			<!-- Form Fields -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- First Name -->
				<div class="flex flex-col gap-2">
					<label for="firstName" class="text-sm font-medium text-gray-700"
						>First Name</label
					>
					<Field
						type="text"
						name="firstName"
						id="firstName"
						class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
						placeholder="Enter your first name"
					/>
					<ErrorMessage name="firstName" class="text-red-500 text-sm" />
				</div>

				<!-- Last Name -->
				<div class="flex flex-col gap-2">
					<label for="lastName" class="text-sm font-medium text-gray-700"
						>Last Name</label
					>
					<Field
						type="text"
						name="lastName"
						id="lastName"
						class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
						placeholder="Enter your last name"
					/>
					<ErrorMessage name="lastName" class="text-red-500 text-sm" />
				</div>

				<!-- Username -->
				<div class="flex flex-col gap-2">
					<label for="username" class="text-sm font-medium text-gray-700"
						>Username</label
					>
					<Field
						type="text"
						name="username"
						id="username"
						class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
						placeholder="Enter your username"
					/>
					<ErrorMessage name="username" class="text-red-500 text-sm" />
				</div>

				<!-- Email -->
				<div class="flex flex-col gap-2">
					<label for="email" class="text-sm font-medium text-gray-700"
						>Email</label
					>
					<Field
						type="email"
						name="email"
						id="email"
						class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
						placeholder="Enter your email"
					/>
					<ErrorMessage name="email" class="text-red-500 text-sm" />
				</div>

				<!-- Password -->
				<div class="col-span-full flex flex-col gap-2">
					<label for="password" class="text-sm font-medium text-gray-700"
						>Password</label
					>
					<Field
						type="password"
						name="password"
						id="password"
						class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
						placeholder="Enter your password"
					/>
					<ErrorMessage name="password" class="text-red-500 text-sm" />
				</div>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				class="bg-[#11143A] text-white py-3 rounded-md font-semibold hover:bg-[#2C306B] transition-all w-full mt-6"
			>
				Register
			</button>
			<!-- Footer -->
			<div class="mt-4 text-center">
				<p class="text-sm text-gray-600">
					Already have an account?
					<nuxt-link
						:to="{ name: 'task-login' }"
						class="text-blue-600 hover:underline font-medium"
					>
						Login here
					</nuxt-link>
				</p>
			</div>
		</Form>
	</div>
</template>

<script setup lang="ts">
const { $swal } = useNuxtApp();

import { registerUserFormSchema } from "~/lib/schema/register-form-schema";
const {
	public: { API_URL },
} = useRuntimeConfig();
const router = useRouter();

async function onSubmit(values: any) {
	const resp = await fetch(API_URL + "/auth/register", {
		method: "POST",
		body: JSON.stringify(values),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (resp.ok) {
		$swal.fire({
			title: "Success",
			text: "Account created successfully",
			icon: "info",
		});
		await router.push({ name: "task-login" });
	}

	const data = await resp.json();
	$swal.fire({
		title: "Error",
		text: data.message || "An error occurred",
		icon: "error",
	});
}
</script>
