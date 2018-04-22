/**
 The MIT License (MIT)

 Copyright 2017,2018 Pablo Pizarro R.

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
 * @param {number} min                  Mínimo
 * @param {number} max                  Máximo
 * @return {*}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Selecciona el texto de un div.
 * @param {string}elem                  Elemento
 * @return
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

/**
 * Función para transformar colores, oscurece y aclarece
 * @param {string} color                Color a generar
 * @param {number} percent              Porcentaje de oscurecimiento
 * @return {string}
 */
function shadeColor2(color, percent) {
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
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
 * Desactiva cualquier elemento por id
 * @param {string} idelem               ID del elemento
 * @return
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
 * Animación fadein css
 * @param {string} idelem               ID del elemento
 * @param {number} t                    Segundos
 * @return
 */
function fadein_css(idelem, t) {
    $(idelem).css('animation-name', 'fadeIn');
    $(idelem).css('animation-iteration-count', 1);
    $(idelem).css('animation-timing-function', 'ease-in-out');
    $(idelem).css('animation-duration', t);
    $(idelem).css('animation-fill-mode', 'forwards');
}

/**
 * Actualiza el contador de descargas
 * @param {number} total_downloads      Descargas totales
 */
function update_download_banner(total_downloads) {
    $('#total-download-counter-1').html(total_downloads);
    $('#total-download-counter-2').html(total_downloads);
}

/**
 * Efecto de rebote de un elemento
 * @param {string} element              Elemento
 * @param {string} times                Número de veces
 * @param {string} distance             Distancia
 * @param {string} speed                VElocidad
 */
function doBounce(element, times, distance, speed) {
    for (let i = 0; i < times; i++) {
        element.animate({
            marginTop: '-=' + distance
        }, speed)
            .animate({
                marginTop: '+=' + distance
            }, speed);
    }
}

/**
 * Lanza un error, oculta contenido y muestra un div con información
 * @param {string} error                Texto del error
 * @return
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
    let html_error_div = '<div class="tooltip error_msg_1"><div id="errorMsgText"><!--suppress HtmlUnknownTarget --><img src="res/ui/erroricon.png" />{0}</div><div></div><div id="errorMoreInfoMsg" class="tooltiptext_errormsg">{1}</div></div>';
    // noinspection JSUnresolvedVariable
    $html_section.html(String.format(html_error_div, error.msg, error.moreinfo, href_resources_folder));
    let backheight = $(window).height() - $('.page-header').innerHeight();
    $html_section.css('height', backheight);
    $(window).resize(function () {
        backheight = $(window).height() - $('.page-header').innerHeight();
        $('#main-content-section').css('height', backheight);
    });
}

// Obtiene parámetros de la url
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
};
