
## What are some differences between interfaces and types in TypeScript?

TypeScript is a superset of JavaScript. It's gained popularity in the developer community for its typing system. In TypeScript, Interfaces and types serve to define the shape of objects, but they have key differences.

But how do we choose between them? It depends in some cases, one has a clear advantage over the other, but in many cases, they are interchangeable.

### TypeScript Type :
"type" is a keyword in TypeScript that we can use to define the shape of data. TypeScript Types are defined data types for variables, which include built-in types, user-defined types and additional features such as type aliases.
### TypeScript interface :
TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.

### Key Differences Between Types and Interfaces :
#### **Primitive types :**
One key difference between types and interfaces is their handling of primitive types. Types can be employed with primitive types like type string, whereas interfaces can’t be used with primitive types.

It’s only possible to alias a primitive value using types, making them the recommended choice for defining primitive types.

#### **Union and intersection types :**
Another distinction between types and interfaces lies in their handling of union and intersection types. Union types can only be declared using the type keyword, while the interface keyword isn’t applicable in this context.

#### **Function and tuple types :**
Both types and interfaces can delineate function types, but types are favored for legibility and advanced capabilities, such as conditional and union types. Tuple types can only be delineated using the type keyword.


## What is the use of the key of keyword in TypeScript? Provide an example.

In JavaScript, we often use **`Object.keys`** to get a list of property keys. In the TypeScript world, the equivalent concept is the **`keyof`** operator. Although they are similar, **`keyof`** only works on the type level and returns a literal union type, while **`Object.keys`** returns values.

#### The keyof operator takes an object type and produces a string or numeric literal union of its keys.

```
type user = {
 name: string;
 phoneNumber: number;
} 
type userKey= keyof user; // "name" | "phoneNumber"

```

In this example, We apply the **`keyof`** operator to the **``user``** type, and we get a **`userKey`** type in return, which represents all the property names. The result is a union of string literal types: **`"name" | "phoneNumber"`**

In this example **`keyof`** operator is used for an object type. It can also be used for non-object types, including primitive types. Below are a few examples:

```
type BooleanKeys = keyof boolean; // "valueOf"

type NumberKeys = keyof number; // "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"

```

