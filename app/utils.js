/**
 The MIT License (MIT)

 Copyright 2017 Pablo Pizarro R.

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

/**
 * Selecciona el texto de un elemento.
 *
 * @param {string} $elem - Elemento
 */
function selectAllText($elem) {
    $($elem).on('mouseup', function () {
        let $sel, $range;
        const $el = $(this)[0];
        if (window.getSelection && document.createRange) {
            $sel = window.getSelection();
            if ($sel.toString() === '') {
                window.setTimeout(function () {
                    $range = document.createRange();
                    $range.selectNodeContents($el);
                    $sel.removeAllRanges();
                    $sel.addRange($range);
                }, 1);
            }
        } else { // noinspection JSUnresolvedVariable
            if (document.selection) {
                $sel = document.selection.createRange();
                if ($sel.text === '') {
                    // noinspection JSUnresolvedFunction
                    $range = document.body.createTextRange();
                    // noinspection JSUnresolvedFunction
                    $range.moveToElementText($el);
                    $range.select();
                }
            }
        }
    });
}

/**
 * Retorna un color oscuro random.
 *
 * @return {string}
 */
function getRandomDarkColor() {
    const $letters = '012345678';
    let $color = '#';
    for (let $i = 0; $i < 6; $i++) {
        $color += $letters[Math.floor(Math.random() * $letters.length)];
    }
    return $color;
}

/**
 * Función String.format(...)
 */
if (!String.format) {
    String.format = function ($format) {
        let $args = Array.prototype.slice.call(arguments, 1);
        return $format.replace(/{(\d+)}/g, function (match, number) {
            return typeof $args[number] !== 'undefined' ?
                $args[number] :
                match;
        });
    };
}

/**
 * Desactiva cualquier elemento por id.
 *
 * @param {string} $id_elem - ID del elemento
 */
function hideElementId($id_elem) {
    try {
        document.getElementById($id_elem).style = 'display:none';
    } catch (err) {
        console.log('Error al ocultar id: ' + $id_elem);
    }
}

/**
 * Lanza un error, oculta contenido y muestra un div con información.
 *
 * @param {object} $error - Texto del error
 */
function throwError($error) {
    console.log(String.format('ERROR[{0}]: {1}', $error.code, $error.msg));
    $('#whatsnew').attr('style', 'display:none');
    hideElementId('download-button');
    hideElementId('download-button-1file');
    hideElementId('whatsnew');
    hideElementId('downloadcounter-banner');
    hideElementId('template-preview-pdf');

    const $html_section = $('#main-content-section');
    const $html_error_div = '<div class="tooltip error_msg_1"><div id="errorMsgText"><img src="res/ui/erroricon.png" alt=""/>{0}</div><div></div></div>';
    $html_section.html(String.format($html_error_div, $error.msg));
    $('.error_msg_1').tooltipster({
        animation: 'grow',
        content: $error.moreinfo,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });
    /** @type {number} */ let $backheight = $(window).height() - $('.page-header').innerHeight();
    $html_section.css('height', $backheight);
    // noinspection JSDeprecatedSymbols
    $(window).resize(function () {
        $backheight = $(window).height() - $('.page-header').innerHeight();
        $('#main-content-section').css('height', $backheight);
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
 * @param $name
 * @return {*}
 */
$.urlParam = function ($name) {
    let $results = new RegExp('[\?&]' + $name + '=([^&#]*)').exec(window.location.href);
    if ($results == null) return null;
    return decodeURI($results[1]) || 0;
};

/**
 * Retorna verdadero si el objeto no es nulo e indefinido.
 *
 * @param {object} $obj - Objeto a comprobar
 * @returns {boolean} - Booleano de comprobación
 */
function notNullUndf($obj) {
    return $obj !== null && $obj !== undefined;
}

/**
 * Elige una propiedad random desde un objeto.
 *
 * @param $obj - Objeto
 * @return {*}
 */
function pickRandomProperty($obj) {
    let $result;
    /** @type {number} */ let $count = 0;
    for (let $prop in $obj)
        if (Math.random() < 1 / ++$count)
            $result = $prop;
    return $result;
}

/**
 * Genera un string aleatorio.
 *
 * @returns {string} - String aleatorio
 */
function generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        /** @type {number} */ let $r = Math.random() * 16 | 0;
        /** @type {number} */ let $v = c === 'x' ? $r : ($r & 0x3 | 0x8);
        return $v.toString(16);
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
        let $checkid = generateID();
        let $content = String.format(initial_encuesta.content, initial_encuesta.link, `
            <br><form action="">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="${$checkid}">
                    <label class="form-check-label" for="${$checkid}">No volver a mostrar este mensaje</label>
                </div>
            </form>
        `);

        // noinspection JSCheckFunctionSignatures,JSUnresolvedFunction,JSUnusedGlobalSymbols
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

// noinspection JSUnusedGlobalSymbols
/**
 * Retorna un elemento random de una lista.
 *
 * @returns {*}
 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

/**
 * Agrega un contador de descargas.
 *
 * @param {number} $total - Total de descargas
 */
function addDownloadCounter($total) {
    /** @type {number} */ let $ttotal = $total;
    /** @type {number} */ let $size = 210;
    if ($total < 100) {
        $size = 140;
    } else if (1000 <= $total < 10000) {
        $size = 230;
    }
    if ($total >= 1000) {
        /** @type {number} */ let $factor = 1;
        if ($total <= 10000) $factor = 10;
        $total = (Math.round($total * $factor / 1000) / $factor).toString() + 'k';
    } else {
        $total = $total.toString();
    }
    $('#templatestats').html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="20" role="img" aria-label="Descargas: ${$ttotal}">
       <title>Descargas: ${$ttotal}</title>
       <linearGradient id="s" x2="0" y2="100%">
          <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
          <stop offset="1" stop-opacity=".1"/>
       </linearGradient>
       <clipPath id="r">
          <rect width="98" height="20" rx="3" fill="#fff"/>
       </clipPath>
       <g clip-path="url(#r)">
          <rect width="67" height="20" fill="#555"/>
          <rect x="67" width="31" height="20" fill="#4c1"/>
          <rect width="98" height="20" fill="url(#s)"/>
       </g>
       <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
          <text aria-hidden="true" x="345" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${370 + $size}">Descargas</text>
          <text x="345" y="140" transform="scale(.1)" fill="#fff" textLength="570">Descargas</text>
          <text aria-hidden="true" x="815" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${$size}">${$total}</text>
          <text x="815" y="140" transform="scale(.1)" fill="#fff" textLength="${$size}">${$total}</text>
       </g>
    </svg>`);
}