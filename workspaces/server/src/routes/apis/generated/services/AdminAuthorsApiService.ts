/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminAuthorsApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param authorId
     * @param requestBody
     * @returns any Update author.
     * @throws ApiError
     */
    public patchAuthors(
        authorId: string,
        requestBody?: {
            description?: string;
            imageId?: string;
            name?: string;
        },
    ): CancelablePromise<{
        description: string;
        id: string;
        name: string;
        books: Array<{
            description: string;
            id: string;
            name: string;
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
        }>;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/authors/{authorId}',
            path: {
                'authorId': authorId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param authorId
     * @returns any Delete author.
     * @throws ApiError
     */
    public deleteAuthors(
        authorId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/authors/{authorId}',
            path: {
                'authorId': authorId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Create author.
     * @throws ApiError
     */
    public postAuthors(
        requestBody?: {
            description: string;
            imageId: string;
            name: string;
        },
    ): CancelablePromise<{
        description: string;
        id: string;
        name: string;
        books: Array<{
            description: string;
            id: string;
            name: string;
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
        }>;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/authors',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
