<script setup>
import { ref, computed } from 'vue';
import BasicForm from './components/elements/BasicForm.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import RadioButtons from './components/elements/RadioButtons.vue';
import WebTables from './components/elements/WebTables.vue';

const routes = {
	'/': Home,
	'/elements/basic-form': BasicForm,
	'/elements/radio-buttons': RadioButtons,
	'/elements/web-tables': WebTables,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash;
});

const currentView = computed(() => {
	return routes[currentPath.value.slice(1) || '/'] || NotFound;
});

</script>

<template>
	<Header />
	<main class="container flex-shrink-0" style="height: 80vh;">
		<component :is="currentView" />
	</main>
	<Footer />
</template>

<style scoped></style>
