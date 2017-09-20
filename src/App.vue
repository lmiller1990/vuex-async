<template>
  <div id="app">
		<p>
			Pending: {{ $store.state.getInfoAsyncPending }}
		</p>
		<p>
			Error: {{ $store.state.getInfoAsyncErrorCode }}
		<p>
			Data: {{ $store.state.getInfoAsyncData }}
		</p>
		<button @click="successfulRequest">Make valid ajax request</button>
		<button @click="failureRequest">Make invalid ajax request</button>
  </div>
</template>

<script>
export default {
	created () {
	},

	methods: {
		successfulRequest () {
			this.$store.dispatch('getAsync')
		},

		failureRequest () {
			this.$store.dispatch('getAsyncFailure')
		}
	}
}
</script>

<style>
</style>
