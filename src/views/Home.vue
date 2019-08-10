<template>
  <v-container style="height: 100%;">
    <v-layout
      text-center
      wrap
			row
			justify-center
			align-center
			style="height: 100%;"
    >
      <v-flex>
				<v-card>
					<v-layout
						column
						justify-center
						align-center
					>
						<v-flex>
							<v-card-title>
								<h1 class="display-2 font-weight-bold mb-3">
									Tipping Keeps Service Workers Poor
								</h1>
							</v-card-title>
						</v-flex>
						<v-flex>
							<v-layout row justify-space-around align-content-center>
								<v-flex xs3>
									<v-card-actions>
										<v-img
											:src="require('../assets/Tipping.webp')"
											contain
											height="200"
										></v-img>
									</v-card-actions>
								</v-flex>
								<v-flex align-self-center xs6>
									<v-card-text>
										"The Bureau of Labor Statistics estimated the average restaurant server earned approximately $25,000 in 2017, with a nationwide range of about $17,000 for non-metropolitan areas to around $50,000 in metropolitan areas. In other words, the restaurant industry experiences one of the highest incidences of wage theft — and its low-wage workers are the most vulnerable."
									</v-card-text>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
			<v-flex>
				<v-card>
					<v-layout
						column
						justify-center
						align-center
					>
						<v-flex>
							<v-card-title>
								<h1 class="display-2 font-weight-bold mb-3">
									Wait, won't I make less if we end tipping?
								</h1>
							</v-card-title>
						</v-flex>
						<v-flex xs12>
							<v-img
								:src="require('../assets/Tipping.webp')"
								class="my-3"
								contain
								height="200"
							></v-img>
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader',
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify',
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify',
			},
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com',
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com',
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify',
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs',
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify',
			},
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer',
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/layout/pre-defined',
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
			},
		],
	}),
}
</script>
