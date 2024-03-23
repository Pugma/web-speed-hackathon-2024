/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEpisodes } from '../models/GetEpisodes';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppEpisodesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param episodeId
     * @returns GetEpisodes Get episode.
     * @throws ApiError
     */
    public getEpisodes(
        episodeId: string,
    ): CancelablePromise<GetEpisodes> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/episodes/{episodeId}',
            path: {
                'episodeId': episodeId,
            },
        });
    }
    /**
     * @param bookId
     * @param limit
     * @param offset
     * @returns any Get episode.
     * @throws ApiError
     */
    public getEpisodes1(
        bookId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<{
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
            image: {
                alt: string;
                id: string;
            };
        };
        image: {
            alt: string;
            id: string;
        };
        pages: Array<{
            id: string;
            page: number;
            image: {
                alt: string;
                id: string;
            };
        }>;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/episodes',
            query: {
                'bookId': bookId,
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
