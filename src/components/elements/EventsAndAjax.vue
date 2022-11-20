<script setup>
import { ref } from 'vue';

const state = ref({
	visible: false,
	peopleId: 1,
	name: '',
	height: '',
	birthYear: '',
});

setTimeout(() => {
	state.value.visible = true;
	document.querySelector('.color').style.color = 'red';
	document.querySelector('.disabled').classList.remove('disabled');
}, 5000);

function getStarWarsData() {
	fetch(`https://swapi.dev/api/people/${state.value.peopleId}`)
		.then(res => res.json())
		.then(data => {
			state.value.name = data['name'];
			state.value.height = data['height'];
			state.value.birthYear = data['birth_year'];
		});
	state.value.peopleId++;
	if (state.value.peopleId === 12) state.value.peopleId = 1;
}

setInterval(() => getStarWarsData(), 6000);

getStarWarsData();
</script>

<template>
	<h1 class="mb-5">Dynamic Events &amp; AJAX</h1>

	<div class="row text-center" id="buttons">
		<div class="col">
			<button class="btn btn-dark color">CSS Color Change</button>
		</div>
		<div class="col">
			<button class="btn btn-dark disabled">Clickable in 5s</button>
		</div>
		<div class="col" v-if="state.visible">
			<button class="btn btn-dark">Visible in 5s</button>
		</div>
	</div>

	<h2 class="my-5">Star Wars Data (values are updating periodically)</h2>

	<table class="table table-hover table-bordered mt-3">
		<thead class="table-light">
			<tr class="text-center">
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">Height</th>
				<th scope="col">Birth Year</th>
			</tr>
		</thead>
		<tbody class="table-group-divider">
			<tr>
				<th scope="row">{{ state.peopleId }}</th>
				<td id="name">{{ state.name }}</td>
				<td id="height">{{ state.height }}</td>
				<td id="birth-year">{{ state.birthYear }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
    table th,
    table td {
        width: 100px;
    }
</style>
