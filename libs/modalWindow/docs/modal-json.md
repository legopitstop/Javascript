### Modal JSON Syntax
#### Root
| Name     | Type                       | Default | Description                    | Example         |
|----------|----------------------------|---------|--------------------------------|-----------------|
| `title`  | [object](#text-components) |         | The title of the modal         | `title: {...}`  |
| `body`   | [array](#text-components)  |         | The main body of the modal     | `body: [...]`   |
| `theme?` | [enum](#theme)             | `light` | The theme to use for the modal | `theme: 'dark'` |

#### Text Components
| Name             | Type                 | Default | Description                                  | Example                                |
|------------------|----------------------|---------|----------------------------------------------|----------------------------------------|
| `text`           | String               |         | The text to display                          | `text: 'Hello World!'`                 |
| `color?`         | String               |         | The color of the text excepts any CSS4 color | `color: 'red' `                        |
| `font?`          | String               |         | The font to use                              | `font: 'comic'`                        |
| `embed?`         | String               |         | embed HTML                                   | `embed: "<p>Some HTML embed text</p>"` |
| `bold?`          | Boolean              | `false` | If true it will make the text bold           | `bold: true `                          |
| `italic?`        | Boolean              | `false` | If true it will make the text italic         | `italic: true`                         |
| `underlined?`    | Boolean              | `false` | If true it will make the text underlined     | `underlined: true`                     |
| `strikethrough?` | Boolean              | `false` | If true it will make the text strikethrough  | `strikethrough: true`                  |
| `header?`        | Integer [1-6]        |         | The hedaer level to make this text           | `header: 1`                            |
| `align?`         | [Enum](#align)       | `left`  | How to align the text.                       | `align: 'left'`                        |
| `style?`         | [Enum](#style)       |         | The style to use for the text.               | `style: 'button'`                      |
| `clickEvent?`    | [Object](#events)    |         | Event to run when you click on the text      | `clickEvent: {...}`                    |
| `changeEvent?`   | [Object](#events)    |         | Event to run when the input changes          | `changeEvent: {...}`                   |
| `hoverEvent?`    | [Object](#events)    |         | Event to run when you hover over the text    | `hoverEvent: {...}`                    |
| `input?`         | [Object](#input)     |         | Add multiple imputs to the modal             | `input: {...}`                         |
| `codeblock?`     | [Object](#codeblock) |         | Add a codeblock to the modal                 | `codeblock: {...}`                     |

#### Events
This event system may get reworked in the future.

| Name     | Type            | Default | Description                      | Example                        |
|----------|-----------------|---------|----------------------------------|--------------------------------|
| `action` | [Enum](#action) |         | The action to use for this event | `action: 'open_url'`           |
| `value`  | String          |         | The value for the action         | `value: 'https://example.com'` |

#### Input
More components for Input is planned.
| Name        | Type   | Default | Description                                               | Example                   |
|-------------|--------|---------|-----------------------------------------------------------|---------------------------|
| `type?`     | Enum   | `text`  | The type of input to use                                  | `type: 'list'`            |
| `id?`       | String |         | The id of the input, if undefined it will generate a UUID | `id: 'letters'`           |
| `examples?` | Array  |         | A list of example values for the datalist                 | `examples: ['a','b','c']` |

#### Codeblock
| Name        | Type                | Default | Description                                                        | Example                  |
|-------------|---------------------|---------|--------------------------------------------------------------------|--------------------------|
| `id?`       | String              |         | The id of the codeblock, if undefined it will generate a UUID      | `id: 'someCode'`         |
| `width?`    | Number/String       |         | The width of the codeblock.                                        | `width: 100`             |
| `height?`   | Number/String       |         | The height of the codeblock.                                       | `height: 100`            |
| `readonly?` | Boolean             | `false` | If true you will not be able to edit the contents of the codeblock | `readonly: true`         |
| `extension` | [Enum](#extensions) |         | The extention to use.                                              | `extension: 'text/json'` |
| `code`      | [Object](#code)     |         | Contains the code that is inside the codeblock                     | `code: {...}`            |

#### Code
| Name            | Type               | Default | Description                   | Example                                  |
|-----------------|--------------------|---------|-------------------------------|------------------------------------------|
| `type`          | [Enum](#code-type) |         | The type of code to insert.   | `type: 'ref'`                            |
| `value`         | String             |         | The contents of the codeblock | `value: 'https://example.com/code.json'` |
| `pretty_print?` | Boolean            | `false` | Make the JSON pretty          | `pretty_print: true`                     |

#### Code Type
| Values     | Description                                         |
|------------|-----------------------------------------------------|
| `ref`      | value becomes a hyperlink to a file.                |
| `contents` | values is an object of the code that will be shown. |
| `selector` | value is the jquery selector for the element.       |


#### Extensions
| Values      |
|-------------|
| `text/json` |

#### Theme
| Values  |
|---------|
| `dark`  |
| `light` |

#### Align
| Values   |
|----------|
| `left`   |
| `center` |
| `right`  |

#### Style
| Values   |
|----------|
| `button` |

#### Action
| Values              |
|---------------------|
| `copy_to_clipboard` |
| `run_function`      |