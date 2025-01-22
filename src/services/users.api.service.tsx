import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
const baseUrl=import.meta.env.VITE_BASE_URL

export const getUsers=async (page:string):Promise<IBaseResponseModel>=>{
    const limit=30;
    const skip=limit*(+page)-limit
return await fetch(baseUrl + '/users'  + '?skip=' + skip).then(value => value.json())};
