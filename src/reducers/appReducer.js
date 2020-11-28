import { APP_ACTION } from '../actions/action'
import { appState as initialState } from './../state/state'

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case APP_ACTION: {
            return state
        }
        default:
            return state
    }
}
