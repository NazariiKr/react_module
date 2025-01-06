import {ITodo} from "../models/ITodo.ts";


const getAllTodos = async ():Promise<ITodo[]> => {
  return  await fetch(import.meta.env.VITE_API_URL +'/todos')
      .then(value => value.json())
}

export {
    getAllTodos
}