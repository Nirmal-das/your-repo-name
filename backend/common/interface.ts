import { Document } from "mongoose";

export type IApiResponse<T = any | null> = {
    data?: T | null,
    statusCode: number,
    status: string,
    message?: string,
};

export interface IUser {
    name: string,
    email: string,
    mern: boolean,
    mean: boolean,
    mevn: boolean,
    experience: string,
    contactNumber: string
}