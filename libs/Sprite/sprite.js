/**
 * 
 * @param {String} id The id to search for
 * @param {String} selector The query selector to apply the sprite to
 * @param {JSON} s The spritesheet JSON to search for the id in.
 * @returns If successful it will return the id of the sprite
 */
 function loadSprite(id, selector, s) {
    if (id) {
        if (selector) {
            if (s) {
                if (s.file) {
                    if (s.textures[id]) {
                        var eid = id.replace(/:/gm, '-') + '-' + randomId()
                        var u = -s.textures[id][0] * s.width + s.width
                        var v = -s.textures[id][1] * s.height + s.height
                        $(selector).append(`<span id="${eid}" class="invslot-item"><span class="sprite" style="background-image: url('${s.file}');background-position:${u}px ${v}px; height:${s.height}px; width:${s.width}px;"></span></span>`);
                        return eid
                    }
                } else {
                    console.error('missing file');
                    return false;
                }
            } else {
                console.error('Missing varable "s"');
                return false;
            }
        } else {
            console.error('Missing varable "selector"');
            return false;
        }
    } else {
        console.error('Missing varable "id"');
        return false;
    }
}