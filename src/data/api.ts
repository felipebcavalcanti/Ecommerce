import { env } from "@/env"
//api para buscar os dados no banco de dados, é feito so para facilitar o front end e ver se ta tudo certo, é um BFF(back end for front end)
export function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    
    const apiPrefix = '/api'
    const url = new URL(apiPrefix.concat(path), baseUrl)
  
    return fetch(url, init)
  }

