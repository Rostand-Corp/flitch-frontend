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
  UpdateUserRequest,
  UserResponse,
} from '../models';
import {
  AuthLoginPost401ResponseFromJSON,
  AuthLoginPost401ResponseToJSON,
  UpdateUserRequestFromJSON,
  UpdateUserRequestToJSON,
  UserResponseFromJSON,
  UserResponseToJSON,
} from '../models';

export interface ApiUsersGetRequest {
  amount?: number;
}

export interface ApiUsersIdDeleteRequest {
  id: string;
}

export interface ApiUsersIdGetRequest {
  id: string;
}

export interface ApiUsersSelfPutRequest {
  updateUserRequest?: UpdateUserRequest;
}

/**
 *
 */
export class UserApi extends runtime.BaseAPI {
  /**
   * Retrieves Users resources
   */
  async apiUsersGetRaw(
    requestParameters: ApiUsersGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<UserResponse>>> {
    const queryParameters: any = {};

    if (requestParameters.amount !== undefined) {
      queryParameters['amount'] = requestParameters.amount;
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
        path: `/api/users`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserResponseFromJSON),
    );
  }

  /**
   * Retrieves Users resources
   */
  async apiUsersGet(
    requestParameters: ApiUsersGetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<UserResponse>> {
    const response = await this.apiUsersGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Deletes User resource
   */
  async apiUsersIdDeleteRaw(
    requestParameters: ApiUsersIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling apiUsersIdDelete.',
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
        path: `/api/users/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserResponseFromJSON(jsonValue),
    );
  }

  /**
   * Deletes User resource
   */
  async apiUsersIdDelete(
    requestParameters: ApiUsersIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserResponse> {
    const response = await this.apiUsersIdDeleteRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Retrieves User resource
   */
  async apiUsersIdGetRaw(
    requestParameters: ApiUsersIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling apiUsersIdGet.',
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
        path: `/api/users/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserResponseFromJSON(jsonValue),
    );
  }

  /**
   * Retrieves User resource
   */
  async apiUsersIdGet(
    requestParameters: ApiUsersIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserResponse> {
    const response = await this.apiUsersIdGetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Updates User resource
   */
  async apiUsersSelfPutRaw(
    requestParameters: ApiUsersSelfPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UserResponse>> {
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
        path: `/api/users/self`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateUserRequestToJSON(requestParameters.updateUserRequest),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserResponseFromJSON(jsonValue),
    );
  }

  /**
   * Updates User resource
   */
  async apiUsersSelfPut(
    requestParameters: ApiUsersSelfPutRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UserResponse> {
    const response = await this.apiUsersSelfPutRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
