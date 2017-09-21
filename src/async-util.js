import axios from 'axios'

const doAsync = (store, { url, mutationTypes, callback }) => {
  store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

  return axios(url, {})
    .then(response => {
      let data = response.data

      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })

      if (callback) {
        data = callback(response.data)
      }

      store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, data, statusCode: response.status })
    })
    .catch(error => {
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
      store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, statusCode: error.response.status
      })
    })
}
export default doAsync
