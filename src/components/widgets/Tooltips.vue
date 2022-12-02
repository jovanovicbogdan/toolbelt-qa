<script setup>
import { Tooltip } from 'bootstrap';
import { onMounted } from 'vue';

onMounted(() => {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});
</script>

<template>
	<h1 class="mb-5">Tooltips</h1>
	<div class="mb-3">
		<button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
			Tooltip on top
		</button>
	</div>
	<div class="mb-3">
		<button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
			Tooltip on right
		</button>
	</div>
	<div class="mb-3">
		<button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
			Tooltip on bottom
		</button>
	</div>
	<div>
		<button type="button" class="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
			Tooltip on left
		</button>
	</div>
</template>
