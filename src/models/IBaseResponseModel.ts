import {IUsers} from "./IUsers.ts";

export type IBaseResponseModel = {
    users:IUsers[],
    total: number,
    skip: number,
    limit: number
}