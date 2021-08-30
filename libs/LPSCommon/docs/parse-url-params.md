# parseURLParams
Grabs data from the URL and converts it to JSON.
## Table of Contents
- [Syntax](#syntax)
- [Example](#example)
---

## Syntax
```typescript
parseURLParams(url: String): JSON
```
- `url` - 
## Example
text in address bar: `https://example.com?text=This%20is%20text&theme=dark`
```js
parseURLParams(location.search)
// returns {"text":["This is text"],"theme":["dark"]}
```
[Back to top](#)