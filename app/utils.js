/**
 The MIT License (MIT)

 Copyright 2017-2021 Pablo Pizarro R.

 Permission is hereby granted, free of charge, to any person obtaining a
 copy of this software and associated documentation files (the "Software"),
 to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense,
 and/or sell copies of the Software, and to permit persons to whom the Software
 is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// noinspection JSUnusedGlobalSymbols
/**
 * Genera un número aleatorio entero entre min y max.
 *
 * @param {number} min - Mínimo
 * @param {number} max - Máximo
 * @return {number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Selecciona el texto de un elemento.
 *
 * @param {string} elem - Elemento
 */
function selectAllText(elem) {
    $(elem).on('mouseup', function () {
        let sel, range;
        let el = $(this)[0];
        if (window.getSelection && document.createRange) {
            sel = window.getSelection();
            if (sel.toString() === '') {
                window.setTimeout(function () {
                    range = document.createRange();
                    range.selectNodeContents(el);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }, 1);
            }
        } else { // noinspection JSUnresolvedVariable
            if (document.selection) {
                sel = document.selection.createRange();
                if (sel.text === '') {
                    // noinspection JSUnresolvedFunction
                    range = document.body.createTextRange();
                    // noinspection JSUnresolvedFunction
                    range.moveToElementText(el);
                    range.select();
                }
            }
        }
    });
}

// noinspection JSUnusedGlobalSymbols
/**
 * Retorna un color random.
 *
 * @return {string}
 */
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Retorna un color oscuro random.
 *
 * @return {string}
 */
function getRandomDarkColor() {
    let letters = '012345678';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

/**
 * Función String.format(...)
 */
if (!String.format) {
    String.format = function (format) {
        let args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined' ?
                args[number] :
                match;
        });
    };
}

/**
 * Desactiva cualquier elemento por id.
 *
 * @param {string} idelem - ID del elemento
 */
function hide_element_id(idelem) {
    try {
        // noinspection JSValidateTypes
        document.getElementById(idelem).style = 'display:none';
    } catch (err) {
        console.log('Error al ocultar id: ' + idelem);
    }
}

/**
 * Lanza un error, oculta contenido y muestra un div con información.
 *
 * @param {object} error - Texto del error
 */
function throwError(error) {
    // noinspection JSUnresolvedVariable
    console.log(String.format('ERROR[{0}]: {1}', error.code, error.msg));
    $('#whatsnew').attr('style', 'display:none');
    hide_element_id('download-button');
    hide_element_id('download-button-1file');
    hide_element_id('whatsnew');
    hide_element_id('downloadcounter-banner');
    hide_element_id('template-preview-pdf');

    let $html_section = $('#main-content-section');
    let html_error_div = '<div class="tooltip error_msg_1"><div id="errorMsgText"><!--suppress HtmlUnknownTarget --><img src="res/ui/erroricon.png" alt=""/>{0}</div><div></div></div>';
    // noinspection JSUnresolvedVariable
    $html_section.html(String.format(html_error_div, error.msg));
    $('.error_msg_1').tooltipster({
        animation: 'grow',
        content: error.moreinfo,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });
    let backheight = $(window).height() - $('.page-header').innerHeight();
    $html_section.css('height', backheight);
    // noinspection JSDeprecatedSymbols
    $(window).resize(function () {
        backheight = $(window).height() - $('.page-header').innerHeight();
        $('#main-content-section').css('height', backheight);
    });
}

/**
 * Imprime una excepción en consola.
 *
 * @param {object} $e - Excepción
 */
function throwException($e) {
    console.error($e.message);
}

/**
 * Obtiene parámetros de la url.
 *
 * @param name
 * @return {*}
 */
$.urlParam = function (name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
};

/**
 * Retorna verdadero si el objeto no es nulo e indefinido.
 *
 * @param {object} obj - Objeto a comprobar
 * @returns {boolean} - Booleano de comprobación
 */
function notNullUndf(obj) {
    return obj !== null && obj !== undefined;
}

/**
 * Elige una propiedad random desde un objeto.
 *
 * @param obj - Objeto
 * @return {*}
 */
function pickRandomProperty(obj) {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

/**
 * Genera un string aleatorio.
 *
 * @returns {string} - String aleatorio
 */
function generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Ejecuta el popup inicial.
 */
function loadInitialPopup() {
    if (initial_popup.display && initial_popup.content.length > 0 && initial_popup.ignore.indexOf(update_download_counter) === -1) {
        // noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
        $.confirm({
            boxWidth: '35%',
            buttons: {
                close: {
                    keys: ['enter', 'escape'],
                    text: 'Cerrar',
                }
            },
            closeIcon: true,
            content: initial_popup.content,
            escapeKey: 'close',
            title: initial_popup.title,
            useBootstrap: false
        });
    }
}

/**
 * Carga el mensaje de encuesta si aplica.
 */
function loadEncuesta() {
    if (initial_encuesta.display && initial_encuesta.link.length > 0 && sessionCookie.encuesta) {

        // Genera el contenido
        let $checkid = generateID();
        let $form = String.format('<br><form action=""><div class="form-check"><input type="checkbox" class="form-check-input" id="{0}"><label class="form-check-label" for="{0}">No volver a mostrar este mensaje</label></div></form>', $checkid);
        let $content = String.format(initial_encuesta.content, initial_encuesta.link, $form);

        // noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
        $.confirm({
            boxWidth: '30%',
            buttons: {
                close: {
                    keys: ['enter', 'escape'],
                    text: 'Cerrar',
                }
            },
            closeIcon: true,
            content: $content,
            escapeKey: 'close',
            icon: 'fas fa-chart-bar',
            onClose: function () {

                // Carga la respuesta si se deja de mostrar el mensaje
                let $disable = $(String.format('#{0}', $checkid))[0].checked;
                sessionCookie.encuesta = !$disable;
                if ($disable) {
                    console.log('Se ha desactivado el mensaje de la encuesta');
                }
                updateSessionCookie();

            },
            title: initial_encuesta.title,
            useBootstrap: false,
        });

    }
}

/**
 * Retorna un elemento random de una lista
 * @returns {*}
 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};