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

export type CreateUserDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobileNumber: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createReference: Reference;
  createUser: User;
  removeReference: Reference;
  updateReference: Reference;
};


export type MutationCreateReferenceArgs = {
  createReferenceInput: CreateReferenceInput;
};


export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};


export type MutationRemoveReferenceArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateReferenceArgs = {
  updateReferenceInput: UpdateReferenceInput;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  findAll: Scalars['String'];
  reference: Reference;
  references: Array<Reference>;
};


export type QueryReferenceArgs = {
  id: Scalars['Int'];
};

export type Reference = {
  __typename?: 'Reference';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type UpdateReferenceInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobileNumber: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', Users: Array<{ __typename?: 'User', email: string }> };


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;