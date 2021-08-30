# copyElementSelector copyElementId
Copies the elements contents to the clipboard.
## Table of Contents
- [Dependencies](#dependencies)
- [Syntax](#syntax)
- [Example](#example)
---

## Dependencies
- [jquery](dependencies.md#jquery)
## Syntax
```typescript
copyElementSelector(selector: String): Boolean
copyElementId(id: String): Boolean
```
- `selector` - 
- `id` - 
## Example
```html
<button onclick="copyElementSelector('.output')">Copy Text</button>
<textarea class="output">Hello World!<textarea>

<button onclick="copyElementId('output')">Copy Text</button>
<textarea id="output">Hello World!<textarea>
```
[Back to top](#)