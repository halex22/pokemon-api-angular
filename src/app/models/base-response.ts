export interface BaseResponse {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export interface MiniResponse {
  name: string
  id: number
}