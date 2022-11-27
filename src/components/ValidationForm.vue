<script setup>
import { onMounted, ref } from 'vue';

const state = ref({
	selectedRange: 0,
	countries: [],
});

onMounted(async () => {
	fetch('src/assets/countries.txt')
		.then(res => res.text())
		.then(data => state.value.countries = data.split('\n'));
});

// function printFile(file) {
// 	const reader = new FileReader();
// 	reader.onload = (event) => {
// 		console.log(event.target.result);
// 	};
// 	reader.readAsText(file);
// }

function validateForm() {
	const forms = document.querySelectorAll('.needs-validation');

	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			}

			form.classList.add('was-validated');
		}, false);
	});
}

function updateRange() {
	state.value.selectedRange = document.getElementById('range').value;
}
</script>

<template>
	<h1 class="mb-5">Employee Registration Form</h1>
	<form class="row g-3 needs-validation" novalidate>
		<div class="col-md-4">
			<label for="validationCustom01" class="form-label">First name</label>
			<input type="text" class="form-control" id="validationCustom01" value="Mark" required>
		</div>
		<div class="col-md-4">
			<label for="validationCustom02" class="form-label">Last name</label>
			<input type="text" class="form-control" id="validationCustom02" value="Otto" required>
			<div class="invalid-feedback">
				Please enter correct last name format.
			</div>
		</div>
		<div class="col-md-4">
			<label for="validationCustomEmail" class="form-label">Email</label>
			<div class="input-group has-validation">
				<input type="text" class="form-control" id="validationCustomEmail" pattern="^([a-zA-Z0-9_\-\.]+)" aria-describedby="inputGroupPrepend" required>
				<span class="input-group-text" id="inputGroupPrepend">@example.com</span>
				<div class="invalid-feedback">
					Please enter a valid email.
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<label for="validationCustomUsername" class="form-label">Username</label>
			<div class="input-group has-validation">
				<span class="input-group-text" id="inputGroupPrepend">@</span>
				<input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
				<div class="invalid-feedback">
					Please choose a username.
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom03" class="form-label">City</label>
			<input type="text" class="form-control" id="validationCustom03" required>
			<div class="invalid-feedback">
				Please provide a valid city.
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom04" class="form-label">State</label>
			<select class="form-select" id="validationCustom04" required>
				<option selected disabled value="">Choose...</option>
				<option v-for="(country, index) in state.countries" :key="index" :value="country">{{ country }}</option>
			</select>
			<div class="invalid-feedback">
				Please select a valid state.
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom05" class="form-label">Zip</label>
			<input type="text" class="form-control" id="validationCustom05" required>
			<div class="invalid-feedback">
				Please provide a valid zip.
			</div>
		</div>
		<div class="col-md-3">
			<label for="range" class="form-label">Years of Experience</label>
			<input type="range" class="form-range" min="0" max="40" id="range" @change="updateRange">
			<p>Selected: {{ state.selectedRange }}</p>
		</div>
		<div class="col-12">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
				<label class="form-check-label" for="invalidCheck">
					Agree to terms and conditions
				</label>
				<div class="invalid-feedback">
					You must agree before submitting.
				</div>
			</div>
		</div>
		<div class="col-12">
			<button @click="validateForm" class="btn btn-dark" type="submit">Submit form</button>
		</div>
	</form>
</template>
