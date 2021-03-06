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


export interface PutNotificationSettingBody {
    /**
     * Notice new follower tweet arrived.
     */
    tweet: boolean;
    /**
     * Notice new comment arrived.
     */
    comment: boolean;
    /**
     * Notice new friend request arrived.
     */
    friendRequest: boolean;
    /**
     * Notice new message arrived.
     */
    message: boolean;
    /**
     * Notice new channel message arrived.
     */
    channelMessage: boolean;
    /**
     * Notice new invitation arrived.
     */
    invitation: boolean;
    /**
     * Show messages text on notification.
     */
    showMessage: boolean;
}
