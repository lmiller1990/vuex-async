import axios from 'axios'

const doAsync = (store, { url, mutationTypes, callback }) => {
  store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

  return axios(url, {})
    .then(response => {
			console.log(response)
			let data = response
			
      if (callback) {
        data = callback(response)
      }

			console.log(data)
      store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, data, statusCode: response.status })
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false})
    })
    .catch(error => {
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
      store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, statusCode: error.response.status
      })
    })
}
export default doAsync
