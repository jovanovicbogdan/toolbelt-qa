<script setup>
import { ref } from 'vue';

const navLinks = ref({
	elements: false,
	basicForm: false,
	formValidation: false,
	popup: false,
});

const setActiveLink = (selectedLink, linkParent = null) => {
	Object.keys(navLinks.value).forEach(navLink => {
		navLinks.value[navLink] = false;
	});
    
	navLinks.value[selectedLink] = true;

	if (linkParent) {
		navLinks.value[linkParent] = true;
	}
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">QAToolbelt</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto pe-3">
					<li class="nav-item">
						<!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link" href="#/elements">Elements</a>
						</li> -->
					<li class="nav-item dropdown">
						<a :class="['nav-link', 'dropdown-toggle', { 'active': navLinks.elements }]" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Elements
						</a>
						<ul class="dropdown-menu">
							<li><a :class="['dropdown-item', { 'active': navLinks.basicForm }]" href="#/elements/basic-form" @click="setActiveLink('basicForm', 'elements')">Basic Form</a></li>
							<li><a class="dropdown-item" href="#">Tree Browser</a></li>
							<!-- <li><hr class="dropdown-divider"></li> -->
							<li><a class="dropdown-item" href="#">Radio Button</a></li>
							<li><a class="dropdown-item" href="#">Web Tables</a></li>
							<li><a class="dropdown-item" href="#">Buttons</a></li>
							<li><a class="dropdown-item" href="#">Links</a></li>
							<li><a class="dropdown-item" href="#">Broken Links - Images</a></li>
							<li><a class="dropdown-item" href="#">Upload and Download</a></li>
							<li><a class="dropdown-item" href="#">Dynamic Properties</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a :class="['nav-link', { 'active' : navLinks.formValidation }]" href="#/forms" @click="setActiveLink('formValidation')">Form Validation</a>
					</li>
					<li class="nav-item">
						<a :class="['nav-link', { 'active' : navLinks.popup }]" href="#/popup" @click="setActiveLink('popup')">Popup Windows</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/widgets">Widgets</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/interactions">Interactions</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/student">Student System Application</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.dropdown:hover .dropdown-menu { display: block; }
</style>
