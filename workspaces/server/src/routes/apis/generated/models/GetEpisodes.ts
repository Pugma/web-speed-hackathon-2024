/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EpisodesPagesItem } from './EpisodesPagesItem';
import type { Image } from './Image';
export type GetEpisodes = {
    chapter: number;
    description: string;
    id: string;
    name: string;
    nameRuby: string;
    book: {
        description: string;
        id: string;
        name: string;
        nameRuby: string;
        author: {
            description: string;
            id: string;
            name: string;
            image: {
                alt: string;
                id: string;
            };
        };
        image: Image;
    };
    image: Image;
    pages: Array<EpisodesPagesItem>;
};

