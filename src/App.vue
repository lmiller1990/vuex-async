<template>
  <div id="app">
    <div class="data">
      <p>
        Pending: {{ $store.state.getInfoAsyncPending }}
      </p>
      <p>
        Data: {{ $store.state.getInfoAsyncData }}
      </p>
      <p>
        Status Code: {{ $store.state.getInfoAsyncStatusCode }}
      </p>


      </div>
      <hr />
      <div class="url-submit">
        <div>
          <button class="right-floated" @click="successfulRequest">Clear data and make valid ajax request</button>
        </div>
      </div>

      <div class="url-submit">
        <div>
          <button class="right-floated" @click="invalidRequest">Clear data and make invalid ajax request</button>
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
        .then(() => console.log('ok'))
    },

    invalidRequest () {
      // clear the state
      this.$store.commit(types.GET_INFO_ASYNC.BASE, { type: types.GET_INFO_ASYNC.SUCCESS, value: null, statusCode: null })

      this.$store.dispatch('getAsync', this.urlInvalid)
    }
  }
}
</script>

<style>
.data {
  height: 200px;
}
</style>
