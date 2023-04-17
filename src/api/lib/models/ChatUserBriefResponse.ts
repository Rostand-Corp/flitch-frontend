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
import type { ChatRole } from './ChatRole';
import {
  ChatRoleFromJSON,
  ChatRoleFromJSONTyped,
  ChatRoleToJSON,
} from './ChatRole';

/**
 *
 * @export
 * @interface ChatUserBriefResponse
 */
export interface ChatUserBriefResponse {
  /**
   *
   * @type {string}
   * @memberof ChatUserBriefResponse
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ChatUserBriefResponse
   */
  chatId?: string;
  /**
   *
   * @type {string}
   * @memberof ChatUserBriefResponse
   */
  username?: string | null;
  /**
   *
   * @type {ChatRole}
   * @memberof ChatUserBriefResponse
   */
  role?: ChatRole;
  /**
   *
   * @type {Date}
   * @memberof ChatUserBriefResponse
   */
  joined?: Date;
}

/**
 * Check if a given object implements the ChatUserBriefResponse interface.
 */
export function instanceOfChatUserBriefResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ChatUserBriefResponseFromJSON(
  json: any,
): ChatUserBriefResponse {
  return ChatUserBriefResponseFromJSONTyped(json, false);
}

export function ChatUserBriefResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ChatUserBriefResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    chatId: !exists(json, 'chatId') ? undefined : json['chatId'],
    username: !exists(json, 'username') ? undefined : json['username'],
    role: !exists(json, 'role') ? undefined : ChatRoleFromJSON(json['role']),
    joined: !exists(json, 'joined') ? undefined : new Date(json['joined']),
  };
}

export function ChatUserBriefResponseToJSON(
  value?: ChatUserBriefResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    chatId: value.chatId,
    username: value.username,
    role: ChatRoleToJSON(value.role),
    joined: value.joined === undefined ? undefined : value.joined.toISOString(),
  };
}