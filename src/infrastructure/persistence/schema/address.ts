import {Schema} from "mongoose";
import { BrazilianStates } from "../../../domain/geography/brazil/brazilian-states";

export const addressSchemaMetadata = {
    name: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: false },
    complement: { type: String, required: false },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true, enum: Object.values(BrazilianStates) },
    zipCode: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
};
const timestamps = {timestamps: true};

export const addressSchema: Schema = new Schema(addressSchemaMetadata, timestamps);

const billing = Object.assign({
    cnpj: { type: String },
    billingDay: { type: Number }
}, addressSchemaMetadata);
export const billingAddressSchema: Schema = new Schema(billing, timestamps);