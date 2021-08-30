# customMarked
Some extra custom styling for markdown. Example use `§` chat colors. You can use `:<emoji>:` for custom icons (powered by font awesome!).
## Table of Contents
- [Dependencies](#dependencies)
- [Syntax](#syntax)
- [Example](#example)
---

## Dependencies
- [Font Awsome](dependencies.md#font-awsome)
## Syntax
```typescript
customMarked(text: String, key?: String, value?: String): String
```
- `text` - 
- `key` - 
- `value` - 
## Example
```js
customMarked('§0Black test §fwhite text')
customMarked('§0Black test §fwhite text', 'white', 'red')
customMarked('§0Black test §fwhite text', {'white': '#ff0000','black': '#0000ff'})
```
[Back to top](#)