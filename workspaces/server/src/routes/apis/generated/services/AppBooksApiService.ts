/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetBooksDetail } from '../models/GetBooksDetail';
import type { Image } from '../models/Image';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppBooksApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param bookId
     * @returns GetBooksDetail Get book.
     * @throws ApiError
     */
    public getBooks(
        bookId: string,
    ): CancelablePromise<GetBooksDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/books/{bookId}',
            path: {
                'bookId': bookId,
            },
        });
    }
    /**
     * @param authorId
     * @param authorName
     * @param limit
     * @param name
     * @param offset
     * @returns any Get book list.
     * @throws ApiError
     */
    public getBooks1(
        authorId?: string,
        authorName?: string,
        limit?: number,
        name?: string,
        offset?: number,
    ): CancelablePromise<Array<{
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
        episodes: Array<{
            id: string;
        }>;
        image: Image;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/books',
            query: {
                'authorId': authorId,
                'authorName': authorName,
                'limit': limit,
                'name': name,
                'offset': offset,
            },
        });
    }
}
