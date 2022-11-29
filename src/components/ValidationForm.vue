<script setup>
import { onMounted, ref } from 'vue';
import BaseModal from './shared/BaseModal.vue';
import { Modal } from 'bootstrap';

const state = ref({
	selectedRange: 0,
	countries: [],
	employeeModal: null,
	user: {
		experience: 0,
	},
});

onMounted(async () => {
	fetch('src/assets/countries.txt')
		.then(res => res.text())
		.then(data => state.value.countries = data.split('\n'));
	state.value.employeeModal = new Modal('#employee-modal', {});
});

function openModal() {
	state.value.employeeModal.show();
}

function closeModal() {
	state.value.employeeModal.hide();
	state.value.userUpdating = null;
	state.value.user = {};
}

function validateForm() {
	const forms = document.querySelectorAll('.needs-validation');

	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			}

			form.classList.add('was-validated');
			openModal();
		}, false);
	});
}

function updateRange() {
	state.value.selectedRange = document.getElementById('range').value;
}
</script>

<template>
	<h1 class="mb-5">Employee Registration Form</h1>
	<BaseModal id="employee-modal" :close-modal="closeModal">
		<template #title>
			<span v-if="state.user.firstName && state.user.lastName && state.user.age && state.user.email && state.user.salary && state.user.department">Editing {{ state.user.firstName }}</span>
			<span v-else>Create a New Employee</span>
		</template>

		<template #body>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Label</th>
						<th scope="col">Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>First name</td>
						<td>{{ state.user.firstName }}</td>
					</tr>
					<tr>
						<td>Last name</td>
						<td>{{ state.user.lastName }}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>{{ state.user.email }}</td>
					</tr>
					<tr>
						<td>Username</td>
						<td>{{ state.user.username }}</td>
					</tr>
					<tr>
						<td>City</td>
						<td>{{ state.user.city }}</td>
					</tr>
					<tr>
						<td>State</td>
						<td>{{ state.user.country }}</td>
					</tr>
					<tr>
						<td>ZIP</td>
						<td>{{ state.user.zip }}</td>
					</tr>
					<tr>
						<td>Experience</td>
						<td>{{ state.user.experience }}</td>
					</tr>
				</tbody>
			</table>
		</template>

		<template #footer>
			<button type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="closeModal">Close</button>
		</template>
	</BaseModal>
	<form class="row g-3 needs-validation" novalidate>
		<div class="col-md-4">
			<label for="validationCustom01" class="form-label">First name</label>
			<input type="text" class="form-control" id="validationCustom01" v-model="state.user.firstName" required>
		</div>
		<div class="col-md-4">
			<label for="validationCustom02" class="form-label">Last name</label>
			<input type="text" class="form-control" id="validationCustom02" v-model="state.user.lastName" required>
			<div class="invalid-feedback">
				Please enter correct last name format.
			</div>
		</div>
		<div class="col-md-4">
			<label for="validationCustomEmail" class="form-label">Email</label>
			<div class="input-group has-validation">
				<input type="text" class="form-control" id="validationCustomEmail" pattern="^([a-zA-Z0-9_\-\.]+)" v-model="state.user.email" aria-describedby="inputGroupPrepend" required>
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
				<input type="text" class="form-control" id="validationCustomUsername" v-model="state.user.username" aria-describedby="inputGroupPrepend" required>
				<div class="invalid-feedback">
					Please choose a username.
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom03" class="form-label">City</label>
			<input type="text" class="form-control" id="validationCustom03" v-model="state.user.city" required>
			<div class="invalid-feedback">
				Please provide a valid city.
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom04" class="form-label">State</label>
			<select class="form-select" id="validationCustom04" v-model="state.user.country" required>
				<option selected disabled value="">Choose...</option>
				<option v-for="(country, index) in state.countries" :key="index" :value="country">{{ country }}</option>
			</select>
			<div class="invalid-feedback">
				Please select a valid state.
			</div>
		</div>
		<div class="col-md-3">
			<label for="validationCustom05" class="form-label">Zip</label>
			<input type="text" class="form-control" id="validationCustom05" v-model="state.user.zip" required>
			<div class="invalid-feedback">
				Please provide a valid zip.
			</div>
		</div>
		<div class="col-md-3">
			<label for="range" class="form-label">Years of Experience</label>
			<input type="range" class="form-range" min="0" step="2" max="40" id="range" @change="updateRange" v-model="state.user.experience">
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
