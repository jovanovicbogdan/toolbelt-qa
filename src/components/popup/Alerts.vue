<script setup>
import { ref } from 'vue';

const state = ref({
	confirmed: '',
	prompt: '',
});

function showAlert() {
	alert('Classic alert.');
}

function showAlertIn5() {
	setTimeout(() => alert('Displayed after 5 seconds.'), 5000);
}

function confirmAlert() {
	if (confirm('Press a button!')) {
		state.value.confirmed = 'You pressed OK!';
	} else {
		state.value.confirmed = 'You pressed Cancel!';
	}
}

function promptAlert() {
	const person = prompt('Please enter your name', 'Hairy Potter');
	if (person == null || person == '') {
		state.value.prompt = 'User cancelled the prompt.';
	} else {
		state.value.prompt = `Hello ${person}! How are you today?`;
	}
}
</script>

<template>
	<div class="w-50">
		<div class="row">
			<div class="col-md-6">
				<p>Click button to see classic alert.</p>
			</div>
			<div class="col">
				<button class="btn btn-dark" @click="showAlert">Alert</button>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-6">
				<p>Show alert in 5 seconds.</p>
			</div>
			<div class="col">
				<button class="btn btn-dark" @click="showAlertIn5">5 sec Delay Alert</button>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-6">
				<p>Show confirm box.</p>
				<p class="lead" v-if="state.confirmed">{{ state.confirmed }}</p>
			</div>
			<div class="col">
				<button class="btn btn-dark" @click="confirmAlert">Confirm Alert</button>
			</div>
		</div>

		<div class="row mt-4">
			<div class="col-md-6">
				<p>Show prompt box.</p>
				<p class="lead" v-if="state.prompt">{{ state.prompt }}</p>
			</div>
			<div class="col">
				<button class="btn btn-dark" @click="promptAlert">Prompt Alert</button>
			</div>
		</div>
	</div>
</template>
