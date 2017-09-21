import axios from 'axios'

const doAsync = (store, { url, mutationTypes }) => {
  store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

  return axios(url, {})
    .then(response => {
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
      store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, value: response.data, statusCode: response.status })
    })
    .catch(error => {
      console.log('e', error)
      store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
      store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, value: error.response.status
      })
    })
}
export default doAsync
