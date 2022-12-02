<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import LvProgressBar from 'lightvue/progress-bar';

const state = ref({
	interval: null,
	value: 0,
});

onMounted(() => startProgress());
onBeforeUnmount(() => endProgress());

function startProgress() {
	state.value.interval = setInterval(() => {
		let newValue = state.value.value + Math.floor(Math.random() * 10) + 1;
		if (newValue >= 100) {
			newValue = 0;
		}
		state.value.value = newValue;
	}, 2000);
}
function endProgress() {
	clearInterval(state.value.interval);
	state.value.interval = null;
}
</script>

<template>
	<h1 class="mb-5">Dynamic Progress Bar</h1>
	<div style="width: 100%">
		<LvProgressBar :value="state.value" />
		<br />
		<LvProgressBar :value="state.value" :show-value="false" color="#38b2ac" />
	</div>
</template>
