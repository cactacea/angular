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


export interface PostActiveStatusBody {
    /**
     * Device status.
     */
    status?: PostActiveStatusBody.StatusEnum;
}
export namespace PostActiveStatusBody {
    export type StatusEnum = 'active' | 'inactive';
    export const StatusEnum = {
        Active: 'active' as StatusEnum,
        Inactive: 'inactive' as StatusEnum
    }
}