import axios from 'axios'

/*
 * setTimeout() to demonstrating the `pending` flag. Remove in a real application.
 */
const doAsync = (store, { url, mutationTypes, stateKey }) => {
  store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

  setTimeout(() => {
    axios(url, {})
      .then(response => {
        store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
        store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, value: response.data})
      })
      .catch(error => {
        console.log('e', error)
        store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
        store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, value: error.response.status })
      })
  }, 1000)
}

export default doAsync
