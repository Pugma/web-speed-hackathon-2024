/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppRankingsApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param limit
     * @param offset
     * @returns any Get feature list.
     * @throws ApiError
     */
    public getRankings(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<{
        id: string;
        rank: number;
        book: {
            description: string;
            id: string;
            name: string;
            author: {
                description: string;
                id: string;
                name: string;
                image: {
                    alt: string;
                    id: string;
                };
            };
            episodes: Array<{
                chapter: number;
                description: string;
                id: string;
                name: string;
            }>;
            image: {
                alt: string;
                id: string;
            };
        };
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rankings',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
