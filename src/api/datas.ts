import axios from "axios"

export async function getData(): Promise<DataResponse> {
    return (
        await axios
            .get<DataResponse>("https://192.168.0.7:8888")
    ).data
}

export interface DataResponse {
    result: any
}
 