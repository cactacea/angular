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


export interface PostSignInBody {
    /**
     * Auth type.
     */
    authType: PostSignInBody.AuthTypeEnum;
    /**
     * User name.
     */
    identifier: string;
    /**
     * User password.
     */
    password: string;
}
export namespace PostSignInBody {
    export type AuthTypeEnum = 'username' | 'email';
    export const AuthTypeEnum = {
        Username: 'username' as AuthTypeEnum,
        Email: 'email' as AuthTypeEnum
    }
}