<script setup></script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">QAToolbelt</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto pe-3">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							HTML Elements
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#/elements/basic-form">Basic Form</a></li>
							<li><a class="dropdown-item" href="#">Tree Browser</a></li>
							<li><a class="dropdown-item" href="#/elements/radio-buttons">Radio Button</a></li>
							<li><a class="dropdown-item" href="#/elements/web-tables">Web Tables</a></li>
							<li><a class="dropdown-item" href="#/elements/buttons">Button Interactions</a></li>
							<li><a class="dropdown-item" href="#/elements/broken-links">Broken Images and Links</a></li>
							<li><a class="dropdown-item" href="#/elements/data-transfer">Upload and Download</a></li>
							<li><a class="dropdown-item" href="#/elements/events-and-ajax">Events &amp; AJAX</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/forms">Form Validation</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Popup Windows
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#/popup/browser-windows">Browser Windows</a></li>
							<li><a class="dropdown-item" href="#/popup/alerts">Alerts</a></li>
							<li><a class="dropdown-item" href="#/popup/frames">Frames</a></li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Widgets
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#/widgets/auto-complete">Auto Complete</a></li>
							<li><a class="dropdown-item" href="#/widgets/date-picker">Date Picker</a></li>
							<li><a class="dropdown-item" href="#/widgets/progress-bar">Progress Bar</a></li>
							<li><a class="dropdown-item" href="#/widgets/tooltips">Tooltips</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/interactions">Interactions</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/student">Student Application</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	.dropdown:hover .dropdown-menu {
		display: block;
	}
</style>
