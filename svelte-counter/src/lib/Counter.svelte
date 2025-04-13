<script lang="ts">
	let count = $state(0);

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
			onclick={decrease}
			class="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
		>
			Decrease
		</button>
		<button
			onclick={increase}
			class="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
		>
			Increase
		</button>
	</div>
</div>
