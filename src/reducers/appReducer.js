import { appState as initialState } from './../state/state'
import {UPDATE_SIGNEDIN_STATE}  from './../actions/updateSignedInState'

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SIGNEDIN_STATE:{
            return Object.assign({},state,{
                isSignedIn: action.payload
            })
        }
        default:
            return state
    }
}
