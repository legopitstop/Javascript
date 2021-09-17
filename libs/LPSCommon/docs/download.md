# download
Will add a href that will download the contents of the target.
## Table of Contents
- [Syntax](#syntax)
- [Example](#example)
---

## Syntax
```typescript
download(btnID: String, targetID: String, fileName: String): void
```
- `btnID` - The button ID.
- `targetID` - The target's value to get.
- `fileName` - The filename. (includes the file extension)
## Example
```html
<textarea id="target">Some text</textarea>
<a id="btn">Download</a>
```
```js
download('btn','target','download.txt')
```
[Back to top](#)