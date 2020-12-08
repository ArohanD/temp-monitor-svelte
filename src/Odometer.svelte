<script>
  export let stat
  let { Name, Min, Max, Value } = stat;
</script>

<style>

</style>

<main>
  {#if stat}
    <p>
      {Name} is currently {Math.round(Value)}. Min: {Math.round(Min)} Max: {Math.round(Max)}
    </p>
  {/if}
</main>