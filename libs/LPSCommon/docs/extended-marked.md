# extendedMarked
Some extra custom styling for markdown. Example use `§` chat colors. You can use `:<emoji>:` for custom icons (powered by font awesome!).
## Table of Contents
- [Dependencies](#dependencies)
- [Syntax](#syntax)
- [Example](#example)
---

## Dependencies
- [Font Awsome](dependencies.md#font-awsome)
- [Marked](dependencies.md#marked)
## Syntax
```typescript
extendedMarked(text: String, key?: String, value?: String): String
```
- `text` - The text to convert
- `key` - The key value
- `value` - The value to replace with the key
## Example
```js
extendedMarked('§0Black test §fwhite text')
extendedMarked('§0Black test §fwhite text', 'white', 'red')
extendedMarked('§0Black test §fwhite text', {'white': '#ff0000','black': '#0000ff'})
```
[Back to top](#)

## New markdown

| Name         | Descrtipion                                        | Example                                                       |
|--------------|----------------------------------------------------|---------------------------------------------------------------|
| Color        | You can color your text using `§`                  | `§0Black text §fwhite text`                                   |
| Styling      | You can style your test using `§`                  | `§lBold §nUnderlined`                                         |
| Superscript  | Small text at the top                              | `123^1 `<br>`123^{123}`                                       |
| Subscript    | Small text at the bottom                           | `123_1 `<br>`123_{123}`                                       |
| Details      | Like a spoiler block                               | `?[Details](Something small enough to escape casual notice.)` |
| Mark         | Will highlight the text yellow                     | `this is some| marked | text.`                                |
| Image change | If you add a YouTube Url to image it will embed it<br>See allowed URLs below | `![alt](https://youtu.be/<video>)`  |


## YouTube Embed URLS
All the below links will get embedded on the page.
| URL                                        | Location                             |
|--------------------------------------------|--------------------------------------|
| https://www.youtube.com/watch?v=VIDEO&t=2s | address bar                          |
| https://youtu.be/VIDEO                     | Right click on video, copy video URL |
| https://www.youtube.com/embed/VIDEO        | URL from embed code                  |

[Back to top](#)