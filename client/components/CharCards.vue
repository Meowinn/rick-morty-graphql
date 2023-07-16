<template>
	<v-card max-width="344" :class="status === 'Dead' ? 'bg-surface-variant' : 'bg-blue-lighten-3'">
		<v-img cover :src="image" :lazy-src="image">
			<template #placeholder>
				<div class="d-flex align-center justify-center fill-height">
					<v-progress-circular color="grey-lighten-4" indeterminate />
				</div>
			</template>
		</v-img>
		<v-card-title>{{ name }}</v-card-title>
		<v-card-subtitle>Status: {{ status }} | Species: {{ species }}</v-card-subtitle>
		<v-card-text>
			<p>{{ location }}</p>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
defineProps({
	name: String,
	image: String,
	status: String,
	species: String,
	location: String,
})
</script>
