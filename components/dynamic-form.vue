<template>
	<Form
		:validation-schema="validationSchema"
		@submit="$emit('submit', $event as any)"
		:initial-values="initialValues"
		:class="['bg-white p-6 rounded-lg shadow-md', className]"
	>
		<slot name="form-header">
			<div class="mb-4">
				<h2 class="text-xl font-semibold text-gray-800">Submit Form</h2>
			</div>
		</slot>

		<slot name="form-fields" :fields="fields">
			<div
				v-for="{ as, name, label, children, id, ...attrs } in fields"
				:key="name"
				class="flex flex-col gap-2 mb-4"
			>
				<label :for="name" class="text-gray-700 font-medium">{{ label }}</label>
				<Field
					:as="as"
					:name="name"
					v-bind="attrs"
					class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none p-2 rounded-md"
				>
					<template v-if="children && children.length">
						<component
							v-for="({ as: tag, label, ...childAttrs }, idx) in children"
							:key="idx"
							:is="tag"
							v-bind="childAttrs"
							class="text-gray-700"
						>
							{{ label }}
						</component>
					</template>
				</Field>
				<ErrorMessage :name="name" class="text-red-500 text-sm italic" />
			</div>
		</slot>

		<slot name="submit-button">
			<button
				type="submit"
				class="bg-blue-600 hover:bg-blue-700 transition-all text-white p-2 rounded-md w-full font-medium"
			>
				Submit
			</button>
		</slot>
	</Form>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import type { z } from "zod";
import type { GenericFormField } from "~/types/generic-form";

defineProps<{
	validationSchema?:Record<string, any>;
	fields: GenericFormField[];
	className?: string;
	initialValues?: T;
}>();

defineEmits<{
	(e: "submit", val: T): void;
}>();
</script>
