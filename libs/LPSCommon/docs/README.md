# LPSCommon.js
LPSCommon.js provides a few quality of life functions.
## Table of Contents
- [Install](#intall)
- [Out of Box](#out-of-box)
- [dependencies](dependencies.md)
- Features
    - [checked](checked.md)
    - [clearElement](clear-element.md)
    - [codeblock](codeblock.md)
    - [convertURL](convert-url.md)
    - [copyElement](copy-element.md)
    - [cutElement](cut-element.md)
    - [disableElement enableElement](disable-enable-element.md)
    - [download](download.md)
    - [errorClass](error-class.md)
    - [extendedMarked](extended-marked.md)
    - [focusId focusSelector](focus.md)
    - [hexToRgb](hex-to-rgb.md)
    - [hideElement showElement](hide-show-element.md)
    - [imageError](image-error.md)
    - [isrequired](is-required.md)
    - [keyup keydown](key-up-down.md)
    - [markdownHTML](markdown-html.md)
    - [MinMaxValue](min-max-value.md)
    - [openURL](open-url.md)
    - [parseURLParams](parse-url-params.md)
    - [randomId](random-id.md)
    - [rgbToHex](rgb-to-hex.md)
    - [rng](rng.md)
    - [scrollToId scrollSelector](scroll.md)
    - [selectId selectSelector](select.md)
    - [sendError](send-error.md)
    - [startLoading stopLoading](start-stop-loading.md)
    - [uuid](uuid.md)

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