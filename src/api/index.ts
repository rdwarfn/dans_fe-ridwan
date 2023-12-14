import * as axios from "axios"

export const instance: axios.AxiosInstance = axios.default.create({
  baseURL: 'http://0.0.0.0:8000/api/v1',
  timeout: 1000,
  withCredentials: false,
  proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 8000,
  }
});

export interface ResponseAttributes<T> {
  code: number | null
  message: string | null | unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: null | unknown | any | T[]
}