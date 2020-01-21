import {Schema} from "mongoose";

export const permissionSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: false }
},{
    timestamps: true
});