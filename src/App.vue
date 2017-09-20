<template>
  <div id="app">
		<p>
			Pending: {{ $store.state.getInfoPending }}
		</p>
		<p>
			{{ $store.state.getInfoData }}
		</p>
  </div>
</template>

<script>
export default {
	created () {
		this.$store.dispatch('getAsync')
	}
}
</script>

<style>
</style>
