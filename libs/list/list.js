
$(document).ready(function () {
    console.log('loaded list.js');
    var getElem = document.querySelectorAll('link[rel=list]');
    for (let i = 0; i < getElem.length; i++) {
        var elem = getElem[i].href
        $.getJSON(elem, function (json) {
            createDataList(json)
        });
    }
});

/**
 * Creates a datalist element inside the HTML that conatins all the values from the JSON.
 * @param {JSON} json The json file to get the values from.
 */
function createDataList(json) {
    if (json.id) {
        $('body').append('<datalist id="' + json.id + '"><datalist></datalist>')
        console.log('list: "' + json.id + '"')
        if (json.examples) {
            $.each(json.examples, function (i, value) {
                if (typeof value == 'string' || typeof value == 'number' || typeof value == 'boolean') {
                    $('#' + json.id).append('<option>' + value + '</option>');
                } else if (typeof value == "object") {
                    if (value.value) {
                        if (value.description) {
                            $('#' + json.id).append('<option value="' + value.value + '">' + value.description + '</option>')
                        } else {
                            $('#' + json.id).append('<option>' + value.value + '</option>')
                        }
                    } else {
                        console.error('missing required key "value"')
                    }
                } else {
                    console.error('Invalid value type')
                }
            });
        } else {
            console.error('missing required key "examples"')
        };
    } else {
        console.error('missing required key "id"')
    };
}