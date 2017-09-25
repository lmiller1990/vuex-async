import Vue from 'vue'
import Vuex from 'vuex'
import * as sets from './mutation-types'
import { registerMutations, fetchAsync } from './tester'

Vue.use(Vuex)

const state = {}

const mutations = {}

registerMutations(mutations, sets)

const getTitleOnly = (response) => {
  return response.data.title
}

const url = 'https://jsonplaceholder.typicode.com/posts/1'

const actions = {
	getAsync: store => doAsync(store, url, sets.GET_INFO_ASYNC, getTitleOnly)
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
