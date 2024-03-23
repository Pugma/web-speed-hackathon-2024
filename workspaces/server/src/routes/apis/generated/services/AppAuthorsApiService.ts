/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAuthorDetail } from '../models/GetAuthorDetail';
import type { GetAuthorListItem } from '../models/GetAuthorListItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppAuthorsApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param authorId
     * @returns GetAuthorDetail Get author.
     * @throws ApiError
     */
    public getAuthors(
        authorId: string,
    ): CancelablePromise<GetAuthorDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authors/{authorId}',
            path: {
                'authorId': authorId,
            },
        });
    }
    /**
     * @param limit
     * @param name
     * @param offset
     * @returns GetAuthorListItem Get author list.
     * @throws ApiError
     */
    public getAuthors1(
        limit?: number,
        name?: string,
        offset?: number,
    ): CancelablePromise<Array<GetAuthorListItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authors',
            query: {
                'limit': limit,
                'name': name,
                'offset': offset,
            },
        });
    }
}
