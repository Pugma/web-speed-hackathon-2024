/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AdminAuthApiService } from './services/AdminAuthApiService';
import { AdminAuthorsApiService } from './services/AdminAuthorsApiService';
import { AdminBooksApiService } from './services/AdminBooksApiService';
import { AdminEpisodePagesApiService } from './services/AdminEpisodePagesApiService';
import { AdminEpisodesApiService } from './services/AdminEpisodesApiService';
import { AdminImagesApiService } from './services/AdminImagesApiService';
import { AppAuthorsApiService } from './services/AppAuthorsApiService';
import { AppBooksApiService } from './services/AppBooksApiService';
import { AppEpisodePagesApiService } from './services/AppEpisodePagesApiService';
import { AppEpisodesApiService } from './services/AppEpisodesApiService';
import { AppFeaturesApiService } from './services/AppFeaturesApiService';
import { AppRankingsApiService } from './services/AppRankingsApiService';
import { AppReleasesApiService } from './services/AppReleasesApiService';
import { InternalInternalApiService } from './services/InternalInternalApiService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AppClient {
    public readonly adminAuthApi: AdminAuthApiService;
    public readonly adminAuthorsApi: AdminAuthorsApiService;
    public readonly adminBooksApi: AdminBooksApiService;
    public readonly adminEpisodePagesApi: AdminEpisodePagesApiService;
    public readonly adminEpisodesApi: AdminEpisodesApiService;
    public readonly adminImagesApi: AdminImagesApiService;
    public readonly appAuthorsApi: AppAuthorsApiService;
    public readonly appBooksApi: AppBooksApiService;
    public readonly appEpisodePagesApi: AppEpisodePagesApiService;
    public readonly appEpisodesApi: AppEpisodesApiService;
    public readonly appFeaturesApi: AppFeaturesApiService;
    public readonly appRankingsApi: AppRankingsApiService;
    public readonly appReleasesApi: AppReleasesApiService;
    public readonly internalInternalApi: InternalInternalApiService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/api/v1',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.adminAuthApi = new AdminAuthApiService(this.request);
        this.adminAuthorsApi = new AdminAuthorsApiService(this.request);
        this.adminBooksApi = new AdminBooksApiService(this.request);
        this.adminEpisodePagesApi = new AdminEpisodePagesApiService(this.request);
        this.adminEpisodesApi = new AdminEpisodesApiService(this.request);
        this.adminImagesApi = new AdminImagesApiService(this.request);
        this.appAuthorsApi = new AppAuthorsApiService(this.request);
        this.appBooksApi = new AppBooksApiService(this.request);
        this.appEpisodePagesApi = new AppEpisodePagesApiService(this.request);
        this.appEpisodesApi = new AppEpisodesApiService(this.request);
        this.appFeaturesApi = new AppFeaturesApiService(this.request);
        this.appRankingsApi = new AppRankingsApiService(this.request);
        this.appReleasesApi = new AppReleasesApiService(this.request);
        this.internalInternalApi = new InternalInternalApiService(this.request);
    }
}

