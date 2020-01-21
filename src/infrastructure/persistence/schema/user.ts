import {Schema, Types} from "mongoose";
import { addressSchema } from "./address";

export const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    userStatus: { type: String, required: true, enum: ["active", "bloqued"], default: "bloqued" },
    roles: [{ type: Types.ObjectId, ref: "Role"}],
    addresses: [addressSchema]
}, {
    timestamps: true
});