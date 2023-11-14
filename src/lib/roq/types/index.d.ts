/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model business
 *
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>;
/**
 * Model deal
 *
 */
export type deal = $Result.DefaultSelection<Prisma.$dealPayload>;
/**
 * Model guest
 *
 */
export type guest = $Result.DefaultSelection<Prisma.$guestPayload>;
/**
 * Model marketing_campaign
 *
 */
export type marketing_campaign = $Result.DefaultSelection<Prisma.$marketing_campaignPayload>;
/**
 * Model offer
 *
 */
export type offer = $Result.DefaultSelection<Prisma.$offerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   */
  get business(): Prisma.businessDelegate<ExtArgs>;

  /**
   * `prisma.deal`: Exposes CRUD operations for the **deal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Deals
   * const deals = await prisma.deal.findMany()
   * ```
   */
  get deal(): Prisma.dealDelegate<ExtArgs>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **guest** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Guests
   * const guests = await prisma.guest.findMany()
   * ```
   */
  get guest(): Prisma.guestDelegate<ExtArgs>;

  /**
   * `prisma.marketing_campaign`: Exposes CRUD operations for the **marketing_campaign** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Marketing_campaigns
   * const marketing_campaigns = await prisma.marketing_campaign.findMany()
   * ```
   */
  get marketing_campaign(): Prisma.marketing_campaignDelegate<ExtArgs>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **offer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Offers
   * const offers = await prisma.offer.findMany()
   * ```
   */
  get offer(): Prisma.offerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    business: 'business';
    deal: 'deal';
    guest: 'guest';
    marketing_campaign: 'marketing_campaign';
    offer: 'offer';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'business' | 'deal' | 'guest' | 'marketing_campaign' | 'offer' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      business: {
        payload: Prisma.$businessPayload<ExtArgs>;
        fields: Prisma.businessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[];
          };
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness>;
          };
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BusinessGroupByOutputType>[];
          };
          count: {
            args: Prisma.businessCountArgs<ExtArgs>;
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number;
          };
        };
      };
      deal: {
        payload: Prisma.$dealPayload<ExtArgs>;
        fields: Prisma.dealFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.dealFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.dealFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          findFirst: {
            args: Prisma.dealFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.dealFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          findMany: {
            args: Prisma.dealFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>[];
          };
          create: {
            args: Prisma.dealCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          createMany: {
            args: Prisma.dealCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.dealDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          update: {
            args: Prisma.dealUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          deleteMany: {
            args: Prisma.dealDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.dealUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.dealUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dealPayload>;
          };
          aggregate: {
            args: Prisma.DealAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDeal>;
          };
          groupBy: {
            args: Prisma.dealGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DealGroupByOutputType>[];
          };
          count: {
            args: Prisma.dealCountArgs<ExtArgs>;
            result: $Utils.Optional<DealCountAggregateOutputType> | number;
          };
        };
      };
      guest: {
        payload: Prisma.$guestPayload<ExtArgs>;
        fields: Prisma.guestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.guestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.guestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          findFirst: {
            args: Prisma.guestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.guestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          findMany: {
            args: Prisma.guestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>[];
          };
          create: {
            args: Prisma.guestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          createMany: {
            args: Prisma.guestCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.guestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          update: {
            args: Prisma.guestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          deleteMany: {
            args: Prisma.guestDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.guestUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.guestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$guestPayload>;
          };
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGuest>;
          };
          groupBy: {
            args: Prisma.guestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GuestGroupByOutputType>[];
          };
          count: {
            args: Prisma.guestCountArgs<ExtArgs>;
            result: $Utils.Optional<GuestCountAggregateOutputType> | number;
          };
        };
      };
      marketing_campaign: {
        payload: Prisma.$marketing_campaignPayload<ExtArgs>;
        fields: Prisma.marketing_campaignFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.marketing_campaignFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.marketing_campaignFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          findFirst: {
            args: Prisma.marketing_campaignFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.marketing_campaignFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          findMany: {
            args: Prisma.marketing_campaignFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>[];
          };
          create: {
            args: Prisma.marketing_campaignCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          createMany: {
            args: Prisma.marketing_campaignCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.marketing_campaignDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          update: {
            args: Prisma.marketing_campaignUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          deleteMany: {
            args: Prisma.marketing_campaignDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.marketing_campaignUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.marketing_campaignUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$marketing_campaignPayload>;
          };
          aggregate: {
            args: Prisma.Marketing_campaignAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMarketing_campaign>;
          };
          groupBy: {
            args: Prisma.marketing_campaignGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Marketing_campaignGroupByOutputType>[];
          };
          count: {
            args: Prisma.marketing_campaignCountArgs<ExtArgs>;
            result: $Utils.Optional<Marketing_campaignCountAggregateOutputType> | number;
          };
        };
      };
      offer: {
        payload: Prisma.$offerPayload<ExtArgs>;
        fields: Prisma.offerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.offerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.offerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          findFirst: {
            args: Prisma.offerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.offerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          findMany: {
            args: Prisma.offerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>[];
          };
          create: {
            args: Prisma.offerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          createMany: {
            args: Prisma.offerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.offerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          update: {
            args: Prisma.offerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          deleteMany: {
            args: Prisma.offerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.offerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.offerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$offerPayload>;
          };
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOffer>;
          };
          groupBy: {
            args: Prisma.offerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OfferGroupByOutputType>[];
          };
          count: {
            args: Prisma.offerCountArgs<ExtArgs>;
            result: $Utils.Optional<OfferCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    deal: number;
    marketing_campaign: number;
    offer: number;
    user: number;
  };

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | BusinessCountOutputTypeCountDealArgs;
    marketing_campaign?: boolean | BusinessCountOutputTypeCountMarketing_campaignArgs;
    offer?: boolean | BusinessCountOutputTypeCountOfferArgs;
    user?: boolean | BusinessCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: dealWhereInput;
    };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountMarketing_campaignArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: marketing_campaignWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountOfferArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: offerWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  export type BusinessMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    contact_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    contact_number: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    contact_number: number;
    website: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BusinessMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    contact_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    contact_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    contact_number?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned businesses
     **/
    _count?: true | BusinessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BusinessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BusinessMaxAggregateInputType;
  };

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>;
  };

  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput;
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[];
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum;
    having?: businessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
  };

  export type BusinessGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    contact_number: string | null;
    website: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BusinessGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
          : GetScalarType<T[P], BusinessGroupByOutputType[P]>;
      }
    >
  >;

  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        contact_number?: boolean;
        website?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        deal?: boolean | business$dealArgs<ExtArgs>;
        marketing_campaign?: boolean | business$marketing_campaignArgs<ExtArgs>;
        offer?: boolean | business$offerArgs<ExtArgs>;
        user?: boolean | business$userArgs<ExtArgs>;
        _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business']
    >;

  export type businessSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    contact_number?: boolean;
    website?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | business$dealArgs<ExtArgs>;
    marketing_campaign?: boolean | business$marketing_campaignArgs<ExtArgs>;
    offer?: boolean | business$offerArgs<ExtArgs>;
    user?: boolean | business$userArgs<ExtArgs>;
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business';
    objects: {
      deal: Prisma.$dealPayload<ExtArgs>[];
      marketing_campaign: Prisma.$marketing_campaignPayload<ExtArgs>[];
      offer: Prisma.$offerPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        contact_number: string | null;
        website: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business']
    >;
    composites: {};
  };

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<
    Prisma.$businessPayload,
    S
  >;

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    businessFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BusinessCountAggregateInputType | true;
  };

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business']; meta: { name: 'business' } };
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends businessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends businessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     *
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends businessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     *
     **/
    create<T extends businessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, businessCreateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Businesses.
     *     @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     *     @example
     *     // Create many Businesses
     *     const business = await prisma.business.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends businessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     *
     **/
    delete<T extends businessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, businessDeleteArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends businessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends businessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends businessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     **/
    upsert<T extends businessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpsertArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
     **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BusinessAggregateArgs>(
      args: Subset<T, BusinessAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business model
     */
    readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    deal<T extends business$dealArgs<ExtArgs> = {}>(
      args?: Subset<T, business$dealArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findMany'> | Null>;

    marketing_campaign<T extends business$marketing_campaignArgs<ExtArgs> = {}>(
      args?: Subset<T, business$marketing_campaignArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findMany'> | Null>;

    offer<T extends business$offerArgs<ExtArgs> = {}>(
      args?: Subset<T, business$offerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends business$userArgs<ExtArgs> = {}>(
      args?: Subset<T, business$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<'business', 'String'>;
    readonly description: FieldRef<'business', 'String'>;
    readonly address: FieldRef<'business', 'String'>;
    readonly contact_number: FieldRef<'business', 'String'>;
    readonly website: FieldRef<'business', 'String'>;
    readonly name: FieldRef<'business', 'String'>;
    readonly created_at: FieldRef<'business', 'DateTime'>;
    readonly updated_at: FieldRef<'business', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>;
  };

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>;
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput;
  };

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput;
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>;
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
  };

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput;
  };

  /**
   * business.deal
   */
  export type business$dealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    where?: dealWhereInput;
    orderBy?: dealOrderByWithRelationInput | dealOrderByWithRelationInput[];
    cursor?: dealWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[];
  };

  /**
   * business.marketing_campaign
   */
  export type business$marketing_campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    where?: marketing_campaignWhereInput;
    orderBy?: marketing_campaignOrderByWithRelationInput | marketing_campaignOrderByWithRelationInput[];
    cursor?: marketing_campaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Marketing_campaignScalarFieldEnum | Marketing_campaignScalarFieldEnum[];
  };

  /**
   * business.offer
   */
  export type business$offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    where?: offerWhereInput;
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[];
    cursor?: offerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[];
  };

  /**
   * business.user
   */
  export type business$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
  };

  /**
   * Model deal
   */

  export type AggregateDeal = {
    _count: DealCountAggregateOutputType | null;
    _min: DealMinAggregateOutputType | null;
    _max: DealMaxAggregateOutputType | null;
  };

  export type DealMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DealMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DealCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    start_date: number;
    end_date: number;
    business_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DealMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DealMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DealCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deal to aggregate.
     */
    where?: dealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deals to fetch.
     */
    orderBy?: dealOrderByWithRelationInput | dealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: dealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned deals
     **/
    _count?: true | DealCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DealMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DealMaxAggregateInputType;
  };

  export type GetDealAggregateType<T extends DealAggregateArgs> = {
    [P in keyof T & keyof AggregateDeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeal[P]>
      : GetScalarType<T[P], AggregateDeal[P]>;
  };

  export type dealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dealWhereInput;
    orderBy?: dealOrderByWithAggregationInput | dealOrderByWithAggregationInput[];
    by: DealScalarFieldEnum[] | DealScalarFieldEnum;
    having?: dealScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DealCountAggregateInputType | true;
    _min?: DealMinAggregateInputType;
    _max?: DealMaxAggregateInputType;
  };

  export type DealGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    business_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DealCountAggregateOutputType | null;
    _min: DealMinAggregateOutputType | null;
    _max: DealMaxAggregateOutputType | null;
  };

  type GetDealGroupByPayload<T extends dealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DealGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DealGroupByOutputType[P]>
          : GetScalarType<T[P], DealGroupByOutputType[P]>;
      }
    >
  >;

  export type dealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      business_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business?: boolean | businessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['deal']
  >;

  export type dealSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    business_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type dealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | businessDefaultArgs<ExtArgs>;
  };

  export type $dealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'deal';
    objects: {
      business: Prisma.$businessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        start_date: Date;
        end_date: Date;
        business_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['deal']
    >;
    composites: {};
  };

  type dealGetPayload<S extends boolean | null | undefined | dealDefaultArgs> = $Result.GetResult<
    Prisma.$dealPayload,
    S
  >;

  type dealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    dealFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DealCountAggregateInputType | true;
  };

  export interface dealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deal']; meta: { name: 'deal' } };
    /**
     * Find zero or one Deal that matches the filter.
     * @param {dealFindUniqueArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends dealFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, dealFindUniqueArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Deal that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {dealFindUniqueOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends dealFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dealFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Deal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealFindFirstArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends dealFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, dealFindFirstArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Deal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealFindFirstOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends dealFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dealFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deals
     * const deals = await prisma.deal.findMany()
     *
     * // Get first 10 Deals
     * const deals = await prisma.deal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dealWithIdOnly = await prisma.deal.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends dealFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dealFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Deal.
     * @param {dealCreateArgs} args - Arguments to create a Deal.
     * @example
     * // Create one Deal
     * const Deal = await prisma.deal.create({
     *   data: {
     *     // ... data to create a Deal
     *   }
     * })
     *
     **/
    create<T extends dealCreateArgs<ExtArgs>>(
      args: SelectSubset<T, dealCreateArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Deals.
     *     @param {dealCreateManyArgs} args - Arguments to create many Deals.
     *     @example
     *     // Create many Deals
     *     const deal = await prisma.deal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends dealCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dealCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Deal.
     * @param {dealDeleteArgs} args - Arguments to delete one Deal.
     * @example
     * // Delete one Deal
     * const Deal = await prisma.deal.delete({
     *   where: {
     *     // ... filter to delete one Deal
     *   }
     * })
     *
     **/
    delete<T extends dealDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, dealDeleteArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Deal.
     * @param {dealUpdateArgs} args - Arguments to update one Deal.
     * @example
     * // Update one Deal
     * const deal = await prisma.deal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends dealUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, dealUpdateArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Deals.
     * @param {dealDeleteManyArgs} args - Arguments to filter Deals to delete.
     * @example
     * // Delete a few Deals
     * const { count } = await prisma.deal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends dealDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dealDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deals
     * const deal = await prisma.deal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends dealUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, dealUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Deal.
     * @param {dealUpsertArgs} args - Arguments to update or create a Deal.
     * @example
     * // Update or create a Deal
     * const deal = await prisma.deal.upsert({
     *   create: {
     *     // ... data to create a Deal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deal we want to update
     *   }
     * })
     **/
    upsert<T extends dealUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, dealUpsertArgs<ExtArgs>>,
    ): Prisma__dealClient<$Result.GetResult<Prisma.$dealPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealCountArgs} args - Arguments to filter Deals to count.
     * @example
     * // Count the number of Deals
     * const count = await prisma.deal.count({
     *   where: {
     *     // ... the filter for the Deals we want to count
     *   }
     * })
     **/
    count<T extends dealCountArgs>(
      args?: Subset<T, dealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DealAggregateArgs>(
      args: Subset<T, DealAggregateArgs>,
    ): Prisma.PrismaPromise<GetDealAggregateType<T>>;

    /**
     * Group by Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends dealGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dealGroupByArgs['orderBy'] }
        : { orderBy?: dealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, dealGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the deal model
     */
    readonly fields: dealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dealClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business<T extends businessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, businessDefaultArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the deal model
   */
  interface dealFieldRefs {
    readonly id: FieldRef<'deal', 'String'>;
    readonly title: FieldRef<'deal', 'String'>;
    readonly description: FieldRef<'deal', 'String'>;
    readonly start_date: FieldRef<'deal', 'DateTime'>;
    readonly end_date: FieldRef<'deal', 'DateTime'>;
    readonly business_id: FieldRef<'deal', 'String'>;
    readonly created_at: FieldRef<'deal', 'DateTime'>;
    readonly updated_at: FieldRef<'deal', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * deal findUnique
   */
  export type dealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter, which deal to fetch.
     */
    where: dealWhereUniqueInput;
  };

  /**
   * deal findUniqueOrThrow
   */
  export type dealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter, which deal to fetch.
     */
    where: dealWhereUniqueInput;
  };

  /**
   * deal findFirst
   */
  export type dealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter, which deal to fetch.
     */
    where?: dealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deals to fetch.
     */
    orderBy?: dealOrderByWithRelationInput | dealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for deals.
     */
    cursor?: dealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[];
  };

  /**
   * deal findFirstOrThrow
   */
  export type dealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter, which deal to fetch.
     */
    where?: dealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deals to fetch.
     */
    orderBy?: dealOrderByWithRelationInput | dealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for deals.
     */
    cursor?: dealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[];
  };

  /**
   * deal findMany
   */
  export type dealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter, which deals to fetch.
     */
    where?: dealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deals to fetch.
     */
    orderBy?: dealOrderByWithRelationInput | dealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing deals.
     */
    cursor?: dealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deals.
     */
    skip?: number;
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[];
  };

  /**
   * deal create
   */
  export type dealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * The data needed to create a deal.
     */
    data: XOR<dealCreateInput, dealUncheckedCreateInput>;
  };

  /**
   * deal createMany
   */
  export type dealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deals.
     */
    data: dealCreateManyInput | dealCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * deal update
   */
  export type dealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * The data needed to update a deal.
     */
    data: XOR<dealUpdateInput, dealUncheckedUpdateInput>;
    /**
     * Choose, which deal to update.
     */
    where: dealWhereUniqueInput;
  };

  /**
   * deal updateMany
   */
  export type dealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deals.
     */
    data: XOR<dealUpdateManyMutationInput, dealUncheckedUpdateManyInput>;
    /**
     * Filter which deals to update
     */
    where?: dealWhereInput;
  };

  /**
   * deal upsert
   */
  export type dealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * The filter to search for the deal to update in case it exists.
     */
    where: dealWhereUniqueInput;
    /**
     * In case the deal found by the `where` argument doesn't exist, create a new deal with this data.
     */
    create: XOR<dealCreateInput, dealUncheckedCreateInput>;
    /**
     * In case the deal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dealUpdateInput, dealUncheckedUpdateInput>;
  };

  /**
   * deal delete
   */
  export type dealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
    /**
     * Filter which deal to delete.
     */
    where: dealWhereUniqueInput;
  };

  /**
   * deal deleteMany
   */
  export type dealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deals to delete
     */
    where?: dealWhereInput;
  };

  /**
   * deal without action
   */
  export type dealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deal
     */
    select?: dealSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dealInclude<ExtArgs> | null;
  };

  /**
   * Model guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
  };

  export type GuestMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    contact_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GuestMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    contact_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GuestCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    contact_number: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GuestMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GuestMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GuestCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    contact_number?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guest to aggregate.
     */
    where?: guestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of guests to fetch.
     */
    orderBy?: guestOrderByWithRelationInput | guestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: guestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` guests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` guests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned guests
     **/
    _count?: true | GuestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GuestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GuestMaxAggregateInputType;
  };

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
    [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>;
  };

  export type guestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: guestWhereInput;
    orderBy?: guestOrderByWithAggregationInput | guestOrderByWithAggregationInput[];
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum;
    having?: guestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestCountAggregateInputType | true;
    _min?: GuestMinAggregateInputType;
    _max?: GuestMaxAggregateInputType;
  };

  export type GuestGroupByOutputType = {
    id: string;
    username: string;
    email: string;
    contact_number: string;
    created_at: Date;
    updated_at: Date;
    _count: GuestCountAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
  };

  type GetGuestGroupByPayload<T extends guestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GuestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
          : GetScalarType<T[P], GuestGroupByOutputType[P]>;
      }
    >
  >;

  export type guestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      contact_number?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['guest']
  >;

  export type guestSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    contact_number?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $guestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'guest';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string;
        email: string;
        contact_number: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['guest']
    >;
    composites: {};
  };

  type guestGetPayload<S extends boolean | null | undefined | guestDefaultArgs> = $Result.GetResult<
    Prisma.$guestPayload,
    S
  >;

  type guestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    guestFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: GuestCountAggregateInputType | true;
  };

  export interface guestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['guest']; meta: { name: 'guest' } };
    /**
     * Find zero or one Guest that matches the filter.
     * @param {guestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends guestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, guestFindUniqueArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Guest that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {guestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends guestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, guestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends guestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, guestFindFirstArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends guestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, guestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     *
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends guestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Guest.
     * @param {guestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     *
     **/
    create<T extends guestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, guestCreateArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Guests.
     *     @param {guestCreateManyArgs} args - Arguments to create many Guests.
     *     @example
     *     // Create many Guests
     *     const guest = await prisma.guest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends guestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Guest.
     * @param {guestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     *
     **/
    delete<T extends guestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, guestDeleteArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Guest.
     * @param {guestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends guestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, guestUpdateArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Guests.
     * @param {guestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends guestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, guestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends guestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, guestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Guest.
     * @param {guestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     **/
    upsert<T extends guestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, guestUpsertArgs<ExtArgs>>,
    ): Prisma__guestClient<$Result.GetResult<Prisma.$guestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
     **/
    count<T extends guestCountArgs>(
      args?: Subset<T, guestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GuestAggregateArgs>(
      args: Subset<T, GuestAggregateArgs>,
    ): Prisma.PrismaPromise<GetGuestAggregateType<T>>;

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {guestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends guestGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: guestGroupByArgs['orderBy'] }
        : { orderBy?: guestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, guestGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the guest model
     */
    readonly fields: guestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__guestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the guest model
   */
  interface guestFieldRefs {
    readonly id: FieldRef<'guest', 'String'>;
    readonly username: FieldRef<'guest', 'String'>;
    readonly email: FieldRef<'guest', 'String'>;
    readonly contact_number: FieldRef<'guest', 'String'>;
    readonly created_at: FieldRef<'guest', 'DateTime'>;
    readonly updated_at: FieldRef<'guest', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * guest findUnique
   */
  export type guestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter, which guest to fetch.
     */
    where: guestWhereUniqueInput;
  };

  /**
   * guest findUniqueOrThrow
   */
  export type guestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter, which guest to fetch.
     */
    where: guestWhereUniqueInput;
  };

  /**
   * guest findFirst
   */
  export type guestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter, which guest to fetch.
     */
    where?: guestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of guests to fetch.
     */
    orderBy?: guestOrderByWithRelationInput | guestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for guests.
     */
    cursor?: guestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` guests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` guests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[];
  };

  /**
   * guest findFirstOrThrow
   */
  export type guestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter, which guest to fetch.
     */
    where?: guestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of guests to fetch.
     */
    orderBy?: guestOrderByWithRelationInput | guestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for guests.
     */
    cursor?: guestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` guests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` guests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[];
  };

  /**
   * guest findMany
   */
  export type guestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter, which guests to fetch.
     */
    where?: guestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of guests to fetch.
     */
    orderBy?: guestOrderByWithRelationInput | guestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing guests.
     */
    cursor?: guestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` guests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` guests.
     */
    skip?: number;
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[];
  };

  /**
   * guest create
   */
  export type guestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * The data needed to create a guest.
     */
    data: XOR<guestCreateInput, guestUncheckedCreateInput>;
  };

  /**
   * guest createMany
   */
  export type guestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many guests.
     */
    data: guestCreateManyInput | guestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * guest update
   */
  export type guestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * The data needed to update a guest.
     */
    data: XOR<guestUpdateInput, guestUncheckedUpdateInput>;
    /**
     * Choose, which guest to update.
     */
    where: guestWhereUniqueInput;
  };

  /**
   * guest updateMany
   */
  export type guestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update guests.
     */
    data: XOR<guestUpdateManyMutationInput, guestUncheckedUpdateManyInput>;
    /**
     * Filter which guests to update
     */
    where?: guestWhereInput;
  };

  /**
   * guest upsert
   */
  export type guestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * The filter to search for the guest to update in case it exists.
     */
    where: guestWhereUniqueInput;
    /**
     * In case the guest found by the `where` argument doesn't exist, create a new guest with this data.
     */
    create: XOR<guestCreateInput, guestUncheckedCreateInput>;
    /**
     * In case the guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<guestUpdateInput, guestUncheckedUpdateInput>;
  };

  /**
   * guest delete
   */
  export type guestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
    /**
     * Filter which guest to delete.
     */
    where: guestWhereUniqueInput;
  };

  /**
   * guest deleteMany
   */
  export type guestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which guests to delete
     */
    where?: guestWhereInput;
  };

  /**
   * guest without action
   */
  export type guestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the guest
     */
    select?: guestSelect<ExtArgs> | null;
  };

  /**
   * Model marketing_campaign
   */

  export type AggregateMarketing_campaign = {
    _count: Marketing_campaignCountAggregateOutputType | null;
    _min: Marketing_campaignMinAggregateOutputType | null;
    _max: Marketing_campaignMaxAggregateOutputType | null;
  };

  export type Marketing_campaignMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Marketing_campaignMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Marketing_campaignCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    business_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Marketing_campaignMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Marketing_campaignMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Marketing_campaignCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Marketing_campaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketing_campaign to aggregate.
     */
    where?: marketing_campaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of marketing_campaigns to fetch.
     */
    orderBy?: marketing_campaignOrderByWithRelationInput | marketing_campaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: marketing_campaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` marketing_campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` marketing_campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned marketing_campaigns
     **/
    _count?: true | Marketing_campaignCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Marketing_campaignMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Marketing_campaignMaxAggregateInputType;
  };

  export type GetMarketing_campaignAggregateType<T extends Marketing_campaignAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketing_campaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketing_campaign[P]>
      : GetScalarType<T[P], AggregateMarketing_campaign[P]>;
  };

  export type marketing_campaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marketing_campaignWhereInput;
    orderBy?: marketing_campaignOrderByWithAggregationInput | marketing_campaignOrderByWithAggregationInput[];
    by: Marketing_campaignScalarFieldEnum[] | Marketing_campaignScalarFieldEnum;
    having?: marketing_campaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Marketing_campaignCountAggregateInputType | true;
    _min?: Marketing_campaignMinAggregateInputType;
    _max?: Marketing_campaignMaxAggregateInputType;
  };

  export type Marketing_campaignGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    business_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Marketing_campaignCountAggregateOutputType | null;
    _min: Marketing_campaignMinAggregateOutputType | null;
    _max: Marketing_campaignMaxAggregateOutputType | null;
  };

  type GetMarketing_campaignGroupByPayload<T extends marketing_campaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Marketing_campaignGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Marketing_campaignGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Marketing_campaignGroupByOutputType[P]>
          : GetScalarType<T[P], Marketing_campaignGroupByOutputType[P]>;
      }
    >
  >;

  export type marketing_campaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        business_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        business?: boolean | businessDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['marketing_campaign']
    >;

  export type marketing_campaignSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    business_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type marketing_campaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | businessDefaultArgs<ExtArgs>;
  };

  export type $marketing_campaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'marketing_campaign';
    objects: {
      business: Prisma.$businessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        start_date: Date;
        end_date: Date;
        business_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['marketing_campaign']
    >;
    composites: {};
  };

  type marketing_campaignGetPayload<S extends boolean | null | undefined | marketing_campaignDefaultArgs> =
    $Result.GetResult<Prisma.$marketing_campaignPayload, S>;

  type marketing_campaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    marketing_campaignFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Marketing_campaignCountAggregateInputType | true;
  };

  export interface marketing_campaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['marketing_campaign'];
      meta: { name: 'marketing_campaign' };
    };
    /**
     * Find zero or one Marketing_campaign that matches the filter.
     * @param {marketing_campaignFindUniqueArgs} args - Arguments to find a Marketing_campaign
     * @example
     * // Get one Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends marketing_campaignFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignFindUniqueArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Marketing_campaign that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {marketing_campaignFindUniqueOrThrowArgs} args - Arguments to find a Marketing_campaign
     * @example
     * // Get one Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends marketing_campaignFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Marketing_campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignFindFirstArgs} args - Arguments to find a Marketing_campaign
     * @example
     * // Get one Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends marketing_campaignFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignFindFirstArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Marketing_campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignFindFirstOrThrowArgs} args - Arguments to find a Marketing_campaign
     * @example
     * // Get one Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends marketing_campaignFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Marketing_campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marketing_campaigns
     * const marketing_campaigns = await prisma.marketing_campaign.findMany()
     *
     * // Get first 10 Marketing_campaigns
     * const marketing_campaigns = await prisma.marketing_campaign.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const marketing_campaignWithIdOnly = await prisma.marketing_campaign.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends marketing_campaignFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Marketing_campaign.
     * @param {marketing_campaignCreateArgs} args - Arguments to create a Marketing_campaign.
     * @example
     * // Create one Marketing_campaign
     * const Marketing_campaign = await prisma.marketing_campaign.create({
     *   data: {
     *     // ... data to create a Marketing_campaign
     *   }
     * })
     *
     **/
    create<T extends marketing_campaignCreateArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignCreateArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Marketing_campaigns.
     *     @param {marketing_campaignCreateManyArgs} args - Arguments to create many Marketing_campaigns.
     *     @example
     *     // Create many Marketing_campaigns
     *     const marketing_campaign = await prisma.marketing_campaign.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends marketing_campaignCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Marketing_campaign.
     * @param {marketing_campaignDeleteArgs} args - Arguments to delete one Marketing_campaign.
     * @example
     * // Delete one Marketing_campaign
     * const Marketing_campaign = await prisma.marketing_campaign.delete({
     *   where: {
     *     // ... filter to delete one Marketing_campaign
     *   }
     * })
     *
     **/
    delete<T extends marketing_campaignDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignDeleteArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Marketing_campaign.
     * @param {marketing_campaignUpdateArgs} args - Arguments to update one Marketing_campaign.
     * @example
     * // Update one Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends marketing_campaignUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignUpdateArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Marketing_campaigns.
     * @param {marketing_campaignDeleteManyArgs} args - Arguments to filter Marketing_campaigns to delete.
     * @example
     * // Delete a few Marketing_campaigns
     * const { count } = await prisma.marketing_campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends marketing_campaignDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, marketing_campaignDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Marketing_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marketing_campaigns
     * const marketing_campaign = await prisma.marketing_campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends marketing_campaignUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Marketing_campaign.
     * @param {marketing_campaignUpsertArgs} args - Arguments to update or create a Marketing_campaign.
     * @example
     * // Update or create a Marketing_campaign
     * const marketing_campaign = await prisma.marketing_campaign.upsert({
     *   create: {
     *     // ... data to create a Marketing_campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marketing_campaign we want to update
     *   }
     * })
     **/
    upsert<T extends marketing_campaignUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, marketing_campaignUpsertArgs<ExtArgs>>,
    ): Prisma__marketing_campaignClient<
      $Result.GetResult<Prisma.$marketing_campaignPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Marketing_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignCountArgs} args - Arguments to filter Marketing_campaigns to count.
     * @example
     * // Count the number of Marketing_campaigns
     * const count = await prisma.marketing_campaign.count({
     *   where: {
     *     // ... the filter for the Marketing_campaigns we want to count
     *   }
     * })
     **/
    count<T extends marketing_campaignCountArgs>(
      args?: Subset<T, marketing_campaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Marketing_campaignCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Marketing_campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Marketing_campaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Marketing_campaignAggregateArgs>(
      args: Subset<T, Marketing_campaignAggregateArgs>,
    ): Prisma.PrismaPromise<GetMarketing_campaignAggregateType<T>>;

    /**
     * Group by Marketing_campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketing_campaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends marketing_campaignGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marketing_campaignGroupByArgs['orderBy'] }
        : { orderBy?: marketing_campaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, marketing_campaignGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMarketing_campaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the marketing_campaign model
     */
    readonly fields: marketing_campaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marketing_campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marketing_campaignClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business<T extends businessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, businessDefaultArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the marketing_campaign model
   */
  interface marketing_campaignFieldRefs {
    readonly id: FieldRef<'marketing_campaign', 'String'>;
    readonly name: FieldRef<'marketing_campaign', 'String'>;
    readonly description: FieldRef<'marketing_campaign', 'String'>;
    readonly start_date: FieldRef<'marketing_campaign', 'DateTime'>;
    readonly end_date: FieldRef<'marketing_campaign', 'DateTime'>;
    readonly business_id: FieldRef<'marketing_campaign', 'String'>;
    readonly created_at: FieldRef<'marketing_campaign', 'DateTime'>;
    readonly updated_at: FieldRef<'marketing_campaign', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * marketing_campaign findUnique
   */
  export type marketing_campaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter, which marketing_campaign to fetch.
     */
    where: marketing_campaignWhereUniqueInput;
  };

  /**
   * marketing_campaign findUniqueOrThrow
   */
  export type marketing_campaignFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter, which marketing_campaign to fetch.
     */
    where: marketing_campaignWhereUniqueInput;
  };

  /**
   * marketing_campaign findFirst
   */
  export type marketing_campaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter, which marketing_campaign to fetch.
     */
    where?: marketing_campaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of marketing_campaigns to fetch.
     */
    orderBy?: marketing_campaignOrderByWithRelationInput | marketing_campaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for marketing_campaigns.
     */
    cursor?: marketing_campaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` marketing_campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` marketing_campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of marketing_campaigns.
     */
    distinct?: Marketing_campaignScalarFieldEnum | Marketing_campaignScalarFieldEnum[];
  };

  /**
   * marketing_campaign findFirstOrThrow
   */
  export type marketing_campaignFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter, which marketing_campaign to fetch.
     */
    where?: marketing_campaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of marketing_campaigns to fetch.
     */
    orderBy?: marketing_campaignOrderByWithRelationInput | marketing_campaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for marketing_campaigns.
     */
    cursor?: marketing_campaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` marketing_campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` marketing_campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of marketing_campaigns.
     */
    distinct?: Marketing_campaignScalarFieldEnum | Marketing_campaignScalarFieldEnum[];
  };

  /**
   * marketing_campaign findMany
   */
  export type marketing_campaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter, which marketing_campaigns to fetch.
     */
    where?: marketing_campaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of marketing_campaigns to fetch.
     */
    orderBy?: marketing_campaignOrderByWithRelationInput | marketing_campaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing marketing_campaigns.
     */
    cursor?: marketing_campaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` marketing_campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` marketing_campaigns.
     */
    skip?: number;
    distinct?: Marketing_campaignScalarFieldEnum | Marketing_campaignScalarFieldEnum[];
  };

  /**
   * marketing_campaign create
   */
  export type marketing_campaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * The data needed to create a marketing_campaign.
     */
    data: XOR<marketing_campaignCreateInput, marketing_campaignUncheckedCreateInput>;
  };

  /**
   * marketing_campaign createMany
   */
  export type marketing_campaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marketing_campaigns.
     */
    data: marketing_campaignCreateManyInput | marketing_campaignCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * marketing_campaign update
   */
  export type marketing_campaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * The data needed to update a marketing_campaign.
     */
    data: XOR<marketing_campaignUpdateInput, marketing_campaignUncheckedUpdateInput>;
    /**
     * Choose, which marketing_campaign to update.
     */
    where: marketing_campaignWhereUniqueInput;
  };

  /**
   * marketing_campaign updateMany
   */
  export type marketing_campaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marketing_campaigns.
     */
    data: XOR<marketing_campaignUpdateManyMutationInput, marketing_campaignUncheckedUpdateManyInput>;
    /**
     * Filter which marketing_campaigns to update
     */
    where?: marketing_campaignWhereInput;
  };

  /**
   * marketing_campaign upsert
   */
  export type marketing_campaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * The filter to search for the marketing_campaign to update in case it exists.
     */
    where: marketing_campaignWhereUniqueInput;
    /**
     * In case the marketing_campaign found by the `where` argument doesn't exist, create a new marketing_campaign with this data.
     */
    create: XOR<marketing_campaignCreateInput, marketing_campaignUncheckedCreateInput>;
    /**
     * In case the marketing_campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marketing_campaignUpdateInput, marketing_campaignUncheckedUpdateInput>;
  };

  /**
   * marketing_campaign delete
   */
  export type marketing_campaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
    /**
     * Filter which marketing_campaign to delete.
     */
    where: marketing_campaignWhereUniqueInput;
  };

  /**
   * marketing_campaign deleteMany
   */
  export type marketing_campaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketing_campaigns to delete
     */
    where?: marketing_campaignWhereInput;
  };

  /**
   * marketing_campaign without action
   */
  export type marketing_campaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketing_campaign
     */
    select?: marketing_campaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: marketing_campaignInclude<ExtArgs> | null;
  };

  /**
   * Model offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null;
    _min: OfferMinAggregateOutputType | null;
    _max: OfferMaxAggregateOutputType | null;
  };

  export type OfferMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OfferMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    business_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OfferCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    start_date: number;
    end_date: number;
    business_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OfferMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OfferMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OfferCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    business_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which offer to aggregate.
     */
    where?: offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned offers
     **/
    _count?: true | OfferCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OfferMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OfferMaxAggregateInputType;
  };

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
    [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>;
  };

  export type offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: offerWhereInput;
    orderBy?: offerOrderByWithAggregationInput | offerOrderByWithAggregationInput[];
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum;
    having?: offerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfferCountAggregateInputType | true;
    _min?: OfferMinAggregateInputType;
    _max?: OfferMaxAggregateInputType;
  };

  export type OfferGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    business_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OfferCountAggregateOutputType | null;
    _min: OfferMinAggregateOutputType | null;
    _max: OfferMaxAggregateOutputType | null;
  };

  type GetOfferGroupByPayload<T extends offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OfferGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
          : GetScalarType<T[P], OfferGroupByOutputType[P]>;
      }
    >
  >;

  export type offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      business_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business?: boolean | businessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['offer']
  >;

  export type offerSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    business_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type offerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | businessDefaultArgs<ExtArgs>;
  };

  export type $offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'offer';
    objects: {
      business: Prisma.$businessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        start_date: Date;
        end_date: Date;
        business_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['offer']
    >;
    composites: {};
  };

  type offerGetPayload<S extends boolean | null | undefined | offerDefaultArgs> = $Result.GetResult<
    Prisma.$offerPayload,
    S
  >;

  type offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    offerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OfferCountAggregateInputType | true;
  };

  export interface offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['offer']; meta: { name: 'offer' } };
    /**
     * Find zero or one Offer that matches the filter.
     * @param {offerFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends offerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, offerFindUniqueArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Offer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {offerFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends offerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, offerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends offerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, offerFindFirstArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends offerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, offerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     *
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends offerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, offerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Offer.
     * @param {offerCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     *
     **/
    create<T extends offerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, offerCreateArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Offers.
     *     @param {offerCreateManyArgs} args - Arguments to create many Offers.
     *     @example
     *     // Create many Offers
     *     const offer = await prisma.offer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends offerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, offerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Offer.
     * @param {offerDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     *
     **/
    delete<T extends offerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, offerDeleteArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Offer.
     * @param {offerUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends offerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, offerUpdateArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Offers.
     * @param {offerDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends offerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, offerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends offerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, offerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Offer.
     * @param {offerUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     **/
    upsert<T extends offerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, offerUpsertArgs<ExtArgs>>,
    ): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
     **/
    count<T extends offerCountArgs>(
      args?: Subset<T, offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OfferAggregateArgs>(
      args: Subset<T, OfferAggregateArgs>,
    ): Prisma.PrismaPromise<GetOfferAggregateType<T>>;

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends offerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: offerGroupByArgs['orderBy'] }
        : { orderBy?: offerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, offerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the offer model
     */
    readonly fields: offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__offerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business<T extends businessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, businessDefaultArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the offer model
   */
  interface offerFieldRefs {
    readonly id: FieldRef<'offer', 'String'>;
    readonly title: FieldRef<'offer', 'String'>;
    readonly description: FieldRef<'offer', 'String'>;
    readonly start_date: FieldRef<'offer', 'DateTime'>;
    readonly end_date: FieldRef<'offer', 'DateTime'>;
    readonly business_id: FieldRef<'offer', 'String'>;
    readonly created_at: FieldRef<'offer', 'DateTime'>;
    readonly updated_at: FieldRef<'offer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * offer findUnique
   */
  export type offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter, which offer to fetch.
     */
    where: offerWhereUniqueInput;
  };

  /**
   * offer findUniqueOrThrow
   */
  export type offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter, which offer to fetch.
     */
    where: offerWhereUniqueInput;
  };

  /**
   * offer findFirst
   */
  export type offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter, which offer to fetch.
     */
    where?: offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for offers.
     */
    cursor?: offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[];
  };

  /**
   * offer findFirstOrThrow
   */
  export type offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter, which offer to fetch.
     */
    where?: offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for offers.
     */
    cursor?: offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[];
  };

  /**
   * offer findMany
   */
  export type offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter, which offers to fetch.
     */
    where?: offerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing offers.
     */
    cursor?: offerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offers.
     */
    skip?: number;
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[];
  };

  /**
   * offer create
   */
  export type offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * The data needed to create a offer.
     */
    data: XOR<offerCreateInput, offerUncheckedCreateInput>;
  };

  /**
   * offer createMany
   */
  export type offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many offers.
     */
    data: offerCreateManyInput | offerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * offer update
   */
  export type offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * The data needed to update a offer.
     */
    data: XOR<offerUpdateInput, offerUncheckedUpdateInput>;
    /**
     * Choose, which offer to update.
     */
    where: offerWhereUniqueInput;
  };

  /**
   * offer updateMany
   */
  export type offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update offers.
     */
    data: XOR<offerUpdateManyMutationInput, offerUncheckedUpdateManyInput>;
    /**
     * Filter which offers to update
     */
    where?: offerWhereInput;
  };

  /**
   * offer upsert
   */
  export type offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * The filter to search for the offer to update in case it exists.
     */
    where: offerWhereUniqueInput;
    /**
     * In case the offer found by the `where` argument doesn't exist, create a new offer with this data.
     */
    create: XOR<offerCreateInput, offerUncheckedCreateInput>;
    /**
     * In case the offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<offerUpdateInput, offerUncheckedUpdateInput>;
  };

  /**
   * offer delete
   */
  export type offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
    /**
     * Filter which offer to delete.
     */
    where: offerWhereUniqueInput;
  };

  /**
   * offer deleteMany
   */
  export type offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which offers to delete
     */
    where?: offerWhereInput;
  };

  /**
   * offer without action
   */
  export type offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: offerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    business_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      business_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business?: boolean | user$businessArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    business_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | user$businessArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      business: Prisma.$businessPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        business_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business<T extends user$businessArgs<ExtArgs> = {}>(
      args?: Subset<T, user$businessArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly business_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.business
   */
  export type user$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    where?: businessWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BusinessScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    contact_number: 'contact_number';
    website: 'website';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];

  export const DealScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    business_id: 'business_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DealScalarFieldEnum = (typeof DealScalarFieldEnum)[keyof typeof DealScalarFieldEnum];

  export const GuestScalarFieldEnum: {
    id: 'id';
    username: 'username';
    email: 'email';
    contact_number: 'contact_number';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum];

  export const Marketing_campaignScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    business_id: 'business_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Marketing_campaignScalarFieldEnum =
    (typeof Marketing_campaignScalarFieldEnum)[keyof typeof Marketing_campaignScalarFieldEnum];

  export const OfferScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    business_id: 'business_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    business_id: 'business_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[];
    OR?: businessWhereInput[];
    NOT?: businessWhereInput | businessWhereInput[];
    id?: UuidFilter<'business'> | string;
    description?: StringNullableFilter<'business'> | string | null;
    address?: StringNullableFilter<'business'> | string | null;
    contact_number?: StringNullableFilter<'business'> | string | null;
    website?: StringNullableFilter<'business'> | string | null;
    name?: StringFilter<'business'> | string;
    created_at?: DateTimeFilter<'business'> | Date | string;
    updated_at?: DateTimeFilter<'business'> | Date | string;
    deal?: DealListRelationFilter;
    marketing_campaign?: Marketing_campaignListRelationFilter;
    offer?: OfferListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type businessOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deal?: dealOrderByRelationAggregateInput;
    marketing_campaign?: marketing_campaignOrderByRelationAggregateInput;
    offer?: offerOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type businessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: businessWhereInput | businessWhereInput[];
      OR?: businessWhereInput[];
      NOT?: businessWhereInput | businessWhereInput[];
      description?: StringNullableFilter<'business'> | string | null;
      address?: StringNullableFilter<'business'> | string | null;
      contact_number?: StringNullableFilter<'business'> | string | null;
      website?: StringNullableFilter<'business'> | string | null;
      name?: StringFilter<'business'> | string;
      created_at?: DateTimeFilter<'business'> | Date | string;
      updated_at?: DateTimeFilter<'business'> | Date | string;
      deal?: DealListRelationFilter;
      marketing_campaign?: Marketing_campaignListRelationFilter;
      offer?: OfferListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: businessCountOrderByAggregateInput;
    _max?: businessMaxOrderByAggregateInput;
    _min?: businessMinOrderByAggregateInput;
  };

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    OR?: businessScalarWhereWithAggregatesInput[];
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business'> | string;
    description?: StringNullableWithAggregatesFilter<'business'> | string | null;
    address?: StringNullableWithAggregatesFilter<'business'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'business'> | string | null;
    website?: StringNullableWithAggregatesFilter<'business'> | string | null;
    name?: StringWithAggregatesFilter<'business'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
  };

  export type dealWhereInput = {
    AND?: dealWhereInput | dealWhereInput[];
    OR?: dealWhereInput[];
    NOT?: dealWhereInput | dealWhereInput[];
    id?: UuidFilter<'deal'> | string;
    title?: StringFilter<'deal'> | string;
    description?: StringFilter<'deal'> | string;
    start_date?: DateTimeFilter<'deal'> | Date | string;
    end_date?: DateTimeFilter<'deal'> | Date | string;
    business_id?: UuidFilter<'deal'> | string;
    created_at?: DateTimeFilter<'deal'> | Date | string;
    updated_at?: DateTimeFilter<'deal'> | Date | string;
    business?: XOR<BusinessRelationFilter, businessWhereInput>;
  };

  export type dealOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business?: businessOrderByWithRelationInput;
  };

  export type dealWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: dealWhereInput | dealWhereInput[];
      OR?: dealWhereInput[];
      NOT?: dealWhereInput | dealWhereInput[];
      title?: StringFilter<'deal'> | string;
      description?: StringFilter<'deal'> | string;
      start_date?: DateTimeFilter<'deal'> | Date | string;
      end_date?: DateTimeFilter<'deal'> | Date | string;
      business_id?: UuidFilter<'deal'> | string;
      created_at?: DateTimeFilter<'deal'> | Date | string;
      updated_at?: DateTimeFilter<'deal'> | Date | string;
      business?: XOR<BusinessRelationFilter, businessWhereInput>;
    },
    'id'
  >;

  export type dealOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: dealCountOrderByAggregateInput;
    _max?: dealMaxOrderByAggregateInput;
    _min?: dealMinOrderByAggregateInput;
  };

  export type dealScalarWhereWithAggregatesInput = {
    AND?: dealScalarWhereWithAggregatesInput | dealScalarWhereWithAggregatesInput[];
    OR?: dealScalarWhereWithAggregatesInput[];
    NOT?: dealScalarWhereWithAggregatesInput | dealScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'deal'> | string;
    title?: StringWithAggregatesFilter<'deal'> | string;
    description?: StringWithAggregatesFilter<'deal'> | string;
    start_date?: DateTimeWithAggregatesFilter<'deal'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'deal'> | Date | string;
    business_id?: UuidWithAggregatesFilter<'deal'> | string;
    created_at?: DateTimeWithAggregatesFilter<'deal'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'deal'> | Date | string;
  };

  export type guestWhereInput = {
    AND?: guestWhereInput | guestWhereInput[];
    OR?: guestWhereInput[];
    NOT?: guestWhereInput | guestWhereInput[];
    id?: UuidFilter<'guest'> | string;
    username?: StringFilter<'guest'> | string;
    email?: StringFilter<'guest'> | string;
    contact_number?: StringFilter<'guest'> | string;
    created_at?: DateTimeFilter<'guest'> | Date | string;
    updated_at?: DateTimeFilter<'guest'> | Date | string;
  };

  export type guestOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type guestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: guestWhereInput | guestWhereInput[];
      OR?: guestWhereInput[];
      NOT?: guestWhereInput | guestWhereInput[];
      username?: StringFilter<'guest'> | string;
      email?: StringFilter<'guest'> | string;
      contact_number?: StringFilter<'guest'> | string;
      created_at?: DateTimeFilter<'guest'> | Date | string;
      updated_at?: DateTimeFilter<'guest'> | Date | string;
    },
    'id'
  >;

  export type guestOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: guestCountOrderByAggregateInput;
    _max?: guestMaxOrderByAggregateInput;
    _min?: guestMinOrderByAggregateInput;
  };

  export type guestScalarWhereWithAggregatesInput = {
    AND?: guestScalarWhereWithAggregatesInput | guestScalarWhereWithAggregatesInput[];
    OR?: guestScalarWhereWithAggregatesInput[];
    NOT?: guestScalarWhereWithAggregatesInput | guestScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'guest'> | string;
    username?: StringWithAggregatesFilter<'guest'> | string;
    email?: StringWithAggregatesFilter<'guest'> | string;
    contact_number?: StringWithAggregatesFilter<'guest'> | string;
    created_at?: DateTimeWithAggregatesFilter<'guest'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'guest'> | Date | string;
  };

  export type marketing_campaignWhereInput = {
    AND?: marketing_campaignWhereInput | marketing_campaignWhereInput[];
    OR?: marketing_campaignWhereInput[];
    NOT?: marketing_campaignWhereInput | marketing_campaignWhereInput[];
    id?: UuidFilter<'marketing_campaign'> | string;
    name?: StringFilter<'marketing_campaign'> | string;
    description?: StringFilter<'marketing_campaign'> | string;
    start_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
    end_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
    business_id?: UuidFilter<'marketing_campaign'> | string;
    created_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
    updated_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
    business?: XOR<BusinessRelationFilter, businessWhereInput>;
  };

  export type marketing_campaignOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business?: businessOrderByWithRelationInput;
  };

  export type marketing_campaignWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: marketing_campaignWhereInput | marketing_campaignWhereInput[];
      OR?: marketing_campaignWhereInput[];
      NOT?: marketing_campaignWhereInput | marketing_campaignWhereInput[];
      name?: StringFilter<'marketing_campaign'> | string;
      description?: StringFilter<'marketing_campaign'> | string;
      start_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
      end_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
      business_id?: UuidFilter<'marketing_campaign'> | string;
      created_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
      updated_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
      business?: XOR<BusinessRelationFilter, businessWhereInput>;
    },
    'id'
  >;

  export type marketing_campaignOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: marketing_campaignCountOrderByAggregateInput;
    _max?: marketing_campaignMaxOrderByAggregateInput;
    _min?: marketing_campaignMinOrderByAggregateInput;
  };

  export type marketing_campaignScalarWhereWithAggregatesInput = {
    AND?: marketing_campaignScalarWhereWithAggregatesInput | marketing_campaignScalarWhereWithAggregatesInput[];
    OR?: marketing_campaignScalarWhereWithAggregatesInput[];
    NOT?: marketing_campaignScalarWhereWithAggregatesInput | marketing_campaignScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'marketing_campaign'> | string;
    name?: StringWithAggregatesFilter<'marketing_campaign'> | string;
    description?: StringWithAggregatesFilter<'marketing_campaign'> | string;
    start_date?: DateTimeWithAggregatesFilter<'marketing_campaign'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'marketing_campaign'> | Date | string;
    business_id?: UuidWithAggregatesFilter<'marketing_campaign'> | string;
    created_at?: DateTimeWithAggregatesFilter<'marketing_campaign'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'marketing_campaign'> | Date | string;
  };

  export type offerWhereInput = {
    AND?: offerWhereInput | offerWhereInput[];
    OR?: offerWhereInput[];
    NOT?: offerWhereInput | offerWhereInput[];
    id?: UuidFilter<'offer'> | string;
    title?: StringFilter<'offer'> | string;
    description?: StringFilter<'offer'> | string;
    start_date?: DateTimeFilter<'offer'> | Date | string;
    end_date?: DateTimeFilter<'offer'> | Date | string;
    business_id?: UuidFilter<'offer'> | string;
    created_at?: DateTimeFilter<'offer'> | Date | string;
    updated_at?: DateTimeFilter<'offer'> | Date | string;
    business?: XOR<BusinessRelationFilter, businessWhereInput>;
  };

  export type offerOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business?: businessOrderByWithRelationInput;
  };

  export type offerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: offerWhereInput | offerWhereInput[];
      OR?: offerWhereInput[];
      NOT?: offerWhereInput | offerWhereInput[];
      title?: StringFilter<'offer'> | string;
      description?: StringFilter<'offer'> | string;
      start_date?: DateTimeFilter<'offer'> | Date | string;
      end_date?: DateTimeFilter<'offer'> | Date | string;
      business_id?: UuidFilter<'offer'> | string;
      created_at?: DateTimeFilter<'offer'> | Date | string;
      updated_at?: DateTimeFilter<'offer'> | Date | string;
      business?: XOR<BusinessRelationFilter, businessWhereInput>;
    },
    'id'
  >;

  export type offerOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: offerCountOrderByAggregateInput;
    _max?: offerMaxOrderByAggregateInput;
    _min?: offerMinOrderByAggregateInput;
  };

  export type offerScalarWhereWithAggregatesInput = {
    AND?: offerScalarWhereWithAggregatesInput | offerScalarWhereWithAggregatesInput[];
    OR?: offerScalarWhereWithAggregatesInput[];
    NOT?: offerScalarWhereWithAggregatesInput | offerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'offer'> | string;
    title?: StringWithAggregatesFilter<'offer'> | string;
    description?: StringWithAggregatesFilter<'offer'> | string;
    start_date?: DateTimeWithAggregatesFilter<'offer'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'offer'> | Date | string;
    business_id?: UuidWithAggregatesFilter<'offer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'offer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'offer'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business?: businessOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      business_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    business_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type businessCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignCreateNestedManyWithoutBusinessInput;
    offer?: offerCreateNestedManyWithoutBusinessInput;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealUncheckedCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignUncheckedCreateNestedManyWithoutBusinessInput;
    offer?: offerUncheckedCreateNestedManyWithoutBusinessInput;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUpdateManyWithoutBusinessNestedInput;
    offer?: offerUpdateManyWithoutBusinessNestedInput;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUncheckedUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUncheckedUpdateManyWithoutBusinessNestedInput;
    offer?: offerUncheckedUpdateManyWithoutBusinessNestedInput;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type businessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dealCreateInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutDealInput;
  };

  export type dealUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutDealNestedInput;
  };

  export type dealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dealCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type guestCreateInput = {
    id?: string;
    username: string;
    email: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type guestUncheckedCreateInput = {
    id?: string;
    username: string;
    email: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type guestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type guestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type guestCreateManyInput = {
    id?: string;
    username: string;
    email: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type guestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type guestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignCreateInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutMarketing_campaignInput;
  };

  export type marketing_campaignUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type marketing_campaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutMarketing_campaignNestedInput;
  };

  export type marketing_campaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type marketing_campaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerCreateInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutOfferInput;
  };

  export type offerUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type offerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutOfferNestedInput;
  };

  export type offerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    business_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type offerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business?: businessCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DealListRelationFilter = {
    every?: dealWhereInput;
    some?: dealWhereInput;
    none?: dealWhereInput;
  };

  export type Marketing_campaignListRelationFilter = {
    every?: marketing_campaignWhereInput;
    some?: marketing_campaignWhereInput;
    none?: marketing_campaignWhereInput;
  };

  export type OfferListRelationFilter = {
    every?: offerWhereInput;
    some?: offerWhereInput;
    none?: offerWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type dealOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type marketing_campaignOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type offerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BusinessRelationFilter = {
    is?: businessWhereInput;
    isNot?: businessWhereInput;
  };

  export type dealCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type dealMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type dealMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type guestCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type guestMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type guestMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    contact_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type marketing_campaignCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type marketing_campaignMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type marketing_campaignMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type offerCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type offerMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type offerMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    business_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type BusinessNullableRelationFilter = {
    is?: businessWhereInput | null;
    isNot?: businessWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type dealCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>
      | dealCreateWithoutBusinessInput[]
      | dealUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: dealCreateOrConnectWithoutBusinessInput | dealCreateOrConnectWithoutBusinessInput[];
    createMany?: dealCreateManyBusinessInputEnvelope;
    connect?: dealWhereUniqueInput | dealWhereUniqueInput[];
  };

  export type marketing_campaignCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>
      | marketing_campaignCreateWithoutBusinessInput[]
      | marketing_campaignUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | marketing_campaignCreateOrConnectWithoutBusinessInput
      | marketing_campaignCreateOrConnectWithoutBusinessInput[];
    createMany?: marketing_campaignCreateManyBusinessInputEnvelope;
    connect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
  };

  export type offerCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>
      | offerCreateWithoutBusinessInput[]
      | offerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: offerCreateOrConnectWithoutBusinessInput | offerCreateOrConnectWithoutBusinessInput[];
    createMany?: offerCreateManyBusinessInputEnvelope;
    connect?: offerWhereUniqueInput | offerWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type dealUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>
      | dealCreateWithoutBusinessInput[]
      | dealUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: dealCreateOrConnectWithoutBusinessInput | dealCreateOrConnectWithoutBusinessInput[];
    createMany?: dealCreateManyBusinessInputEnvelope;
    connect?: dealWhereUniqueInput | dealWhereUniqueInput[];
  };

  export type marketing_campaignUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>
      | marketing_campaignCreateWithoutBusinessInput[]
      | marketing_campaignUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | marketing_campaignCreateOrConnectWithoutBusinessInput
      | marketing_campaignCreateOrConnectWithoutBusinessInput[];
    createMany?: marketing_campaignCreateManyBusinessInputEnvelope;
    connect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
  };

  export type offerUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>
      | offerCreateWithoutBusinessInput[]
      | offerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: offerCreateOrConnectWithoutBusinessInput | offerCreateOrConnectWithoutBusinessInput[];
    createMany?: offerCreateManyBusinessInputEnvelope;
    connect?: offerWhereUniqueInput | offerWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type dealUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>
      | dealCreateWithoutBusinessInput[]
      | dealUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: dealCreateOrConnectWithoutBusinessInput | dealCreateOrConnectWithoutBusinessInput[];
    upsert?: dealUpsertWithWhereUniqueWithoutBusinessInput | dealUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: dealCreateManyBusinessInputEnvelope;
    set?: dealWhereUniqueInput | dealWhereUniqueInput[];
    disconnect?: dealWhereUniqueInput | dealWhereUniqueInput[];
    delete?: dealWhereUniqueInput | dealWhereUniqueInput[];
    connect?: dealWhereUniqueInput | dealWhereUniqueInput[];
    update?: dealUpdateWithWhereUniqueWithoutBusinessInput | dealUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: dealUpdateManyWithWhereWithoutBusinessInput | dealUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: dealScalarWhereInput | dealScalarWhereInput[];
  };

  export type marketing_campaignUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>
      | marketing_campaignCreateWithoutBusinessInput[]
      | marketing_campaignUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | marketing_campaignCreateOrConnectWithoutBusinessInput
      | marketing_campaignCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | marketing_campaignUpsertWithWhereUniqueWithoutBusinessInput
      | marketing_campaignUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: marketing_campaignCreateManyBusinessInputEnvelope;
    set?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    disconnect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    delete?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    connect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    update?:
      | marketing_campaignUpdateWithWhereUniqueWithoutBusinessInput
      | marketing_campaignUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | marketing_campaignUpdateManyWithWhereWithoutBusinessInput
      | marketing_campaignUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: marketing_campaignScalarWhereInput | marketing_campaignScalarWhereInput[];
  };

  export type offerUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>
      | offerCreateWithoutBusinessInput[]
      | offerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: offerCreateOrConnectWithoutBusinessInput | offerCreateOrConnectWithoutBusinessInput[];
    upsert?: offerUpsertWithWhereUniqueWithoutBusinessInput | offerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: offerCreateManyBusinessInputEnvelope;
    set?: offerWhereUniqueInput | offerWhereUniqueInput[];
    disconnect?: offerWhereUniqueInput | offerWhereUniqueInput[];
    delete?: offerWhereUniqueInput | offerWhereUniqueInput[];
    connect?: offerWhereUniqueInput | offerWhereUniqueInput[];
    update?: offerUpdateWithWhereUniqueWithoutBusinessInput | offerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: offerUpdateManyWithWhereWithoutBusinessInput | offerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: offerScalarWhereInput | offerScalarWhereInput[];
  };

  export type userUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type dealUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>
      | dealCreateWithoutBusinessInput[]
      | dealUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: dealCreateOrConnectWithoutBusinessInput | dealCreateOrConnectWithoutBusinessInput[];
    upsert?: dealUpsertWithWhereUniqueWithoutBusinessInput | dealUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: dealCreateManyBusinessInputEnvelope;
    set?: dealWhereUniqueInput | dealWhereUniqueInput[];
    disconnect?: dealWhereUniqueInput | dealWhereUniqueInput[];
    delete?: dealWhereUniqueInput | dealWhereUniqueInput[];
    connect?: dealWhereUniqueInput | dealWhereUniqueInput[];
    update?: dealUpdateWithWhereUniqueWithoutBusinessInput | dealUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: dealUpdateManyWithWhereWithoutBusinessInput | dealUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: dealScalarWhereInput | dealScalarWhereInput[];
  };

  export type marketing_campaignUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>
      | marketing_campaignCreateWithoutBusinessInput[]
      | marketing_campaignUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | marketing_campaignCreateOrConnectWithoutBusinessInput
      | marketing_campaignCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | marketing_campaignUpsertWithWhereUniqueWithoutBusinessInput
      | marketing_campaignUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: marketing_campaignCreateManyBusinessInputEnvelope;
    set?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    disconnect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    delete?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    connect?: marketing_campaignWhereUniqueInput | marketing_campaignWhereUniqueInput[];
    update?:
      | marketing_campaignUpdateWithWhereUniqueWithoutBusinessInput
      | marketing_campaignUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | marketing_campaignUpdateManyWithWhereWithoutBusinessInput
      | marketing_campaignUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: marketing_campaignScalarWhereInput | marketing_campaignScalarWhereInput[];
  };

  export type offerUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>
      | offerCreateWithoutBusinessInput[]
      | offerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: offerCreateOrConnectWithoutBusinessInput | offerCreateOrConnectWithoutBusinessInput[];
    upsert?: offerUpsertWithWhereUniqueWithoutBusinessInput | offerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: offerCreateManyBusinessInputEnvelope;
    set?: offerWhereUniqueInput | offerWhereUniqueInput[];
    disconnect?: offerWhereUniqueInput | offerWhereUniqueInput[];
    delete?: offerWhereUniqueInput | offerWhereUniqueInput[];
    connect?: offerWhereUniqueInput | offerWhereUniqueInput[];
    update?: offerUpdateWithWhereUniqueWithoutBusinessInput | offerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: offerUpdateManyWithWhereWithoutBusinessInput | offerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: offerScalarWhereInput | offerScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type businessCreateNestedOneWithoutDealInput = {
    create?: XOR<businessCreateWithoutDealInput, businessUncheckedCreateWithoutDealInput>;
    connectOrCreate?: businessCreateOrConnectWithoutDealInput;
    connect?: businessWhereUniqueInput;
  };

  export type businessUpdateOneRequiredWithoutDealNestedInput = {
    create?: XOR<businessCreateWithoutDealInput, businessUncheckedCreateWithoutDealInput>;
    connectOrCreate?: businessCreateOrConnectWithoutDealInput;
    upsert?: businessUpsertWithoutDealInput;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutDealInput, businessUpdateWithoutDealInput>,
      businessUncheckedUpdateWithoutDealInput
    >;
  };

  export type businessCreateNestedOneWithoutMarketing_campaignInput = {
    create?: XOR<businessCreateWithoutMarketing_campaignInput, businessUncheckedCreateWithoutMarketing_campaignInput>;
    connectOrCreate?: businessCreateOrConnectWithoutMarketing_campaignInput;
    connect?: businessWhereUniqueInput;
  };

  export type businessUpdateOneRequiredWithoutMarketing_campaignNestedInput = {
    create?: XOR<businessCreateWithoutMarketing_campaignInput, businessUncheckedCreateWithoutMarketing_campaignInput>;
    connectOrCreate?: businessCreateOrConnectWithoutMarketing_campaignInput;
    upsert?: businessUpsertWithoutMarketing_campaignInput;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutMarketing_campaignInput, businessUpdateWithoutMarketing_campaignInput>,
      businessUncheckedUpdateWithoutMarketing_campaignInput
    >;
  };

  export type businessCreateNestedOneWithoutOfferInput = {
    create?: XOR<businessCreateWithoutOfferInput, businessUncheckedCreateWithoutOfferInput>;
    connectOrCreate?: businessCreateOrConnectWithoutOfferInput;
    connect?: businessWhereUniqueInput;
  };

  export type businessUpdateOneRequiredWithoutOfferNestedInput = {
    create?: XOR<businessCreateWithoutOfferInput, businessUncheckedCreateWithoutOfferInput>;
    connectOrCreate?: businessCreateOrConnectWithoutOfferInput;
    upsert?: businessUpsertWithoutOfferInput;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutOfferInput, businessUpdateWithoutOfferInput>,
      businessUncheckedUpdateWithoutOfferInput
    >;
  };

  export type businessCreateNestedOneWithoutUserInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    connect?: businessWhereUniqueInput;
  };

  export type businessUpdateOneWithoutUserNestedInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    upsert?: businessUpsertWithoutUserInput;
    disconnect?: businessWhereInput | boolean;
    delete?: businessWhereInput | boolean;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutUserInput, businessUpdateWithoutUserInput>,
      businessUncheckedUpdateWithoutUserInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type dealCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dealUncheckedCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dealCreateOrConnectWithoutBusinessInput = {
    where: dealWhereUniqueInput;
    create: XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>;
  };

  export type dealCreateManyBusinessInputEnvelope = {
    data: dealCreateManyBusinessInput | dealCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type marketing_campaignCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type marketing_campaignUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type marketing_campaignCreateOrConnectWithoutBusinessInput = {
    where: marketing_campaignWhereUniqueInput;
    create: XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>;
  };

  export type marketing_campaignCreateManyBusinessInputEnvelope = {
    data: marketing_campaignCreateManyBusinessInput | marketing_campaignCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type offerCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type offerUncheckedCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type offerCreateOrConnectWithoutBusinessInput = {
    where: offerWhereUniqueInput;
    create: XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>;
  };

  export type offerCreateManyBusinessInputEnvelope = {
    data: offerCreateManyBusinessInput | offerCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutBusinessInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userCreateManyBusinessInputEnvelope = {
    data: userCreateManyBusinessInput | userCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type dealUpsertWithWhereUniqueWithoutBusinessInput = {
    where: dealWhereUniqueInput;
    update: XOR<dealUpdateWithoutBusinessInput, dealUncheckedUpdateWithoutBusinessInput>;
    create: XOR<dealCreateWithoutBusinessInput, dealUncheckedCreateWithoutBusinessInput>;
  };

  export type dealUpdateWithWhereUniqueWithoutBusinessInput = {
    where: dealWhereUniqueInput;
    data: XOR<dealUpdateWithoutBusinessInput, dealUncheckedUpdateWithoutBusinessInput>;
  };

  export type dealUpdateManyWithWhereWithoutBusinessInput = {
    where: dealScalarWhereInput;
    data: XOR<dealUpdateManyMutationInput, dealUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type dealScalarWhereInput = {
    AND?: dealScalarWhereInput | dealScalarWhereInput[];
    OR?: dealScalarWhereInput[];
    NOT?: dealScalarWhereInput | dealScalarWhereInput[];
    id?: UuidFilter<'deal'> | string;
    title?: StringFilter<'deal'> | string;
    description?: StringFilter<'deal'> | string;
    start_date?: DateTimeFilter<'deal'> | Date | string;
    end_date?: DateTimeFilter<'deal'> | Date | string;
    business_id?: UuidFilter<'deal'> | string;
    created_at?: DateTimeFilter<'deal'> | Date | string;
    updated_at?: DateTimeFilter<'deal'> | Date | string;
  };

  export type marketing_campaignUpsertWithWhereUniqueWithoutBusinessInput = {
    where: marketing_campaignWhereUniqueInput;
    update: XOR<marketing_campaignUpdateWithoutBusinessInput, marketing_campaignUncheckedUpdateWithoutBusinessInput>;
    create: XOR<marketing_campaignCreateWithoutBusinessInput, marketing_campaignUncheckedCreateWithoutBusinessInput>;
  };

  export type marketing_campaignUpdateWithWhereUniqueWithoutBusinessInput = {
    where: marketing_campaignWhereUniqueInput;
    data: XOR<marketing_campaignUpdateWithoutBusinessInput, marketing_campaignUncheckedUpdateWithoutBusinessInput>;
  };

  export type marketing_campaignUpdateManyWithWhereWithoutBusinessInput = {
    where: marketing_campaignScalarWhereInput;
    data: XOR<marketing_campaignUpdateManyMutationInput, marketing_campaignUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type marketing_campaignScalarWhereInput = {
    AND?: marketing_campaignScalarWhereInput | marketing_campaignScalarWhereInput[];
    OR?: marketing_campaignScalarWhereInput[];
    NOT?: marketing_campaignScalarWhereInput | marketing_campaignScalarWhereInput[];
    id?: UuidFilter<'marketing_campaign'> | string;
    name?: StringFilter<'marketing_campaign'> | string;
    description?: StringFilter<'marketing_campaign'> | string;
    start_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
    end_date?: DateTimeFilter<'marketing_campaign'> | Date | string;
    business_id?: UuidFilter<'marketing_campaign'> | string;
    created_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
    updated_at?: DateTimeFilter<'marketing_campaign'> | Date | string;
  };

  export type offerUpsertWithWhereUniqueWithoutBusinessInput = {
    where: offerWhereUniqueInput;
    update: XOR<offerUpdateWithoutBusinessInput, offerUncheckedUpdateWithoutBusinessInput>;
    create: XOR<offerCreateWithoutBusinessInput, offerUncheckedCreateWithoutBusinessInput>;
  };

  export type offerUpdateWithWhereUniqueWithoutBusinessInput = {
    where: offerWhereUniqueInput;
    data: XOR<offerUpdateWithoutBusinessInput, offerUncheckedUpdateWithoutBusinessInput>;
  };

  export type offerUpdateManyWithWhereWithoutBusinessInput = {
    where: offerScalarWhereInput;
    data: XOR<offerUpdateManyMutationInput, offerUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type offerScalarWhereInput = {
    AND?: offerScalarWhereInput | offerScalarWhereInput[];
    OR?: offerScalarWhereInput[];
    NOT?: offerScalarWhereInput | offerScalarWhereInput[];
    id?: UuidFilter<'offer'> | string;
    title?: StringFilter<'offer'> | string;
    description?: StringFilter<'offer'> | string;
    start_date?: DateTimeFilter<'offer'> | Date | string;
    end_date?: DateTimeFilter<'offer'> | Date | string;
    business_id?: UuidFilter<'offer'> | string;
    created_at?: DateTimeFilter<'offer'> | Date | string;
    updated_at?: DateTimeFilter<'offer'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userUpdateWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
  };

  export type userUpdateManyWithWhereWithoutBusinessInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type businessCreateWithoutDealInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    marketing_campaign?: marketing_campaignCreateNestedManyWithoutBusinessInput;
    offer?: offerCreateNestedManyWithoutBusinessInput;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutDealInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    marketing_campaign?: marketing_campaignUncheckedCreateNestedManyWithoutBusinessInput;
    offer?: offerUncheckedCreateNestedManyWithoutBusinessInput;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutDealInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutDealInput, businessUncheckedCreateWithoutDealInput>;
  };

  export type businessUpsertWithoutDealInput = {
    update: XOR<businessUpdateWithoutDealInput, businessUncheckedUpdateWithoutDealInput>;
    create: XOR<businessCreateWithoutDealInput, businessUncheckedCreateWithoutDealInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutDealInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutDealInput, businessUncheckedUpdateWithoutDealInput>;
  };

  export type businessUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    marketing_campaign?: marketing_campaignUpdateManyWithoutBusinessNestedInput;
    offer?: offerUpdateManyWithoutBusinessNestedInput;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    marketing_campaign?: marketing_campaignUncheckedUpdateManyWithoutBusinessNestedInput;
    offer?: offerUncheckedUpdateManyWithoutBusinessNestedInput;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateWithoutMarketing_campaignInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealCreateNestedManyWithoutBusinessInput;
    offer?: offerCreateNestedManyWithoutBusinessInput;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutMarketing_campaignInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealUncheckedCreateNestedManyWithoutBusinessInput;
    offer?: offerUncheckedCreateNestedManyWithoutBusinessInput;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutMarketing_campaignInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutMarketing_campaignInput, businessUncheckedCreateWithoutMarketing_campaignInput>;
  };

  export type businessUpsertWithoutMarketing_campaignInput = {
    update: XOR<businessUpdateWithoutMarketing_campaignInput, businessUncheckedUpdateWithoutMarketing_campaignInput>;
    create: XOR<businessCreateWithoutMarketing_campaignInput, businessUncheckedCreateWithoutMarketing_campaignInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutMarketing_campaignInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutMarketing_campaignInput, businessUncheckedUpdateWithoutMarketing_campaignInput>;
  };

  export type businessUpdateWithoutMarketing_campaignInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUpdateManyWithoutBusinessNestedInput;
    offer?: offerUpdateManyWithoutBusinessNestedInput;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutMarketing_campaignInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUncheckedUpdateManyWithoutBusinessNestedInput;
    offer?: offerUncheckedUpdateManyWithoutBusinessNestedInput;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateWithoutOfferInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignCreateNestedManyWithoutBusinessInput;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutOfferInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealUncheckedCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignUncheckedCreateNestedManyWithoutBusinessInput;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutOfferInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutOfferInput, businessUncheckedCreateWithoutOfferInput>;
  };

  export type businessUpsertWithoutOfferInput = {
    update: XOR<businessUpdateWithoutOfferInput, businessUncheckedUpdateWithoutOfferInput>;
    create: XOR<businessCreateWithoutOfferInput, businessUncheckedCreateWithoutOfferInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutOfferInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutOfferInput, businessUncheckedUpdateWithoutOfferInput>;
  };

  export type businessUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUpdateManyWithoutBusinessNestedInput;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUncheckedUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUncheckedUpdateManyWithoutBusinessNestedInput;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignCreateNestedManyWithoutBusinessInput;
    offer?: offerCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    contact_number?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deal?: dealUncheckedCreateNestedManyWithoutBusinessInput;
    marketing_campaign?: marketing_campaignUncheckedCreateNestedManyWithoutBusinessInput;
    offer?: offerUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutUserInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
  };

  export type businessUpsertWithoutUserInput = {
    update: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutUserInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
  };

  export type businessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUpdateManyWithoutBusinessNestedInput;
    offer?: offerUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: dealUncheckedUpdateManyWithoutBusinessNestedInput;
    marketing_campaign?: marketing_campaignUncheckedUpdateManyWithoutBusinessNestedInput;
    offer?: offerUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type dealCreateManyBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type marketing_campaignCreateManyBusinessInput = {
    id?: string;
    name: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type offerCreateManyBusinessInput = {
    id?: string;
    title: string;
    description: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dealUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dealUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dealUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type marketing_campaignUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type offerUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
   */
  export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use businessDefaultArgs instead
   */
  export type businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    businessDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use dealDefaultArgs instead
   */
  export type dealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dealDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use guestDefaultArgs instead
   */
  export type guestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = guestDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use marketing_campaignDefaultArgs instead
   */
  export type marketing_campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    marketing_campaignDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use offerDefaultArgs instead
   */
  export type offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = offerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
