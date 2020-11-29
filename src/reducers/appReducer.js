import { appState as initialState } from './../state/state'
import { UPDATE_SIGNEDIN_STATE } from './../actions/updateSignedInState'
import { UPDATE_DATE_STATE } from './../actions/form/updateDateState'
import { UPDATE_NAME_STATE } from './../actions/form/updateNameState'
import { UPDATE_DETAIL_STATE } from './../actions/form/updateDetailState'
import { UPDATE_ACTIVE_PAGE } from './../actions/updateActivePage'
export function appReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SIGNEDIN_STATE: {
            return Object.assign({}, state, {
                isSignedIn: action.payload,
            })
        }
        case UPDATE_NAME_STATE: {
            return Object.assign({}, state, {
                formInfo: Object.assign({}, state.formInfo, {
                    name: action.payload,
                }),
            })
        }
        case UPDATE_DETAIL_STATE: {
            return Object.assign({}, state, {
                formInfo: Object.assign({}, state.formInfo, {
                    detail: action.payload,
                }),
            })
        }
        case UPDATE_DATE_STATE: {
            return Object.assign({}, state, {
                formInfo: Object.assign({}, state.formInfo, {
                    date: action.payload,
                }),
            })
        }
        case UPDATE_ACTIVE_PAGE: {
            return Object.assign({}, state, {
                activePage: action.payload,
            })
        }
        default:
            return state
    }
}
