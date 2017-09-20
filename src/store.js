import Vue from 'vue'
import Vuex from 'vuex'
import doAsync from './async-util'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
}

const mutations = {
	[types.GET_INFO_ASYNC.BASE] (state, payload) {
		switch (payload.type) {
			case types.GET_INFO_ASYNC.PENDING:
				return Vue.set(state, types.GET_INFO_ASYNC.loadingKey, payload.value)
			case types.GET_INFO_ASYNC.SUCCESS:
				return Vue.set(state, types.GET_INFO_ASYNC.stateKey, payload.value)
			case types.GET_INFO_ASYNC.FAILURE:
				return Vue.set(state, types.GET_INFO_ASYNC.errorCode, payload.value)
		}
	}
}

const actions = {
	getAsync(store) {
		doAsync(store, { 
			url: 'https://jsonplaceholder.typicode.com/posts/1', 
			mutationTypes: types.GET_INFO_ASYNC 
		})
	},

	getAsyncFailure(store) {
		doAsync(store, { 
			url: 'https://jsonplaceholder.typicode.coooooooooom/posts/', 
			mutationTypes: types.GET_INFO_ASYNC_FAILURE 
		})
	}
}

console.log('mutations', mutations)
window.mutations = mutations
export default new Vuex.Store({
	state,
	mutations,
	actions
})
