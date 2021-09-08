/**
 * https://cdn.jsdelivr.net/gh/legopitstop/Javascript/libs/LPSCommon/LPSCommon.js
 */

$(document).ready(function () {
    console.log('loaded LPSCommon.js')
    isRequired();
    convertURL(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td']);
    codeblock('textarea.codeblock');
    //valuePlaceholder();
    markdownHTML(['markdown', '.markdown', '.marked']);
});

/**
 * Some extra custom styling for markdown. Example use `§` chat colors. You can use `:<emoji>:` for custom icons (powered by font awesome!)
 * @example
 * customMarked('§0Black test §fwhite text')
 * customMarked('§0Black test §fwhite text', 'white', 'red')
 * customMarked('§0Black test §fwhite text', {'white': '#ff0000','black': '#0000ff'})
 * @param {String} text The text to replace.
 * @param {String} [key] The key to set 'value' to.
 * @param {String} [value] The CSS3 to apply
 * @returns {String}
 */
function customMarked(text, key, value) {
    let white = 'color: #ffffff';
    let dark_blue = 'color: #0000be';
    let dark_green = 'color: #00be00';
    let dark_aqua = 'color: #00bebe';
    let dark_red = 'color: #be0000';
    let dark_purple = 'color: #be00be';
    let gray = 'color: #bebebe';
    let gold = 'color: #d9a334';
    let dark_gray = 'color: #3f3f3f';
    let blue = 'color: #3f3ffe';
    let green = 'color: #3ffe3f';
    let aqua = 'color: #3ffefe';
    let red = 'color: #fe3f3f';
    let light_purple = 'color: #fe3ffe';
    let yellow = 'color: #fefe3f';
    let black = 'color: #000000';
    let bold = 'font-weight: bold;';
    let italic = 'font-style: italic;';
    let underline = 'text-decoration: underline;';
    let strike = 'text-decoration: line-through;';
    let reset = 'text-decoration: none; color: var(--text);';
    if (key) {
        if (typeof key == 'object') {
            if (key.white) { white = key.white };
            if (key.dark_blue) { dark_blue = key.dark_blue };
            if (key.dark_green) { dark_green = key.dark_green };
            if (key.dark_aqua) { dark_aqua = key.dark_aqua };
            if (key.dark_red) { dark_red = key.dark_red };
            if (key.dark_purple) { dark_purple = key.dark_purple };
            if (key.gray) { gray = key.gray };
            if (key.gold) { gold = key.gold };
            if (key.dark_gray) { dark_gray = key.dark_gray };
            if (key.blue) { blue = key.blue };
            if (key.green) { green = key.green };
            if (key.aqua) { aqua = key.aqua };
            if (key.red) { red = key.red };
            if (key.light_purple) { light_purple = key.light_purple };
            if (key.yellow) { yellow = key.yellow };
            if (key.black) { black = key.black };
            if (key.bold) { bold = key.bold };
            if (key.italic) { italic = key.italic };
            if (key.underline) { underline = key.underline };
            if (key.strike) { strike = key.strike };
            if (key.reset) { reset = key.reset };

        } else if (typeof key == 'string') {
            if (key == 'white') { white = value };
            if (key == 'dark_blue') { dark_blue = value };
            if (key == 'dark_green') { dark_green = value };
            if (key == 'dark_aqua') { dark_aqua = value };
            if (key == 'dark_red') { dark_red = value };
            if (key == 'dark_purple') { dark_purple = value };
            if (key == 'gray') { gray = value };
            if (key == 'gold') { gold = value };
            if (key == 'dark_gray') { dark_gray = value };
            if (key == 'blue') { blue = value };
            if (key == 'green') { green = value };
            if (key == 'aqua') { aqua = value };
            if (key == 'red') { red = value };
            if (key == 'light_purple') { light_purple = value };
            if (key == 'yellow') { yellow = value };
            if (key == 'black') { black = value };
            if (key == 'bold') { bold = value };
            if (key == 'italic') { italic = value };
            if (key == 'underline') { underline = value };
            if (key == 'strike') { strike = value };
            if (key == 'reset') { reset = value };
        } else {
            console.error('Invalid typeof key. expected "object" or "string", but got "' + typeof key + '"');
        }
    };
    return text
        .replace(/:fa-(.*):/g, '<span class="fa fa-$1"></span>')
        .replace(/§0(.*)/gm, '<span style="' + black + ';">$1</span>')
        .replace(/§1(.*)/gm, '<span style="' + dark_blue + ';">$1</span>')
        .replace(/§2(.*)/gm, '<span style="' + dark_green + ';">$1</span>')
        .replace(/§3(.*)/gm, '<span style="' + dark_aqua + ';">$1</span>')
        .replace(/§4(.*)/gm, '<span style="' + dark_red + ';">$1</span>')
        .replace(/§5(.*)/gm, '<span style="' + dark_purple + ';">$1</span>')
        .replace(/§6(.*)/gm, '<span style="' + gold + ';">$1</span>')
        .replace(/§7(.*)/gm, '<span style="' + gray + ';">$1</span>')
        .replace(/§8(.*)/gm, '<span style="' + dark_gray + ';">$1</span>')
        .replace(/§9(.*)/gm, '<span style="' + blue + ';">$1</span>')
        .replace(/§a(.*)/gm, '<span style="' + green + ';">$1</span>')
        .replace(/§b(.*)/gm, '<span style="' + aqua + ';">$1</span>')
        .replace(/§c(.*)/gm, '<span style="' + red + ';">$1</span>')
        .replace(/§d(.*)/gm, '<span style="' + light_purple + ';">$1</span>')
        .replace(/§e(.*)/gm, '<span style="' + yellow + ';">$1</span>')
        .replace(/§f(.*)/gm, '<span style="' + white + ';">$1</span>')
        .replace(/§l(.*)/gm, '<span style="' + bold + '">$1</span>')
        .replace(/§o(.*)/gm, '<span style="' + italic + '">$1</span>')
        .replace(/§n(.*)/gm, '<span style="' + underline + '">$1</span>')
        .replace(/§m(.*)/gm, '<span style="' + strike + '">$1</span>')
        .replace(/§k(.*)/gm, '<span style="color: black;">$1</span>')
        .replace(/§r(.*)/gm, '<span style="' + reset + '">$1</span>');
};

/**
 * Will replace with a missing image.
 * @param {String} image Element to replace source if error.
 * @returns {Boolean} true
 */
function imageError(image) {
    console.error('Failed to find image! using missing texture. "' + image.alt + '"');
    image.onerror = "";
    image.src = "/assets/minecraft/textures/item/missing.png";
    return true;
}

/**
 * When a required input is empty set the border color to red
 */
function isRequired() {
    $('input').blur(function () {
        $(':required').css('border-color', 'gray');
        $(':required').filter(function () {
            return $.trim(this.value) === '';
        }).css('border-color', 'red');
    });
}

/**
 * returns a random number from min and max
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns {Number} A random number between the min and max
 */
function rng(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}
/**
 * returns a random number from min and max
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns {Number} A random number between the min and max
 */
function randomNumber(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * returns a random number for an id
 * @returns {Number} A random number (id) that is imbetween 100000 - 999999
 */
function randomId() {
    var min = 100000
    var max = 999999
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * Clears the element
 * @param {boolean} confirm0 If true it will show a confirmation menu.
 * @param {string} selector The element to clear.
 * @returns clears the output element.
 */
function clearElement(confirm0, selector) {
    if (confirm0 == true) {
        var con = confirm("Are you sure you want to clear the command input?");
        if (con == true) {
            document.querySelector(selector).innerHTML = '';
            return true;
        } else {
            return false;
        }
    } else {
        document.querySelector(selector).innerHTML = '';
        return true;
    }
}

/**
 * Copies the elements contents to the clipboard
 * @param {string} selector The element to copy.
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElementSelector(selector) {
    var target = document.querySelector(selector);
    if (target.value != '') {
        target.select();
        document.execCommand("copy");
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id The element to copy.
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElementId(id) {
    var target = document.getElementById(id);
    if (target.value != '') {
        target.select();
        document.execCommand("copy");
        return true;
    } else {
        return false;
    }
}

/**
 * Copies then clears the selected element
 * @param {string} selector The element to copy.
 * @returns Copies then removes the value in element. Also returns a boolean
 */
function cutElementSelector(selector) {
    var target = document.querySelector(selector);
    if (target.value != '') {
        target.select();
        document.execCommand("cut");
        return true;
    } else {
        return false;
    }

}

function pressKey() {
    console.error('Function "pressKey" is Deprecated, use "keydown" or "keyup" instead')
}
/**
 * Runs the function when the user pressed the defined button.
 * @param {String} key The key ID to match.
 * @param {Function} func The function to run.
 */
function keydown(key, func) {
    document.addEventListener('keydown', function (event) {
        let trigger = false
        if (key) {
            event.preventDefault();
            if (key == 'K_ENTER') { if (event.code === 'Enter') { trigger = true } }
            else if (key == 'K_BACKSPACE') { if (event.code === 'Backspace') { trigger = true } }
            else if (key == 'K_TAB') { if (event.code === 'Tab') { trigger = true } }
            else if (key == 'K_PAUSE') { if (event.code === 'Pause') { trigger = true } }
            else if (key == 'K_ESCAPE') { if (event.code === 'Escape') { trigger = true } }
            else if (key == 'K_SPACE') { if (event.code === 'Space') { trigger = true } }
            else if (key == 'K_COMMA') { if (event.code === 'Comma') { trigger = true } }
            else if (key == 'K_MINUS') { if (event.code === 'Minus') { trigger = true } }
            else if (key == 'K_PERIOD') { if (event.code === 'Period') { trigger = true } }
            else if (key == 'K_SLASH') { if (event.code === 'Slash') { trigger = true } }
            else if (key == 'K_0') { if (event.code === 'Digit0') { trigger = true } }
            else if (key == 'K_1') { if (event.code === 'Digit1') { trigger = true } }
            else if (key == 'K_2') { if (event.code === 'Digit2') { trigger = true } }
            else if (key == 'K_3') { if (event.code === 'Digit3') { trigger = true } }
            else if (key == 'K_4') { if (event.code === 'Digit4') { trigger = true } }
            else if (key == 'K_5') { if (event.code === 'Digit5') { trigger = true } }
            else if (key == 'K_6') { if (event.code === 'Digit6') { trigger = true } }
            else if (key == 'K_7') { if (event.code === 'Digit7') { trigger = true } }
            else if (key == 'K_8') { if (event.code === 'Digit8') { trigger = true } }
            else if (key == 'K_9') { if (event.code === 'Digit9') { trigger = true } }
            else if (key == 'K_BACKQUOTE') { if (event.code === 'Backquote') { trigger = true } }
            else if (key == 'K_a') { if (event.code === 'KeyA') { trigger = true } }
            else if (key == 'K_b') { if (event.code === 'KeyB') { trigger = true } }
            else if (key == 'K_c') { if (event.code === 'KeyC') { trigger = true } }
            else if (key == 'K_d') { if (event.code === 'KeyD') { trigger = true } }
            else if (key == 'K_e') { if (event.code === 'KeyE') { trigger = true } }
            else if (key == 'K_f') { if (event.code === 'KeyF') { trigger = true } }
            else if (key == 'K_g') { if (event.code === 'KeyG') { trigger = true } }
            else if (key == 'K_h') { if (event.code === 'KeyH') { trigger = true } }
            else if (key == 'K_i') { if (event.code === 'KeyI') { trigger = true } }
            else if (key == 'K_j') { if (event.code === 'KeyJ') { trigger = true } }
            else if (key == 'K_k') { if (event.code === 'KeyK') { trigger = true } }
            else if (key == 'K_l') { if (event.code === 'KeyL') { trigger = true } }
            else if (key == 'K_m') { if (event.code === 'KeyM') { trigger = true } }
            else if (key == 'K_n') { if (event.code === 'KeyN') { trigger = true } }
            else if (key == 'K_o') { if (event.code === 'KeyO') { trigger = true } }
            else if (key == 'K_p') { if (event.code === 'KeyP') { trigger = true } }
            else if (key == 'K_q') { if (event.code === 'KeyQ') { trigger = true } }
            else if (key == 'K_r') { if (event.code === 'KeyR') { trigger = true } }
            else if (key == 'K_s') { if (event.code === 'KeyS') { trigger = true } }
            else if (key == 'K_t') { if (event.code === 'KeyT') { trigger = true } }
            else if (key == 'K_u') { if (event.code === 'KeyU') { trigger = true } }
            else if (key == 'K_v') { if (event.code === 'KeyV') { trigger = true } }
            else if (key == 'K_w') { if (event.code === 'KeyW') { trigger = true } }
            else if (key == 'K_x') { if (event.code === 'KeyX') { trigger = true } }
            else if (key == 'K_y') { if (event.code === 'KeyY') { trigger = true } }
            else if (key == 'K_z') { if (event.code === 'KeyZ') { trigger = true } }
            else if (key == 'K_DELETE') { if (event.code === 'Delete') { trigger = true } }
            else if (key == 'K_KP0') { if (event.code === 'Numpad0') { trigger = true } }
            else if (key == 'K_KP1') { if (event.code === 'Numpad1') { trigger = true } }
            else if (key == 'K_KP2') { if (event.code === 'Numpad2') { trigger = true } }
            else if (key == 'K_KP3') { if (event.code === 'Numpad3') { trigger = true } }
            else if (key == 'K_KP4') { if (event.code === 'Numpad4') { trigger = true } }
            else if (key == 'K_KP5') { if (event.code === 'Numpad5') { trigger = true } }
            else if (key == 'K_KP6') { if (event.code === 'Numpad6') { trigger = true } }
            else if (key == 'K_KP7') { if (event.code === 'Numpad7') { trigger = true } }
            else if (key == 'K_KP8') { if (event.code === 'Numpad8') { trigger = true } }
            else if (key == 'K_KP9') { if (event.code === 'Numpad9') { trigger = true } }
            else if (key == 'K_KP_PERIOD') { if (event.code === 'NumpadDecimal') { trigger = true } }
            else if (key == 'K_KP_DIVIDE') { if (event.code === 'NumpadDivide') { trigger = true } }
            else if (key == 'K_KP_MULTIPLY') { if (event.code === 'NumpadMultiply') { trigger = true } }
            else if (key == 'K_KP_MINUS') { if (event.code === 'NumpadSubtract') { trigger = true } }
            else if (key == 'K_KP_PLUS') { if (event.code === 'NumpadAdd') { trigger = true } }
            else if (key == 'K_KP_ENTER') { if (event.code === 'NumpadEnter') { trigger = true } }
            else if (key == 'K_KP_EQUALS') { if (event.code === 'NumpadEquals') { trigger = true } }
            else if (key == 'K_UP') { if (event.code === 'ArrowUp') { trigger = true } }
            else if (key == 'K_DOWN') { if (event.code === 'ArrowDown') { trigger = true } }
            else if (key == 'K_RIGHT') { if (event.code === 'ArrowRight') { trigger = true } }
            else if (key == 'K_LEFT') { if (event.code === 'ArrowLeft') { trigger = true } }
            else if (key == 'K_INSERT') { if (event.code === 'Insert') { trigger = true } }
            else if (key == 'K_HOME') { if (event.code === 'Home') { trigger = true } }
            else if (key == 'K_END') { if (event.code === 'End') { trigger = true } }
            else if (key == 'K_PAGEUP') { if (event.code === 'PageUp') { trigger = true } }
            else if (key == 'K_PAGEDOWN') { if (event.code === 'PageDown') { trigger = true } }
            else if (key == 'K_F1') { if (event.code === 'F1') { trigger = true } }
            else if (key == 'K_F2') { if (event.code === 'F2') { trigger = true } }
            else if (key == 'K_F3') { if (event.code === 'F3') { trigger = true } }
            else if (key == 'K_F4') { if (event.code === 'F4') { trigger = true } }
            else if (key == 'K_F5') { if (event.code === 'F5') { trigger = true } }
            else if (key == 'K_F6') { if (event.code === 'F6') { trigger = true } }
            else if (key == 'K_F7') { if (event.code === 'F7') { trigger = true } }
            else if (key == 'K_F8') { if (event.code === 'F8') { trigger = true } }
            else if (key == 'K_F9') { if (event.code === 'F9') { trigger = true } }
            else if (key == 'K_F10') { if (event.code === 'F10') { trigger = true } }
            else if (key == 'K_F11') { if (event.code === 'F11') { trigger = true } }
            else if (key == 'K_F12') { if (event.code === 'F12') { trigger = true } }
            else if (key == 'K_F13') { if (event.code === 'F13') { trigger = true } }
            else if (key == 'K_F14') { if (event.code === 'F14') { trigger = true } }
            else if (key == 'K_F15') { if (event.code === 'F15') { trigger = true } }
            else if (key == 'K_NUMLOCK') { if (event.code === 'NumLock') { trigger = true } }
            else if (key == 'K_CAPSLOCK') { if (event.code === 'CapsLock') { trigger = true } }
            else if (key == 'K_SCROLLOCK') { if (event.code === 'ScrollLock') { trigger = true } }
            else if (key == 'K_RSHIFT') { if (event.code === 'ShiftLeft') { trigger = true } }
            else if (key == 'K_LSHIFT') { if (event.code === 'ShiftRight') { trigger = true } }
            else if (key == 'K_RCTRL') { if (event.code === 'ControlRight') { trigger = true } }
            else if (key == 'K_LCTRL') { if (event.code === 'ControlLeft') { trigger = true } }
            else if (key == 'K_RALT') { if (event.code === 'AltRight') { trigger = true } }
            else if (key == 'K_LALT') { if (event.code === 'AltLeft') { trigger = true } }
            else if (key == 'K_RMETA') { if (event.code === 'MetaRight') { trigger = true } }
            else if (key == 'K_LMETA') { if (event.code === 'MetaLeft') { trigger = true } }
            else if (key == 'K_PRINT') { if (event.code === 'PrintScreen') { trigger = true } }
            else if (key == 'K_SYSREQ') { if (event.code === 'PrintScreen') { trigger = true } }
            else if (key == 'K_MENU') { if (event.code === 'ContextMenu') { trigger = true } }
            else {
                console.error('Unknown key ID')
            }
            if (trigger == true) {
                func.call();
            }
        } else {
            return null
        }
    });
}

/**
 * Runs the function when the user pressed the defined button.
 * @param {String} key The key ID to match.
 * @param {Function} func The function to run.
 */
function keyup(key, func) {
    document.addEventListener('keyup', function (event) {
        let trigger = false
        if (key) {
            event.preventDefault();
            if (key == 'K_ENTER') { if (event.code === 'Enter') { trigger = true } }
            else if (key == 'K_BACKSPACE') { if (event.code === 'Backspace') { trigger = true } }
            else if (key == 'K_TAB') { if (event.code === 'Tab') { trigger = true } }
            else if (key == 'K_PAUSE') { if (event.code === 'Pause') { trigger = true } }
            else if (key == 'K_ESCAPE') { if (event.code === 'Escape') { trigger = true } }
            else if (key == 'K_SPACE') { if (event.code === 'Space') { trigger = true } }
            else if (key == 'K_COMMA') { if (event.code === 'Comma') { trigger = true } }
            else if (key == 'K_MINUS') { if (event.code === 'Minus') { trigger = true } }
            else if (key == 'K_PERIOD') { if (event.code === 'Period') { trigger = true } }
            else if (key == 'K_SLASH') { if (event.code === 'Slash') { trigger = true } }
            else if (key == 'K_0') { if (event.code === 'Digit0') { trigger = true } }
            else if (key == 'K_1') { if (event.code === 'Digit1') { trigger = true } }
            else if (key == 'K_2') { if (event.code === 'Digit2') { trigger = true } }
            else if (key == 'K_3') { if (event.code === 'Digit3') { trigger = true } }
            else if (key == 'K_4') { if (event.code === 'Digit4') { trigger = true } }
            else if (key == 'K_5') { if (event.code === 'Digit5') { trigger = true } }
            else if (key == 'K_6') { if (event.code === 'Digit6') { trigger = true } }
            else if (key == 'K_7') { if (event.code === 'Digit7') { trigger = true } }
            else if (key == 'K_8') { if (event.code === 'Digit8') { trigger = true } }
            else if (key == 'K_9') { if (event.code === 'Digit9') { trigger = true } }
            else if (key == 'K_BACKQUOTE') { if (event.code === 'Backquote') { trigger = true } }
            else if (key == 'K_a') { if (event.code === 'KeyA') { trigger = true } }
            else if (key == 'K_b') { if (event.code === 'KeyB') { trigger = true } }
            else if (key == 'K_c') { if (event.code === 'KeyC') { trigger = true } }
            else if (key == 'K_d') { if (event.code === 'KeyD') { trigger = true } }
            else if (key == 'K_e') { if (event.code === 'KeyE') { trigger = true } }
            else if (key == 'K_f') { if (event.code === 'KeyF') { trigger = true } }
            else if (key == 'K_g') { if (event.code === 'KeyG') { trigger = true } }
            else if (key == 'K_h') { if (event.code === 'KeyH') { trigger = true } }
            else if (key == 'K_i') { if (event.code === 'KeyI') { trigger = true } }
            else if (key == 'K_j') { if (event.code === 'KeyJ') { trigger = true } }
            else if (key == 'K_k') { if (event.code === 'KeyK') { trigger = true } }
            else if (key == 'K_l') { if (event.code === 'KeyL') { trigger = true } }
            else if (key == 'K_m') { if (event.code === 'KeyM') { trigger = true } }
            else if (key == 'K_n') { if (event.code === 'KeyN') { trigger = true } }
            else if (key == 'K_o') { if (event.code === 'KeyO') { trigger = true } }
            else if (key == 'K_p') { if (event.code === 'KeyP') { trigger = true } }
            else if (key == 'K_q') { if (event.code === 'KeyQ') { trigger = true } }
            else if (key == 'K_r') { if (event.code === 'KeyR') { trigger = true } }
            else if (key == 'K_s') { if (event.code === 'KeyS') { trigger = true } }
            else if (key == 'K_t') { if (event.code === 'KeyT') { trigger = true } }
            else if (key == 'K_u') { if (event.code === 'KeyU') { trigger = true } }
            else if (key == 'K_v') { if (event.code === 'KeyV') { trigger = true } }
            else if (key == 'K_w') { if (event.code === 'KeyW') { trigger = true } }
            else if (key == 'K_x') { if (event.code === 'KeyX') { trigger = true } }
            else if (key == 'K_y') { if (event.code === 'KeyY') { trigger = true } }
            else if (key == 'K_z') { if (event.code === 'KeyZ') { trigger = true } }
            else if (key == 'K_DELETE') { if (event.code === 'Delete') { trigger = true } }
            else if (key == 'K_KP0') { if (event.code === 'Numpad0') { trigger = true } }
            else if (key == 'K_KP1') { if (event.code === 'Numpad1') { trigger = true } }
            else if (key == 'K_KP2') { if (event.code === 'Numpad2') { trigger = true } }
            else if (key == 'K_KP3') { if (event.code === 'Numpad3') { trigger = true } }
            else if (key == 'K_KP4') { if (event.code === 'Numpad4') { trigger = true } }
            else if (key == 'K_KP5') { if (event.code === 'Numpad5') { trigger = true } }
            else if (key == 'K_KP6') { if (event.code === 'Numpad6') { trigger = true } }
            else if (key == 'K_KP7') { if (event.code === 'Numpad7') { trigger = true } }
            else if (key == 'K_KP8') { if (event.code === 'Numpad8') { trigger = true } }
            else if (key == 'K_KP9') { if (event.code === 'Numpad9') { trigger = true } }
            else if (key == 'K_KP_PERIOD') { if (event.code === 'NumpadDecimal') { trigger = true } }
            else if (key == 'K_KP_DIVIDE') { if (event.code === 'NumpadDivide') { trigger = true } }
            else if (key == 'K_KP_MULTIPLY') { if (event.code === 'NumpadMultiply') { trigger = true } }
            else if (key == 'K_KP_MINUS') { if (event.code === 'NumpadSubtract') { trigger = true } }
            else if (key == 'K_KP_PLUS') { if (event.code === 'NumpadAdd') { trigger = true } }
            else if (key == 'K_KP_ENTER') { if (event.code === 'NumpadEnter') { trigger = true } }
            else if (key == 'K_KP_EQUALS') { if (event.code === 'NumpadEquals') { trigger = true } }
            else if (key == 'K_UP') { if (event.code === 'ArrowUp') { trigger = true } }
            else if (key == 'K_DOWN') { if (event.code === 'ArrowDown') { trigger = true } }
            else if (key == 'K_RIGHT') { if (event.code === 'ArrowRight') { trigger = true } }
            else if (key == 'K_LEFT') { if (event.code === 'ArrowLeft') { trigger = true } }
            else if (key == 'K_INSERT') { if (event.code === 'Insert') { trigger = true } }
            else if (key == 'K_HOME') { if (event.code === 'Home') { trigger = true } }
            else if (key == 'K_END') { if (event.code === 'End') { trigger = true } }
            else if (key == 'K_PAGEUP') { if (event.code === 'PageUp') { trigger = true } }
            else if (key == 'K_PAGEDOWN') { if (event.code === 'PageDown') { trigger = true } }
            else if (key == 'K_F1') { if (event.code === 'F1') { trigger = true } }
            else if (key == 'K_F2') { if (event.code === 'F2') { trigger = true } }
            else if (key == 'K_F3') { if (event.code === 'F3') { trigger = true } }
            else if (key == 'K_F4') { if (event.code === 'F4') { trigger = true } }
            else if (key == 'K_F5') { if (event.code === 'F5') { trigger = true } }
            else if (key == 'K_F6') { if (event.code === 'F6') { trigger = true } }
            else if (key == 'K_F7') { if (event.code === 'F7') { trigger = true } }
            else if (key == 'K_F8') { if (event.code === 'F8') { trigger = true } }
            else if (key == 'K_F9') { if (event.code === 'F9') { trigger = true } }
            else if (key == 'K_F10') { if (event.code === 'F10') { trigger = true } }
            else if (key == 'K_F11') { if (event.code === 'F11') { trigger = true } }
            else if (key == 'K_F12') { if (event.code === 'F12') { trigger = true } }
            else if (key == 'K_F13') { if (event.code === 'F13') { trigger = true } }
            else if (key == 'K_F14') { if (event.code === 'F14') { trigger = true } }
            else if (key == 'K_F15') { if (event.code === 'F15') { trigger = true } }
            else if (key == 'K_NUMLOCK') { if (event.code === 'NumLock') { trigger = true } }
            else if (key == 'K_CAPSLOCK') { if (event.code === 'CapsLock') { trigger = true } }
            else if (key == 'K_SCROLLOCK') { if (event.code === 'ScrollLock') { trigger = true } }
            else if (key == 'K_RSHIFT') { if (event.code === 'ShiftLeft') { trigger = true } }
            else if (key == 'K_LSHIFT') { if (event.code === 'ShiftRight') { trigger = true } }
            else if (key == 'K_RCTRL') { if (event.code === 'ControlRight') { trigger = true } }
            else if (key == 'K_LCTRL') { if (event.code === 'ControlLeft') { trigger = true } }
            else if (key == 'K_RALT') { if (event.code === 'AltRight') { trigger = true } }
            else if (key == 'K_LALT') { if (event.code === 'AltLeft') { trigger = true } }
            else if (key == 'K_RMETA') { if (event.code === 'MetaRight') { trigger = true } }
            else if (key == 'K_LMETA') { if (event.code === 'MetaLeft') { trigger = true } }
            else if (key == 'K_PRINT') { if (event.code === 'PrintScreen') { trigger = true } }
            else if (key == 'K_SYSREQ') { if (event.code === 'PrintScreen') { trigger = true } }
            else if (key == 'K_MENU') { if (event.code === 'ContextMenu') { trigger = true } }
            else {
                console.error('Unknown key ID')
            }
            if (trigger == true) {
                func.call();
            }
        } else {
            return null
        }
    });
}

/**
 * Grabs data from the URL and converts it to JSON
 * @example
 * // returns {"text":["This is text"]}
 * parseURLParams('https://example.com?text=This%20is%20text')
 * @param {String} url The url to parse to JSON.
 * @returns {JSON} Returns the status
*/
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;
    if (query === url || query === "") return;
    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);
        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

/**
 * Checks if value is imbetween min and max values
 * @param {Number} value The value that needs to be imbetween min and max.
 * @param {Number} min The minium allowed value. (inclusive)
 * @param {Number} max The maxium allowed value. (inclusive)
 * @returns {Boolean} returns a boolean if it is excepted. will also send error via console.
 */
function MinMaxValue(value, min, max) {
    if (value >= max + 1) {
        console.error('Value must be less than ' + max)
        return false;
    } else {
        if (value <= min - 1) {
            console.error('Value must be more than ' + min)
            return false;
        } else {
            return true;
        }
    }

}

/**
 * Add or remove element `error` from elemnt.
 * @param {String} selector The element to apply this error class to.
 * @param {String} action Add or remove the class
 * @returns adds the class to the element.
 */
function errorClass(selector, action) {
    if (action == 'add') {
        document.querySelector(selector).classList.add('error')
        return true;
    } else {
        if (action == 'remove') {
            document.querySelector(selector).classList.remove('error')
            return false;
        } else {
            console.error('missing "action"')
            return null;
        }
    }
}

/**
 * Disables the input
 * @example
 * // will disable the input with the class 'test'
 * disableElement('.test')
 * @param {string} selector The element to disable
*/
function disableElement(selector) {
    document.querySelector(selector).disabled = true;
}

/**
 * Enables the input
 * @example
 * // will enable the input with the class 'test'
 * enableElement('.test')
 * @param {string} selector The element to disable
*/
function enableElement(selector) {
    document.querySelector(selector).disabled = false;
}

/**
 * Will open the url from the elements value
 * @example
 * // Returns the URL value from class 'test'
 * openURL('.test')
 * @param {string} selector The element to disable
 * @return {Sting} The value of the element
*/
function openURL(selector) {
    var url = document.querySelector(selector).value
    window.open(url)
    return url
}

/**
 * Will hide the element.
 * @example
 * // Will hide the element with the class 'test'
 * hideElement('.test')
 * @param {string} selector The element to hide
*/
function hideElement(selector) {
    document.querySelector(selector).style.display = 'none'
}

/**
 * Will shiw the hidden element.
 * @example
 * // Will show the element with the class 'test'
 * showElement('.test')
 * @param {string} selector The element to show
*/
function showElement(selector) {
    document.querySelector(selector).style.display = 'block'
}

/**
 * Sends an error via console and alert message.
 * @param {String} message The element to show
 * @returns {String} The error message
*/
function sendError(message) {
    console.error('Error: ' + message)
    alert('Error: ' + message)
    return 'Error: ' + message
}

/**
 * Add properties to codeblock.
 * @example
 * // Will add a copy button
 * <textarea class="codeblock"></textarea>
 * @param {String} [selector] The jquery selector to use. default: `textarea.codeblock`
 * @param {String} [icon] The Google Material icon to use. default: `content_paste`
*/
function codeblock(selector, icon) {
    if (!selector) { var selector = 'textarea.codeblock' }
    if (!icon) { var icon = 'content_paste' }
    if ($(selector).length > 0) {
        const BLOCK = document.querySelector(selector);
        /* Add custom ID if it has none */
        if (!BLOCK.id) { var ID = uuid(); BLOCK.id = ID } else { var ID = BLOCK.id }
        $("textarea.codeblock").wrap('<div class="codeblock-container" style="position: relative;"></div>')
        $(".codeblock-container").append('<button style="position: absolute; top: 10px; right: 6px; display: none;" onmouseenter="this.style.display = \'block\'" onclick="copyElementId(\'' + ID + '\'); this.style.display = \'none\'" class="codeblock-copy-button material-icons">' + icon + '</button>')
        const CONTAINER = document.querySelector('.codeblock-container');
        /* Copy the height and with of block to container */
        if (BLOCK.style.width == '') {
            CONTAINER.style.width = '40%'
        } else {
            CONTAINER.style.width = BLOCK.style.width
        }

        if (BLOCK.style.height == '') {
            CONTAINER.style.height = '200px'
        } else {
            CONTAINER.style.height = BLOCK.style.height
        }
        BLOCK.style.width = '100%'
        BLOCK.style.height = '100%'
        BLOCK.rows = '0'
        BLOCK.cols = '0'
        /* Apply properties to block */
        BLOCK.readOnly = true;
        BLOCK.onmouseenter = function () { document.querySelector('.codeblock-copy-button').style.display = 'block' }
        BLOCK.onmouseleave = function () { document.querySelector('.codeblock-copy-button').style.display = 'none' }
        BLOCK.style.resize = 'none';

    }
}

/**
 * Gives a new uuid
 * @returns {String} UUIDv4
 */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Will focus on the element
 * @param {String} id The element id to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusId(id, preventScroll) {
    if (preventScroll == true) {
        document.getElementById(id).focus({ preventScroll: true });
    } else {
        document.getElementById(id).focus({ preventScroll: false });
    }
}
/**
 * Will focus on the element
 * @param {*} selector The jquery selector element to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusSelector(selector, preventScroll) {
    if (preventScroll == true) {
        document.querySelector(selector).focus({ preventScroll: true });
    } else {
        document.querySelector(selector).focus({ preventScroll: false });
    }
}

/**
 * Will select the contents of the element
 * @param {String} id The element id to select.
 */
function selectId(id) {
    document.getElementById(id).select();
}
/**
 * Will select the contents of the element
 * @param {String} selector The jquery selector element to select
 */
function selectSelector(selector) {
    document.querySelector(selector).select();
}

/**
 * Will scroll to the element
 * @param {String} id The element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToId(id, smooth) {
    if (smooth == true) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    } else {
        document.getElementById(id).scrollIntoView({ behavior: "auto" })
    }
}
/**
 * Will scroll to the element
 * @param {String} selector The jquery selector element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToSelector(selector, smooth) {
    if (smooth == true) {
        document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    } else {
        document.querySelector(selector).scrollIntoView({ behavior: "auto" });
    }
}

/**
 * Automaticlly places the URL in <a> making it a working URL
 * @param {Array} [selectorList] An array list of all allowed selectors.
 */
function convertURL(selectorList) {
    if (!selectorList) { var selectorList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td'] }
    for (let i = 0; i < selectorList.length; i++) {
        if ($(selectorList[i]).length > 0) {
            document.querySelector(selectorList[i]).innerHTML = document.querySelector(selectorList[i]).innerHTML.trim().replace(/((https?|ftp):\/\/(?:www\.|(?!www))[^\s.]+\.\S{2,}|www\.\S+\.\S{2,})/g, '<!-- Autogenerated --><a href="$1" title="$1" target="_blank">$1</a>')
        }
    }
}

/**
 * Makes the placeholder the default value
 */
function valuePlaceholder() {
    var test = document.querySelector('input')
    test.placeholder = test.value
    console.log(test)

}

/**
 * Converts Hex to RGB
 * @example
 * // returns "51"
 * hexToRgb("#0033ff").g
 * @param {String} hex Hex color to convert
 * @returns The hex color in RGB
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}



/**
 * Converts RGB to hex
 * @example
 * // returns #0033ff
 * rgbToHex(0, 51, 255)
 * @param {Number} r Number of red
 * @param {Number} g Number of green
 * @param {Number} b Number of blue
 * @returns {String} The RGB color in hex
 */
function rgbToHex(r, g, b) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


/**
 * Check if a checkbox is checked or not.
 * @example
 * // returns true or false depending on if it is checked.
 * checked('example-checkbox')
 * // returns yes or no depending if it is checked.
 * checked('example-checkbox','yes','no')
 * @param {String} id The id of the element that is a checkbox.
 * @param {String} [isTrue] returns this value if true.
 * @param {String} [isFalse] returns this value if false.
 * @returns {Boolean} If it is checked or not.
 */
function checked(id, isTrue, isFalse) {
    var element = document.getElementById(id)
    if (isTrue && element.checked == true) {
        return isTrue
    } else if (isFalse && element.checked == false) {
        return isFalse
    } else {
        return element.checked
    }
}

/**
 * Shows a loading modal
 */
function startLoading() {
    document.body.innerHTML = document.body.innerHTML + '<div id="' + randomId(); + '" class="loading-modal" style="opacity: 90%;background-color: black;padding: 10px;border-radius: 5px;position: fixed;top: 40vh;left: 40vw;z-index: 9999;"><div style="text-align: center" class="fa-3x"><i class="fa fa-spinner fa-pulse"></i></div><i onclick="$(\'.loading-modal\').remove();" style=" cursor: pointer;position: absolute;font-size: 20px;top: 4px;right: 4px;" class="fa fa-close close-btn"></i><div style="text-align: center; font-size: 30px;">loading..</div></div>'
}

/**
 * Closes the open loading modal
 */
function stopLoading() {
    $('.loading-modal').remove();
}

/**
 * converts markdown that is inside the HTML to HTML format.
 * @param {Array} selectorList A list of jquery selectors to convert from markdown (that is inside HTML) to HTML.
 */
function markdownHTML(selectorList) {
    if (!selectorList) { var selectorList = ['markdown', '.markdown', '.marked'] };
    for (let i = 0; i < selectorList.length; i++) {
        var test = document.querySelectorAll(selectorList[i]);
        for (let m = 0; m < test.length; m++) {
            if ($(test[m]).length > 0) {
                test[m].innerHTML = marked(test[m].innerHTML.replace(/\\n/g, '\n'));
            }
        }
    }
}