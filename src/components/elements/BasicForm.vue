<script setup>
import { ref, computed } from 'vue';

const formInfo = {
	firstName: ref(''),
	lastName: ref(''),
	submitted: ref(false),
};

const fullName = computed({
	get() {
		return formInfo.firstName.value + ' ' + formInfo.lastName.value;
	},
	set(newValue) {
		[formInfo.firstName.value, formInfo.lastName.value] = newValue.split(' ');
	},
});

function toggleSubmitted() {
	if (!formInfo.firstName.value || !formInfo.lastName.value) {
		return;
	}
	formInfo.submitted.value = true;
}
</script>

<template>
	<p>Enter first name and last name and get the full name as a result.</p>
	<form @submit.prevent="onSubmit" class="mt-5 mb-5">
		<div class="mb-3">
			<label for="first-name" class="form-label">First Name</label>
			<input v-model="formInfo.firstName.value" type="text" class="form-control" id="first-name" aria-describedby="first-name-help" required>
		</div>
		<div class="mb-3">
			<label for="last-name" class="form-label">Last Name</label>
			<input v-model="formInfo.lastName.value" type="text" class="form-control" id="last-name" aria-describedby="last-name-help" required>
		</div>
		<button type="submit" class="btn btn-dark" @click="toggleSubmitted">Submit</button>
	</form>
	<div v-if="formInfo.submitted.value" class="alert alert-success d-flex space-between" role="alert">
		Full Name: <strong>{{ fullName }}</strong>
		<button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
</template>
