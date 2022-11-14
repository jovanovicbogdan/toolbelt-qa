<script setup>
import { ref } from 'vue';

const selectedValue = ref('');
</script>

<template>
	<div class="d-flex flex-row justify-content-around border">
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
		You have selected: <strong class="text-primary">{{ selectedValue }}</strong>
	</div>

</template>
