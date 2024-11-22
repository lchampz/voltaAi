import { ICardsResponse, IUsersResponse } from "../Types/IApi";
import { IFidelityCard } from "../Types/IFidelityCard";
import { IUser } from "../Types/IUser";
import { Request } from "./Api";

export const getUsers = async () => {
    return await Request<IUsersResponse>({endpoint: "users"});
}

export const getCards = async () => {
    return await Request<ICardsResponse>({endpoint: "cards"});
}

export const updateCard = async (card: IFidelityCard) => {
    return await Request<IFidelityCard>({endpoint: `cards/${card.id}`, method: "PUT", body: card});
}

export const createUser = async (user: IUser) => {
    return await Request<IUsersResponse>({endpoint: "users", method: "POST", body: user});
}

export const createCard = async (card: IFidelityCard) => {
    return await Request<ICardsResponse>({endpoint: "cards", method: "POST", body: card});
}

export const deleteUser = async (user: IUser) => {
    return await Request<IUsersResponse>({endpoint: `users/${user.id}`, method: "DELETE"});
}

export const deleteCard = async (card: IFidelityCard) => {
    return await Request<ICardsResponse>({endpoint: `cards/${card.id}`, method: "DELETE"});
}