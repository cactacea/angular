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
import { Account } from './account';
import { Medium } from './medium';


export interface Feed {
    id: number;
    message: string;
    mediums?: Array<Medium>;
    tags?: Array<string>;
    account?: Account;
    likeCount: number;
    commentCount: number;
    contentWarning: boolean;
    contentDeleted: boolean;
    postedAt: number;
    likedAt?: number;
    next?: number;
}