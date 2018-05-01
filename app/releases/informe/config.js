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

// Configuraciones
var href_github_project = 'https://github.com/Template-Latex/Template-Informe/releases/';
var href_github_project_source = 'https://github.com/Template-Latex/Template-Informe/';
var href_json_releases = 'https://api.github.com/repos/Template-Latex/Template-Informe/releases';
var href_pdf_version = '../Informe/Template-Informe v{0}.pdf';
var stats_name = 'Informe';
var update_download_counter = 'Template-Informe';

// Declaración de funciones propias de cada template
var bounceStyleReferences, bounceImageFolderConfig; // Efecto en entrada de configuración
var downloadOtherBackgroundBlur = 1; // Blur del fondo al mostrar cajón de descargas
var hfGallery; // Muestra la galería de header-footer
var line_abstract = [87, 228]; // Número de línea de abstract/resumen
var line_authortable = [33, 34]; // Número de línea tabla de integrantes
var line_configimport = [63, 64]; // Número línea importación de configuraciones
var line_docinit = [98, 239]; // Número de línea inicio del documento
var line_infodocument = [18, 19]; // Número de línea información del documento
var portraitGallery; // Muestra la galería de portadas

// Lista de códigos fuente
// noinspection CssUnusedSymbol
var cmd_sourcecode = {
    'c': '\\begin{sourcecode}[]{c}{Codigo en c.}\n' +
    '#include <stdio.h>\n' +
    'int main(){\n' +
    '\tint i, j, rows;\n' +
    '\t\n' +
    '\tprintf("Enter number of rows: ");\n' +
    '\tscanf("%d",&rows);\n' +
    '\t\n' +
    '\tfor(i=1; i<=rows; ++i){\n' +
    '\t\tfor(j=1; j<=i; ++j){\n' +
    '\t\t\tprintf("* ");\n' +
    '\t\t}\n' +
    '\t\tprintf("\\n");\n' +
    '\t}\n' +
    '\treturn 0;\n' +
    '}\n' +
    '\\end{sourcecode}',

    'csharp': '\\begin{sourcecode}[]{csharp}{Ejemplo en C\\#.}\n' +
    '/*\n' +
    '* C# Program to Get a Number and Display the Sum of the Digits \n' +
    '*/\n' +
    'using System;\n' +
    'using System.Collections.Generic;\n' +
    'using System.Linq;\n' +
    'using System.Text;\n' +
    '\n' +
    'namespace Program\n' +
    '{\n' +
    '\tclass Program\n' +
    '\t{\n' +
    '\t\tstatic void Main(string[] args)\n' +
    '\t\t{\n' +
    '\t\t\tint num, sum = 0, r;\n' +
    '\t\t\tConsole.WriteLine("Enter a Number : ");\n' +
    '\t\t\tnum = int.Parse(Console.ReadLine());\n' +
    '\t\t\twhile (num != 0)\n' +
    '\t\t\t{\n' +
    '\t\t\t\tr = num % 10;\n' +
    '\t\t\t\tnum = num / 10;\n' +
    '\t\t\t\tsum = sum + r;\n' +
    '\t\t\t}\n' +
    '\t\t\tConsole.WriteLine("Sum of Digits of the Number : "+sum);\n' +
    '\t\t\tConsole.ReadLine();\n' +
    '\t\t\t\n' +
    '\t\t}\n' +
    '\t}\n' +
    '}\n' +
    '\\end{sourcecode}',

    'cpp': '\\begin{sourcecode}{cpp}{Suma en C++.}\n' +
    '#include <iostream>\n' +
    'using namespace std;\n' +
    '\n' +
    'int main()\n' +
    '{\n' +
    '\tint n, sum = 0;\n' +
    '\t\n' +
    '\tcout << "Enter a positive integer: ";\n' +
    '\tcin >> n;\n' +
    '\t\n' +
    '\tfor (int i = 1; i <= n; ++i) {\n' +
    '\t\tsum += i;\n' +
    '\t}\n' +
    '\t\n' +
    '\tcout << "Sum = " << sum;\n' +
    '\treturn 0;\n' +
    '}\n' +
    '\\end{sourcecode}',

    'docker': '\\begin{sourcecode}{docker}{Docker.}\n' +
    'version: \'2\'\n' +
    'services:\n' +
    'web:\n' +
    'build: .\n' +
    'ports:\n' +
    '- "5000:5000"\n' +
    'volumes:\n' +
    '- .:/code\n' +
    '- logvolume01:/var/log\n' +
    'links:\n' +
    '- redis\n' +
    'redis:\n' +
    'image: redis\n' +
    'volumes:\n' +
    '\\end{sourcecode}',

    'html5': '\\begin{sourcecode}[\\label{codigo-html5}]{html5}{Ejemplo en HTML5.}\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '\t<title>Página</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\t<style>\n' +
    '\t\t.titulo {\n' +
    '\t\t\tcolor: #ff0000;\n' +
    '\t\t}\n' +
    '\t</style>\n' +
    '\t<div class=".titulo">Hola</div>\n' +
    '</body>\n' +
    '</html>\n' +
    '\\end{sourcecode}',

    'java': '\\begin{sourcecode}[\\label{codigo-java}]{java}{Ejemplo en Java.}\n' +
    'import java.io.IOException; \n' +
    'import javax.servlet.*;\n' +
    '\n' +
    '// Hola mundo\n' +
    'public class Hola extends GenericServlet {\n' +
    '\tpublic void service(ServletRequest request, ServletResponse response)\n' +
    '\tthrows ServletException, IOException{\n' +
    '\t\tresponse.setContentType("text/html");\n' +
    '\t\tPrintWriter pw = response.getWriter();\n' +
    '\t\tpw.println("Hola, mundo!");\n' +
    '\t\tpw.close();\n' +
    '\t}\n' +
    '}\n' +
    '\\end{sourcecode}',

    'js': '\\begin{sourcecode}{js}{Ejemplo en Javascript.}\n' +
    '$.urlParam = function (name) {\n' +
    '\tlet results = new RegExp(\'[\\?&]\' + name + \'=([^&#]*)\').exec(window.location.href);\n' +
    '\tif (results == null) {\n' +
    '\t\treturn null;\n' +
    '\t} else {\n' +
    '\t\treturn decodeURI(results[1]) || 0;\n' +
    '\t}\n' +
    '};\n' +
    '\\end{sourcecode}',

    'json': '\\begin{sourcecode}{json}{Un arreglo en JSON.}\n' +
    '{"menu": {\n' +
    '\t"id": "file",\n' +
    '\t"value": "File",\n' +
    '\t"popup": {\n' +
    '\t\t"menuitem": [\n' +
    '\t\t{"value": "New", "onclick": "CreateNewDoc()"},\n' +
    '\t\t{"value": "Open", "onclick": "OpenDoc()"},\n' +
    '\t\t{"value": "Close", "onclick": "CloseDoc()"}\n' +
    '\t\t]\n' +
    '\t}\n' +
    '}}\n' +
    '\\end{sourcecode}',

    'matlab': '\\begin{sourcecode}[\\label{codigo-matlab}]{matlab}{Ejemplo en Matlab.}\n' +
    '% Se crea gráfico\n' +
    'f = figure(1);\n' +
    'hold on;\n' +
    'movegui(f, \'center\');\n' +
    'xlabel(\'td/Tn\'); ylabel(\'FAD=Umax/Uf0\');\n' +
    'title(\'Espectro de pulso de desplazamiento\');\n' +
    '\n' +
    'for j = 1:length(BETA)\n' +
    '\tfad = ones(1, NDATOS); % Arreglo para el FAD, uno para cada r\n' +
    '\tfor i = 1:NDATOS\n' +
    '\t\t[t, u_t, ~, ~] = main(BETA(j), r(i), M, K, F0, 0);\n' +
    '\t\tfad(i) = max(abs(u_t)) / uf0;\n' +
    '\tend\n' +
    'mx = find(fad == max(fad(:)));\n' +
    'fprintf(\'BETA=%.2f, MAX: FAD=%.3f, TD/TN=%.3f\\n\', BETA(j), fad(mx), tdtn(mx));\n' +
    'plot(tdtn, fad, \'DisplayName\', strcat(\'\\beta=\', sprintf(\'%.2f\', BETA(j))));\n' +
    'end\t\n' +
    '\\end{sourcecode}',

    'latex': '\\begin{sourcecode}{latex}{Imágenes múltiples.}\n' +
    '\\begin{images}[\\label{imagenmultiple}]{Ejemplo de imagen múltiple.}\n' +
    '\t\\addimage{ejemplos/test-image}{width=6.5cm}{Ciudad}\n' +
    '\t\\addimage{ejemplos/test-image-wrap}{width=5cm}{Apolo}\n' +
    '\t\\addimage{ejemplos/test-image}{width=12cm}{Ciudad más grande}\n' +
    '\\end{images}\n' +
    '\\end{sourcecode}',

    'perl': '\\begin{sourcecode}[\\label{ejemplito-perl}]{perl}{Algo de perl.}\n' +
    '#!/usr/bin/perl\n' +
    'use strict;\n' +
    'use warnings;\n' +
    '\n' +
    '# first, create your message\n' +
    'use Email::MIME;\n' +
    'my $message = Email::MIME->create(\n' +
    '  header_str => [\n' +
    '    From    => \'you@example.com\',\n' +
    '    To      => \'friend@example.com\',\n' +
    '    Subject => \'Happy birthday!\',\n' +
    '  ],\n' +
    '  attributes => {\n' +
    '    encoding => \'quoted-printable\',\n' +
    '    charset  => \'ISO-8859-1\',\n' +
    '  },\n' +
    '  body_str => "Happy birthday to you!\\n",\n' +
    ');\n' +
    '\n' +
    '# send the message\n' +
    'use Email::Sender::Simple qw(sendmail);\n' +
    'sendmail($message);\n' +
    '\\end{sourcecode}',

    'php': '\\begin{sourcecode}{php}{Ejemplo php.}\n' +
    '<?php\n' +
    '$target_dir = "uploads/";\n' +
    '$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);\n' +
    '$uploadOk = 1;\n' +
    '$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));\n' +
    '// Check if image file is a actual image or fake image\n' +
    'if(isset($_POST["submit"])) {\n' +
    '    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);\n' +
    '    if($check !== false) {\n' +
    '        echo "File is an image - " . $check["mime"] . ".";\n' +
    '        $uploadOk = 1;\n' +
    '    } else {\n' +
    '        echo "File is not an image.";\n' +
    '        $uploadOk = 0;\n' +
    '    }\n' +
    '}\n' +
    '?>\n' +
    '\\end{sourcecode}',

    'python': '\\begin{sourcecode}[\\label{codigo-python}]{python}{Ejemplo en Python.}\n' +
    'import numpy as np\n' +
    '\n' +
    'def incmatrix(genl1, genl2):\n' +
    'm = len(genl1)\n' +
    'n = len(genl2)\n' +
    'M = None # Comentario 1\n' +
    'VT = np.zeros((n*m, 1), int) # Comentario 2\n' +
    '\\end{sourcecode}',

    'ruby': '\\begin{sourcecode}[]{ruby}{Ejemplo con ruby.}\n' +
    'class DataFile < ActiveRecord::Base\n' +
    '    attr_accessor :upload\n' +
    '\n' +
    '  def self.save_file(upload)   \n' +
    '\n' +
    '    file_name = upload[\'datafile\'].original_filename  if  (upload[\'datafile\'] !=\'\')    \n' +
    '    file = upload[\'datafile\'].read    \n' +
    '\n' +
    '    file_type = file_name.split(\'.\').last\n' +
    '    new_name_file = Time.now.to_i\n' +
    '    name_folder = new_name_file\n' +
    '    new_file_name_with_type = "#{new_name_file}." + file_type\n' +
    '\n' +
    '    image_root = "#{RAILS_CAR_IMAGES}"\n' +
    '\n' +
    '\n' +
    '    Dir.mkdir(image_root + "#{name_folder}");\n' +
    '      File.open(image_root + "#{name_folder}/" + new_file_name_with_type, "wb")  do |f|  \n' +
    '        f.write(file) \n' +
    '      end\n' +
    '\n' +
    '  end\n' +
    'end\n' +
    '\\end{sourcecode}',

    'sql': '\\begin{sourcecode}{sql}{Merge two tables.}\n' +
    'SELECT ChargeNum, CategoryID, SUM(Hours)\n' +
    'FROM KnownHours\n' +
    'GROUP BY ChargeNum, CategoryID\n' +
    'UNION ALL\n' +
    'SELECT ChargeNum, \'Unknown\' AS CategoryID, SUM(Hours)\n' +
    'FROM UnknownHours\n' +
    'GROUP BY ChargeNum\n' +
    '\\end{sourcecode}',

    'xml': '\\begin{sourcecode}{xml}{Ejemplos con xml.}\n' +
    '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"\n' +
    '   xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
    '  <xs:element name="points">\n' +
    '    <xs:complexType>\n' +
    '      <xs:sequence>\n' +
    '        <xs:element maxOccurs="unbounded" name="point">\n' +
    '          <xs:complexType>\n' +
    '            <xs:attribute name="x" type="xs:unsignedShort" use="required" />\n' +
    '            <xs:attribute name="y" type="xs:unsignedShort" use="required" />\n' +
    '          </xs:complexType>\n' +
    '        </xs:element>\n' +
    '      </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '  </xs:element>\n' +
    '</xs:schema>\n' +
    '\\end{sourcecode}'
};

