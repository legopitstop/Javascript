function loadSprite(id, selector) {
    if (document.querySelectorAll('link[rel=spritesheet]')) {
        var spritesheet = document.querySelectorAll('link[rel=spriteheet]')
        for (let i = 0; i < spritesheet.length; i++) {
            $.getJSON(spritesheet[i].href, function (s) {
                if (s.file) {
                    if (s.textures[id]) {
                        var u = -s.textures[id][0] * s.width + s.width
                        var v = -s.textures[id][1] * s.height + s.height
                        $(selector).append('<span class="invslot-item"><span class="sprite" style="background-image: url(' + s.file + ');background-position: ' + u + 'px ' + v + 'px;height: ' + s.height + 'px;width: ' + s.width + 'px;"></span></span>');
                        return true
                    }
                } else {
                    console.error('missing file')
                    return false
                }
            });
        }
    }
}
