/**
 * Cactacea backend API
 * Cactacea / Cactacea backend API for web and mobile applications
 *
 * OpenAPI spec version: 19.3.3
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
import { Group } from '../model/group';
import { GroupCreated } from '../model/groupCreated';
import { PostGroupBody } from '../model/postGroupBody';
import { PostGroupReportBody } from '../model/postGroupReportBody';
import { PutGroupBody } from '../model/putGroupBody';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GroupsService {

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
     * Hide a group and delete all messages
     * 
     * @param id Group identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public _delete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public _delete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public _delete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public _delete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.delete<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a group
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public create(body: PostGroupBody, observe?: 'body', reportProgress?: boolean): Observable<GroupCreated>;
    public create(body: PostGroupBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupCreated>>;
    public create(body: PostGroupBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupCreated>>;
    public create(body: PostGroupBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling create.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<GroupCreated>(`${this.basePath}/groups`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get accounts list of a group
     * 
     * @param id Group identifier.
     * @param since Filters accounts which started on since or later.
     * @param offset The offset of accounts. By default the value is 0.
     * @param count Maximum number of accounts returned on one result page. By default the value is 20 entries. The page size can never be larger than 50.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAccounts(id: number, since?: number, offset?: number, count?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public findAccounts(id: number, since?: number, offset?: number, count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public findAccounts(id: number, since?: number, offset?: number, count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public findAccounts(id: number, since?: number, offset?: number, count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findAccounts.');
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

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.get<Array<Group>>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/accounts`,
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
     * Get basic information about a group
     * 
     * @param id Group identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findGroup(id: number, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public findGroup(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public findGroup(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public findGroup(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.get<Group>(`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search groups
     * 
     * @param groupName Filters groups which group name start of.
     * @param invitationOnly Filters groups that invited accounts can join in.
     * @param groupPrivacyType Filters groups which can join in.
     * @param since Filters groups which started on since or later.
     * @param offset The offset of messages. By default the value is 0.
     * @param count Maximum number of groups returned on one result page. By default the value is 20 entries. The page size can never be larger than 50.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findGroups(groupName?: string, invitationOnly?: number, groupPrivacyType?: string, since?: number, offset?: number, count?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public findGroups(groupName?: string, invitationOnly?: number, groupPrivacyType?: string, since?: number, offset?: number, count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public findGroups(groupName?: string, invitationOnly?: number, groupPrivacyType?: string, since?: number, offset?: number, count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public findGroups(groupName?: string, invitationOnly?: number, groupPrivacyType?: string, since?: number, offset?: number, count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (groupName !== undefined) {
            queryParameters = queryParameters.set('groupName', <any>groupName);
        }
        if (invitationOnly !== undefined) {
            queryParameters = queryParameters.set('invitationOnly', <any>invitationOnly);
        }
        if (groupPrivacyType !== undefined) {
            queryParameters = queryParameters.set('groupPrivacyType', <any>groupPrivacyType);
        }
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

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.get<Array<Group>>(`${this.basePath}/groups`,
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
     * Hide a group
     * 
     * @param id Group identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public hide(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public hide(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public hide(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public hide(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling hide.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.post<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/hides`,
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
     * Join to a group,
     * 
     * @param id Group identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public join(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public join(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public join(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public join(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling join.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.post<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/join`,
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
     * Leave from a group
     * 
     * @param id Group groupInvitation identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public leave(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public leave(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public leave(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public leave(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling leave.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.post<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/leave`,
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
     * Report a group
     * 
     * @param id Group identifier.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public report(id: number, body: PostGroupReportBody, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public report(id: number, body: PostGroupReportBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public report(id: number, body: PostGroupReportBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public report(id: number, body: PostGroupReportBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling report.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling report.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/reports`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Show a group
     * 
     * @param id Group identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public show(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public show(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public show(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public show(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling show.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.delete<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}/hides`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a group
     * 
     * @param id Group identifier.
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public update(id: number, body: PutGroupBody, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public update(id: number, body: PutGroupBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public update(id: number, body: PutGroupBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public update(id: number, body: PutGroupBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling update.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (cactacea_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/groups/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
