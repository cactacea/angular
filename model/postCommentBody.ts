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


export interface PostCommentBody {
    /**
     * Tweet Identifier.
     */
    id: number;
    /**
     * Reply comment identifier.
     */
    replyId?: number;
    /**
     * A message will be posted.
     */
    message: string;
}
