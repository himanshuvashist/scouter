export const UPDATE_SIGNEDIN_STATE = 'UPDATE_SIGNEDIN_STATE'

export function updateSignedInState(payload){
    return{
        type:UPDATE_SIGNEDIN_STATE,
        payload
    }
}