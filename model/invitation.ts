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
import { Channel } from './channel';
import { User } from './user';


export interface Invitation {
    id: number;
    channel: Channel;
    user: User;
    invitedAt: number;
    next: number;
}
