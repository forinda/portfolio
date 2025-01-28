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
const { $swal } = useNuxtApp();
// const auth = useAuth();
definePageMeta({
  layout: "default",
  middleware: ["no-auth"],
});
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { API_URL } from "~/utils/constants/api";
const router = useRouter();
const loginFormSchema = toTypedSchema(
  z.object({
    emailOrUsername: z
      .string()
      .min(1, { message: "Please enter your email/username" }),
    password: z
      .string()
      .min(1, { message: "Please enter your password" })
      .min(8, { message: "Password must be at least 8 characters" }),
  }),
);

type LoginUserFormType = typeof loginFormSchema;
async function onSubmit(values: any) {
  const resp = await fetch(API_URL + "/auth/login", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.ok) {
    $swal.fire({
      title: "Success",
      text: "Login successful",
      icon: "success",
    });
		refreshCookie('access_token');
		refreshCookie('refresh_token');
		// await (await auth).refresh();
    await router.push({ name: "task", state: { from: "login" } });
  }

  const data = await resp.json();
  $swal.fire({
    title: "Error",
    text: data.message || "An error occurred",
    icon: "error",
    draggable: true,
  });
}
</script>
