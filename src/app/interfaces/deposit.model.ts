import { AccountModel } from "./account.model";

export interface DepositModel {
    id?: string;
    account: AccountModel | string;
    amount: number;
    dateTime?: Date | number;
    deletedAt?: Date | number;
}

export interface RealDepositModel {
    id?: string;
    account: AccountModel;
    amount: number;
    dateTime: number;
    deletedAt?: Date | number;
}