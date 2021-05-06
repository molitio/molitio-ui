import { IRating } from '../common/rating';
import { IMolitioResourceTag } from './molitioResourceTag';
export interface IMolitioResource {
    name: string;
    description: string;
    rating: IRating;
    tags: IMolitioResourceTag[];
}
