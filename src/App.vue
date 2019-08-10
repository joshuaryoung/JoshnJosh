<template>
  <v-app style="overflow-y: auto">
    <v-app-bar app color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span>Ditch the tips</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
      >
        <span class="mr-2">How to contribute?</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
	name: 'App',
	data: () => ({
		//
	}),
}
</script>

<style>
	html {
		overflow-y: hidden !important;
	}
</style>
