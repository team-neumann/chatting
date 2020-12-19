import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../modules"
import { useCallback } from "react"
import { initData, modifyData, TestData } from "../modules/data";

export default function useData() {
    const data = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()
    const init = useCallback((payload: TestData[]) => dispatch(initData(payload)), [dispatch])
    const modify = useCallback((payload: TestData) => dispatch(modifyData(payload)), [dispatch])
    const findById = ( id : number ) => {
        return data.find( (item:TestData) => (item.id === id) ) || null
    }
    return {
        data,
        init,
        findById,
        modify
    }
}

 