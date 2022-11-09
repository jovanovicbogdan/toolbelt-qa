<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="footer text-bg-dark text-center text-lg-start mt-auto fixed-bottom">
		<div class="text-center p-3">
			&copy; {{ currentYear }} Copyright
			<a class="text-info" href="https://jovanovicbogdan.com/" target="_blank">jovanovicbogdan.com</a>
		</div>
	</footer>
</template>
