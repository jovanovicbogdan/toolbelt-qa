<script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
</script>

<template>
	<h1>Date &amp; Time Picker</h1>
	<div>
		<Datepicker v-model="date" />
	</div>
</template>
