import * as mongoose from "mongoose";
import { RoleDocumentInterface } from "./role";
import { userSchema } from "./schema/user";

interface UserAddressDocumentInterface {
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

export interface UserDocumentInterface extends mongoose.Document {
    id?: mongoose.Types.ObjectId;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    password?: string;
    userStatus: number;
    roles: Array<RoleDocumentInterface>;
    address?: Array<UserAddressDocumentInterface>;
}
export default mongoose.model<UserDocumentInterface>("User", userSchema);