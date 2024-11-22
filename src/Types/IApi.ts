import { IFidelityCard } from "./IFidelityCard";
import { IUser } from "./IUser";

export type IUsersResponse = IUser[];

export type ICardsResponse = IFidelityCard[];

export interface IApi {
  endpoint: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: object | null;
}
