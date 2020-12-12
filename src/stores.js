import { readable } from 'svelte/store';

const stub = 'http://localhost:3000/'
const dora = 'http://192.168.1.104:3000/sys_stats/'

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const fakeStat = { loading: {
	Name: 'loading...',
	Min: 0,
	Max: 0,
	Value: 0
}}

export const stats = readable(fakeStat, function start(set) {
	const interval = setInterval(() => {
		asyncFetch(dora, set)
	}, 1000);

	return function stop() {
		clearInterval(interval);
	}
})

const asyncFetch = async (url, setFunction) => {
	const response = await fetch(url)
	const parse = await response.json()
	setFunction(parse)
}