function afterDocumentReady() {
    /**
     * Escribe número de líneas introducción
     */
    $('.intro-line-abstract').each(
        function () {
            $(this).attr('style', 'cursor:pointer;');
            $(this).tooltipster({
                animation: 'grow',
                content: String.format('Línea {0} en versión compacta', line_abstract[1]),
                delay: 300,
                maxWidth: 150,
                side: 'bottom',
                theme: 'tooltipster-borderless'
            });
            $(this).html(String.format('(línea {0})', line_abstract[0]));
        }
    );

    /**
     * Escribe número de líneas tabla autor
     */
    $('.intro-line-authortable').each(function () {
        $(this).attr('style', 'cursor:pointer;');
        $(this).tooltipster({
            animation: 'grow',
            content: String.format('Línea {0} en versión compacta', line_authortable[1]),
            delay: 300,
            maxWidth: 150,
            side: 'bottom',
            theme: 'tooltipster-borderless'
        });
        $(this).html(String.format('(línea {0})', line_authortable[0]));
    });

    /**
     * Escribe número de líneas configuración - imports
     */
    $('.intro-line-configimport').each(
        function () {
            $(this).attr('style', 'cursor:pointer;');
            $(this).tooltipster({
                animation: 'grow',
                content: String.format('Línea {0} en versión compacta', line_configimport[1]),
                delay: 300,
                maxWidth: 150,
                side: 'bottom',
                theme: 'tooltipster-borderless'
            });
            $(this).html(String.format('(línea {0})', line_configimport[0]));
        }
    );

    /**
     * Escribe número de líneas inicio del documento
     */
    $('.intro-line-docinit').each(
        function () {
            $(this).attr('style', 'cursor:pointer;');
            $(this).tooltipster({
                animation: 'grow',
                content: String.format('Línea {0} en versión compacta', line_docinit[1]),
                delay: 300,
                maxWidth: 150,
                side: 'bottom',
                theme: 'tooltipster-borderless'
            });
            $(this).html(String.format('(línea {0})', line_docinit[0]));
        }
    );

    /**
     * Escribe número de líneas información del documento
     */
    $('.intro-line-infodocument').each(function () {
        $(this).attr('style', 'cursor:pointer;');
        $(this).tooltipster({
            animation: 'grow',
            content: String.format('Línea {0} en versión compacta', line_infodocument[1]),
            delay: 300,
            maxWidth: 150,
            side: 'bottom',
            theme: 'tooltipster-borderless'
        });
        $(this).html(String.format('(línea {0})', line_infodocument[0]));
    });

    /**
     * Galería header-footer
     */
    hfGallery = function () {
        let pswpElement = document.querySelectorAll('.pswp')[0];
        let items = [];
        for (let i = 1; i <= 8; i++) {
            items.push({
                src: String.format('res/images/hf{0}.png', i),
                w: 544,
                h: 704,
                title: String.format('<b>Header-Footer estilo {0}</b> (<div class="codegallerytitle">\\hfstyle=\{style{0}\}</div>)', i)
            })
        }
        let options = {
            counterEl: true,
            fullscreenEl: false,
            hideAnimationDuration: 400,
            history: true,
            index: 0,
            shareEl: false,
            showAnimationDuration: 400,
            zoomEl: false
        };
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.listen('close', function () {
            $('a.back-to-top').fadeIn('slow');
        });
        gallery.init();
        $('a.back-to-top').fadeOut('slow');
    };

    /**
     * Galería portadas
     */
    portraitGallery = function () {
        let pswpElement = document.querySelectorAll('.pswp')[0];
        let items = [];
        for (let i = 1; i <= 16; i++) {
            items.push({
                src: String.format('res/images/portada{0}.png', i),
                w: 544,
                h: 704,
                title: String.format('<b>Portada estilo {0}</b> (<div class="codegallerytitle">\\portraitstyle=\{style{0}\}</div>)', i)
            })
        }
        let options = {
            counterEl: true,
            fullscreenEl: false,
            hideAnimationDuration: 400,
            history: true,
            index: 0,
            shareEl: false,
            showAnimationDuration: 400,
            zoomEl: false
        };
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.listen('close', function () {
            $('a.back-to-top').fadeIn('slow');
        });
        gallery.init();
        $('a.back-to-top').fadeOut('slow');
    };

    /**
     * Efecto bounce
     */
    bounceStyleReferences = function () {
        $('#config-ref').ScrollTo();
        setTimeout(function () {
            doBounce($('#stylecitereferences'), 3, '6px', 100);
        }, 1000);
    };

    /**
     * Efecto bounce
     */
    bounceImageFolderConfig = function () {
        $('#config-figure').ScrollTo();
        setTimeout(function () {
            doBounce($('#defaultimagefolder'), 3, '6px', 100);
        }, 1000);
    };

    /**
     * Se lee un acción desde url para cargar una galería
     */
    let initAction = $.urlParam('action');
    if (initAction != null) {
        switch (initAction) {
            case 'portraitGallery':
                portraitGallery();
                break;
            case 'hfGallery':
                hfGallery();
                break;
        }
    }

    /**
     * Contenedor de código
     */
    let triggerShowContainerChangeTrigger = function (trigger, container, onstring, offstring) {
        $(container).attr('show', 'off');
        if (onstring !== '') {
            $(trigger).html(onstring);
        }
        $(trigger).on('click', function () {
            let $container = $(container);
            if ($container.attr('show') === 'off') {
                $container.fadeIn();
                $container.attr('show', 'on');
                if (offstring !== '') {
                    $(trigger).html(offstring);
                }
            } else {
                $container.fadeOut();
                $container.attr('show', 'off');
                if (onstring !== '') {
                    $(trigger).html(onstring);
                }
            }
        })
    };
    let triggerShowContainer = function (trigger, container) {
        triggerShowContainerChangeTrigger(trigger, container, '', '');
    };

    /**
     * Mostrar funciones deprecadas
     */
    triggerShowContainer('#showDeprecatedImageTrigger', '#showDeprecatedImageContainer');

    /**
     * Código imageleft,right
     */
    triggerShowContainer('#showCodeImageLeft', '#codeImageLeftContainer');
    triggerShowContainer('#showCodeImageRight', '#codeImageRightContainer');

    /**
     * Código gather,align
     */
    triggerShowContainer('#showCodeGatherEqn', '#codeGatherEqnContainer');
    triggerShowContainer('#showCodeAlignEqn', '#codeAlignEqnContainer');

    /**
     * Mostrar imágenes de departamentos
     */
    triggerShowContainerChangeTrigger('#showImagesContainer', '#dptoImagesContainer', 'Mostrar imágenes disponibles', 'Ocultar imágenes disponibles');

    /**
     * Mostrar librerías cargadas + total
     */
    $('#totalLibCount').html($('#usedLibs').find('li').length);
    triggerShowContainerChangeTrigger('#showLibsContainer', '#libsUsedContainer', 'Mostrar lista de librerías', 'Ocultar lista de librerías');

    /**
     * Motrar funciones matemáticas + total
     */
    $('#mathFunCounter').html($('#mathFunContainer').find('li').length);
    triggerShowContainerChangeTrigger('#showMathFunContainer', '#mathFunContainer', 'Mostrar lista de funciones', 'Ocultar lista de funciones');

    /**
     * Mostrar número de configuraciones totales
     */
    $('#TemplateConfigCounter').html($('#templateConfigsList').find('.config-elem').length);

    /**
     * Se recorre cada link de lenguaje y se añade evento
     */
    let $write_source_code = function ($c) {
        let $container = $('#sourcecode-example');

        // Se limpia el div
        $container.empty();

        /**
         * Se formatea el texto
         * @type{string}
         */
        let $a = cmd_sourcecode[$c];

        // Se borran carácteres no válidos
        $a = $a.replace(/&/g, '&amp;');
        $a = $a.replace(/>/g, '&gt;');
        $a = $a.replace(/</g, '&lt;');

        // Se aplica estilo
        $a = $a.replace('\\begin{sourcecode}[', '<span class="pl-c1">\\begin</span>{<span class="pl-e">sourcecode</span>}<b>[</b>');
        $a = $a.replace('\\begin{sourcecode}{', '<span class="pl-c1">\\begin</span>{<span class="pl-e">sourcecode</span>}<b>{</b>');
        $a = $a.replace('\\label{', '<span class="pl-c1">\\label</span>{');
        $a = $a.replace('<b>[</b>]', '<b>[</b><b>]</b>');
        $a = $a.replace('}]', '}<b>]</b>');
        $a = $a.replace('<b>]</b>{', '<b>]</b><b>{</b>');
        $a = $a.replace('}{', '<b>}</b><b>{</b>');
        $a = $a.replace('{}', '<b>{</b><b>}</b><span class="pl-srccode">');
        $a = $a.replace('.}', '.<b>}</b><span class="pl-srccode">');
        $a = $a.replace('\\end{sourcecode}', '</span><span class="pl-c1">\\end</span>{<span class="pl-e">sourcecode</span>}');
        $a = $a.replace('<b>{</b>}', '<b>{</b><b>}</b>');

        // Se escribe el lenguaje
        $container.append($a);
    };
    $write_source_code('c');
    $('#sourcecode-container').find('.sourcecodel').each(function () {
        let $a = $(this).html();
        let $callback = function () {
            $write_source_code($a);
        };
        $(this).on('click', $callback);
    });

    // noinspection HtmlUnknownTarget
    /**
     * Se añade tooltipster a imágenes ejemplos links de interés
     */
    $('#example-appdata').tooltipster({
        animation: 'grow',
        content: '<img src="res/images/ejemplo-appdata.png" alt="" width="250" height="137" />',
        contentAsHTML: true,
        maxWidth: 300,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });
    // noinspection HtmlUnknownTarget
    $('#example-plugin-config').tooltipster({
        animation: 'grow',
        content: '<img src="res/images/ejemplo-config.png" alt="" width="400" height="261" />',
        contentAsHTML: true,
        maxWidth: 400,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });
}

