/*
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

﻿ // Genera un número aleatorio entero entre min y max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selecciona el texto de un div
function selectAllText(elem) {
    $(elem).on('mouseup', function () {
        var sel, range;
        var el = $(this)[0];
        if (window.getSelection && document.createRange) { //Browser compatibility
            sel = window.getSelection();
            if (sel.toString() === '') { //no text selection
                window.setTimeout(function () {
                    range = document.createRange(); //range object
                    range.selectNodeContents(el); //sets Range
                    sel.removeAllRanges(); //remove all ranges from selection
                    sel.addRange(range);//add Range to a Selection.
                }, 1);
            }
        } else if (document.selection) { //older ie
            sel = document.selection.createRange();
            if (sel.text === '') { //no text selection
                // noinspection JSUnresolvedFunction
                range = document.body.createTextRange();//Creates TextRange object
                // noinspection JSUnresolvedFunction
                range.moveToElementText(el);//sets Range
                range.select(); //make selection.
            }
        }
    });
}

// Función para transformar colores, oscurece y aclarece
function shadeColor2(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

// Selecciona el texto de un elemento
jQuery.fn.selText = function () {
    var obj = this[0];
    if ($.browser.msie) {
        var range = obj.offsetParent.createTextRange();
        range.moveToElementText(obj);
        range.select();
    } else if ($.browser.mozilla || $.browser.opera) {
        var selection = obj.ownerDocument.defaultView.getSelection();
        var range = obj.ownerDocument.createRange();
        range.selectNodeContents(obj);
        selection.removeAllRanges();
        selection.addRange(range);
    } else if ($.browser.safari) {
        var selection = obj.ownerDocument.defaultView.getSelection();
        selection.setBaseAndExtent(obj, 0, obj, 1);
    }
    return this;
};

// Función que transforma colores y los mezcla
function blendColors(c0, c1, p) {
    var f = parseInt(c0.slice(1), 16),
        t = parseInt(c1.slice(1), 16),
        R1 = f >> 16,
        G1 = f >> 8 & 0x00FF,
        B1 = f & 0x0000FF,
        R2 = t >> 16,
        G2 = t >> 8 & 0x00FF,
        B2 = t & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
}

// Función String.format(...)
if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined' ?
                args[number] :
                match;
        });
    };
}

// Desactiva cualquier elemento por id
function hide_element_id(idelem) {
    try {
        document.getElementById(idelem).style = 'display:none';
    } catch (err) {
        console.log('Error al ocultar id: ' + idelem);
    }
}

// Animación fadein css
function fadein_css(idelem, t) {
    $(idelem).css('animation-name', 'fadeIn');
    $(idelem).css('animation-iteration-count', 1);
    $(idelem).css('animation-timing-function', 'ease-in-out');
    $(idelem).css('animation-duration', t);
    $(idelem).css('animation-fill-mode', 'forwards');
}

// Actualiza el contador de descargas
function update_download_banner(total_downloads) {
    $('#total-download-counter-1').html(total_downloads);
    $('#total-download-counter-2').html(total_downloads);
}

// Efecto de rebote de un elemento
function doBounce(element, times, distance, speed) {
    for (i = 0; i < times; i++) {
        element.animate({
            marginTop: '-=' + distance
        }, speed)
            .animate({
                marginTop: '+=' + distance
            }, speed);
    }
}

// Lanza un error, oculta contenido y muestra un div con información
function throwError(error) {
    console.log(String.format('ERROR[{0}]: {1}', error.code, error.msg));
    $('#whatsnew').attr('style', 'display:none');
    hide_element_id('download-button');
    hide_element_id('download-button-1file');
    hide_element_id('whatsnew');
    hide_element_id('downloadcounter-banner');
    hide_element_id('template-preview-pdf');
    html_error_div = '<div class="tooltip error_msg_1"><div id="errorMsgText"><img src="{2}/erroricon.png" />{0}</div><div></div><div id="errorMoreInfoMsg" class="tooltiptext_errormsg">{1}</div></div>';
    $('#main-content-section').html(String.format(html_error_div, error.msg, error.moreinfo, href_resources_folder));
    backheight = $(window).height() - $('.page-header').innerHeight();
    $('#main-content-section').css('height', backheight);
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
