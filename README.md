# payu-types

Automatically generated TypeScript types for PayU APIs.

Check docs on how to use it [here](https://www.npmjs.com/package/openapi-typescript/v/6.3.7).

PayU official documentation can be found [here](https://developers.payu.com/europe/pl/api).

```
npm install -D @oko-press/payu-types
# or
yarn add -D @oko-press/payu-types
```

## Example usage


## Openapi generated types

You need to extract types from the generated types like this:

```ts
import type { components, paths } from "@oko-press/payu-types";

type ClientCredentials = components["schemas"]["ClientCredentials"];
type CreateOrder = NonNullable<
  paths["/api/v2_1/orders"]["post"]["requestBody"]
>["content"]["application/json"];
type CreateOrderResponse = NonNullable<
  paths["/api/v2_1/orders"]["post"]["responses"]["201"]["content"]["application/json"]
>;
```

## Custom types

You can also import some custom types.

### Callback

This is what comes in the body of PayU callback requests.

```ts
import type { CallbackResponseBody } from "@oko-press/payu-types";
```
