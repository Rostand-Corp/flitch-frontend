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

/**
 *
 * @export
 */
export const ChatRole = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;
export type ChatRole = (typeof ChatRole)[keyof typeof ChatRole];

export function ChatRoleFromJSON(json: any): ChatRole {
  return ChatRoleFromJSONTyped(json, false);
}

export function ChatRoleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ChatRole {
  return json as ChatRole;
}

export function ChatRoleToJSON(value?: ChatRole | null): any {
  return value as any;
}
