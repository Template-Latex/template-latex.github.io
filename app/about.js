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

// noinspection ES6ConvertVarToLetConst
/**
 * Información de la aplicación
 * @type {{version: string, date: string, author: {name: string, tag: string, email: string, website: string, github: string}, productname: string, productnamefooter: string, productsource: string}}
 */
var aboutinfo = {
    "version": "3.65",
    "date": "06/05/2018",
    "author": {
        "name": "Pablo Pizarro R.",
        "tag": "@ppizarror",
        "email": "pablo.pizarro@ing.uchile.cl",
        "website": "http://ppizarror.com/",
        "github": "https://github.com/ppizarror"
    },
    "productname": "Template-Latex Web",
    "productnamefooter": "Template-Latex",
    "productsource": "https://github.com/Template-Latex/template-latex.github.io"
};

/**
 * Imprime un acerca-de en consola.
 * @return
 */
function printAboutInfo() {
    console.log(String.format('{0} v{1}', aboutinfo.productname, aboutinfo.version));
    console.log(String.format('{0} | {1}', aboutinfo.author.name, aboutinfo.author.website));
    console.log(' ');
}