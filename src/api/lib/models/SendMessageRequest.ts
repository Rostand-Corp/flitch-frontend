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
 * @interface SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   *
   * @type {string}
   * @memberof SendMessageRequest
   */
  content: string;
}

/**
 * Check if a given object implements the SendMessageRequest interface.
 */
export function instanceOfSendMessageRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'content' in value;

  return isInstance;
}

export function SendMessageRequestFromJSON(json: any): SendMessageRequest {
  return SendMessageRequestFromJSONTyped(json, false);
}

export function SendMessageRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SendMessageRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    content: json['content'],
  };
}

export function SendMessageRequestToJSON(
  value?: SendMessageRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    content: value.content,
  };
}