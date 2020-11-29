export const UPDATE_DETAIL_STATE = 'UPDATE_DETAIL_STATE'

export function updateDetailState(payload) {
    return {
        type: UPDATE_DETAIL_STATE,
        payload,
    }
}
