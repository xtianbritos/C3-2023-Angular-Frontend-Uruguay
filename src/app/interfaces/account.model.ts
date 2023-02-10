import { AccountTypeModel } from './account-type.model';
import { CustomerModel } from './Customer.interface';

export interface AccountModel {
    id: string;
    customer: CustomerModel;
    accountType: AccountTypeModel;
    balance: number;
    state: boolean;
    deletedAt?: Date | number;
}