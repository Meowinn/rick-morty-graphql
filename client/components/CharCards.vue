<template>
    <v-card max-width="344">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-subtitle>{{ status }} | {{ species }}</v-card-subtitle> 
        <v-card-text>
            {{ image }}
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

const props = defineProps({
    name: String,
    image: String,
    status: String,
    species: String,
})

</script>