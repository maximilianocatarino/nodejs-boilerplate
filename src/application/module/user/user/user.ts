
export interface UserInterface {
    AccountId: AccountInterface;
    name: string;
    username: string;
    email: string;
    phones: Array<string>;
    companies: Array<CompanyInterface>;
    companyGroups: Array<CompanyGroupInterface>;
}

export default class User extends Entity implements UserInterface {
    email: string;
    name: string;
    phones: Array<string>;
    username: string;
}
