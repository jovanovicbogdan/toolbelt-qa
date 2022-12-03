<script setup></script>

<template>
	<h1 class="mb-5">Resizable</h1>
	<div class="parent-resizable border">
		<div class="resizable">
			<p>Resizable element, initial size is 200x200. Minimum size is 150x150, maximum is 500x300.</p>
		</div>
	</div>
</template>

<style scoped>
.parent-resizable {
	width: 500px;
	height: 300px;
}

.resizable {
	background-color: #343a40;
	color: #ffffff;
	width: 200px;
	height: 200px;
	min-width: 150px;
	min-height: 150px;
	max-width: 500px;
	max-height: 300px;
	padding: 20px;
	resize: both;
	overflow: auto;
}
</style>
