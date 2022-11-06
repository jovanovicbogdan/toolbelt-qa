<script setup>
import { ref, computed } from 'vue';
import BasicForm from './components/elements/BasicForm.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const routes = {
  '/': Home,
  '/elements/basic-form': BasicForm
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
<Header />
<main class="container flex-shrink-0">
  <component :is="currentView" />
</main>
<Footer />
</template>

<style scoped></style>
