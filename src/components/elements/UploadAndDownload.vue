<script setup>
import imgUrl from '../../assets/rickroll.jpg';
</script>

<template>
	<h1>Web Data Transfer</h1>
	<div class="d-flex align-items-center mt-5">
		<a :href="imgUrl" download="rickroll.jpg" class="btn btn-dark download">Download</a>
		<div class="input-group mx-3">
			<input type="file" class="form-control" />
		</div>
	</div>
</template>
