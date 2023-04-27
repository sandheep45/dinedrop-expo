/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateReferenceInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobileNumber: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  _id?: Maybe<Scalars['ID']>;
  access_token: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createReference: Reference;
  createUser: User;
  login: LoginResponse;
  removeReference: Reference;
  signup: User;
  socialLogin: ResultUnion;
  updateReference: Reference;
};


export type MutationCreateReferenceArgs = {
  createReferenceInput: CreateReferenceInput;
};


export type MutationCreateUserArgs = {
  createUserDto: CreateUser;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveReferenceArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  signupInput: CreateUser;
};


export type MutationSocialLoginArgs = {
  socialLoginInput: SocialOAuthInput;
};


export type MutationUpdateReferenceArgs = {
  updateReferenceInput: UpdateReferenceInput;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  Users: Array<User>;
  findAll: Scalars['String'];
  reference: Reference;
  references: Array<Reference>;
};


export type QueryUserArgs = {
  Username: Scalars['String'];
};


export type QueryReferenceArgs = {
  id: Scalars['Int'];
};

export type Reference = {
  __typename?: 'Reference';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type ResultUnion = LoginResponse | SocialUser;

export type SocialOAuthInput = {
  accessToken: Scalars['String'];
  provider: Scalars['String'];
};

export type SocialUser = {
  __typename?: 'SocialUser';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  oAuthId?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateReferenceInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };

export type SocialLoginMutationVariables = Exact<{
  input: SocialOAuthInput;
}>;


export type SocialLoginMutation = { __typename?: 'Mutation', socialLogin: { __typename?: 'LoginResponse', _id?: string | null, access_token: string, email?: string | null, firstName?: string | null, lastName?: string | null, mobileNumber?: number | null, username?: string | null } | { __typename?: 'SocialUser', oAuthId?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, picture?: string | null, username?: string | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SocialLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"socialLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialOAuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"socialLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"socialLoginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oAuthId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<SocialLoginMutation, SocialLoginMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */