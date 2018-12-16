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
 * Configuraciones
 */
let href_github_project = 'https://github.com/Template-Latex/Template-Informe/releases/';
let href_github_project_source = 'https://github.com/Template-Latex/Template-Informe/';
let href_json_releases = 'https://api.github.com/repos/Template-Latex/Template-Informe/releases';
let href_pdf_version = '../Informe/Template-Informe v{0}.pdf';
let stats_name = 'Informe';
let update_download_counter = 'Template-Informe';

/**
 * Declaración de funciones propias de cada template
 */
let bounceConfig; // Efecto en entrada de configuración
let downloadOtherBackgroundBlur = 1; // Blur del fondo al mostrar cajón de descargas
let hfGallery; // Muestra la galería de header-footer
let lastClickedSourcecode = ''; // Último botón de código fuente clickeado
let line_abstract = [87, 260]; // Número de línea de abstract/resumen
let line_authortable = [33, 34]; // Número de línea tabla de integrantes
let line_configimport = [63, 64]; // Número línea importación de configuraciones
let line_docinit = [98, 271]; // Número de línea inicio del documento
let line_infodocument = [18, 19]; // Número de línea información del documento
let portraitGallery; // Muestra la galería de portadas
let totalHfStyles = 14; // Estilos totales en tipo de header-footer
let totalPortraitStyles = 18; // Estilos totales de portada

/**
 * Requerimientos adicionales de ciertas portadas
 */
let portraitRequiresAdditional = {
    15: '\\headerimageA, \\headerimagescaleA',
    16: '\\portraitbackgroundimageB, \\portraitbackgroundcolorB',
    17: '\\portraitimageC, \\portraitimageboxedC, \\portraitimageboxedwidthC, \\portraitimagewidthC',
    18: '\\portraitimageD, \\portraitimageboxedD, \\portraitimageboxedwidthD, \\portraitimagewidthD'
};

