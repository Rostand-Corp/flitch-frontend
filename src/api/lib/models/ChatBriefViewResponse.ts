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
import type { ChatType } from './ChatType';
import {
  ChatTypeFromJSON,
  ChatTypeFromJSONTyped,
  ChatTypeToJSON,
} from './ChatType';
import type { ChatUserBriefResponse } from './ChatUserBriefResponse';
import {
  ChatUserBriefResponseFromJSON,
  ChatUserBriefResponseFromJSONTyped,
  ChatUserBriefResponseToJSON,
} from './ChatUserBriefResponse';
import type { MessageBriefViewResponse } from './MessageBriefViewResponse';
import {
  MessageBriefViewResponseFromJSON,
  MessageBriefViewResponseFromJSONTyped,
  MessageBriefViewResponseToJSON,
} from './MessageBriefViewResponse';

/**
 *
 * @export
 * @interface ChatBriefViewResponse
 */
export interface ChatBriefViewResponse {
  /**
   *
   * @type {string}
   * @memberof ChatBriefViewResponse
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ChatBriefViewResponse
   */
  chatName?: string | null;
  /**
   *
   * @type {ChatType}
   * @memberof ChatBriefViewResponse
   */
  type?: ChatType;
  /**
   *
   * @type {Array<ChatUserBriefResponse>}
   * @memberof ChatBriefViewResponse
   */
  participants?: Array<ChatUserBriefResponse> | null;
  /**
   *
   * @type {MessageBriefViewResponse}
   * @memberof ChatBriefViewResponse
   */
  lastMessage?: MessageBriefViewResponse;
}

/**
 * Check if a given object implements the ChatBriefViewResponse interface.
 */
export function instanceOfChatBriefViewResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ChatBriefViewResponseFromJSON(
  json: any,
): ChatBriefViewResponse {
  return ChatBriefViewResponseFromJSONTyped(json, false);
}

export function ChatBriefViewResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ChatBriefViewResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    chatName: !exists(json, 'chatName') ? undefined : json['chatName'],
    type: !exists(json, 'type') ? undefined : ChatTypeFromJSON(json['type']),
    participants: !exists(json, 'participants')
      ? undefined
      : json['participants'] === null
      ? null
      : (json['participants'] as Array<any>).map(ChatUserBriefResponseFromJSON),
    lastMessage: !exists(json, 'lastMessage')
      ? undefined
      : MessageBriefViewResponseFromJSON(json['lastMessage']),
  };
}

export function ChatBriefViewResponseToJSON(
  value?: ChatBriefViewResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    chatName: value.chatName,
    type: ChatTypeToJSON(value.type),
    participants:
      value.participants === undefined
        ? undefined
        : value.participants === null
        ? null
        : (value.participants as Array<any>).map(ChatUserBriefResponseToJSON),
    lastMessage: MessageBriefViewResponseToJSON(value.lastMessage),
  };
}
