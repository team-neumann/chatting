import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import data from "./data";

const rootReducer = combineReducers({
    data
})

export default rootReducer

export const initializeState = {}

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
    yield all([
        // dataSaga()
    ])
}
