# loadSprite
Will place a sprite image from a sprite sheet using a JSON that contains all the required values.
## Table of Contents
- [Syntax](#syntax)
- [Example](#example)

---
## Syntax
```typescript
loadSprite(id: String, selector: String, s: JSON): String | false
```
- `id` The id to search for.
- `selector` The query selector to apply the sprite to.
- `s` The spritesheet JSON to search for the id in.

[Back to top](#)
## Example
### HTML
```html
<script src="https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/Sprite/sprite.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/Sprite/sprite.css">
<div id="sprites"></div>
```
### JAVASCRIPT
This will append inside the element with the id `sprites`
```js
var spritesheet = {
    "$schema": "https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/Sprite/schema.json",
    "file": "./assets/spritesheet.png",
    "width": 32,
    "height": 32,
    "textures": {
        "sprite": [1, 1],
        "sprite2": [2, 1]
    }
}
loadSprite("sprite", "#sprites", spritesheet)
```
[Back to top](#)