import  mongoose = require("mongoose");
import { permissionSchema } from "./schema/permission";

export interface PermissionDocumentInterface extends mongoose.Document {
    id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    createdAt: Date;
    deletedAt: Date;
}

export default mongoose.model<PermissionDocumentInterface>("Permission", permissionSchema);