# Javascript Functions
This repo contains a few useful functions, below you can find how to install and the features of each function.

# LPSCommon
This contains many small, but useful functions. Note that this function does use some Jquery functions
## Install
Install [LPSCommon.js](https://github.com/legopitstop/Javascript/tree/main/libs/LPSCommon/1.0.0)
```html
<!--Jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/LPSCommon/1.0.0/LPSCommon.js"></script>
```

## Functions
### isRequired();
Any element with the `required` property will use this function, If the input is empty it will make the border red.
#### Syntax
```ts
isRequired(): void;
```

### rng();
Returns a random number using the minium and maxium numbers given.
#### Syntax
- min The minium number to except.
- max The maxium number to except.
```ts
rng(min: number, max: number): void;
```
#### Example
JAVASCRIPT
```js
rng(100, 999)
// result: 356
```

### clearElement();
Clears all contents of the element.
#### Syntax
- confirm0 When true it will ask the user if they want to clear it.
- element The querySelector to use.
```ts
clearElement(confirm0: boolean, element: string): void;
```
#### Example
HTML
```html
<textarea class="input">Hello World</textarea>
```
JAVASCRIPT
```js
clearElement(false, '.input')
// result: removes all the innerHTML in the element with the class `input`
```

### copyElement();
Copy the contents of the element to the users clipboard.
#### Syntax
- element The querySelector to use.
```ts
copyElement(element: string): void;
```
#### Example
HTML
```html
<textarea class="copy">Hello World</textarea>
```
JAVASCRIPT
```js
copyElement('.copy')
// result: Copies 'Hello World'
```

### cutElement();
Cut the contents of the element.
#### Syntax
- element The querySelector to use.
```ts
cutElement(element: string): void;
```
#### Example
HTML
```html
<textarea class="cut">Hello World</textarea>
```
JAVASCRIPT
```js
cutElement('.cut')
// result: copies "Hello World", then removes it.
```

### pressKey();
Returns the button that the user pressed.
#### Syntax
- event The element to check
```ts
pressKey(event: string): void;
```
#### Example
HTML
```html
<button class="click">Click ME!</button>
```
JAVASCRIPT
```js
pressKey('.click')
// result: returns the button that the user pressed.
```

### parseURLParams();
Returns the form output from the URL.
#### Syntax
- The url to grab the form output from
```ts
parseURLParams(url: string): void;
```
#### Example
ADDRESS BAR
```
https://example.com/index.html?text=Hello%20World&type=text
```
JAVASCRIPT
```js
parseURLParams(window.location.href)
// result: {"text":["Hello World"],"type": ["text"]}
```

### returnConsole();
Simply sends the function that is ran to the console. (may get removed, as it is redundant).
#### Syntax
- The function to grab the result from.
```ts
returnConsole(event: string): void;
```
#### Example
JAVASCRIPT
```js
returnConsole( 10/2+1)
// console result: 6
```

### MinMaxValue();
If the value is not within the minium and maxium number it will send an error via console.
#### Syntax
- value The number to check if it is between the min and max.
- min The minium allowed number.
- max The maxium allowed number.
```ts
MinMaxValue(value: number, min: number, max: number): void;
```
#### Example
JAVASCRIPT
```js
MinMaxValue(5, 0, 1)
// result: false
// console: Value must be less than 1

MinMaxValue(5, 0, 10)
// result: true
```

### errorClass();
It will add the class `error` to the element, You can then use CSS to add custom formatting to the element that has the error.
#### Syntax
- element The querySelector to use.
- action The action to use. `add` or `remove`
```ts
errorClass(element: string, action: enum ): void;
```
#### Example
HTML
```html
<textarea class="foo">Hello</textarea>
<textarea class="bar error">World</textarea>
```
JAVASCRIPT
```js
errorClass('.foo', 'add')
// result: adds 'error' to class list
// new html: <textarea class="foo error">Hello</textarea>

errorClass('.bar','remove')
// result: removes the 'error' from class lists
// new html: <textarea class="bar">World</textarea>
```

### disableElement(); & enableElement();
Disables or enables the element. (for input element).
#### Syntax
- element The querySelector to use.
```ts
disableElement(selector: string): void;
enableElement(selector: string): void;
```
#### Example
HTML
```html
<input type="text" class="foo"/>
<input type="number" class="bar" disabled/>
```
JAVASCRIPT
```js
disableElement('.foo')
// new html: <input type="text" class="foo" disabled/>
enabledElement('.bar')
// new html: <input type="number" class="bar">
```

### openURL();
Opens the url in a new tab.
#### Syntax
- element The querySelector to use.
```ts
openURL(selector: string): void;
```
#### Example
HTML
```html
<p class="foo">https://google.com</p>
```
JAVASCRIPT
```js
openURl('.foo')
// result: Will open a new tab to "https://google.com" 
```

### hideElement(); & showElement();
Hides or Shows the element.
#### Syntax
- element The querySelector to use.
```ts
hideElement(selector: string): void;
showElement(selector: string): void;
```
#### Example
HTML
```html
<p style="display: block;" class="foo">Hello</p>
<p style="display: none;" class="bar">World</p>
```
JAVASCRIPT
```js
hideElement('.foo')
// html result: <p style="display: none;" class="foo">Hello</p>
showElement('.bar')
// html result: <p style="display: block;" class="bar">World</p>
```

### sendError();
Sends an error to console and to alert.
#### Syntax
- errorMessage The message to use for the error.
```ts
sendError(errorMessage: string): void;
```
#### Example
JAVASCRIPT
```js
sendError('Something went wrong!')
// result: alert message "Error: Something went wrong!"
// console: "Error: Something went wrong!"
```


# modalWindow
This contains a function that allows you to easily create a custom modal window. read more here https://www.w3schools.com/howto/howto_css_modals.asp. Note that this function does use some Jquery functions. More features are planned.
## Install
Install [modalWindow.js](https://github.com/legopitstop/Javascript/tree/main/libs/modalWindow/1.0.0)
```html
<!--Jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<!--LPSCommon-->
<script src="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/LPSCommon/1.0.0/LPSCommon.js"></script>
<!--Modal Window-->
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/modalWindow/1.0.0/modalWindow.css" />
<script src="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/modalWindow/1.0.0/modalWindow.js"></script>
```

## Functions
### modalWindow();
#### Javascript Syntax
- modalID The id of the modal
- type How to interprit the input. Only excepts 'json'
- input The json to use
```ts
modalWindow(modalID: string, type: enum, input: object): void;
```
#### JSON Syntax
```
theme: {dark, light} 
title:
    text: {String}
    header: {Integer [1-6]} 
    color: {String}
    font: {String}
    bold: {Boolean} default: false
    italic: {Boolean} default: false
    underlined: {Boolean} default: false
    strikethrough: {Boolean} default: false
    align: {String} default: false

body: {Array}
    text: {String}
    header: {Integer [1-6]} 
    color: {String}
    font: {String}
    bold: {Boolean} default: false
    italic: {Boolean} default: false
    underlined: {Boolean} default: false
    strikethrough: {Boolean} default: false
    align: {String} default: false
    style: {Enum [button]}
    embed: {String}
    input:
        id: {String} default: random number
        type: {String}
        examples: {String}

    codeblock:
        id: {String}
        width: {Integer|string}
        height: {Integer|string}
        readonly: {Boolean}
        extension: {String} when 'text/json' it will use JSON
        code:
            type: {contents, ref, selector}
            pretty_print: {Boolean}
            value: {String}

    <--Experimetal-->
    clickEvent:
        action: {open_url, copy_to_clipboard, run_function}
        value: {String}
    changeEvent:
        action: {open_url, copy_to_clipboard, run_function}
        value: {String}
    hoverEvent:
        action: {open_url, copy_to_clipboard, run_function}
        value: {String}

```
#### Example
```js
var options = {
        'theme': 'dark',
        'title': {
            'text': 'View JSON',
            'header': 1
        },
        'body': [
            {
                'text': 'View the discord message.'
            },
            {
                'text': ' ',
                'codeblock': {
                    'width': '50%',
                    'height': '33ch',
                    'readonly': true,
                    'extension': 'text/json',
                    'code': {
                        'type': 'contents',
                        'pretty_print': true,
                        'value': {
                            "content": "This is the message that shows up in discord!",
                            "embeds": [
                                {
                                    "title": "Embed title",
                                    "description": "This is a description for embed.",
                                    "author": "Your Mom",
                                    "fields": [
                                        {
                                            "name": "What is a field?",
                                            "value": "IDK?"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            }
        ]
    }
    modalWindow('viewjson', 'json', options)
```
**Result:**

![Missing](https://github.com/legopitstop/Javascript/blob/main/assets/example_modal.png?raw=true "Example Modal")

### closeModal();
Used to close the current modal window, used inside modalWindow function
#### Syntax
```ts
closeModal(): void;
```