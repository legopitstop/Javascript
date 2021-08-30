# LPSCommon.js
LPSCommon.js provides a few quality of life functions.
## Table of Contents
- [Install](#intall)
- [Out of Box](#out-of-box)
- [dependencies](dependencies.md)
- Features
    - [customMarked](custom-marked.md)
    - [imageError](image-error.md)
    - [isrequired](is-required.md)
    - [rng](rng.md)
    - [randomId](random-id.md)
    - [clearElement](clear-element.md)
    - [copyElement](copy-element.md)
    - [cutElement](cut-element.md)
    - [pressKey](press-key.md)
    - [parseURLParams](parse-url-params.md)
    - [MinMaxValue](min-max-value.md)
    - [errorClass](error-class.md)
    - [disableElement enableElement](disable-enable-element.md)
    - [openURL](open-url.md)
    - [hideElement showElement](hide-show-element.md)
    - [sendError](send-error.md)
    - [codeblock](codeblock.md)
    - [uuid](uuid.md)
    - [focusId focusSelector](focus.md)
    - [selectId selectSelector](select.md)
    - [scrollToId scrollSelector](scroll.md)
    - [convertURL](convert-url.md)
    - [hexToRgb](hex-to-rgb.md)
    - [rgbToHex](rgb-to-hex.md)
    - [checked](checked.md)
    - [startLoading stopLoading](start-stop-loading.md)
    - [markdownHTML](markdown-html.md)

## Install
Add the following code to your header. Make sure to check out the [dependencies](dependencies.md) page
```html
<script src="https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/LPSCommon/LPSCommon.js"></script>
<link type="stylesheet" href="https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/LPSCommon/LPSCommon.css">
```

## Out of box
The following functions will run when the document gets loaded.
- [isRequired](#isrequired)
- [convertURL](#converturl)
- [codeblock](#codeblock)
- [markdownHTML](#markdownhtml)