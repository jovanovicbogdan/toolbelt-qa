<script setup>
import { onMounted, ref } from 'vue';
import { repeat } from 'seemly';

const state = ref({
	data: [],
	checkedValues: [],
});

onMounted(() => state.value.data = createData());

function createData(level = 3, baseKey = '') {
	if (!level) return void 0;
	return repeat(4 - level, void 0).map((_, index) => {
		const key = '' + baseKey + level + index;
		return {
			label: createLabel(level),
			key,
			children: createData(level - 1, key),
		};
	});
}

function createLabel(level) {
	// if (level === 4) return 'Out of Tao, One is born';
	if (level === 3) return 'Out of One, Two';
	if (level === 2) return 'Out of Two, Three';
	if (level === 1) return 'Out of Three, the created universe';
	return '';
}

function updateCheckedKeys(keys, options) {
	// console.log('updateCheckedKeys', keys, options, meta);
	let values = [];
	options.forEach(element => {
		values.push(element.label);
	});
	state.value.checkedValues = values;
}
</script>

<template>
	<h1 class="mb-5">Checkbox Tree Browser</h1>
	<n-tree
		block-line
		cascade
		checkable
		:data="state.data"
		@update:checked-keys="updateCheckedKeys"
	/>
	<table class="mt-3">
		<thead>
			<tr>
				<th>Checked values</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(value, index) in state.checkedValues" :key="index">
				<td>{{ value }}</td>
			</tr>
		</tbody>
	</table>
</template>
