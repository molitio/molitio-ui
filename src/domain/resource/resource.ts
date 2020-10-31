import { InternalResourceType } from "../internalTypes/resourceType";

export interface Resource{
    name: string
    description: string,
    type: InternalResourceType
}