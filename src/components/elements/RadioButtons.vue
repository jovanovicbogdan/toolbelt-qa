<script setup>
import { ref } from 'vue';

const selectedValue = ref('');
</script>

<template>
	<h1>Radio Buttons</h1>
	<div class="d-flex flex-row justify-content-around border mt-5">
		<div>
			<input v-model="selectedValue" type="radio" name="radio" id="yes" value="Yes" />
			<label for="yes" class="p-2">Yes</label>
		</div>
		<div>
			<input v-model="selectedValue" type="radio" name="radio" id="no" value="No" />
			<label for="no" class="p-2">No</label>
		</div>
		<div>
			<input v-model="selectedValue" type="radio" name="radio" id="disabled" disabled />
			<label for="disabled" class="p-2">Disabled</label>
		</div>
	</div>
	<div v-if="selectedValue" class="alert alert-success d-flex space-between mt-5" role="alert">
		<p>You have selected: <strong class="text-primary">{{ selectedValue }}</strong></p>
	</div>

</template>
