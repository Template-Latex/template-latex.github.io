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

/**
 * Configuraciones de toda la suite Template-Latex
 */
let backgroundResize;               // Ajuste del fondo
let blurlimits = [3, 5];            // Límites del blur en px
let blurprobability = 15;           // Probabilidad de blur
let changelog_max = 10;             // Número máximo de cambios en changelog
let changelog_show_hr = false;      // Muestra título en changelog
let changepacecolor = true;         // Cambiar el color de pace
let enableparallax = true;          // Activa el parallax
// let gitter_href = 'https://gitter.im/Template-Latex/'; // Página gitter
let nan_value = 'NaN';              // Valor NaN como string
let otherdownloadsfadetime = 400;   // Tiempo de fade para descargas
let parallaxloaded = false;         // Indica que parallax ya se cargó
let pdf_js_href = 'https://latex.ppizarror.com/pdf-version/web/viewer?file=';
let scrollLock = false;             // Indica que la función $.scrollLock se activó
let stats_href = 'https://latex.ppizarror.com/stats?template=';

/**
 * Aviso inicial
 */
let initial_popup = {
    content: 'La página está en actualizaciones por la nueva versión 8 del template, que saldrá dentro de los próximos días. Ésta incluye dos nuevos templates (Artículo, Poster), soporte para múltiples idiomas, soporte para letras en unicode, una mejor capa de personalización, corrección de errores, entre <a href="https://github.com/Template-Latex/Template-Informe/compare/7.4.1...master#diff-6b465f429d8fe56b3480ab8ff597e06baf2102e508552b0145cf08b1c6b66719">cientos de otros cambios</a>.',
    display: true,
    ignore: ['Template-v8'],
    title: 'Nueva versión 8 del Template'
};

/**
 * Encuesta
 */
let initial_encuesta = {
    content: '',
    display: false,
    link: '',
    title: ''
};

/**
 * Notificaciones
 */
let notification = {};

/**
 * ID de las cookies
 * @type {string}
 * @const
 * @global
 * @ignore
 */
const cfg_cookie_session_id = 'er3t8yAZ6k';

/**
 * Días antes que las cookies expiren
 * @type {number}
 * @const
 * @global
 * @ignore
 */
const cfg_cookie_expire_days = 60;

/**
 * Botón backToTop
 */
let backToTop;

/**
 Cookies de la sesión
 */
let sessionCookie;

/**
 * Mensajes de error
 */
let errors = {
    "cantGetVersion": {
        "msg": "No se pudo obtener la última versión",
        "code": 0,
        "moreinfo": "Error de conexión con servidor de Github, intente nuevamente"
    },
    "cantLoadJson": {
        "msg": "No se pudo acceder al JSON de releases de Github",
        "code": 1,
        "moreinfo": "Error de conexión con servidor de Github, intente nuevamente"
    },
    "retrieveContentVersions": {
        "msg": "Error al obtener la descripción de las versiones del Template",
        "code": 2,
        "moreinfo": "Ocurrió un error crítico al obtener la descripción de las versiones del Template (changelog) desde el servidor de Github, probable error de configuración, error en showdown.js o bien error de conexión con el servidor"
    },
};