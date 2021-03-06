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
import { DeleteMessagesBody } from '../model/deleteMessagesBody';
import { Message } from '../model/message';
import { PostMediumBody } from '../model/postMediumBody';
import { PostTextBody } from '../model/postTextBody';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MessagesService {

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
     * Delete messages form a channel
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteMessage(body: DeleteMessagesBody, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteMessage(body: DeleteMessagesBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteMessage(body: DeleteMessagesBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteMessage(body: DeleteMessagesBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deleteMessage.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.delete<any>(`${this.basePath}/messages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search messages
     * 
     * @param id Channel identifier.
     * @param ascending Order by posted time.
     * @param since Filters messages which started on since or later.
     * @param offset The offset of messages. By default the value is 0.
     * @param count Maximum number of entries returned on one result page. By default the value is 20 entries. The page size can never be larger than 50.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findMessages(id: number, ascending: boolean, since?: number, offset?: number, count?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Message>>;
    public findMessages(id: number, ascending: boolean, since?: number, offset?: number, count?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Message>>>;
    public findMessages(id: number, ascending: boolean, since?: number, offset?: number, count?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Message>>>;
    public findMessages(id: number, ascending: boolean, since?: number, offset?: number, count?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findMessages.');
        }
        if (ascending === null || ascending === undefined) {
            throw new Error('Required parameter ascending was null or undefined when calling findMessages.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined) {
            queryParameters = queryParameters.set('id', <any>id);
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
        if (ascending !== undefined) {
            queryParameters = queryParameters.set('ascending', <any>ascending);
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

        return this.httpClient.get<Array<Message>>(`${this.basePath}/messages`,
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
     * Send a medium to a channel
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postMedium(body: PostMediumBody, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public postMedium(body: PostMediumBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public postMedium(body: PostMediumBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public postMedium(body: PostMediumBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postMedium.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Message>(`${this.basePath}/messages/medium`,
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
     * Send a text to a channel
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postText(body: PostTextBody, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public postText(body: PostTextBody, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public postText(body: PostTextBody, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public postText(body: PostTextBody, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postText.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Message>(`${this.basePath}/messages/text`,
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
