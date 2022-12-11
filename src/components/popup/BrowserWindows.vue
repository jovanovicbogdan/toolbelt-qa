<script setup>
function openNewTab() {
	window.open('/', '_blank');
}

function openNewWindow() {
	window.open('/toolbelt-qa', '_blank', 'width=1024,height=720');
}

function openNewWindowMessage() {
	window.open('', 'MessageWindow', 'width=600,height=400').document.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum massa nec lorem volutpat, et feugiat arcu fringilla.</p>');
}
</script>

<template>
	<div>
		<div class="mb-3">
			<button class="btn btn-dark" @click="openNewTab">New Tab</button>
		</div>
		<div class="mb-3">
			<button class="btn btn-dark" @click="openNewWindow">New Window</button>
		</div>
		<div>
			<button class="btn btn-dark" @click="openNewWindowMessage">Get Message</button>
		</div>
	</div>
</template>
