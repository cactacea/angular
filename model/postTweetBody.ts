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


export interface PostTweetBody {
    /**
     * A tweet message will be posted.
     */
    message: string;
    /**
     * Medium identifiers of attached.
     */
    mediumIds?: Array<number>;
    /**
     * Tags of tweet.
     */
    tags?: Array<string>;
    /**
     * Tweet privacy type.
     */
    privacyType: PostTweetBody.PrivacyTypeEnum;
    /**
     * Content warning.
     */
    contentWarning: boolean;
    /**
     * Expiration of a tweet.
     */
    expiration?: number;
}
export namespace PostTweetBody {
    export type PrivacyTypeEnum = 'everyone' | 'followers' | 'friends' | 'self';
    export const PrivacyTypeEnum = {
        Everyone: 'everyone' as PrivacyTypeEnum,
        Followers: 'followers' as PrivacyTypeEnum,
        Friends: 'friends' as PrivacyTypeEnum,
        Self: 'self' as PrivacyTypeEnum
    }
}
