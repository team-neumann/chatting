import { ActionType } from "typesafe-actions"
import * as actions from "./actions"

export type DataAction = ActionType<typeof actions>;

export interface TestData{
    id: number
    name: string
    url: string
}

export type DataState = TestData[];