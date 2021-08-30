### modalWindow
The function to create and open the modal window.
#### Syntax
```typescript
modelWindow(modalID: String, type: String, input: JSON): void
```

- `modalID` - The id of the modal
- `type` - The type of input to read, only supports `json`
- `input` - The [JSON data](#modal-json-syntax) to create the window
#### Example
```js
var obj = {
    title: {
        text: "Welcome!",
        header: 1
    }
    theme: 'light',
    body: [
        {
            text: 'Welcome to modalWindow.js! You can use modalWindow.js to quickly and easily create custom Modal Windows!'
        }
    ]
}
modalWindow('welcome','json', obj)
```