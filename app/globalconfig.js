/**
 The MIT License (MIT)

 Copyright 2017-2018 Pablo Pizarro R.

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
 * Configuraciones de toda la suite Template-Latex
 */
var blurlimits = [3, 10];
var blurprobability = 50;
var changelog_max = 5;
var changelog_show_hr = false;
var changepacecolor = false;
var enableparallax = true;
var gitter_href = 'https://gitter.im/Template-Latex/';
var nan_value = 'NaN';
var otherdownloadsfadetime = 400;
var pdf_js_href = 'http://latex.ppizarror.com/pdf-version/web/viewer.html?file=';
var seconds_update_downloadCounter = 60;
var stats_href = 'http://latex.ppizarror.com/stats/?template=';
var update_downloads_version = true;

/**
 * Aviso inicial
 */
var initial_popup = {
    content: 'La web de Template-Informe se encuentra en proceso de actualización a modo de preparación para la versión <b>5.0.0</b>, es posible que existan algunos errores en el funcionamiento. <br><br>Saludos!<br>--<br>Pablo Pizarro <a href="http://ppizarror.com">@ppizarror</a>',
    display: true,
    title: 'Nueva versión 5.0.0'
};

/**
 * Mensajes de error
 */
var errors = {
    "cantGetVersion": {
        "msg": "No se pudo obtener la última versión.",
        "code": 0,
        "moreinfo": "Error de conexión con servidor de Github, intente nuevamente."
    },
    "cantLoadJson": {
        "msg": "No se pudo acceder al JSON de releases de Github.",
        "code": 1,
        "moreinfo": "Error de conexión con servidor de Github, intente nuevamente."
    },
    "retrieveContentVersions": {
        "msg": "Error al obtener la descripción de las versiones del Template.",
        "code": 2,
        "moreinfo": "Ocurrió un error crítico al obtener la descripción de las versiones del Template (changelog) desde el servidor de Github, probable error de configuración, error en showdown.js o bien error de conexión con el servidor."
    }
};