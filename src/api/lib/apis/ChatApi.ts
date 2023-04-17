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

import * as runtime from '../runtime';
import type {
  AuthLoginPost401Response,
  ChatFullResponse,
  CreateGroupChatRequest,
  CreatePrivateChatRequest,
  MessageResponse,
  SendMessageRequest,
  UpdateMessageRequest,
} from '../models';
import {
  AuthLoginPost401ResponseFromJSON,
  AuthLoginPost401ResponseToJSON,
  ChatFullResponseFromJSON,
  ChatFullResponseToJSON,
  CreateGroupChatRequestFromJSON,
  CreateGroupChatRequestToJSON,
  CreatePrivateChatRequestFromJSON,
  CreatePrivateChatRequestToJSON,
  MessageResponseFromJSON,
  MessageResponseToJSON,
  SendMessageRequestFromJSON,
  SendMessageRequestToJSON,
  UpdateMessageRequestFromJSON,
  UpdateMessageRequestToJSON,
} from '../models';

export interface ApiChatsChatIdGetRequest {
  chatId: string;
  flag?: string;
}

export interface ApiChatsChatIdMessagesGetRequest {
  chatId: string;
  amount?: number;
  before?: string;
}

export interface ApiChatsChatIdMessagesMessageIdDeleteRequest {
  chatId: string;
  messageId: string;
}

export interface ApiChatsChatIdMessagesMessageIdPutRequest {
  chatId: string;
  messageId: string;
  updateMessageRequest?: UpdateMessageRequest;
}

export interface ApiChatsChatIdMessagesPostRequest {
  chatId: string;
  sendMessageRequest?: SendMessageRequest;
}

export interface ApiChatsGetRequest {
  amount?: number;
}

export interface ApiChatsGroupPostRequest {
  createGroupChatRequest?: CreateGroupChatRequest;
}

export interface ApiChatsPrivatePostRequest {
  createPrivateChatRequest?: CreatePrivateChatRequest;
}

/**
 *
 */
