import axios from "axios";
import {IOneCardData} from "../Types/dataTypes";


export const getAllData = async (): Promise<IOneCardData[]> => {
    const { data } = await axios.get<IOneCardData[]>('https://jsonplaceholder.typicode.com/todos')
    return data
}

