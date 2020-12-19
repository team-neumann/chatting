import { createAction } from 'typesafe-actions'
import { TestData } from "./types"

export const INIT_DATA = "data/INIT_DATA"
export const MODIFY_DATA = "data/MODIFY_DATA"

export const initData = createAction(INIT_DATA)<TestData[]>()
export const modifyData = createAction(MODIFY_DATA)<TestData>()
