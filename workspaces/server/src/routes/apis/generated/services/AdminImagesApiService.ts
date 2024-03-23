/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminImagesApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param formData
     * @returns any Create image.
     * @throws ApiError
     */
    public postImages(
        formData?: {
            alt: string;
            content?: Blob;
        },
    ): CancelablePromise<{
        alt: string;
        id: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/images',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
