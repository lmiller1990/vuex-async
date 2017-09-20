import Vue from 'vue'
import Vuex from 'vuex'
import doAsync from './async-util'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
	tester: 'tester'
}

const mutations = {
}

Object.keys(types).forEach(type => {
	mutations[types[type].BASE] = (state, payload) => {
		switch (payload.type) {
			case types[type].PENDING:
				return Vue.set(state, types[type].loadingKey, payload.value)
				
			case types[type].SUCCESS:
				return Vue.set(state, types[type].stateKey, payload.value)

			case types[type].FAILURE:
				return Vue.set(state, types[type].errorCode, payload.value)
		}
	}
})

const actions = {
	getAsync(store, url) {
		doAsync(store, { 
			url
			mutationTypes: types.GET_INFO_ASYNC 
		})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
