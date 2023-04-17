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
 * @interface CreatePrivateChatRequest
 */
export interface CreatePrivateChatRequest {
  /**
   *
   * @type {string}
   * @memberof CreatePrivateChatRequest
   */
  recipientId?: string | null;
}

/**
 * Check if a given object implements the CreatePrivateChatRequest interface.
 */
export function instanceOfCreatePrivateChatRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CreatePrivateChatRequestFromJSON(
  json: any,
): CreatePrivateChatRequest {
  return CreatePrivateChatRequestFromJSONTyped(json, false);
}

export function CreatePrivateChatRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreatePrivateChatRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    recipientId: !exists(json, 'recipientId') ? undefined : json['recipientId'],
  };
}

export function CreatePrivateChatRequestToJSON(
  value?: CreatePrivateChatRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    recipientId: value.recipientId,
  };
}