# Javascript Functions
This repo contains a few useful functions, below you can find how to install and the features of each function.

# LPSCommon
This contains many small, but useful functions. Note that this function does use some Jquery functions
## Install
Install [LPSCommon.js](https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/LPSCommon/1.0.0/)
```html
<!--Jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/LPSCommon/1.0.0/script.js"></script>
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

### clearElement();
Clears all contents of the element.
#### Syntax
- confirm0 When true it will ask the user if they want to clear it.
- element The querySelector to use.
```ts
clearElement(confirm0: boolean, element: string): void;
```

### copyElement();
Copy the contents of the element to the users clipboard.
#### Syntax
- element The querySelector to use.
```ts
copyElement(element: string): void;
```

### cutElement();
Cut the contents of the element.
#### Syntax
- element The querySelector to use.
```ts
cutElement(element: string): void;
```

### pressKey();
Returns the button that the user pressed.
#### Syntax
- event The element to check
```ts
pressKey(event: string): void;
```

### parseURLParams();
Returns the form output from the URL.
#### Syntax
- The url to grab the form output from
```ts
parseURLParams(url: string): void;
```

### returnConsole();
Simply sends the function that is ran to the console. (may get removed, as it is redundant).
#### Syntax
- The function to grab the result from.
```ts
returnConsole(event: string): void;
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

### errorClass();
It will add the class `error` to the element, You can then use CSS to add custom formatting to the element that has the error.
#### Syntax
- element The querySelector to use.
- action The action to use. `add` or `remove`
```ts
errorClass(element: string, action: enum ): void;
```

### disableElement();
Disables the element. (for input element).
#### Syntax
- element The querySelector to use.
```ts
disableElement(selector: string): void;
```

### enableElement();
Enables the element. (for input element).
#### Syntax
- element The querySelector to use.
```ts
enableElement(selector: string): void;
```

### openURL();
Opens the url in a new tab.
#### Syntax
- element The querySelector to use.
```ts
openURL(selector: string): void;
```

### hideElement();
Hides the element.
#### Syntax
- element The querySelector to use.
```ts
hideElement(selector: string): void;
```

### showElement();
Shows the element that is hidden.
#### Syntax
- element The querySelector to use.
```ts
showElement(selector: string): void;
```

### sendError();
Sends an error to console and to alert.
#### Syntax
- errorMessage The message to use for the error.
```ts
sendError(errorMessage: string): void;
```


# modalWindow
This contains a function that allows you to easily create a custom modal window. read more here https://www.w3schools.com/howto/howto_css_modals.asp. Note that this function does use some Jquery functions. More features are planned.
## Install
Install [modalWindow.js](https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/modalWindow/1.0.0/)
```html
<!--Jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<!--Modal Window-->
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/modalWindow/1.0.0/style.css" />
<script src="https://raw.githubusercontent.com/legopitstop/Javascript/main/libs/modalWindow/1.0.0/script.js"></script>
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
                'width': '100%',
                'height': '50%',
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
modalWindow('viewjson','json',options)
```
**Result:**

![Not Added]()

### closeModal();
Used to close the current modal window, used inside modalWindow function
#### Syntax
```ts
closeModal(): void;
```