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


export interface PostTweetReportBody {
    /**
     * Report type.
     */
    reportType: PostTweetReportBody.ReportTypeEnum;
    /**
     * Description about this report.
     */
    reportContent?: string;
}
export namespace PostTweetReportBody {
    export type ReportTypeEnum = 'none' | 'spam' | 'inappropriate';
    export const ReportTypeEnum = {
        None: 'none' as ReportTypeEnum,
        Spam: 'spam' as ReportTypeEnum,
        Inappropriate: 'inappropriate' as ReportTypeEnum
    }
}