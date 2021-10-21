
$(document).ready(function () {
    console.log('loaded rawjson.js')
});

function rawjson(json, parent) {
    if (Array.isArray(json)) {
        let list = ''
        for (let i = 0; i < json.length; i++) {
            const r = json[i];
            list += rawjson(r, json[0])
        }
        return list
    } else if (json !== null && typeof json === 'object') {

        /* Apply parent properties */
        if (parent) {
            if (!json.color) {if(parent.color) {json.color = parent.color}};
            if (!json.bold) {if(parent.bold) {json.bold = parent.bold}};
            if (!json.italic) {if(parent.italic) {json.italic = parent.italic}};
            if (!json.underlined) {if(parent.underlined) {json.underlined = parent.underlined}};
            if (!json.strikethrough) {if(parent.strikethrough) {json.strikethrough = parent.strikethrough}};
        }
        if (json.text) {
            // default varables
            var element = 'span'
            var cursor = ''
            var color = ''
            var bold = ''
            var italic = ''
            var decoration = ''
            var underlined = ''
            var strikethrough = ''
            // hoverevent
            var hoverEvent = ''
            if (json.hoverEvent) {
                if (json.hoverEvent.action) {
                    if (json.hoverEvent.action == 'show_text') {
                        if (json.hoverEvent.contents) {
                            if (typeof json.hoverEvent.contents == "string") {
                                hoverEvent = 'title="' + json.hoverEvent.contents + '"'
                            } else {
                                console.warn('Contents does not support RAW JSON.')
                            }
                        } else {
                            console.error('missing contents for hoverevent')
                        }
                    } else {
                        console.error('"' + json.hoverEvent.action + '" is not a valid hoverevent action.')
                    }
                } else {
                    console.error('missing hoverevent action')
                }
            }
            // clickevent
            var clickEvent = ''
            if (json.clickEvent) {
                if (json.clickEvent.action) {
                    if (json.clickEvent.action == 'open_url') {
                        if (json.clickEvent.value) {
                            clickEvent = 'href="' + json.clickEvent.value + '"';
                            element = 'a'
                            // If not local url apply _blank target
                            if (json.clickEvent.value.match(/^https/gm)) {
                                clickEvent += 'target="_blank"'
                            }
                        } else {
                            console.error('missing value for clickevent')
                        }
                    } else if (json.clickEvent.action == 'run_function') {
                        if (json.clickEvent.value) {
                            clickEvent = 'onclick="' + json.clickEvent.value + '"'
                        } else {
                            console.error('missing value for clickevent')
                        }
                    } else if (json.clickEvent.action == 'copy_to_clipboard') {
                        if (json.clickEvent.value) {
                            clickEvent = 'onclick="copy_to_clipboard(\'' + json.clickEvent.value + '\'); alert(\'Copied `'+json.clickEvent.value+'` to your clipboard!\');"'
                        } else {
                            console.error('missing value for clickevent')
                        }
                    } else {
                        console.error('"' + json.clickEvent.action + '" is not a valid clickevent action')
                    }
                } else {
                    console.error('missing clickevent action')
                }
            }
            // style
            if (json.clickEvent) { cursor = 'cursor: pointer;' };
            if (json.color) { color = 'color:' + json.color + ';' };
            if (json.bold && json.bold === true) { bold = 'font-weight: bold;' };
            if (json.italic && json.italic === true) { italic = 'font-style: italic;' };
            if (json.underlined && json.underlined === true) { underlined = ' underline' };
            if (json.strikethrough && json.strikethrough === true) { strikethrough = ' line-through ' };
            if (json.underlined || json.strikethrough) { decoration = 'text-decoration: ' + underlined + strikethrough + ';' };
            var style = 'style="' + color + bold + italic + decoration + cursor + '"'


            return `<${element} ${style} ${hoverEvent} ${clickEvent}>${json.text.replace(/\n/gm,'<br>')}</${element}>`

        } else if (json.translate) {
            console.warn('translate is not yet supported.')
            return json.translate.replace(/\n/gm,'<br>')
        }

    } else if (typeof json == 'string' || typeof json == 'boolean') {
        return String(json).replace(/\n/gm,'<br>')
    } else {
        console.error(`Expected type string, boolean, object, or array but got "${typeof json}"`);
        return false
    }
}

/**
 * Will copy the text to the users clipboard
 * @param {String} text The text to copy to the clipboard
 */
function copy_to_clipboard(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}