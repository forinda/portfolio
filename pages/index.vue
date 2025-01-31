<script setup lang="ts">
type SocialMediaLink = {
	label: string;
	href: string;
	icon: string;
	class?: string;
};
const socialMediaLinks = reactive<SocialMediaLink[]>([
	{
		label: "Twitter",
		href: "https://x.com/felix_orinda",
		icon: "lucide-twitter",
		class: "text-blue-500 hover:text-blue-700",
	},
	{
		label: "GitHub",
		href: "https://github.com/forinda",
		icon: "lucide-github",
		class: "text-gray-800 hover:text-gray-900",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/felixorinda",
		icon: "lucide-linkedin",
		class: "text-blue-700 hover:text-blue-900",
	},
]);

const skills = reactive<
	{
		title: string;
		description: string;
		image: string;
	}[]
>([
	{
		title: "Frontend web development",
		description:
			"I have experience building web applications using React, Vue, and Angular",
		image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		title: "Backend development",
		description:
			"I have experience building backend applications using Node.js, Express, Flask",
		image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Docker",
		description: "I have experience containerizing applications using Docker",
		image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "CI/CD",
		description:
			"I have experience setting up CI/CD pipelines using GitHub Actions",
		image: "https://images.unsplash.com/photo-1606206886378-e49a19ad0933?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "DevOps",
		description:
			"I have experience setting up and managing servers DigitalOcean",
		image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ZPZ-HnWTq-ofSVH9zZsMXg.png",
	},
	{
		title: "Database Management",
		description:
			"I have experience working with databases like MySQL, PostgreSQL, MongoDB",
		image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	}
]);
useSeoMeta(
	{
		title: "Main Page",
		description: "Main Page Description",
		ogTitle: "[og:title]",
		ogDescription: "[og:description]",
		ogImage: "[og:image]",
		ogUrl: "[og:url]",
		twitterTitle: "[twitter:title]",
		twitterDescription: "[twitter:description]",
		twitterImage: "[twitter:image]",
		twitterCard: "summary",
	},
	{},
);

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});
</script>
<template>
	<main class="p-4 font-mono">
		<section class="flex flex-col-reverse md:flex-row md:items-center gap-4">
			<div class="font-mono flex flex-col gap-6 flex-1">
				<h1 class="text-xl font-bold">Hello, I'm Felix orinda</h1>
				<p class="text-5xl md:text-7xl mt-4 capitalize">software Developer</p>
				<small class="ml-4 flex items-center gap-4 italic">
					<icon name="lucide-arrow-right" />
					Based in Nairobi, Kenya
				</small>
				<div class="flex items-center gap-4">
					<a
						v-for="link in socialMediaLinks"
						:href="link.href"
						class="flex items-center gap-2"
						:class="[link.class]"
						target="_blank"
					>
						<icon :name="link.icon" class="h-6 w-6" />
						<span>{{ link.label }}</span>
					</a>
				</div>
			</div>
			<div
				class="flex flex-1 items-center justify-center relative overflow-hidden"
			>
				<span
					class="absolute h-[95%] bg-opacity-45 bg-orange-300 -z-20 rounded-full aspect-square -bottom-20"
				>
				</span>
				<span
					class="absolute h-[80%] bg-green-200 -z-10 rounded-full aspect-square -bottom-10"
				>
				</span>
				<span
					class="absolute h-[70%] bg-blue-200 -z-10 rounded-full aspect-square -bottom-10"
				>
				</span>
				<img
					src="~/assets/images/orinda.png"
					alt="Hero Image"
					class="max-h-[50vh]"
				/>
			</div>
		</section>
		<section class="py-10 flex w-full">
			<div class="justify-center items-center w-full">
				<h2 class="text-4xl font-bold mt-10 text-center uppercase underline">
					About Me
				</h2>
				<p class="mt-4 max-w-2xl text-center justify-self-center">
					I'm a software developer based in Nairobi, Kenya, passionate about
					building impactful software.
				</p>
				<div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div
						v-for="skill in skills"
						:key="skill.title"
						class="p-6 border rounded-lg shadow-lg text-center"
					>
						<img
							:src="skill.image"
							:alt="skill.title"
							class="h-48 mx-auto mb-4 w-full object-cover rounded-lg"
						/>
						<h3 class="text-xl font-semibold">{{ skill.title }}</h3>
						<p class="text-gray-600 mt-2">{{ skill.description }}</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
