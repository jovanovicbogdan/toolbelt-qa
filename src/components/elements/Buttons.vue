<script setup>
import { ref } from 'vue';


const state = ref({
	clickPerformed: false,
	clickType: null,
});

function doubleClick() {
	state.value.clickPerformed = true;
	state.value.clickType = 'Double';
}

function rightClick(event) {
	event.preventDefault();
	state.value.clickPerformed = true;
	state.value.clickType = 'Right';
}

function click() {
	state.value.clickPerformed = true;
	state.value.clickType = 'Click';
}
</script>

<template>
	<h1>Basic Button Interactions</h1>
	<div class="d-flex flex-column gap-3">
		<button class="btn btn-dark" @dblclick="doubleClick">Perform Double Click</button>
		<button class="btn btn-dark" @contextmenu="rightClick($event)">Perform Right Click</button>
		<button class="btn btn-dark" @click="click">Perform Click</button>
	</div>

	<div v-if="state.clickPerformed" class="alert alert-success d-flex space-between mt-5" role="alert">
		<p><strong>{{ state.clickType }}</strong> click performed.</p>
	</div>
</template>
