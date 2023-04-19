import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GqlAuthResult = {
  __typename?: 'AuthResult';
  authToken: Scalars['String'];
};

export type GqlMeAccessors = {
  __typename?: 'MeAccessors';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type GqlMutation = {
  __typename?: 'Mutation';
  requestSignUp: GqlRequestSignUpResult;
  signIn: GqlAuthResult;
  signUp: GqlAuthResult;
};


export type GqlMutationRequestSignUpArgs = {
  email: Scalars['String'];
};


export type GqlMutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type GqlMutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  verifyCode: Scalars['String'];
};

export type GqlQuery = {
  __typename?: 'Query';
  me?: Maybe<GqlMeAccessors>;
};

export type GqlRequestSignUpResult = {
  __typename?: 'RequestSignUpResult';
  success: Scalars['Boolean'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  AuthResult: ResolverTypeWrapper<GqlAuthResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  MeAccessors: ResolverTypeWrapper<GqlMeAccessors>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RequestSignUpResult: ResolverTypeWrapper<GqlRequestSignUpResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  AuthResult: GqlAuthResult;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  MeAccessors: GqlMeAccessors;
  Mutation: {};
  Query: {};
  RequestSignUpResult: GqlRequestSignUpResult;
  String: Scalars['String'];
};

export type GqlAuthResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['AuthResult'] = GqlResolversParentTypes['AuthResult']> = {
  authToken?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlMeAccessorsResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['MeAccessors'] = GqlResolversParentTypes['MeAccessors']> = {
  email?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlMutationResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation']> = {
  requestSignUp?: Resolver<GqlResolversTypes['RequestSignUpResult'], ParentType, ContextType, RequireFields<GqlMutationRequestSignUpArgs, 'email'>>;
  signIn?: Resolver<GqlResolversTypes['AuthResult'], ParentType, ContextType, RequireFields<GqlMutationSignInArgs, 'email' | 'password'>>;
  signUp?: Resolver<GqlResolversTypes['AuthResult'], ParentType, ContextType, RequireFields<GqlMutationSignUpArgs, 'email' | 'password' | 'verifyCode'>>;
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<GqlResolversTypes['MeAccessors']>, ParentType, ContextType>;
};

export type GqlRequestSignUpResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['RequestSignUpResult'] = GqlResolversParentTypes['RequestSignUpResult']> = {
  success?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlResolvers<ContextType = any> = {
  AuthResult?: GqlAuthResultResolvers<ContextType>;
  MeAccessors?: GqlMeAccessorsResolvers<ContextType>;
  Mutation?: GqlMutationResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  RequestSignUpResult?: GqlRequestSignUpResultResolvers<ContextType>;
};

