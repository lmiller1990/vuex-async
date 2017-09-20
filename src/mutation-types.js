import _ from 'lodash'

const createAsyncMutation = (type) => ({
	BASE: `${type}`,
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: _.camelCase(`${type}_PENDING`),
	errorCode: `${_.camelCase(type)}ErrorCode`,
	stateKey: `${_.camelCase(type)}Data`
})

export const GET_INFO_ASYNC = createAsyncMutation('GET_INFO_ASYNC')
export const GET_INFO_ASYNC_FAILURE = createAsyncMutation('GET_INFO_ASYNC_FAILURE')
