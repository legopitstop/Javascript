$(document).ready(function () {
    console.log('loaded modalWindow.js')
});

/**
 * Creates a new window to add diffrent functions! Make sure to have the default modal CSS added.
 * @example
 * // Will create a modal window (with id test)
 * var contents = {theme: 'dark', title: {text:'Window Title'}, body: [{text: 'Sone text...'}]}
 * modalWindow('example-modal', 'json', contents)
 * @param {String} modalID The id of the modal
 * @param {String} type The type of input to read, only supports JSON
 * @param {JSON} input The JSON data to create the window
*/
function modalWindow(modalID, type, input) {
    if (input.width != undefined) { var Width = 'width: ' + input.width + ';' } else { var Width = '' }
    if (input.height != undefined) { var Height = 'height: ' + input.height + ';' } else { var Height = '' }
    var base = '<div id="' + modalID + '-container" class="modal"><div class="modal-content" style="' + Width + Height + '"><span class="close">&times;</span><div id="' + modalID + '"></div></div></div>'
    var createModal = document.createElement("div");
    createModal.innerHTML = base;
    document.body.appendChild(createModal);

    // build
    if (type == 'json') {
        var file = $('#' + modalID)
        // Create Contents
        if (input.theme == 'dark') {
            document.querySelector('.modal-content').classList.add('dark')
        } else {
            document.querySelector('.modal-content').classList.add('light')
        }
        if (input.title) {
            file.append(styleBuilder(input.title, input.title.text))
        };
        if (input.body) {
            input.body.forEach(
                input => {
                    if (input.text) {
                        file.append(styleBuilder(input, input.text))
                    }
                    if (input.translate) {
                        // .replace(/(^%s)/g, '<span id="replace' + i + '"></span>')
                        var output = input.translate.replace(/(%%)([1-9])/g, '<span id="replace$2"></span>')
                        if (output.includes('%s')) { sendError('Replacement "%s" has not been added yet! please use "%%[1-9]" instead.') }
                        file.append(styleBuilder(input, output))
                        for (let i = 1; i < input.with.length + 1; i++) {
                            var id = 'replace' + i
                            document.getElementById(id).innerHTML = input.with[i - 1]
                        }
                    }
                }
            )
        }
    } else {
        sendError('Unknown type for function ModalWindow()')
    }
    function styleBuilder(json, text) {
        var Color = ''
        var Font = ''
        var Bold = ''
        var Italic = ''
        var Underline = ''
        var Strikethrough = ''
        /* Common */
        if (json.color != undefined) { var Color = ' color:' + json.color + ';' } else { var Color = '' };
        if (json.font != undefined) { var Font = ' font-family:' + json.font + ';' } else { var Font = '' };
        if (json.bold != undefined) { if (json.bold == true) { var Bold = ' font-weight: bold;' } else { var Bold = '' } } else { var Bold = '' };
        if (json.italic != undefined) { if (json.italic == true) { var Italic = ' font-style: italic;' } else { var Italic = '' } } else { var Italic = '' };
        if (json.underlined != undefined) { if (json.underlined == true) { var Underline = 'underline ' } else { var Underline = '' } } else { var Underline = '' };
        if (json.strikethrough != undefined) { if (json.strikethrough == true) { var Strikethrough = 'line-through ' } else { var Strikethrough = '' } } else { var Strikethrough = '' };

        if (json.align != undefined) { var Align = 'text-align:' + json.align + ';' } else { var Align = '' };
        if (json.header != undefined) { if (json.header <= 6) { var element = 'h' + json.header } else { var element = 'p'; sendError('max level for header is 6, but got ' + json.header) } } else { var element = 'p' };
        var decor = ' text-decoration:' + Underline + Strikethrough + ';'
        var style = Color + Bold + Italic + Font + Align + decor

        /* clickEvent */
        if (json.clickEvent != undefined) {
            if (json.clickEvent.action == 'open_url') {
                console.log(json.clickEvent.value)
                //var click = ' onclick="window.open(' + json.clickEvent.value + ')"'
                var click = ''
            } else {
                if (json.clickEvent.action == 'copy_to_clipboard') {
                    console.log(json.clickEvent.value)
                    var click = ' copyElement(' + json.clickEvent.value + ')"'
                } else {
                    if (json.clickEvent.action == 'run_function') {
                        console.log(json.clickEvent.value)
                        var click = json.clickEvent.value
                    } else {
                        sendError('Unknown action type, expected "open_url", "copy_to_clipboard" or "run_function" but got "' + json.clickEvent.action + '"')
                    }
                }
            }
            var click = ''
        }
        /* changeEvent */
        if (json.changeEvent != undefined) {
            if (json.changeEvent.action == 'open_url') {
                console.log(json.changeEvent.value)
                var click = ''
            } else {
                if (json.changeEvent.action == 'copy_to_clipboard') {
                    console.log(json.changeEvent.value)
                    var click = ' copyElement(' + json.changeEvent.value + ')"'
                } else {
                    if (json.changeEvent.action == 'run_function') {
                        console.log('onchange=' + json.changeEvent.value)
                        var click = ' onchange="' + json.changeEvent.value + '"'
                    } else {
                        sendError('Unknown action type, expected "open_url", "copy_to_clipboard" or "run_function" but got "' + json.changeEvent.action + '"')
                    }
                }
            }
            var click = ''
        }
        /* hoverEvent */
        if (json.hoverEvent != undefined) {
            if (json.hoverEvent.action == 'show_text') {
                var title = ' title="' + json.hoverEvent.value + '" '
            } else {
                var title = ''
            }
        } else {
            var title = ''
        }
        /* embed */
        if (json.embed != undefined) {
            console.log(json.embed)
            var text = json.embed
        }
        /* input */
        if (json.input != undefined) {
            /* UUID */
            if (json.input.id == undefined) { var UUID = rng(1111, 9999) } else { var UUID = json.input.id };
            if (json.input.type != undefined) { var Type = json.input.type } else { var Type = 'text' }
            if (json.input.examples != undefined) {
                var List = ' list="' + UUID + '-list"'
                json.input.examples.forEach(json => {
                    /* create datalist */
                    var createModal = document.createElement("datalist");
                    createModal.id = UUID + '-list'
                    document.body.appendChild(createModal);

                    console.log(document.getElementById(UUID + '-list'))
                    $('#' + UUID + '-list').append('<option value="' + json + '">' + json + '</option>')
                })
            } else {
                var List = ''
            }
            var input = '<input class="modal-input' + List + ' id="' + UUID + '" type="' + Type + '"/>'
        }
        /* Code block */
        if (json.codeblock != undefined) {
            /* ID */
            var codeFile = json.codeblock.code
            if (json.codeblock.id == undefined) { var ID = rng(1111, 9999) } else { var ID = json.codeblock.id };
            if (json.codeblock.width != undefined) { var Width = ' width:' + json.codeblock.width + ';' } else { var Width = '' };
            if (json.codeblock.height != undefined) { var Height = ' height:' + json.codeblock.height + ';' } else { var Height = '' };
            if (json.codeblock.readonly == true) { var Readonly = 'readonly' } else { var Readonly = '' };
            if (json.codeblock.extension == 'text/json') {
                /* contents use the JSON inside 'values'*/
                if (codeFile.type == 'contents') {
                    if (codeFile.pretty_print == true) {
                        var code = JSON.stringify(code.value, null, 4)
                    } else {
                        var code = JSON.stringify(code.value)
                    }
                }
                /* referance to URL */
                if (codeFile.type == 'ref') {
                    var code = ''
                    $.getJSON(codeFile.value, function (value) {
                        if (codeFile.pretty_print == true) {
                            $('#' + ID).append(JSON.stringify(value, null, 4))
                        } else {
                            $('#' + ID).append(JSON.stringify(value))
                        }
                    })
                }
                /* Grabs the contents from a diffrent element */
                if (codeFile.type == 'selector') {
                    if (codeFile.pretty_print == true) {
                        var code = JSON.stringify(document.querySelector(codeFile.value).innerHTML, null, 4)
                    } else {
                        var code = JSON.stringify(document.querySelector(codeFile.value).innerHTML)
                    }
                }
            } else {
                /* contents use the JSON inside 'values'*/
                if (codeFile.type == 'contents') {
                    var code = codeFile.value
                }
                /* Grabs the contents from a diffrent element */
                if (codeFile.type == 'selector') {
                    var code = document.querySelector(codeFile.value).innerHTML
                }
            }
            var input = '<br><textarea class="modal-codeblock" id="' + ID + '" onchange="updateText(' + ID + ')"' + click + ' style="' + Width + Height + '" ' + Readonly + '>' + code + '</textarea>'
        }
        /* Button */
        if (json.style == 'button') {
            return '<button class="modal-button"' + click + ' style="' + style + '">' + text + '</button>'
        } else {
            if (json.input != undefined) {
                return '<label for="' + UUID + '" ' + click + title + 'style="' + style + '">' + text + ' </label>' + input
            } else {
                if (json.codeblock != undefined) {
                    return '<label for="' + ID + '" ' + title + 'style="' + style + '">' + text + ' </label>' + input
                } else {
                    return '<' + element + ' ' + click + title + 'style="' + style + '">' + text + '</' + element + '>'
                }
            }
        }
    }


    var modal = document.querySelector('#' + modalID + '-container')
    document.querySelector('#' + modalID + '-container').style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        //modal.style.display = "none";
        closeModal()
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            //modal.style.display = "none";
            closeModal()
        }
    }
}

/**
 * Closes/removes the modal window
*/
function closeModal() {
    var removeElement = document.querySelector('.modal');
    removeElement.remove();
}