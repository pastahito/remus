import { SHOW_NOTIFICATION, APP_STATE, SET_PROJECT_PATH, SET_PROJECT_INFO,
        SET_LOCALE, DELETE_DOCUMENT, INSERT_DOCUMENT } from '../actions'
import update from 'immutability-helper'

// const DEFAULT = 'DEFAULT'
// const LOADING_PROJECT = 'LOADING_PROJECT'
// const SAVING_PROJECT = 'SAVING_PROJECT'

const initialState = {
    globalState: 'DEFAULT',
    projectPath: '',
    projectInfo: undefined,
    locale: 'en'
}

function appState(state = initialState, action) {
    switch (action.type) {

        case SET_LOCALE:
            return update(state, {
                locale: { $set: action.payload }
            })

        case APP_STATE:
            return update(state, {
                globalState: { $set: action.payload }
            })

        //TODO: make a notification-only reducer
        case SHOW_NOTIFICATION:
            console.log(JSON.stringify(action.payload, null, 2))
            return state

        case SET_PROJECT_PATH:
            return update(state, {
                projectPath: { $set: action.payload }
            })

        case SET_PROJECT_INFO:
            return update(state, {
                projectInfo: { $set: action.payload }
            })

        case DELETE_DOCUMENT:
            return update(state, {
                projectInfo: {childrenIDs: {$splice: [[action.docIndex, 1]]}}
            })

        case INSERT_DOCUMENT:
            return update(state, {
                projectInfo: {childrenIDs: {$push: [action.docID]}}
            })

        default:
            return state
    }
}

export default appState
