<script setup>
import { onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseModal from '../shared/BaseModal.vue';
import { Modal } from 'bootstrap';

const state = ref({
	employeeModal: null,
	user: {},
	userUpdating: null,
	defaultSelectedRows: 5,
	currentPage: 1,
	filteredUsers: [],
	users: [
		{
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			age: '45',
			email: 'john@gmail.com',
			salary: 20000,
			department: 'InfoSec',
		},
		{
			id: 2,
			firstName: 'Jane',
			lastName: 'Doe',
			age: '23',
			email: 'jane@gmail.com',
			salary: 10000,
			department: 'Human Resources',
		},
		{
			id: 3,
			firstName: 'George',
			lastName: 'Bluth',
			age: '32',
			email: 'george@gmail.com',
			salary: 8000,
			department: 'DevOps',
		},
		{
			id: 4,
			firstName: 'Emma',
			lastName: 'Wong',
			age: '38',
			email: 'emma@gmail.com',
			salary: 9000,
			department: 'Quality Assurance',
		},
		{
			id: 5,
			firstName: 'Charles',
			lastName: 'Morris',
			age: '44',
			email: 'charles@gmail.com',
			salary: 14000,
			department: 'Development',
		},
		{
			id: 6,
			firstName: 'Tracey',
			lastName: 'Ramos',
			age: '26',
			email: 'tracey@gmail.com',
			salary: 6000,
			department: 'Human Resources',
		},
	],
});

onMounted(() => {
	state.value.filteredUsers = selectRows();
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

function saveEmployee() {
	if (!state.value.user.firstName || !state.value.user.lastName || !state.value.user.age || 
        !state.value.user.email || !state.value.user.salary || !state.value.user.department) return;

	if (state.value.userUpdating) {
		state.value.users = state.value.users.map((user) => {
			if (user.id === state.value.userUpdating.id) user = state.value.userUpdating;
			return user;
		});
		state.value.userUpdating = null;
		state.value.user = {};
		return;
	}

	state.value.user.id = state.value.users[state.value.users.length - 1].id + 1;
	state.value.users.push(state.value.user);
	state.value.user = {};
}

function removeEmployee(userId) {
	state.value.users = state.value.users.filter((user) => user.id !== userId);
	state.value.filteredUsers = state.value.users.slice(0, state.value.defaultSelectedRows);
}

function updateEmployee(employee) {
	state.value.user = employee;
	openModal();
	if (!employee.firstName || !employee.lastName || !employee.age || 
        !employee.email || !employee.salary || !employee.department) return;

	state.value.userUpdating = employee;
}

function search(event) {
	let searchValue = event.target.value.toLowerCase();
	if (searchValue === '') {
		selectRows();
		return;
	}

	state.value.filteredUsers = state.value.users.filter((user) => {
		if (user.firstName.toLowerCase().startsWith(searchValue) || user.lastName.toLowerCase().startsWith(searchValue) ||
			user.age.toLowerCase().startsWith(searchValue) || user.email.toLowerCase().startsWith(searchValue) || 
			user.salary.toString().startsWith(searchValue) || user.department.toLowerCase().startsWith(searchValue)) return user;
	});
}

function selectRows() {
	state.value.filteredUsers = state.value.users.slice(0, state.value.defaultSelectedRows);
	state.value.currentPage = 1;
	return state.value.filteredUsers;
}

function nextPage() {
	const from = state.value.defaultSelectedRows * state.value.currentPage;
	const to = from + state.value.defaultSelectedRows;
	if (state.value.users.slice(from, to).length === 0) return;
	state.value.filteredUsers = state.value.users.slice(from, to);
	state.value.currentPage++;
}

function prevPage() {
	const from = state.value.defaultSelectedRows * (state.value.currentPage - 2);
	if (from < 0) return;
	const to = from + state.value.defaultSelectedRows;
	state.value.filteredUsers = state.value.users.slice(from, to);
	if (state.value.filteredUsers.length === 0) return;
	state.value.currentPage--;
}

</script>

<template>	
	<BaseModal id="employee-modal" :close-modal="closeModal">
		<template #title>
			<span v-if="state.user.firstName && state.user.lastName && state.user.age && state.user.email && state.user.salary && state.user.department">Editing {{ state.user.firstName }}</span>
			<span v-else>Create a New Employee</span>
		</template>

		<template #body>
			<form>
				<div class="mb-2">
					<label for="id" class="form-label">ID</label>
					<input type="text" class="form-control" id="id" v-model="state.user.id" disabled>
				</div>
				<div class="mb-2">
					<label for="first-name" class="form-label">First Name</label>
					<input type="text" class="form-control" id="first-name" v-model="state.user.firstName">
				</div>
				<div class="mb-2">
					<label for="last-name" class="form-label">Last Name</label>
					<input type="text" class="form-control" id="last-name" v-model="state.user.lastName">
				</div>
				<div class="mb-2">
					<label for="age" class="form-label">Age</label>
					<input type="text" class="form-control" id="age" v-model="state.user.age">
				</div>
				<div class="mb-2">
					<label for="email" class="form-label">Email</label>
					<input type="email" class="form-control" id="email" v-model="state.user.email">
				</div>
				<div class="mb-2">
					<label for="salary" class="form-label">Salary</label>
					<input type="text" class="form-control" id="salary" v-model="state.user.salary">
				</div>
				<div class="mb-2">
					<label class="form-label">Select department</label>
					<select class="form-select" v-model="state.user.department">
						<option value="DevOps" selected>DevOps</option>
						<option value="InfoSec">InfoSec</option>
						<option value="Human Resources">Human Resources</option>
						<option value="Quality Assurance">Quality Assurance</option>
						<option value="Development">Development</option>
					</select>
				</div>
			</form>
		</template>

		<template #footer>
			<button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="closeModal">Close</button>
			<button type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="saveEmployee">Save changes</button>
		</template>
	</BaseModal>

	<div class="d-flex align-items-center justify-content-between w-100">
		<div class="w-25">
			<button @click="openModal" class="btn btn-dark"><FontAwesomeIcon icon="fa-solid fa-plus" size="sm" /> Add Employee</button>
		</div>
		<div class="w-25">
			<input @keyup="search($event)" type="text" class="form-control" placeholder="Type to search" aria-label="Type to search" aria-describedby="button-addon2">
		</div>
	</div>
	<table class="table table-hover table-bordered mt-3">
		<thead class="table-light">
			<tr class="text-center">
				<th scope="col">#</th>
				<th scope="col">First Name</th>
				<th scope="col">Last Name</th>
				<th scope="col">Age</th>
				<th scope="col">Email</th>
				<th scope="col">Salary</th>
				<th scope="col">Department</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody class="table-group-divider">
			<tr v-for="user in state.filteredUsers" :key="user.id">
				<th scope="row">{{ user.id }}</th>
				<td>{{ user.firstName }}</td>
				<td>{{ user.lastName }}</td>
				<td>{{ user.age }}</td>
				<td>{{ user.email }}</td>
				<td>{{ user.salary }}</td>
				<td>{{ user.department }}</td>
				<td class="d-flex justify-content-between">
					<FontAwesomeIcon @click="updateEmployee(user)" icon="fa-solid fa-pen-to-square" size="xl" />
					<FontAwesomeIcon @click="removeEmployee(user.id)" icon="fa-solid fa-trash" size="xl" />
				</td>
			</tr>
		</tbody>
	</table>

	<p>Page: {{ state.currentPage }} of {{ Math.ceil(state.users.length / state.defaultSelectedRows) }}</p>

	<div class="d-flex align-items-center justify-content-between w-50 mx-auto">
		<div>
			<button class="btn btn-light" @click="prevPage">Prev</button>
		</div>
		<div class="w-25">
			<select @change="selectRows" v-model="state.defaultSelectedRows" class="form-select">
				<option value="5" selected>5 entries</option>
				<option value="10">10 entries</option>
				<option value="25">25 entries</option>
				<option value="50">50 entries</option>
				<option value="100">100 entries</option>
			</select>
		</div>
		<div>
			<button class="btn btn-light" @click="nextPage">Next</button>
		</div>
	</div>
</template>

<style scoped>
    td > svg {
        cursor: pointer;
    }
</style>
