import { IRating } from '../common/rating';
import { IMolitioResourceTagDescriptor } from './molitioResourceTagDescriptor';
export interface IMolitioResourceTag {
    descriptors: IMolitioResourceTagDescriptor[];
    rating: IRating;
}
