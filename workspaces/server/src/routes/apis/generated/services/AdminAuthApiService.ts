/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminAuthApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns any Login.
     * @throws ApiError
     */
    public postAdminLogin(
        requestBody?: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        description: string;
        id: string;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Logout.
     * @throws ApiError
     */
    public postAdminLogout(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/logout',
        });
    }
    /**
     * @returns any Get auth user.
     * @throws ApiError
     */
    public getAdminMe(): CancelablePromise<{
        description: string;
        id: string;
        image: {
            alt: string;
            id: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/me',
        });
    }
}
