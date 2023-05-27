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
 * @interface ForgotPassRequest
 */
export interface ForgotPassRequest {
  /**
   *
   * @type {string}
   * @memberof ForgotPassRequest
   */
  email: string;
}

/**
 * Check if a given object implements the ForgotPassRequest interface.
 */
export function instanceOfForgotPassRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'email' in value;

  return isInstance;
}

export function ForgotPassRequestFromJSON(json: any): ForgotPassRequest {
  return ForgotPassRequestFromJSONTyped(json, false);
}

export function ForgotPassRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ForgotPassRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    email: json['email'],
  };
}

export function ForgotPassRequestToJSON(value?: ForgotPassRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    email: value.email,
  };
}