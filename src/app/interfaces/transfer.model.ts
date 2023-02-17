import { AccountModel } from './account.model';

export interface TransferModel {
    id?: string;
    outcome:AccountModel | string;
    income: AccountModel | string;
    amount: number;
    reason: string;
    dateTime?: Date | number;
    deletedAt?: Date | number;
}

export interface RealTransferModel {
    id?: string;
    outcome:AccountModel;
    income: AccountModel;
    amount: number;
    reason: string;
    dateTime: number;
    deletedAt?: Date | number;
}