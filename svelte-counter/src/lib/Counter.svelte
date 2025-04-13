<script lang="ts">
  let count: number = 0;

  function decrease() {
    count -= 1;
  }

  function increase() {
    count += 1;
  }
</script>

<div class="flex flex-col items-center gap-4">
  <div class="text-2xl font-bold">{count}</div>
  <div class="flex gap-4">
    <button
      on:click={decrease}
      class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      Decrease
    </button>
    <button
      on:click={increase}
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      Increase
    </button>
  </div>
</div> 