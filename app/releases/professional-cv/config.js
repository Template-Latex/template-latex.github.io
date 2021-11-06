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
let href_github_project = 'https://github.com/Template-Latex/Professional-CV/releases/';
let href_github_project_source = 'https://github.com/Template-Latex/Professional-CV/';
let href_json_releases = 'https://api.github.com/repos/Template-Latex/Professional-CV/releases';
let href_pdf_version = '../Professional-CV/Professional-CV v{0}.pdf';
let stats_name = 'Professional-CV';
let update_download_counter = 'Professional-CV';

/**
 * Declaración de funciones propias de cada template
 */
function afterDocumentReady() {
}

// noinspection JSUnusedGlobalSymbols
function afterJSONLoad() {
    $('#exampletablepdfview1').attr('href', pdf_href_lastv);
    $('#exampletablepdfview2').attr('href', pdf_href_lastv);
}