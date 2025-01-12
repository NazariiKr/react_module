const baseUrl=import.meta.env.VITE_BASE_URL
console.log(baseUrl)

export const getAll =async <T,>(endpoint:string,):Promise<T>=> {

    return await fetch(`${baseUrl}${endpoint}`).then(value => value.json())
}


