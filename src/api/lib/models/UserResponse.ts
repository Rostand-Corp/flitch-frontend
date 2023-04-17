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
 * @interface UserResponse
 */
export interface UserResponse {
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  displayName?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  status?: string | null;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  colorHexCode?: string | null;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserResponseFromJSON(json: any): UserResponse {
  return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UserResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    displayName: !exists(json, 'displayName') ? undefined : json['displayName'],
    status: !exists(json, 'status') ? undefined : json['status'],
    colorHexCode: !exists(json, 'colorHexCode')
      ? undefined
      : json['colorHexCode'],
  };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    displayName: value.displayName,
    status: value.status,
    colorHexCode: value.colorHexCode,
  };
}