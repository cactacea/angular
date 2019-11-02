/**
 * Cactacea backend API
 * Cactacea / Cactacea backend API for web and mobile applications
 *
 * OpenAPI spec version: 19.11.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CactaceaErrors } from '../model/cactaceaErrors';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CommentLikesService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get users list who liked on a comment
     * 
     * @param id Comment Identifier.
     * @param since Filters users which started on since or later.
     * @param offset The offset of users. By default the value is 0.
     * @param count Maximum number of users returned on one result page. By default the value is 20 entries. The page size can never be larger than 50.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsersLikedComment(id: number, since?: number, offset?: number, count?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<User>>;
    public findUsersLikedComment(id: number, since?: number, offset?: number, count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<User>>>;
    public findUsersLikedComment(id: number, since?: number, offset?: number, count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<User>>>;
    public findUsersLikedComment(id: number, since?: number, offset?: number, count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsersLikedComment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (since !== undefined) {
            queryParameters = queryParameters.set('since', <any>since);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', <any>count);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<User>>(`${this.basePath}/comments/${encodeURIComponent(String(id))}/likes`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set a like on a comment
     * 
     * @param id Comment Identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public likeComment(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public likeComment(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public likeComment(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public likeComment(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling likeComment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/comments/${encodeURIComponent(String(id))}/likes`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove a like on a comment
     * 
     * @param id Comment Identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unlikeComment(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unlikeComment(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unlikeComment(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unlikeComment(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling unlikeComment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/comments/${encodeURIComponent(String(id))}/likes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
