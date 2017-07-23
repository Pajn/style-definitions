This library provides definitions for commonly used css patterns as plain js objects
that can be used with css-in-js solutions such as glamorous.
Typescript definitions is included.

## Example
```typescript
import glamorous from 'glamorous'
import {row} from 'style-definitions'

const IconRow = glamorous.div({
  ...row({
    vertical: 'center',
    horizontal: 'center',
  }),

  padding: 16,
})
```


