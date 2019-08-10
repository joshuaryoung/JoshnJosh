import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		dark: true,
		themes: {
			dark: {
				primary: '#E91E63',
				secondary: '#FF9800',
				accent: '#687681'
			}
		}
	},
	icons: {
		iconfont: 'mdi',
	},
})
