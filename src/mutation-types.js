import _ from 'lodash'

const createAsyncMutation = (type) => ({
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: _.camelCase(`${type}_PENDING`),
	stateKey: _.camelCase(`${type}_DATA`)
})

export const GET_INFO_ASYNC = createAsyncMutation('GET_INFO')
export const GET_ALL_POSTS = createAsyncMutation('GET_ALL_POSTS')
