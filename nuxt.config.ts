import vuetify from 'vite-plugin-vuetify'
import { InlineConfig } from 'vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	srcDir: 'client/',
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },
	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://rickandmortyapi.com/graphql' },
		},
	},
	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
	hooks: {
		'vite:extendConfig': (config: InlineConfig) => {
			config?.plugins?.push(vuetify())
		},
	},
})
