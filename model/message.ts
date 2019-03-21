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


export interface Message {
    id: number;
    groupId: number;
    messageType: Message.MessageTypeEnum;
    message?: string;
    medium?: Medium;
    account: Account;
    unread: boolean;
    accountCount: number;
    readAccountCount: number;
    contentWarning: boolean;
    contentDeleted: boolean;
    postedAt: number;
    next?: number;
}
export namespace Message {
    export type MessageTypeEnum = 'text' | 'medium' | 'stamp' | 'groupInvitation' | 'groupJoined' | 'groupLeft';
    export const MessageTypeEnum = {
        Text: 'text' as MessageTypeEnum,
        Medium: 'medium' as MessageTypeEnum,
        Stamp: 'stamp' as MessageTypeEnum,
        GroupInvitation: 'groupInvitation' as MessageTypeEnum,
        GroupJoined: 'groupJoined' as MessageTypeEnum,
        GroupLeft: 'groupLeft' as MessageTypeEnum
    }
}
