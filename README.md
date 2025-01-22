# TypeScript-Notes

Here's a detailed explanation of **Basic Syntax and Types** in TypeScript:

### 1. **Basic Types**

#### **Primitive Types**
In TypeScript, basic types are similar to JavaScript, but with added type annotations. Here are the most common basic types:

- **`number`**: Represents numeric values, both integers and floating-point numbers.
  ```typescript
  let age: number = 25;
  let price: number = 99.99;
  ```

- **`string`**: Represents text data (a sequence of characters).
  ```typescript
  let name: string = "John";
  let message: string = `Hello, ${name}!`;
  ```

- **`boolean`**: Represents true/false values.
  ```typescript
  let isValid: boolean = true;
  let isLoggedIn: boolean = false;
  ```

- **`null`** and **`undefined`**: These are specific values representing the absence of a value. 
  ```typescript
  let n: null = null;
  let u: undefined = undefined;
  ```

- **`any`**: Represents any type of value. Use this type when you don’t know what the value will be (though it's best to avoid overusing it as it defeats TypeScript's strict type system).
  ```typescript
  let value: any = 5;
  value = "A string";
  value = true;
  ```

- **`void`**: Typically used for functions that don't return a value.
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

### 2. **Arrays and Tuples**

#### **Arrays**
You can define arrays in TypeScript by specifying the type of elements inside the array. There are two ways to do this:
- **Type followed by square brackets**:
  ```typescript
  let numbers: number[] = [1, 2, 3, 4];
  let strings: string[] = ["apple", "banana", "cherry"];
  ```
  
- **Generic Array type**:
  ```typescript
  let booleans: Array<boolean> = [true, false, true];
  ```

#### **Tuples**
Tuples are used when you need an array with a specific number of elements where each element may have a different type.
  ```typescript
  let person: [string, number, boolean] = ["Alice", 30, true];
  ```

In the above example, `person` is a tuple with three elements: a string, a number, and a boolean, in that order.

### 3. **Union Types**

Union types allow a variable to hold more than one type. This is useful when a value could be of multiple types.

Example:
```typescript
let id: number | string;
id = 101;    // valid
id = "A101"; // also valid
```

In this case, `id` can either be a `number` or a `string`.

### 4. **Enums**

Enums allow us to define a set of named constants, which can make our code more readable. By default, TypeScript assigns numeric values to each member starting from 0, but you can also customize these values.

#### **Numeric Enums** (default):
```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
```

#### **String Enums**:
```typescript
enum Status {
  Success = "SUCCESS",
  Fail = "FAIL",
  Pending = "PENDING"
}

let result: Status = Status.Success;
```

String enums are often preferred because they are more readable in debugging and logs.

### 5. **Type Aliases**

Type aliases allow you to create custom types with a meaningful name. This is helpful for simplifying complex types or improving code readability.

```typescript
type ID = number | string;

let userId: ID = 123;
userId = "ABC123";  // Both are valid because ID is a union of number and string
```

In this case, `ID` is a custom type that can be either a `number` or a `string`. You can create more complex type aliases as well:

```typescript
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
```

### 6. **Interfaces**

Interfaces define the shape or structure of an object. They are similar to type aliases but are typically used to describe objects and can be extended or implemented by classes.

Example:
```typescript
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

let user: User = {
  name: "John",
  age: 25,
  isAdmin: true
};
```

Interfaces can also extend other interfaces:
```typescript
interface Employee extends User {
  employeeId: number;
}

let employee: Employee = {
  name: "Alice",
  age: 30,
  isAdmin: false,
  employeeId: 12345
};
```

### 7. **Type Inference**

TypeScript is capable of automatically inferring types based on how variables are initialized. For example, if you declare a variable with a string value, TypeScript will automatically infer its type as `string` without you needing to specify it.

```typescript
let greeting = "Hello, World!"; // Inferred as string
let count = 42;                // Inferred as number

// If you try to assign a different type, you'll get an error
greeting = 123;  // Error: Type 'number' is not assignable to type 'string'
```

Type inference reduces the need for explicit type annotations in many cases, which can make the code cleaner and more concise.


