import { EOL } from "os";

export interface AddressDtoInterface {
    address: string;
    number?: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    latitude?: number;
    longitude?: number;

    toString(): string;
}

export default class AddressDto implements AddressDtoInterface {
    address: string;
    number?: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    latitude?: number;
    longitude?: number;

    toString(): string {
        let address = this.address;
        if (this.number) {
            address += `, ${this.number}`;
        }
        if (this.complement) {
            address += `, ${this.complement}`;
        }
        address += ` - ${this.neighborhood}`;
        address += ` - ${this.neighborhood}${EOL}${this.city} - ${this.city} - ${this.state}`;
        address += `${EOL}${this.country}`;
        return address;
    }
};