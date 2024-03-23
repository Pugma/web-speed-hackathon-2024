/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Image } from './Image';
export type GetAuthorListItem = {
    description: string;
    id: string;
    name: string;
    books: Array<{
        description: string;
        id: string;
        name: string;
        episodes: Array<{
            chapter: number;
            description: string;
            id: string;
            name: string;
        }>;
        image: Image;
    }>;
    image: Image;
};

