/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Image } from './Image';
export type GetBooksDetail = {
    description: string;
    id: string;
    name: string;
    nameRuby: string;
    author: {
        id: string;
        name: string;
        image: Image;
    };
    episodes: Array<{
        id: string;
    }>;
    image: Image;
};

