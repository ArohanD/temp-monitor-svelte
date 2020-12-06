import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Electron + Svelte'
	}
});

export default app;