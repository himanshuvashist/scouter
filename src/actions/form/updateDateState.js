export const UPDATE_DATE_STATE = 'UPDATE_DATE_STATE'

export function updateDateState(payload) {
    return {
        type: UPDATE_DATE_STATE,
        payload,
    }
}
