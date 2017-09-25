import Vue from 'vue'
import axios from 'axios'

export const registerMutations = (mutations, types) => {
	Object.keys(types).forEach(type => {
		mutations[types[type].BASE] = (state, payload) => {
			switch (payload.type) {
				case types[type].PENDING:
					return Vue.set(state, types[type].loadingKey, payload.value)

				case types[type].SUCCESS:
					Vue.set(state, types[type].statusCode, payload.statusCode)
					return Vue.set(state, types[type].stateKey, payload.data)

				case types[type].FAILURE:
					return Vue.set(state, types[type].statusCode , payload.statusCode)
			}
		}
	})
}

export const fetchAsync = (store, url, mutationTypes, callback) => {
  store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

  return axios(url, {})
    .then(response => {
			let data = response
			
      if (callback) {
        data = callback(response)
      }

      store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, data, statusCode: response.status })
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false})
    })
    .catch(error => {
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
      store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, statusCode: error.response.status
      })
    })
}