function afterJSONLoad() {
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

function writeOtherLinks(verid) {
    var deptos = [
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
        ['Departamento de Ingeniería Química y Biotecnología', 'diqbt'],
        ['Facultad de Ciencias Físicas y Matemáticas', 'fcfm'],
        ['Universidad de Chile', 'uchile'],
    ];
    var $addTotal = function () {
        if (total_downloads !== nan_value) {
            total_downloads += 1;
            total_downloads_l30 += 1;
            update_download_banner(total_downloads);
        }
    };

    // Genera el contenido
    let $contents = $('#downloadother-contents');
    $('#downloadtitle-title').html(String.format('Descargas v{0}', verid));
    // noinspection HtmlUnknownTarget
    $contents.append(String.format('<div class="downloadother-entry downloadother-compact"><div class="downloadother-name">Versión compacta</div><div class="downloadother-link"><a href="{0}download/{1}/Template-Informe-Single.zip">Descargar</a></div></div>', href_github_project, verid));
    $('.downloadother-compact').on('click', $addTotal);
    for (var i = 0; i < deptos.length; i++) {
        // noinspection HtmlUnknownTarget
        $contents.append(String.format('<div id="downloadentry-{1}" class="downloadother-entry"><div class="downloadother-name">{0}</div><div class="downloadother-link-double"><a href="{3}download/{2}/Template-Informe-{1}.zip" class="otherdownloadclickeable">Normal</a></div><div class="downloadother-link-double"><a href="{3}download/{2}/Template-Informe-{1}-Single.zip" class="otherdownloadclickeable">Compacta</a></div></div>', deptos[i][0], deptos[i][1], verid, href_github_project));
        $(String.format('#downloadentry-{0} .otherdownloadclickeable', deptos[i][1])).on('click', $addTotal);
    }
}