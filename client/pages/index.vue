<template>
	<v-container>
		<v-row>
			<v-col v-for="character in characters" :key="character.id">
				<CharCards
					:name="character.name"
					:status="character.status"
					:image="character.image"
					:species="character.species"
					:location="character.location.name"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
const query = gql`
	query getCharacters {
		characters {
			results {
				name
				image
				status
				id
				species
				location {
					name
				}
			}
		}
	}
`

const { data } = await useAsyncQuery<{
	characters: {
		results: [
			{
				name: string
				image: string
				status: string
				id: string
				species: string
				location: {
					name: string
				}
			},
		]
	}
}>(query)

const characters = computed(() => data.value?.characters.results)
</script>
