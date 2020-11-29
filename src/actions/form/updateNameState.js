export const UPDATE_NAME_STATE = 'UPDATE_NAME_STATE'

export function updateNameState(payload) {
    return {
        type: UPDATE_NAME_STATE,
        payload,
    }
}
