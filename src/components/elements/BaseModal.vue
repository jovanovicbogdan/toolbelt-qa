<script setup>
const props = defineProps({
	id: String,
	closeModal: Function,
});
</script>

<template>
	<div class="modal fade" :id="props.id" tabindex="-1" :aria-labelledby="props.id + 'label'" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" :id="props.id + '-label'">
						<slot name="title" />
					</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
				</div>
				<div class="modal-body">
					<slot name="body" />
				</div>
				<div class="modal-footer">
					<slot name="footer" />
				</div>
			</div>
		</div>
	</div>
</template>
