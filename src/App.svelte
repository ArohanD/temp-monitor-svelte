<script>
  import { time, stats } from "./stores";
  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  const relevantStats = [
    'GPU Core', 
    //'CPU Package'
  ]
  
  import Odometer from './Odometer.svelte';
  $: keys = Object.keys($stats)
    .filter(key => relevantStats.includes(key));
	
</script>

<style>
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */

  main {
    margin: 0 auto;

    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;

    background-color: #dfe1e8;
  }

</style>

<main>
  {#each keys as key (JSON.stringify($stats[key]))}
    <Odometer stat={$stats[key]} />
  {/each}
</main>
