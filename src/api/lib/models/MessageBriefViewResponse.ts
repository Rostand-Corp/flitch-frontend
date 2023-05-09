/* tslint:disable */
/* eslint-disable */
/**
 * Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface MessageBriefViewResponse
 */
export interface MessageBriefViewResponse {
  /**
   *
   * @type {string}
   * @memberof MessageBriefViewResponse
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof MessageBriefViewResponse
   */
  authorUserName?: string | null;
  /**
   *
   * @type {string}
   * @memberof MessageBriefViewResponse
   */
  authorFullName?: string | null;
  /**
   *
   * @type {string}
   * @memberof MessageBriefViewResponse
   */
  content?: string | null;
  /**
   *
   * @type {Date}
   * @memberof MessageBriefViewResponse
   */
  timestamp?: Date;
}

/**
 * Check if a given object implements the MessageBriefViewResponse interface.
 */
export function instanceOfMessageBriefViewResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function MessageBriefViewResponseFromJSON(
  json: any,
): MessageBriefViewResponse {
  return MessageBriefViewResponseFromJSONTyped(json, false);
}

export function MessageBriefViewResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MessageBriefViewResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    authorUserName: !exists(json, 'authorUserName')
      ? undefined
      : json['authorUserName'],
    authorFullName: !exists(json, 'authorFullName')
      ? undefined
      : json['authorFullName'],
    content: !exists(json, 'content') ? undefined : json['content'],
    timestamp: !exists(json, 'timestamp')
      ? undefined
      : new Date(json['timestamp']),
  };
}

export function MessageBriefViewResponseToJSON(
  value?: MessageBriefViewResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    authorUserName: value.authorUserName,
    authorFullName: value.authorFullName,
    content: value.content,
    timestamp:
      value.timestamp === undefined ? undefined : value.timestamp.toISOString(),
  };
}
