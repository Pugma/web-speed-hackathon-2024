/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminBooksApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param bookId
     * @param requestBody
     * @returns any Update book.
     * @throws ApiError
     */
    public patchBooks(
        bookId: string,
        requestBody?: {
            authorId?: string;
            description?: string;
            imageId?: string;
            name?: string;
            nameRuby?: string;
            releaseId?: string;
        },
    ): CancelablePromise<{
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
        episodes: Array<{
            id: string;
        }>;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/books/{bookId}',
            path: {
                'bookId': bookId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param bookId
     * @returns any Delete book.
     * @throws ApiError
     */
    public deleteBooks(
        bookId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/books/{bookId}',
            path: {
                'bookId': bookId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Create book.
     * @throws ApiError
     */
    public postBooks(
        requestBody?: {
            authorId: string;
            description: string;
            imageId: string;
            name: string;
            nameRuby: string;
            releaseId: string;
        },
    ): CancelablePromise<{
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
        episodes: Array<{
            id: string;
        }>;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/books',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
