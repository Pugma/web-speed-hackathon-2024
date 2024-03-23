/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppEpisodePagesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param pageId
     * @returns any Get episode page.
     * @throws ApiError
     */
    public getEpisodePages(
        pageId: string,
    ): CancelablePromise<{
        id: string;
        page: number;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/episodePages/{pageId}',
            path: {
                'pageId': pageId,
            },
        });
    }
    /**
     * @param episodeId
     * @param limit
     * @param offset
     * @returns any Get episode page list.
     * @throws ApiError
     */
    public getEpisodePages1(
        episodeId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<{
        id: string;
        page: number;
        image: {
            alt: string;
            id: string;
        };
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/episodePages',
            query: {
                'episodeId': episodeId,
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
