<script setup>
import imgUrl from '../../assets/rickroll.jpg';
</script>

<template>
	<h1>Broken Images and Links</h1>

	<div class="row mt-5">
		<div class="col">
			<img :src="imgUrl" class="img-thumbnail" width="200" height="200" />
		</div>
		<div class="col">
			<img class="img-thumbnail" alt="Broken Image" />
			<!-- <a href="https://the-internet.herokuapp.com/broken_images">Broken Images</a> -->
		</div>
		<div class="col">
			<a href="https://google.com" target="_blank">Link</a>
		</div>
		<div class="col">
			<a href="https://the-internet.herokuapp.com/status_codes/500" target="_blank">Broken Link</a>
		</div>
	</div>
</template>
