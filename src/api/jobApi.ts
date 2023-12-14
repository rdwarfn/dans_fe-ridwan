import { AxiosResponse } from "axios";
import { instance, ResponseAttributes } from "./index";

interface Job {
  id?: string
  type: string
  url: string
  company: string
  company_url: string
  location: string
  title: string
  description: string
  how_to_apply: string
  company_log: string
}

export type JobReqParam = {
  s: number
  l: number
  p: number
}

export type JobReqPay = {
  type?: string | null
  location?: string | null
  description?: string | null
}

export const jobGets: (kwargs: JobReqParam) =>
  Promise<AxiosResponse<ResponseAttributes<Job>>> =
    (kwargs) =>
      new Promise((resolve, reject) => {
        const { s = 0, l = 10, p = 1 } = kwargs
        return instance.get("jobs/", {
          params: { skip: s, limit: l, p }
        })
          .then(ress => resolve(ress))
          .catch(reject);
      })

export const jobSearch: (params: JobReqParam, payload: JobReqPay) =>
  Promise<AxiosResponse<ResponseAttributes<Job>>> =
  (params, payload) =>
    new Promise((resolve, reject) => {
      const { s: skip, l: limit, p: page } = params;
      return instance.post("jobs/search", payload, {
        params: { skip, limit, page }
      })
        .then(ress => resolve(ress))
        .catch(reject);
    })