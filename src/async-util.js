import axios from 'axios'

const doAsync = (store, { url, mutationTypes, stateKey }) => {
	store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })

	setTimeout(() => {
		axios(url, {})
			.then(response => {
				store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
				store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, value: response.data})
			})
			.catch(error => {
				store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
				store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, value: error.response.status })
			})
	}, 100)
}

export default doAsync
