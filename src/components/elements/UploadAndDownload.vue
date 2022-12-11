<script setup>
import { onMounted } from 'vue';

import imgUrl from '../../assets/rickroll.jpg';

onMounted(() => document.querySelector('.download').href = imgUrl);
</script>

<template>
	<h1>Web Data Transfer</h1>
	<div class="d-flex align-items-center mt-5">
		<a download="rickroll.jpg" class="btn btn-dark download">Download</a>
		<div class="input-group mx-3">
			<input type="file" class="form-control" />
		</div>
	</div>
</template>
