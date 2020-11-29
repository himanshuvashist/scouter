export const UPDATE_ACTIVE_PAGE = 'UPDATE_ACTIVE_PAGE'

export function updateActivePage(payload) {
    return {
        type: UPDATE_ACTIVE_PAGE,
        payload,
    }
}
