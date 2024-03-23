/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InternalInternalApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any Initialize.
     * @throws ApiError
     */
    public postInitialize(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/initialize',
        });
    }
}
