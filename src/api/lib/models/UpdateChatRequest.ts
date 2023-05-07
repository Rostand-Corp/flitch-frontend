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
 * @interface UpdateChatRequest
 */
export interface UpdateChatRequest {
  /**
   * A name to change chat's current name for (1-50). Name cannot be changed for private chats.
   * @type {string}
   * @memberof UpdateChatRequest
   */
  name: string;
}

/**
 * Check if a given object implements the UpdateChatRequest interface.
 */
export function instanceOfUpdateChatRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'name' in value;

  return isInstance;
}

export function UpdateChatRequestFromJSON(json: any): UpdateChatRequest {
  return UpdateChatRequestFromJSONTyped(json, false);
}

export function UpdateChatRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateChatRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
  };
}

export function UpdateChatRequestToJSON(value?: UpdateChatRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
  };
}
