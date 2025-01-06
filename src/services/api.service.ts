import {ITodosResponse} from "../models/ITdosResponse.ts";

const getTodos = async (): Promise<ITodosResponse> => {
    return await fetch(import.meta.env.VITE_API_URL + '/todos')
        .then(value => value.json())
}

export {
    getTodos
}