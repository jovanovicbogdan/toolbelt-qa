<script setup>
import { ref, computed } from 'vue';
import SamplePage from './components/shared/SamplePage.vue';
import BasicForm from './components/elements/BasicForm.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import RadioButtons from './components/elements/RadioButtons.vue';
import WebTables from './components/elements/WebTables.vue';
import Buttons from './components/elements/Buttons.vue';
import BrokenLinks from './components/elements/BrokenLinks.vue';
import UploadAndDownload from './components/elements/UploadAndDownload.vue';
import EventsAndAjax from './components/elements/EventsAndAjax.vue';
import ValidationForm from './components/ValidationForm.vue';
import BrowserWindows from './components/popup/BrowserWindows.vue';
import Alerts from './components/popup/Alerts.vue';
import Frames from './components/popup/Frames.vue';
import AutoComplete from './components/widgets/AutoComplete.vue';
import DatePicker from './components/widgets/DatePicker.vue';
import ProgressBar from './components/widgets/ProgressBar.vue';
import Tooltips from './components/widgets/Tooltips.vue';
import DragAndDrop from './components/interactions/DragAndDrop.vue';
import Resizable from './components/interactions/Resizable.vue';
import Sortable from './components/interactions/Sortable.vue';

const routes = {
	'/': Home,
	'/sample': SamplePage,
	'/elements/basic-form': BasicForm,
	'/elements/radio-buttons': RadioButtons,
	'/elements/web-tables': WebTables,
	'/elements/buttons': Buttons,
	'/elements/broken-links': BrokenLinks,
	'/elements/data-transfer': UploadAndDownload,
	'/elements/events-and-ajax': EventsAndAjax,
	'/forms': ValidationForm,
	'/popup/browser-windows': BrowserWindows,
	'/popup/alerts': Alerts,
	'/popup/frames': Frames,
	'/widgets/auto-complete': AutoComplete,
	'/widgets/date-picker': DatePicker,
	'/widgets/progress-bar': ProgressBar,
	'/widgets/tooltips': Tooltips,
	'/interactions/drag-and-drop': DragAndDrop,
	'/interactions/resizable': Resizable,
	'/interactions/sortable': Sortable,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => currentPath.value = window.location.hash);

const currentView = computed(() => routes[currentPath.value.slice(1) || '/'] || NotFound);

</script>

<template>
	<Header />
	<main class="container flex-shrink-0" style="height: 85vh;">
		<component :is="currentView" />
	</main>
	<Footer />
</template>

<style scoped></style>
