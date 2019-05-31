/**
 * Cactacea backend API
 * Cactacea / Cactacea backend API for web and mobile applications
 *
 * OpenAPI spec version: 19.5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Message } from './message';


export interface Group {
    id: number;
    name?: string;
    message?: Message;
    invitationOnly: boolean;
    privacyType: Group.PrivacyTypeEnum;
    authorityType: Group.AuthorityTypeEnum;
    accountCount: number;
    lastPostedAt?: number;
    organizedAt: number;
    next?: number;
}
export namespace Group {
    export type PrivacyTypeEnum = 'everyone' | 'following' | 'followers' | 'friends';
    export const PrivacyTypeEnum = {
        Everyone: 'everyone' as PrivacyTypeEnum,
        Following: 'following' as PrivacyTypeEnum,
        Followers: 'followers' as PrivacyTypeEnum,
        Friends: 'friends' as PrivacyTypeEnum
    }
    export type AuthorityTypeEnum = 'owner' | 'member';
    export const AuthorityTypeEnum = {
        Owner: 'owner' as AuthorityTypeEnum,
        Member: 'member' as AuthorityTypeEnum
    }
}
