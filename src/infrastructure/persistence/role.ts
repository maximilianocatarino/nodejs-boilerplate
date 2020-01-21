import * as mongoose from "mongoose";
import { roleSchema } from "./schema/role";

export interface RoleDocumentInterface extends mongoose.Document {
    id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    createdAt: Date;
    deletedAt: Date;
}
export default mongoose.model<RoleDocumentInterface>("Role",roleSchema);