// Lista de códigos fuente
// noinspection CssUnusedSymbol
let cmd_sourcecode = {
    'bash': '\\begin{sourcecode}[]{bash}{Un poco de bash.}\n' +
        '# Muestra toda la información de la batería\n' +
        'function battr-info {\n' +
        '\twrks-scripts\n' +
        '\tdata=$(ioreg -l -w0 |grep Capacity)\n' +
        '\tpython2.7 battery_info.py $data\n' +
        '\tcd - >> config/.empty\n' +
        '}\n' +
        '\n' +
        'function qtest-java {\n' +
        '\tif [ -z "${1}" ]; then\n' +
        '\techo-err \'Nombre fuente no definido\'\n' +
        '\telse\n' +
        '\tvim $1\n' +
        '\tjavac -encoding ISO-8859-1 $1 $2 $3\n' +
        '\tblankspace=""\n' +
        '\tfirst=$1\n' +
        '\tfirst=${first/.java/$blankspace}\n' +
        '\tjava $first\n' +
        '\tfi\n' +
        '}\n' +
        '\n' +
        'PATH=$PATH:"/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"\n' +
        'PATH=$PATH:"/Applications/Utilities/Lynxlet.app/Contents/Resources/lynx/bin"\n' +
        'export PATH\n' +
        '\n' +
        'alias ga=\'git add \'\n' +
        'dig +short myip.opendns.com @resolver1.opendns.com\n' +
        'gcc "$@" -o $first\n' +
        '\n' +
        '::claramente esto no funcionará::\n' +
        'sudo x, call y\n' +
        'rem esto es un comentario en windows\n' +
        'history -c rm a, ls -d killall e mv | grep | awk python \'hola\'\n' +
        'vim uwu printf \'have you seen him\' -z\n' +
        'git doge ssh cp cd\n' +
        '\\end{sourcecode}',
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

    'csharp': '\\begin{sourcecode}[]{csharp}{Ejemplo en C#.}\n' +
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

    'cuda': '\\begin{sourcecode}[]{cuda}{Un poco de cuda.}\n' +
        '__global__ void foo(){\n' +
        '}\n' +
        '\n' +
        '__global__ void addKernel(int *c, const int *a, const int *b){\n' +
        '\tint i = threadIdx.x;\n' +
        '\tc[i] = a[i] + b[i];\n' +
        '}\n' +
        '\n' +
        'foo<<<n,m>>>();\n' +
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
        '<html lang="es">\n' +
        '<head>\n' +
        '\t<title>Página</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '\t<style>\n' +
        '\t\t.titulo {\n' +
        '\t\t\tcolor: #ff0000;\n' +
        '\t\t}\n' +
        '\t</style>\n' +
        '\t<div class="titulo">Hola</div>\n' +
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

    'kotlin': '\\begin{sourcecode}{kotlin}{Kotlin en acción.}\n' +
        '/* Block comment */\n' +
        'package hello\n' +
        'import kotlin.collections.* // line comment\n' +
        '\n' +
        '/**\n' +
        '* Doc comment here for `SomeClass`\n' +
        '* @see Iterator#next()\n' +
        '*/\n' +
        '@Deprecated("Deprecated class")\n' +
        'private class MyClass<out T : Iterable<T>>(var prop1 : Int) {\n' +
        '\tfun foo(nullable : String?, r : Runnable, f : () -> Int, \n' +
        '\tfl : FunctionLike, dyn: dynamic) {\n' +
        '\t\tprintln("length\\nis ${nullable?.length} \\e")\n' +
        '\t\tval ints = java.util.ArrayList<Int?>(2)\n' +
        '\t\tints[0] = 102 + f() + fl()\n' +
        '\t\tval myFun = { -> "" };\n' +
        '\t\tvar ref = ints.size\n' +
        '\t\tints.lastIndex + globalCounter\n' +
        '\t\tints.forEach lit@ {\n' +
        '\t\t\tif (it == null) return@lit\n' +
        '\t\t\tprintln(it + ref)\n' +
        '\t\t}\n' +
        '\t\tdyn.dynamicCall()\n' +
        '\t\tdyn.dynamicProp = 5\n' +
        '\t}\n' +
        '\t\n' +
        '\tval test = """hello\n' +
        '\tworld\n' +
        '\tkotlin"""\n' +
        '\toverride fun hashCode(): Int {\n' +
        '\t\treturn super.hashCode() * 31\n' +
        '\t}\n' +
        '}\n' +
        'fun Int?.bar() {\n' +
        '\tif (this != null) {\n' +
        '\t\tprintln(message = toString())\n' +
        '\t}\n' +
        '\telse {\n' +
        '\t\tprintln(this.toString())\n' +
        '\t}\n' +
        '}\n' +
        'var globalCounter : Int = 5\n' +
        'get = field\n' +
        'abstract class Abstract {\n' +
        '}\n' +
        'object Obj\n' +
        'enum class E { A, B }\n' +
        'interface FunctionLike {\n' +
        '\toperator fun invoke() = 1\n' +
        '}\n' +
        '\\end{sourcecode}',

    'latex': '\\begin{sourcecode}{latex}{Imágenes múltiples.}\n' +
        '\\begin{images}[\\label{imagenmultiple}]{Ejemplo de imagen múltiple.}\n' +
        '\t\\addimage{ejemplos/test-image}{width=6.5cm}{Ciudad}\n' +
        '\t\\addimage{ejemplos/test-image-wrap}{width=5cm}{Apolo}\n' +
        '\t\\addimage{ejemplos/test-image}{width=12cm}{Ciudad más grande}\n' +
        '\\end{images}\n' +
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

    'opencl': '\\begin{sourcecode}[\\label{test-opencl}]{opencl}{Ejemplito OpenCL.}\n' +
        '__kernel void vector_add(__global const int *A, __global const int *B, __global int *C) {\n' +
        '\n' +
        '    // Get the index of the current element to be processed\n' +
        '    int i = get_global_id(0);\n' +
        '\n' +
        '    // Do the operation\n' +
        '    C[i] = A[i] + B[i];\n' +
        '}\n' +
        '\\end{sourcecode}',

    'opensees': '\\begin{sourcecode}[\\label{programa-opensees}]{opensees}{Estructura en OpenSees.}\n' +
        '# Remove existing model\n' +
        'wipe\n' +
        '\n' +
        '# Create ModelBuilder (with two-dimensions and 2 DOF/node)\n' +
        'model BasicBuilder -ndm 2 -ndf 2\n' +
        '\n' +
        '# Create nodes\n' +
        '# ------------\n' +
        '# Create nodes & add to Domain - command: node nodeId xCrd yCrd\n' +
        'node 1   0.0  0.0\n' +
        'node 2 144.0  0.0\n' +
        'node 3 168.0  0.0\n' +
        'node 4  72.0 96.0\n' +
        '    \n' +
        '# Set the boundary conditions - command: fix nodeID xResrnt? yRestrnt?\n' +
        'fix 1 1 1 \n' +
        'fix 2 1 1\n' +
        'fix 3 1 1\n' +
        '    \n' +
        '# Define materials for truss elements\n' +
        '# -----------------------------------\n' +
        '# Create Elastic material prototype - command: uniaxialMaterial Elastic matID E\n' +
        'uniaxialMaterial Elastic 1 3000\n' +
        '\n' +
        '# \n' +
        '# Define elements\n' +
        '#\n' +
        '\n' +
        '# Create truss elements - command: element truss trussID node1 node2 A matID\n' +
        'element Truss 1 1 4 10.0 1\n' +
        'element Truss 2 2 4 5.0 1\n' +
        'element Truss 3 3 4 5.0 1\n' +
        '        \n' +
        '# Define loads\n' +
        '# ------------\n' +
        '#\n' +
        '\n' +
        '# create a Linear TimeSeries with a tag of 1\n' +
        'timeSeries Linear 1\n' +
        '    \n' +
        '# Create a Plain load pattern associated with the TimeSeries,\n' +
        '# command: pattern Plain $patternTag $timeSeriesTag { load commands }\n' +
        '\n' +
        'pattern Plain 1 1 {\n' +
        '\t\n' +
        '   # Create the nodal load - command: load nodeID xForce yForce\n' +
        '   load 4 100 -50\n' +
        '}\n' +
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

    'plaintext': '\\begin{sourcecode}{plaintext}{Resultado del análisis con TEFAME.}\n' +
        'TEFAME - Toolbox para Elemento Finitos y Analisis\n' +
        'Matricial de Estructuras en MATLAB\n' +
        '\n' +
        'Propiedades de entrada modelo:\n' +
        '\n' +
        'Nodos: \n' +
        'Numero de nodos: 4 \n' +
        'Coordenadas nodo N1: 0 0\n' +
        'Coordenadas nodo N2: 800 0\n' +
        'Coordenadas nodo N3: 400 400\n' +
        'Coordenadas nodo N4: 400 800\n' +
        '\n' +
        'Elementos: \n' +
        'Numero de elementos: 6 \n' +
        'Elemento E1:\tLargo: 800         Area: 20        Eo: 200000    \n' +
        'Elemento E2:\tLargo: 565.6854    Area: 20        Eo: 200000    \n' +
        'Elemento E3:\tLargo: 565.6854    Area: 20        Eo: 200000    \n' +
        'Elemento E4:\tLargo: 894.4272    Area: 20        Eo: 200000    \n' +
        'Elemento E5:\tLargo: 400         Area: 20        Eo: 200000    \n' +
        'Elemento E6:\tLargo: 894.4272    Area: 20        Eo: 200000    \n' +
        '\n' +
        'Resultados del analisis:\n' +
        '\n' +
        'Desplazamientos nodos: \n' +
        'Desplazamientos nodo N1: 0 0\n' +
        'Desplazamientos nodo N2: 0.016 0\n' +
        'Desplazamientos nodo N3: 0.008 -0.013\n' +
        'Desplazamientos nodo N4: 0.053 -0.016\n' +
        '\n' +
        'Reacciones: \n' +
        'Reacciones nodo N1: -80 -20\n' +
        'Reacciones nodo N2: 0 140\n' +
        'Reacciones nodo N3: 0 0\n' +
        'Reacciones nodo N4: 0 0\n' +
        '\n' +
        'Esfuerzos Elementos: \n' +
        'Elemento E1: -78.4273       TRACCION\n' +
        'Elemento E2: 23.836         COMPRESION\n' +
        'Elemento E3: 23.836         COMPRESION\n' +
        'Elemento E4: -41.2047       TRACCION\n' +
        'Elemento E5: 33.7093        COMPRESION\n' +
        'Elemento E6: 137.6807       COMPRESION\n' +
        '\\end{sourcecode}',

    'pseudocode': '\\begin{sourcecode}{pseudocode}{Algoritmo.}\n' +
        'input: int N, int D\n' +
        'output: int\n' +
        'begin\n' +
        '\tres $\\gets$ 0\n' +
        '\twhile N $\\geq$ D \n' +
        '\t\tN $\\gets$ N - D\n' +
        '\t\tres $\\gets$ res + 1      \n' +
        '\tend\n' +
        '\treturn res\n' +
        'end    \n' +
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

    'scala': '\\begin{sourcecode}{scala}{Código en scala.}\n' +
        'object Test {\n' +
        '\tdef main(args: Array[String]) {\n' +
        '\t\tvar a = 0;\n' +
        '\t\t// for loop execution with a range\n' +
        '\t\tfor( a <- 1 to 10){\n' +
        '\t\t\tprintln( "Value of a: " + a );\n' +
        '\t\t}\n' +
        '\t}\n' +
        '}\n' +
        '\\end{sourcecode}',

    'tcl': '\\begin{sourcecode}[\\label{ejemplo-tcl}]{tcl}{Código en TCL.}\n' +
        'proc file\'hexdump filename {\n' +
        '   set fp [open $filename]\n' +
        '   fconfigure $fp -translation binary\n' +
        '   set n 0\n' +
        '   while {![eof $fp]} {\n' +
        '       set bytes [read $fp 16]\n' +
        '       regsub -all {[^\x20-\xfe]} $bytes . ascii\n' +
        '       puts [format "%04X %-48s %-16s" $n [hexdump $bytes] $ascii]\n' +
        '       incr n 16\n' +
        '   }\n' +
        '   close $fp\n' +
        '}\n' +
        '\n' +
        'proc hexdump string {\n' +
        '   binary scan $string H* hex\n' +
        '   regexp -all -inline .. $hex\n' +
        '}\n' +
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

// noinspection JSUnusedGlobalSymbols
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
        for (let i = 1; i <= totalHfStyles; i += 1) {
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
            backToTop.show(true);
        });
        backToTop.hide(true);
        gallery.init();
    };
    let $hftrigger = $('#hfTrigger');
    $hftrigger.on('click', hfGallery);
    $hftrigger.html(String.format('{0} estilos distintos', totalHfStyles));

    /**
     * Galería portadas
     */
    portraitGallery = function () {
        let pswpElement = document.querySelectorAll('.pswp')[0];
        let items = [];
        let req_add = ''; // Requerimientos adicionales
        for (let i = 1; i <= totalPortraitStyles; i += 1) {
            if (portraitRequiresAdditional[i] !== undefined) {
                req_add = '. Configuraciones adicionales: <div class="codegallerytitle">' + portraitRequiresAdditional[i] + '</div>.';
            }
            items.push({
                src: String.format('res/images/portada{0}.png', i),
                w: 544,
                h: 704,
                title: String.format('<b>Portada estilo {0}</b> (<div class="codegallerytitle">\\portraitstyle=\{style{0}\}</div>){1}', i, req_add)
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
            backToTop.show(true);
        });
        backToTop.hide(true);
        gallery.init();
    };
    let $portraittrigger = $('#portraitTrigger');
    $portraittrigger.on('click', portraitGallery);
    $portraittrigger.html(String.format('{0} estilos distintos', totalPortraitStyles));

    /**
     * Efecto bounce
     */
    bounceConfig = function (a, b) {
        $(a).ScrollTo();
        setTimeout(function () {
            doBounce($(b), 3, '6px', 100);
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

        /**
         * Se añade bold a lenguaje seleccionado
         */
        if (lastClickedSourcecode !== '') {
            $(lastClickedSourcecode).removeClass('sourcecodeTriggerEnabled');
        }
        lastClickedSourcecode = '#sourcecode-' + $c;
        $(lastClickedSourcecode).addClass('sourcecodeTriggerEnabled');
    };

    /**
     * Se añade evento a cada elemento de código fuente
     */
    $('#sourcecode-container').find('.sourcecodel').each(function () {
        let $a = $(this).html();
        $(this).attr('id', 'sourcecode-' + $(this).html()); // Añade código fuente como atributo
        let $callback = function () {
            $write_source_code($a);
        };
        $(this).on('click', $callback);
    });

    /**
     * Se escribe un lenguaje random al inicio si es que no se pasó uno por $GET
     */
    let $get_source = $.urlParam('srctype');
    if ($get_source !== null && Object.keys(cmd_sourcecode).indexOf($get_source) !== -1) {
        $write_source_code($get_source);
    } else {
        $write_source_code(pickRandomProperty(cmd_sourcecode));
    }

    // noinspection HtmlUnknownTarget
    /**
     * Se añade tooltipster a imágenes ejemplos links de interés
     */
    $('#example-appdata').tooltipster({
        animation: 'grow',
        content: '<img src="res/images/ejemplo-appdata.PNG" alt="" width="300" height="165" />',
        contentAsHTML: true,
        maxWidth: 300,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });
    // noinspection HtmlUnknownTarget
    $('#example-plugin-config').tooltipster({
        animation: 'grow',
        content: '<img src="res/images/ejemplo-config.PNG" alt="" width="500" height="327" />',
        contentAsHTML: true,
        maxWidth: 500,
        side: 'bottom',
        theme: 'tooltipster-borderless'
    });

    /**
     * Se añade tooltip con imagen en tipo de fuente
     */
    $('.fontsrc').each(function () {
        let href = $(this).attr('href');
        if (href.indexOf('http://www.tug.dk') !== -1) {
            let img = href.split('/')[4];
            img = href + img + '-1.png';

            // noinspection HtmlUnknownTarget
            $(this).tooltipster({
                animation: 'grow',
                content: String.format('<img src="{0}" alt="" width="500" height="125" class="imgfontexample" />', img),
                contentAsHTML: true,
                delay: 1200,
                interactive: true,
                maxWidth: 500,
                side: 'bottom',
                theme: 'tooltipster-borderless'
            });
        }
    });

    /**
     * Se agrega archivo de ejemplos luego de los bloques de código fuente
     */
    let $addExample = function (trigger, content) {

        // Obtiene el trigger (usualmente un pre o blockquote)
        let $trigger = $('#' + trigger).after();

        // Añade bloque oculto con contenido a desbloquear
        let $contentID = generateID();
        $trigger.after(String.format('<div class="codeExampleContainer" id="{0}"></div>', $contentID));

        // Agrega un botón para ver un ejemplo
        let $btnID = generateID();
        $trigger.after(String.format('<div class="preExampleButton noselect" id="{0}" data-status="hidden" data-write="false">Mostrar ejemplo</div>', $btnID));

        // Añade evento al botón
        $('#' + $btnID).on('click', function () {

            // Obtiene el botón
            let $btn = $('#' + $btnID);

            // Obtiene el contenido
            let $cnt = $('#' + $contentID);

            // Si no se ha escrito el contenido se escribe
            if ($btn.attr('data-write') === 'false') {
                $cnt.html(content);
                $btn.attr('data-write', 'true');
            }

            if ($btn.attr('data-status') === 'hidden') { // Mostrar
                $btn.attr('data-status', 'open');
                $btn.html('Ocultar ejemplo');
                $cnt.show();
            } else { // Ocultar
                $btn.attr('data-status', 'hidden');
                $btn.html('Mostrar ejemplo');
                $cnt.hide();
            }

        });

    };

    /**
     * Ejemplos de imágenes
     */
    $addExample('insertimage-example-trigger', '<img src="res/images/ex-insertimage.PNG" alt="" class="imageCodeExample imageCodeExample-normal" />');
    $addExample('insertimageboxed-example-trigger', '<img src="res/images/ex-insertimageboxed.PNG" alt="" class="imageCodeExample imageCodeExample-tiny" />');
    $addExample('images-example-trigger', '<img src="res/images/ex-images.PNG" alt="" class="imageCodeExample imageCodeExample-large" />');

    /**
     * Ejemplo de código fuente
     */
    $addExample('example-sourcecodep', '<img src="res/images/ex-sourcecodep.PNG" alt="" class="imageCodeExample" />');

    /**
     * Ejemplo anexo
     */
    $addExample('example-anexos', '<img src="res/images/ex-anexos.PNG" alt="" class="imageCodeExample imageCodeExample-large" />');

    /**
     * Ejemplos de referencias
     */
    $addExample('example-references', '<img src="res/images/ex-referencias.PNG" alt="" class="imageCodeExample" />');

}

/**
 * Función que se aplica una vez se carga el JSON de las versiones
 * @function
 */
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

/**
 * Escribe links de los distintos departamentos
 * @function
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
        ['Facultad de Ciencias Físicas y Matemáticas', 'fcfm'],
        ['Universidad de Chile', 'uchile']
    ];
    let $addTotal = function () {
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
    $contents.append(String.format('<div class="downloadother-entry downloadother-compact"><div class="downloadother-name">Versión compacta</div><div class="downloadother-link"><a href="{0}download/{1}/Template-Informe.min.zip">Descargar</a></div></div>', href_github_project, verid));
    $('.downloadother-compact').on('click', $addTotal);
    for (let i = 0; i < deptos.length; i += 1) {
        // noinspection HtmlUnknownTarget
        $contents.append(String.format('<div id="downloadentry-{1}" class="downloadother-entry"><div class="downloadother-name">{0}</div><div class="downloadother-link-double"><a href="{3}download/{2}/Template-Informe-{1}.zip" class="otherdownloadclickeable">Normal</a></div><div class="downloadother-link-double"><a href="{3}download/{2}/Template-Informe-{1}.min.zip" class="otherdownloadclickeable">Compacta</a></div></div>', deptos[i][0], deptos[i][1], verid, href_github_project));
        $(String.format('#downloadentry-{0} .otherdownloadclickeable', deptos[i][1])).on('click', $addTotal);
    }

}