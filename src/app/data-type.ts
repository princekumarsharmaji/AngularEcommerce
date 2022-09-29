import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler"

export interface signUp{
   name: string,
   password: string,
   email: string
}

export interface login{
   email: string,
   password: string
}

export interface product{
   name: string,
   price: number,
   description: string,
   category: string,
   color: string,
   image: string,
   id:number
}