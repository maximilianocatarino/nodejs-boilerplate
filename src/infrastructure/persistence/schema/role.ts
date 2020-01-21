import {Schema} from "mongoose";

export const roleSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: false }
},{
    timestamps: true
});