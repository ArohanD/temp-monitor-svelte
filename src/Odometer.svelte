<script>
  import { onMount } from 'svelte';
  export let stat
  let { Name, Min, Max, Value } = stat;


  onMount(() => {

  });

</script>

<style type="text/scss">
  .neumorph{
    background: #dfe1e8;
    box-shadow:  20px 20px 60px #bebfc5, 
             -20px -20px 60px #ffffff;
  }
  
  .progress {
    position: relative;
    color: bisque;

    width: 100%;
    height: 100%;
    background: #dfe1e8;
    border-radius: 50%;

    display: grid;
    place-items: center;
    overflow: hidden;

    .inner_circle {
      position: absolute;
      height: 230px;
      width: 230px;
      border-radius: 50%;
      background-color: #dfe1e8;
    }

  }

  main {
    padding: 10px;
    width: 80vh;
    height: 80vh;
  }

  .blocker_square {
    position: absolute;
    bottom: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;


    height: 200px;
    width: 200px;
    background-color: #dfe1e8;
  }

</style>

<main>
  {#if stat}
    <!-- <p>
      {Name} is currently {Math.round(Value)}. Min: {Math.round(Min)} Max: {Math.round(Max)}
    </p> -->
    <div class="progress neumorph" id="progress">
      <div class="blocker_square neumorph"></div>
      <div class="inner_circle neumorph"></div>
    </div>
  {/if}
</main>