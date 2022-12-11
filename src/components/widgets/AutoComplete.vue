<script setup>
import { onMounted, ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import countriesUrl from '../../assets/countries.txt';

const state = ref({
	countries: [],
	searchValue: '',
	value: null,
	options: [
		{ value: 'batman', label: 'Batman' },
		{ value: 'robin', label: 'Robin' },
		{ value: 'joker', label: 'Joker' },
	],
});

onMounted(() => {
	fetch(countriesUrl)
		.then(res => res.text())
		.then(data => state.value.countries = data.split('\n'));
});
</script>

<template>
	<div id="reset" class="autocomplete">
		<h1>Data Lists</h1>

		<div>
			<input class="form-control mt-3" list="datalistOptions" placeholder="Type to search...">
			<datalist id="datalistOptions">
				<option v-for="(country, index) in state.countries" :key="index" :value="country"></option>
			</datalist>
		</div>

		<h1 class="mt-5">Select &amp; Multiselect</h1>
		<div>
			<Multiselect
				v-model="state.value"
				:options="state.options"
				mode="tags"
				:close-on-select="false"
				:searchable="true"
				:create-option="false"
			/>
		</div>
		<div class="mt-3">
			<select multiple name="cars" id="cars">
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
		</div>
	</div>
</template>
  
<style src="@vueform/multiselect/themes/default.css"></style>
