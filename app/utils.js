/**
 The MIT License (MIT)

 Copyright 2017-2019 Pablo Pizarro R.

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
 * @function
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
 * @function
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

/**
 * Función para transformar colores, oscurece y aclarece.
 *
 * @function
 * @param {string} color - Color a generar
 * @param {number} percent - Porcentaje de oscurecimiento
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

// noinspection JSUnusedGlobalSymbols
/**
 * Retorna un color random.
 *
 * @function
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
 * @function
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
 * @function
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
 * Animación fadein css.
 *
 * @function
 * @param {string} idelem - ID del elemento
 * @param {string} t - Segundos
 */
function fadein_css(idelem, t) {
    $(idelem).css('animation-name', 'fadeIn');
    $(idelem).css('animation-iteration-count', 1);
    $(idelem).css('animation-timing-function', 'ease-in-out');
    $(idelem).css('animation-duration', t);
    $(idelem).css('animation-fill-mode', 'forwards');
}

/**
 * Actualiza el contador de descargas.
 *
 * @function
 * @param {number} total_downloads - Descargas totales
 */
function update_download_banner(total_downloads) {
    $('#total-download-counter-1').html(total_downloads);
    $('#total-download-counter-2').html(total_downloads);
}

/**
 * Efecto de rebote de un elemento.
 *
 * @function
 * @param {string} element - Elemento
 * @param {number} times - Número de veces
 * @param {string} distance - Distancia
 * @param {number} speed - Velocidad
 */
function doBounce(element, times, distance, speed) {
    for (let i = 0; i < times; i++) {
        // noinspection JSUnresolvedFunction
        element.animate({
            marginTop: '-=' + distance
        }, speed)
            .animate({
                marginTop: '+=' + distance
            }, speed);
    }
}

/**
 * Lanza un error, oculta contenido y muestra un div con información.
 *
 * @function
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
    $(window).resize(function () {
        backheight = $(window).height() - $('.page-header').innerHeight();
        $('#main-content-section').css('height', backheight);
    });
}

/**
 * Imprime una excepción en consola.
 *
 * @function
 * @param {object} $e - Excepción
 */
function throwException($e) {
    console.error($e.message);
}

/**
 * Obtiene parámetros de la url.
 *
 * @function
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
 * @function
 * @param {object} obj - Objeto a comprobar
 * @returns {boolean} - Booleano de comprobación
 */
function notNullUndf(obj) {
    return obj !== null && obj !== undefined;
}

/**
 * Escribe los badges de la suite Template-Latex.
 *
 * @function
 */
function writeBadges() {
    let $badgediv = $('#badgeslistdiv');
    $badgediv.html('');

    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/tesis.html" class="aimg"><img src="res/badges/tesis.svg" style="display: none" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/apunte.html" class="aimg"><img src="res/badges/apunte.svg" style="display: none" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/tareas.html" class="aimg"><img src="res/badges/tareas.svg" style="display: none" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/auxiliares.html" class="aimg"><img src="res/badges/auxiliares.svg" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/controles.html" class="aimg"><img src="res/badges/controles.svg" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/pautas.html" class="aimg"><img src="res/badges/pauta.svg" style="display: none"  alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/informe.html" class="aimg"><img src="res/badges/informe.svg" alt=""/></a> ');
    // noinspection HtmlUnknownTarget
    $badgediv.append('<a href="https://latex.ppizarror.com/professional-cv.html" class="aimg"><img src="res/badges/professionalcv.svg" alt=""/></a>');
    $badgediv.fadeIn('slow');
}

/**
 * Elige una propiedad random desde un objeto.
 *
 * @function
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
 * @function
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
 *
 * @function
 */
function loadInitialPopup() {
    if (initial_popup.display && initial_popup.content.length > 0) {
        // noinspection JSCheckFunctionSignatures
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
            useBootstrap: false,
        });
    }
}

/**
 * Carga el mensaje de encuesta si aplica.
 *
 * @function
 */
function loadEncuesta() {
    if (initial_encuesta.display && initial_encuesta.link.length > 0 && sessionCookie.encuesta) {

        // Genera el contenido
        let $checkid = generateID();
        let $form = String.format('<br><form action=""><div class="form-check"><input type="checkbox" class="form-check-input" id="{0}"><label class="form-check-label" for="{0}">No volver a mostrar este mensaje</label></div></form>', $checkid);
        let $content = String.format(initial_encuesta.content, initial_encuesta.link, $form);

        // noinspection JSCheckFunctionSignatures
        $.confirm({
            boxWidth: '45%',
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