/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Image } from '../models/Image';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppReleasesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param dayOfWeek
     * @returns any Get release.
     * @throws ApiError
     */
    public getReleases(
        dayOfWeek: string,
    ): CancelablePromise<{
        dayOfWeek: string;
        id: string;
        books: Array<{
            id: string;
            name: string;
            author: {
                description: string;
                id: string;
                name: string;
                image: Image;
            };
            image: Image;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/releases/{dayOfWeek}',
            path: {
                'dayOfWeek': dayOfWeek,
            },
        });
    }
    /**
     * @returns any Get release list.
     * @throws ApiError
     */
    public getReleases1(): CancelablePromise<Array<{
        dayOfWeek: string;
        id: string;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/releases',
        });
    }
}
