<script>
  /*
  - Useabale circumference is +/- 137deg
  */
  import { onMount } from "svelte";
  export let stat;
  let { Name, Min, Max, Value } = stat;

  const currentRotation = 274 * (Value / 100) + -137;
  const minRotation = 274 * (Min / 100) + -137;
  const maxRotation = 274 * (Max / 100) + -137;

  onMount(() => {});
</script>

<style type="text/scss">
  main {
    padding: 10px;
    width: 80vh;
    height: 80vh;

    display: grid;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .progress {
    position: relative;

    width: 100%;
    height: 100%;
    background: #97acf5;
    background: linear-gradient(0.25turn, #9198e5, #eb7d7d);
    border-radius: 50%;

    display: grid;
    place-items: center;
    overflow: hidden;

    box-shadow: 20px 20px 60px #bebfc5, -20px -20px 60px #ffffff;

    .inner_circle {
      position: absolute;
      height: 230px;
      width: 230px;
      border-radius: 50%;

      background: #dfe1e8;
      box-shadow: 1px 1px 10px #bebfc5;

      display: grid;
      place-items: center;

      .inner_inner_circle {
        position: relative;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        background-color: rgb(144, 187, 236);
        background: linear-gradient(145deg, #79c8fd, #66a8d4);
        box-shadow: 1px 1px 10px #5f9cc5 -1px -1px 10px #72bdee;
        color: rgb(0, 23, 71);
      }
    }
  }

  .blocker_square {
    position: absolute;
    bottom: -100px;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    height: 230px;
    width: 230px;
    background-color: #dfe1e8;
    display: block;
    transform: rotate(45deg);
  }

  .inner_shape {
    position: relative;

    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .stats_value,
  .stats_name {
    text-align: center;
  }

  .stats_value,
  .stats_name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-align: center;
  }

  .stats_name {
    top: initial;
    bottom: 4%;
    width: 100px;

    color: rgb(116, 116, 116);
    border-radius: 20px;
    padding: 4px;
    background: linear-gradient(0.5turn, #a5acee, #6466e6);
    background: linear-gradient(145deg, #eff1f8, #c9cbd1);
    box-shadow: inset 2px 2px 10px 1px #cbcdd3;
  }

  .circle_temp_value {
    position: relative;
    height: 80vh;
    width: 80vh;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    transform: rotate(calc(var(--rotation) * 1deg));
  }

  .circle_temp_inner {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: black;

    position: relative;
    left: 50%;
    top: 9.5%;
    transform: translate(-50%, -50%) rotate(calc(var(--rotation) * -1deg));
    background: #dfe1e8;

    display: grid;
    place-items: center;
  }
</style>

<main>
  {#if stat}
    <div class="circle_temp_value" style="--rotation: {minRotation}">
      <div class="circle_temp_inner">{Math.round(Min)}</div>
    </div>
    <div class="circle_temp_value" style="--rotation: {maxRotation}">
      <div class="circle_temp_inner">{Math.round(Max)}</div>
    </div>
    <div class="circle_temp_value" style="--rotation: {currentRotation}">
      <div class="circle_temp_inner">{Math.round(Value)}</div>
    </div>
    <div class="progress neumorph" id="progress">
      <div class="blocker_square neumorph" />
      <div class="neumorph inner_circle">
        <div class="inner_inner_circle">
          <h1 class="stats_value">{`${Math.round(Value)}°C`}</h1>
        </div>
      </div>
      <p class="stats_name">{Name}</p>
    </div>
  {/if}
</main>
