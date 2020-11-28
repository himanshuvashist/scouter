export const APP_ACTION = 'APP_ACTION'

export function appAction(payload) {
    return {
        type: APP_ACTION,
        payload,
    }
}
