/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminEpisodePagesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns any Create episode page.
     * @throws ApiError
     */
    public postEpisodePages(
        requestBody?: {
            episodeId: string;
            id?: string;
            imageId: string;
            page: number;
        },
    ): CancelablePromise<{
        id: string;
        page: number;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/episodePages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param episodePageId
     * @param requestBody
     * @returns any Update episode page.
     * @throws ApiError
     */
    public patchEpisodePages(
        episodePageId: string,
        requestBody?: {
            episodeId?: string;
            id?: string;
            imageId?: string;
            page?: number;
        },
    ): CancelablePromise<{
        id: string;
        page: number;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/episodePages/{episodePageId}',
            path: {
                'episodePageId': episodePageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param episodePageId
     * @returns any Delete episode page.
     * @throws ApiError
     */
    public deleteEpisodePages(
        episodePageId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/episodePages/{episodePageId}',
            path: {
                'episodePageId': episodePageId,
            },
        });
    }
}
