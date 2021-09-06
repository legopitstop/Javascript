# list.js
list.js Allows you to add datalists to your HTML using json files.
## Table of Contents
- [Install](#intall)
- [Usage](#usage)
- [JSON Schema](#json-schema)
    - [Root](#root)
    - [Object](#object)
- [Examples](examples.md)

## Install
Add the following code to your header. Make sure to check out the [dependencies](dependencies.md) page
```html
<script src="https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/list/list.js"></script>
```

## Usage

## JSON schema
Add the JSON schema URL to your JSON!
```json
{
    "$schema": "https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/list/schema.json"
}
```
### Root
| Name       | Required | Type                     | Description                        |
|------------|----------|--------------------------|------------------------------------|
| `id`       | true     | String                   | The id of the datalist.            |
| `examples` | true     | String/[Object](#object) | A list of values for the datalist. |
### Object
| Name          | Required | Type   | Description                                                                   |
|---------------|----------|--------|-------------------------------------------------------------------------------|
| `value`       | true     | String | The value of the item. This is what will be added when the user clicks on it. |
| `description` | false    | String | The description of the item.                                                  |