export class ChatApi extends runtime.BaseAPI {
  /**
   * Retrieves a Chat resource (user must be a participant)
   */
  async apiChatsChatIdGetRaw(
    requestParameters: ApiChatsChatIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ChatFullResponse>> {
    if (
      requestParameters.chatId === null ||
      requestParameters.chatId === undefined
    ) {
      throw new runtime.RequiredError(
        'chatId',
        'Required parameter requestParameters.chatId was null or undefined when calling apiChatsChatIdGet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.flag !== undefined) {
      queryParameters['Flag'] = requestParameters.flag;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/{chatId}`.replace(
          `{${'chatId'}}`,
          encodeURIComponent(String(requestParameters.chatId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ChatFullResponseFromJSON(jsonValue),
    );
  }

  /**
   * Retrieves a Chat resource (user must be a participant)
   */
  async apiChatsChatIdGet(
    requestParameters: ApiChatsChatIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ChatFullResponse> {
    const response = await this.apiChatsChatIdGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Retrieves Chat\'s messages
   */
  async apiChatsChatIdMessagesGetRaw(
    requestParameters: ApiChatsChatIdMessagesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<MessageResponse>>> {
    if (
      requestParameters.chatId === null ||
      requestParameters.chatId === undefined
    ) {
      throw new runtime.RequiredError(
        'chatId',
        'Required parameter requestParameters.chatId was null or undefined when calling apiChatsChatIdMessagesGet.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.amount !== undefined) {
      queryParameters['Amount'] = requestParameters.amount;
    }

    if (requestParameters.before !== undefined) {
      queryParameters['Before'] = requestParameters.before;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/{chatId}/messages`.replace(
          `{${'chatId'}}`,
          encodeURIComponent(String(requestParameters.chatId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(MessageResponseFromJSON),
    );
  }

  /**
   * Retrieves Chat\'s messages
   */
  async apiChatsChatIdMessagesGet(
    requestParameters: ApiChatsChatIdMessagesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<MessageResponse>> {
    const response = await this.apiChatsChatIdMessagesGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Deletes the Message in the Chat
   */
  async apiChatsChatIdMessagesMessageIdDeleteRaw(
    requestParameters: ApiChatsChatIdMessagesMessageIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<MessageResponse>> {
    if (
      requestParameters.chatId === null ||
      requestParameters.chatId === undefined
    ) {
      throw new runtime.RequiredError(
        'chatId',
        'Required parameter requestParameters.chatId was null or undefined when calling apiChatsChatIdMessagesMessageIdDelete.',
      );
    }

    if (
      requestParameters.messageId === null ||
      requestParameters.messageId === undefined
    ) {
      throw new runtime.RequiredError(
        'messageId',
        'Required parameter requestParameters.messageId was null or undefined when calling apiChatsChatIdMessagesMessageIdDelete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/{chatId}/messages/{messageId}`
          .replace(
            `{${'chatId'}}`,
            encodeURIComponent(String(requestParameters.chatId)),
          )
          .replace(
            `{${'messageId'}}`,
            encodeURIComponent(String(requestParameters.messageId)),
          ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MessageResponseFromJSON(jsonValue),
    );
  }

  /**
   * Deletes the Message in the Chat
   */
  async apiChatsChatIdMessagesMessageIdDelete(
    requestParameters: ApiChatsChatIdMessagesMessageIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<MessageResponse> {
    const response = await this.apiChatsChatIdMessagesMessageIdDeleteRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Updates the Message in the Chat
   */
  async apiChatsChatIdMessagesMessageIdPutRaw(
    requestParameters: ApiChatsChatIdMessagesMessageIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<MessageResponse>> {
    if (
      requestParameters.chatId === null ||
      requestParameters.chatId === undefined
    ) {
      throw new runtime.RequiredError(
        'chatId',
        'Required parameter requestParameters.chatId was null or undefined when calling apiChatsChatIdMessagesMessageIdPut.',
      );
    }

    if (
      requestParameters.messageId === null ||
      requestParameters.messageId === undefined
    ) {
      throw new runtime.RequiredError(
        'messageId',
        'Required parameter requestParameters.messageId was null or undefined when calling apiChatsChatIdMessagesMessageIdPut.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/{chatId}/messages/{messageId}`
          .replace(
            `{${'chatId'}}`,
            encodeURIComponent(String(requestParameters.chatId)),
          )
          .replace(
            `{${'messageId'}}`,
            encodeURIComponent(String(requestParameters.messageId)),
          ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateMessageRequestToJSON(
          requestParameters.updateMessageRequest,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MessageResponseFromJSON(jsonValue),
    );
  }

  /**
   * Updates the Message in the Chat
   */
  async apiChatsChatIdMessagesMessageIdPut(
    requestParameters: ApiChatsChatIdMessagesMessageIdPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<MessageResponse> {
    const response = await this.apiChatsChatIdMessagesMessageIdPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Creates a Message in the Chat
   */
  async apiChatsChatIdMessagesPostRaw(
    requestParameters: ApiChatsChatIdMessagesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<MessageResponse>> {
    if (
      requestParameters.chatId === null ||
      requestParameters.chatId === undefined
    ) {
      throw new runtime.RequiredError(
        'chatId',
        'Required parameter requestParameters.chatId was null or undefined when calling apiChatsChatIdMessagesPost.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/{chatId}/messages`.replace(
          `{${'chatId'}}`,
          encodeURIComponent(String(requestParameters.chatId)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SendMessageRequestToJSON(requestParameters.sendMessageRequest),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MessageResponseFromJSON(jsonValue),
    );
  }

  /**
   * Creates a Message in the Chat
   */
  async apiChatsChatIdMessagesPost(
    requestParameters: ApiChatsChatIdMessagesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<MessageResponse> {
    const response = await this.apiChatsChatIdMessagesPostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Retrieves current user\'s Chats
   */
  async apiChatsGetRaw(
    requestParameters: ApiChatsGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<ChatFullResponse>>> {
    const queryParameters: any = {};

    if (requestParameters.amount !== undefined) {
      queryParameters['Amount'] = requestParameters.amount;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(ChatFullResponseFromJSON),
    );
  }

  /**
   * Retrieves current user\'s Chats
   */
  async apiChatsGet(
    requestParameters: ApiChatsGetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<ChatFullResponse>> {
    const response = await this.apiChatsGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Creates new Chat resource (group chat)
   */
  async apiChatsGroupPostRaw(
    requestParameters: ApiChatsGroupPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ChatFullResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/group`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateGroupChatRequestToJSON(
          requestParameters.createGroupChatRequest,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ChatFullResponseFromJSON(jsonValue),
    );
  }

  /**
   * Creates new Chat resource (group chat)
   */
  async apiChatsGroupPost(
    requestParameters: ApiChatsGroupPostRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ChatFullResponse> {
    const response = await this.apiChatsGroupPostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Creates new Chat resource (private chat)
   */
  async apiChatsPrivatePostRaw(
    requestParameters: ApiChatsPrivatePostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ChatFullResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('Bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/api/chats/private`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreatePrivateChatRequestToJSON(
          requestParameters.createPrivateChatRequest,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ChatFullResponseFromJSON(jsonValue),
    );
  }

  /**
   * Creates new Chat resource (private chat)
   */
  async apiChatsPrivatePost(
    requestParameters: ApiChatsPrivatePostRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ChatFullResponse> {
    const response = await this.apiChatsPrivatePostRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}