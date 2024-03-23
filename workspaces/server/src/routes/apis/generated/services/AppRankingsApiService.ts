/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetRankingsItem } from '../models/GetRankingsItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppRankingsApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param limit
     * @param offset
     * @returns GetRankingsItem Get feature list.
     * @throws ApiError
     */
    public getRankings(
        limit?: number,
        offset?: number,
    ): CancelablePromise<Array<GetRankingsItem>> {
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
