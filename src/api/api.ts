import  {get, post}  from "./http"

export const getHome = (params?: any) => get('/api/home', params)
export const postHome = (params: any) => post('/api/home', params)


/****
 引入
import { getHome } from "@/api/api.ts"

getHome({id: 1}).then((res :any) =>{
   console.log(res)
})
 */