import axios from 'axios'

const doAsync = (store, { url, mutationTypes, stateKey }) => {
	store.commit(mutationTypes.PENDING, true)

	setTimeout(() => {
		axios(url, {})
			.then(response => {
				store.commit(mutationTypes.PENDING, false)
				store.commit(mutationTypes.SUCCESS, response.data)
			})
			.catch(error => {
				store.commit(mutationTypes.PENDING, false)
				store.commit(mutationTypes.FAILURE)
			})
	}, 500)
}

export default doAsync
