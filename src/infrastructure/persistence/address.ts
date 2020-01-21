
export interface AddressDocumentInterface {
    zipCode: string;
    address: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface BillingAddressDocumentInterface extends AddressDocumentInterface {
    billingDay: number;
    cnpj: string;
}