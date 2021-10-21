### rawjson
The function will convert the RAW JSON to HTML
#### Syntax
```typescript
rawjson(json: JSON): JSON
```

- `json` - The RAW JSON text to convert to html
#### Example
```js
var json = [
    {
        text: "Click Me!",
        color: "blue",
        underlined: true,
        hoverEvent: {
            action: "show_text",
            value: "Click to copy value"
        },
        clickEvent: {
            action: "copy_to_clipboard",
            value: "Hello World!!"
        }
    }
]
rawjson(json)
```