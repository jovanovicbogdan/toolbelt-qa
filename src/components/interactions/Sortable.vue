<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const state = ref({
	display: 'Simple',
	order: 0,
	enabled: true,
	list: [
		{ name: 'John', id: 0 },
		{ name: 'Joao', id: 1 },
		{ name: 'Jean', id: 2 },
	],
	dragging: false,
});

function draggingInfo() {
	return state.value.dragging ? 'under drag' : '';
}

let id = 1;
function add() {
	state.value.list.push({ name: 'Juan ' + id, id: id++ });
}

function replace() {
	state.value.list = [{ name: 'Edgard', id: id++ }];
}

// function checkMove(event) {
// 	window.console.log('Future index: ' + event.draggedContext.futureIndex);
// }
</script>

<template>
	<div class="row">
		<div class="col-2">
			<div class="form-group">
				<div
					class="btn-group-vertical buttons"
					role="group"
					aria-label="Basic example"
				>
					<button class="btn btn-dark" @click="add">Add</button>
					<button class="btn btn-dark" @click="replace">Replace</button>
				</div>
  
				<div class="form-check mt-3">
					<input
						id="disabled"
						type="checkbox"
						v-model="state.enabled"
						class="form-check-input"
					/>
					<label class="form-check-label" for="disabled">DnD enabled</label>
				</div>
			</div>
		</div>
  
		<div class="col-6">
			<h3>Sortable {{ draggingInfo() }}</h3>
  
			<draggable
				:list="state.list"
				:disabled="!state.enabled"
				item-key="name"
				class="list-group"
				ghost-class="ghost"
				@start="state.dragging = true"
				@end="state.dragging = false"
			>
				<template #item="{ element }">
					<div class="list-group-item" :class="{ 'not-draggable': !state.enabled }">
						{{ element.name }}
					</div>
				</template>
			</draggable>
		</div>
	</div>
</template>

<style scoped>
.buttons {
	margin-top: 35px;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}

.not-draggable {
	cursor: no-drop;
}
</style>
