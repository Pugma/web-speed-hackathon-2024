/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Image } from '../models/Image';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminEpisodesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param episodeId
     * @param requestBody
     * @returns any Update episode.
     * @throws ApiError
     */
    public patchEpisodes(
        episodeId: string,
        requestBody?: {
            bookId?: string;
            chapter?: number;
            description?: string;
            imageId?: string;
            name?: string;
            nameRuby?: string;
        },
    ): CancelablePromise<{
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
                image: Image;
            };
            image: Image;
        };
        image: Image;
        pages: Array<{
            id: string;
            page: number;
            image: Image;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/episodes/{episodeId}',
            path: {
                'episodeId': episodeId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param episodeId
     * @returns any Get episode list.
     * @throws ApiError
     */
    public deleteEpisodes(
        episodeId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/episodes/{episodeId}',
            path: {
                'episodeId': episodeId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Create episode.
     * @throws ApiError
     */
    public postEpisodes(
        requestBody?: {
            bookId: string;
            chapter: number;
            description: string;
            imageId: string;
            name: string;
            nameRuby: string;
        },
    ): CancelablePromise<{
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
                image: Image;
            };
            image: Image;
        };
        image: Image;
        pages: Array<{
            id: string;
            page: number;
            image: Image;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/episodes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
