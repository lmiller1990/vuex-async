<template>
  <div id="app">
		<p>
			Pending: {{ $store.state.getInfoAsyncPending }}
		</p>
		<p>
			Data: {{ $store.state.getInfoAsyncData }}
		</p>
		<p>
			Error Code: {{ $store.state.getInfoAsyncErrorCode }}
		</p>

		<hr />
		
		<div class="url-submit">
			<div>
				Valid URL: <a :href="urlCorrect">{{ urlCorrect }}</a>
				<button class="right-floated" @click="successfulRequest">Clear data and make ajax request</button>
			</div>
		</div>

		<div class="url-submit">
			<div>
				Invalid URL: <a :href="urlInvalid">{{ urlInvalid }}</a>
				<button class="right-floated" @click="invalidRequest">Clear data and make ajax request</button>
			</div>
		</div>
		<div class="url-submit">
			<div>
			</div>
			<div>
			</div>
		</div>
  </div>
</template>

<script>
	import * as types from './mutation-types'

	export default {
		data () {
			return {
				urlCorrect: 'https://jsonplaceholder.typicode.com/posts/1',
				urlInvalid: 'https://jsonplaceholder.typicode.com/postsssssss/1'
			}
		},

		methods: {
			successfulRequest () {
				// clear the state
				this.$store.commit(types.GET_INFO_ASYNC.BASE, { type: types.GET_INFO_ASYNC.SUCCESS, value: {} })
				this.$store.commit(types.GET_INFO_ASYNC.BASE, { type: types.GET_INFO_ASYNC.FAILURE, value: null })

				this.$store.dispatch('getAsync', this.urlCorrect)
			},

			invalidRequest () {
				// clear the state
				this.$store.commit(types.GET_INFO_ASYNC.BASE, { type: types.GET_INFO_ASYNC.SUCCESS, value: {} })

				this.$store.dispatch('getAsync', this.urlInvalid)
			}
		}
	}
</script>

<style>
.url-submit {
	width: 650px;
}

.right-floated {
	float: right;
}
</style>
