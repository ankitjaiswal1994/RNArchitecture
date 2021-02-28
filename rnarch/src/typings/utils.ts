/**
 * Omits properties from a type
 * @template T Object
 * @template K Union of T keys
 */
export type Omit<T, U> = T extends any ? Pick<T, Exclude<keyof T, U>> : never;

/**
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.
 *
 * @template FirstType - The first type
 * @template SecondType - The second type
 */
export type Merge<FirstType, SecondType> = Omit<FirstType, keyof SecondType> &
  SecondType;

/**
 * Changes a type's properties to all be mutable
 * @template T - Class, type, or interface to make mutable
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Converts a class (or other object types) to a normal TS type.
 *
 * This is useful for utilizing Nest DTOs and Typegoose classes in frontend
 * code. The resulting type should not be compiled, whereas classes would.
 * @template T - Class to convert
 */
export type ClassToType<T> = Mutable<{ [P in keyof T]: T[P] }>;

/**
 * Makes all of properties of a type definition required except for the
 * properties specified that are optional
 *
 * @template T - Class, type, or interface
 * @template K - Property names to make partial
 */
export type RequiredWithPartial<T, K extends keyof T> = Required<
  Pick<T, Exclude<keyof T, K>>
> &
  Partial<Pick<T, Extract<keyof T, K>>>;

/**
 * Makes all of properties of a type definition optional except for the
 * properties specified that are required
 *
 * @template T - Class, type, or interface
 * @template K - Property names to make required
 */
export type PartialWithRequired<T, K extends keyof T> = Partial<
  Pick<T, Exclude<keyof T, K>>
> &
  Required<Pick<T, Extract<keyof T, K>>>;

/**
 * Allows overriding the return type of a function type
 *
 * @template Fn - Function type to override
 * @template R - The new return type
 */
export type OverrideReturn<Fn, R> = Fn extends (...a: infer A) => any
  ? (...a: A) => R
  : never;

/**
 * Dynamically adds a field to an object type
 *
 * @template FieldName - Name of the field to add
 * @template ValueType - The value type that the field supports
 *
 * @example
 * type User = { id: number, name: string };
 * type UserWithAge = Merge<User, DynamicField<"age", number>>;
 *
 * @example
 * function addField<Document, FieldName extends string, FieldValue>(
 *   document: Document,
 *   field: FieldName,
 *   value: FieldValue
 * ): Merge<Document, DynamicField<FieldName, FieldValue>> {
 *   return { ...document, [field]: value };
 * }
 *
 * const user: User = { id: 1, name: "Sam" };
 *
 * addField(user, "age", 1); // Produces Merge<User, { age: number }>
 * addField(user, "address", "123 Sesame St") // Produces Merge<User, { address: string }>
 */
export type DynamicField<FieldName extends string, ValueType> = {
  [f in FieldName]: ValueType;
};

/**
 * Make a type and all of its sub-properties optional
 *
 * @template T - The type to apply Partial deeply to
 */
export type DeepPartial<T> = T extends any[]
  ? DeepPartialArray<T[number]>
  : T extends object
  ? DeepPartialObject<T>
  : T;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

type DeepPartialObject<T> = { [P in keyof T]+?: DeepPartial<T[P]> };

/**
 * Matches standard JS falsey values
 */
export type FalseyValue = undefined | null | false;

/**
 * Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
export type Primitive = null | undefined | string | number | boolean | symbol;

/**
  Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.
  Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus,
  when such type is used in an IDE with autocompletion,
  no suggestions are made for the declared literals.
  This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.
  @example
  ```
  // Before
  type Pet = 'dog' | 'cat' | string;
  const pet: Pet = '';
  // Start typing in your TypeScript-enabled IDE.
  // You **will not** get auto-completion for `dog` and `cat` literals.
  // After
  type Pet2 = LiteralUnion<'dog' | 'cat', string>;
  const pet: Pet2 = '';
  // You **will** get auto-completion for `dog` and `cat` literals.
  ```
   */
export type LiteralUnion<
  LiteralType extends BaseType,
  BaseType extends Primitive
> = LiteralType | (BaseType & { _?: never });

/**
 * Allows optional values inside Record
 * useful when having a stirng union and want to have optional values for that union
 * @example
 * ```
 * PartialRecord<'a' | 'b' 'c', any>;
 *
   ```
 */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type PressEvent = (...args: any) => void;
