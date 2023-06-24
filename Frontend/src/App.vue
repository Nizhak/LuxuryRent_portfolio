<script>

// Компоненты
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import '@/assets/main.css'
import { RouterView } from 'vue-router'

// Главная страница
export default {
	components: {
		AppHeader,
		AppFooter,
		RouterView
	}
};


</script>

<template>
	<!-- Шапка -->
	<header>
		<div class="container">
			<app-header></app-header>
		</div>
	</header>

	<!-- Главная часть -->
	<main class="container">
		<router-view></router-view>
	</main>

	<!-- Подвал -->
	<footer>
		<div class="container">
			<app-footer></app-footer>
		</div>
	</footer>
</template>

<style>
	html,
	body {
		height: 100%;
		font-family: 'Roboto', sans-serif;
	}
	#app {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}

	#app > header {
		z-index: 999;
		position: sticky;
		top: 0;
		background: #ffffffaa; 
		backdrop-filter: blur(12.5px);
	}

	#app > main {
		flex: 1 1 auto;
	}
	#app > main > * {
		padding-bottom: 1.5rem;
	}

	#app > footer {
		background: var(--footer-background);
		color: var(--footer-color);
		padding: 20px 0;
	}
</style>