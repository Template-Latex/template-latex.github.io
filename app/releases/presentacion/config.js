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
 * Configuraciones
 */
let href_github_project = 'https://github.com/Template-Latex/Template-Presentacion/releases/';
let href_github_project_source = 'https://github.com/Template-Latex/Template-Presentacion/';
let href_json_releases = 'https://api.github.com/repos/Template-Latex/Template-Presentacion/releases';
let href_pdf_version = '../Presentacion/Template-Presentacion v{0}.pdf';
let stats_name = 'Presentacion';
let update_download_counter = 'Template-Presentacion';

/**
 * Declaración de funciones propias de cada template
 */
let downloadOtherBackgroundBlur = 1; // Blur del fondo al mostrar cajón de descargas

function afterDocumentReady() {}

// noinspection JSUnusedGlobalSymbols
function afterJSONLoad() {
    // Links de descargas por cada departamento
    // noinspection JSUnresolvedFunction
    let initAction = $.urlParam('action');
    if (initAction != null) {
        switch (initAction) {
            case 'download':
                $('a[name*=leanModal]').leanModal({
                    closeButton: '.modal_close'
                }).click();
                break;
            case 'download-normal':
                $('#download-button')[0].click();
                break;
        }
    }
}

/**
 * Escribe links de los distintos departamentos.
 *
 * @param {string} verid - ID de la versión
 */
function writeOtherLinks(verid) {
    let deptos = [
        ['Área de Humanidades', 'adh'],
        ['Departamento de Astronomía', 'das'],
        ['Departamento de Ciencias de la Computación', 'dcc'],
        ['Departamento de Física', 'dfi'],
        ['Departamento de Geofísica', 'dgf'],
        ['Departamento de Geología', 'geo'],
        ['Departamento de Ingeniería Civil', 'dic'],
        ['Departamento de Ingeniería Eléctrica', 'die'],
        ['Departamento de Ingeniería En Minas', 'minas'],
        ['Departamento de Ingeniería Industrial', 'dii'],
        ['Departamento de Ingeniería Matemática', 'dim'],
        ['Departamento de Ingeniería Mecánica', 'dimec'],
        ['Departamento de Ingeniería Química, Biotecnología y Materiales', 'diqbtm'],
        ['Departamento de Postgrado y Postítulo', 'postgrado'],
        ['Facultad de Ciencias Físicas y Matemáticas', 'fcfm'],
        ['Universidad de Chile', 'uchile']
    ];

    // Genera el contenido
    let $contents = $('#downloadother-contents');
    $('#downloadtitle-title').html(String.format('Descargas v{0}', verid));
    // noinspection HtmlUnknownTarget
    $contents.append(String.format('<div class="downloadother-entry downloadother-compact"><div class="downloadother-name">Versión completa</div><div class="downloadother-link"><a href="{0}download/{1}/Template-Tesis.zip">Descargar</a></div></div>', href_github_project, verid));
    for (let i = 0; i < deptos.length; i += 1) {
        // noinspection HtmlUnknownTarget
        $contents.append(String.format('<div id="downloadentry-{1}" class="downloadother-entry"><div class="downloadother-name">{0}</div><div class="downloadother-link"><a href="{3}download/{2}/Template-Tesis-{1}.zip" class="otherdownloadclickeable">Descargar</a></div></div>', deptos[i][0], deptos[i][1], verid, href_github_project));
    }

}