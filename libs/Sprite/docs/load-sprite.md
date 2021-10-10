# loadSprite
Will place a sprite image from a sprite sheet using a JSON that contains all the required values.
## Table of Contents
- [Syntax](#syntax)
- [Example](#example)
---

## Syntax
```typescript
loadSprite(id: string, selector: string): void
```
- `id` - The id of the texture that you want to render.
- `selector` - The query selector to append the sprite to.

[Back to top](#)
## Example
### HTML
```html
<link href="./sprites.json" rel="spritesheet">
```
### JSON
```json
{
    "$schema": "https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/Sprite/schema.json",
    "file": "./assets/spritesheet.png",
    "width": 32,
    "height": 32,
    "textures": {
        "sprite": [1,1],
        "sprite2": [2,1]
    }
}
```
### JAVASCRIPT
This will append inside the element with the id `sprites`
```js
loadSprite("sprite", "#sprites")
```
[Back to top](#)