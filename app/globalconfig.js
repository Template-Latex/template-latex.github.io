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

/**
 * Configuraciones de toda la suite Template-Latex
 */
let backgroundResize;               // Ajuste del fondo
let blurlimits = [3, 5];            // Límites del blur en px
let blurprobability = 50;           // Probabilidad de blur
let changelog_max = 10;             // Número máximo de cambios en changelog
let changelog_show_hr = false;      // Muestra título en changelog
let changepacecolor = true;         // Cambiar el color de pace
let enableparallax = true;          // Activa el parallax
// let gitter_href = 'https://gitter.im/Template-Latex/'; // Página gitter
let nan_value = 'NaN';              // Valor NaN como string
let otherdownloadsfadetime = 400;   // Tiempo de fade para descargas
let parallaxloaded = false;         // Indica que parallax ya se cargó
let pdf_js_href = 'https://latex.ppizarror.com/pdf-version/web/viewer.html?file=';
let scrollLock = false;             // Indica que la función $.scrollLock se activó
let seconds_update_downloadCounter = 60 * 5; // Tiempo de refresco actualización contador descargas
let stats_href = 'https://latex.ppizarror.com/stats/?template=';
let update_downloads_version = true;

/**
 * Aviso inicial
 */
let initial_popup = {
    content: '',
    display: true,
    title: ''
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
let notification = {
    'encuesta': {
        'content': '¿Te gustaría participar de la encuesta de uso del template?<br><a href="https://forms.gle/xf9AEYbSuzGtqvWS6" target="_blank">https://forms.gle/xf9AEYbSuzGtqvWS6</a>',
        'persistent': true
    },
    'sabiasque': {
        '1': 'Existen más de 20 estilos de portada distintos, revisa las configuraciones :)',
        '2': 'El template está escrito en más de 6k líneas de código en LaTeX',
        '3': 'Existen más de 15 estilos de header-footer, revisa las configuraciones :)',
        '4': 'Existen más de 170 configuraciones en el template',
        '5': 'El template da soporte a más de 40 lenguajes de programación',
        '6': 'Es posible cambiar la fuente del texto, revisa las configuraciones :)',
        '7': 'Es posible cambiar todos los colores del documento, revisa las configuraciones :)',
        '8': 'Es posible cambiar los tamaños de todos los textos del documento, revisa las configuraciones :)',
        '9': 'El template se viene desarrollando desde el año 2016',
        '10': 'Existe tanto template informe, template auxiliares, template controles y professional-cv',
        '11': 'El índice puede tener distintos tipos de orden, revisa las configuraciones :)',
        '12': 'El autor @ppizarror les quiere mucho',
        '13': 'En promedio el template se actualiza cada 2 semanas',
        '14': 'El manual online sólo da soporte a la última versión del template',
        '15': 'La versión 6 es la que más cambios ha tenido',
        '16': 'El template tiene soporte completo en overleaf',
        '17': 'Se puede cambiar la posición de todas las leyendas de los objetos, revisa las configuraciones :)',
        '18': 'Existe un <i>easter-egg</i> que nadie aún lo ha encontrado',
        '19': 'Se puede cambiar el nombre de todos los elementos del template, revisa las configuraciones :)',
        '20': 'En primavera del año 2019 se lanzará template-tesis',
        '21': 'Junto a template-tesis se lanzará la versión 7 de template-informe',
        '22': 'Todos los subtemplates nacen a partir de template-informe',
        '23': 'Template-Informe es usado por personas de más de 30 países en el mundo',
        '24': 'La primera versión pública del template fue la 1.8.5',
        '25': 'El autor hizo un taller de LaTex? <a href="https://ppizarror.com/taller-latex" target="_blank">https://ppizarror.com/taller-latex</a>',
        '26': 'La mejor manera de crear tablas en LaTeX es usar Excel2LaTeX',
        '27': 'Si usas TexStudio existe un plugin para autocompletar todas las funciones del template<br><a href="https://github.com/Template-Latex/cwl-docs" target="_blank">https://github.com/Template-Latex/cwl-docs</a>',
        '28': 'El autor @ppizarror recomienda utilizar TexStudio para windows/linux y Overleaf para la web',
        '29': 'Un 70% de la gente prefire descargar la versión normal, 30% la modificada',
        '30': 'El departamento que más descarga el template es eléctrica (13%), seguido de ingeniería civil (12%) y ciencias de la computación (11%)',
        '31': 'Es posible cambiar el color de la página, revisa las configuraciones :)',
        '32': 'Puedes sugerir feedback o notificar de cualquier error al correo',
        '33': 'Template-Tesis se viene anunciando de 2017',
        '34': 'La configuración <i>\\portraitstyle</i> permite cambiar la portada del documento',
        '35': 'La configuración <i>\\hfstyle</i> permite cambiar la cabecera y pié de página del documento',
        '36': 'Es posible desactivar la numeración con números romanos del principio del documento con la configuración <i>\\predocromannumber</i>',
        '37': 'LaTeX data desde el año 1984',
        '38': 'Puedes seguir el desarrollo de Template-Informe dando una estrella a su página en github <a href="https://github.com/Template-Latex/Template-Informe/" target="_blank">https://github.com/Template-Latex/Template-Informe/</a>',
        '39': 'Los lenguajes más utilizados en el template son Java, Python y Matlab',
        '40': 'El template importa y configura más de 60 librerías para funcionar',
        '41': 'Es recomendable utilizar imagenes .eps o .pdf para tener mayor resolución',
        '42': '¿Te aburre la mismo tipo de letra siempre? Prueba modificando la configuración <i>\\fontdocument</i>',
        '43': '¿Te aburre siempre la misma portada? Prueba modificando la configuración <i>\\portraitstyle</i>',
        '44': '¿Te gustaría tener el texto de las leyendas en negrita? Prueba modificando la configuración <i>\\captiontextbold</i>',
        '45': '¿Eres ayudante o profesor de algún curso? Prueba utilizando Template-Controles o Template-Auxiliares',
    }
};

/**
 * ID de las cookies
 * @type {string}
 * @const
 * @global
 * @ignore
 */
const cfg_cookie_session_id = 'Rr3R8yAZ6k';

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