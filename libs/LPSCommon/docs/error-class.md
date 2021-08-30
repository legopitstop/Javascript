# errorClass
Add or remove element `error` from elemnt.
## Table of Contents
- [Dependencies](#dependencies)
- [Syntax](#syntax)
- [Example](#example)
---

## Dependencies
- [jquery](dependencies.md#jquery)
## Syntax
```typescript
errorClass(selector: String, action: String): Boolean
```
- `selector` - 
- `action` - 
## Example
```js
errorClass('.elm', 'add')
// Returns true and adds class 'error' to element

errorClass('.elm', 'remove')
// Returns false and removes class 'error' from element
```
[Back to top](#)