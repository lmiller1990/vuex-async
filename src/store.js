import Vue from 'vue'
import Vuex from 'vuex'
import doAsync from './async-util'
import * as types from './mutation-types'

Vue.use(Vuex)

const mutationTypes = {
	SUCCESS: 'GET_INFO_SUCCESS',
	FAILURE: 'GET_INFO_FAILURE',
	PENDING: 'GET_INFO_PENDING'
}

const state = {
	info: {},
}

const mutations = {
	[types.GET_INFO_ASYNC.SUCCESS] (state, info) {
		Vue.set(state, [types.GET_INFO_ASYNC.stateKey], info)
	},
	
	[types.GET_INFO_ASYNC.PENDING] (state, value) {
		Vue.set(state, types.GET_INFO_ASYNC.loadingKey, value)
	}
}

const actions = {
	getAsync(store) {
		doAsync(store, { 
			url: 'https://jsonplaceholder.typicode.com/posts/1', 
			mutationTypes: types.GET_INFO_ASYNC 
		})
	},

	getAllPosts(store) {
		doAsync(store, { 
			url: 'https://jsonplaceholder.typicode.com/posts/', 
			mutationTypes: types.GET_ALL_POSTS 
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
