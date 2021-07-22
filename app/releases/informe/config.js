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
// noinspection JSUnusedGlobalSymbols
let downloadOtherBackgroundBlur = 1; // Blur del fondo al mostrar cajón de descargas
let hfGallery; // Muestra la galería de header-footer
let lastClickedSourcecode = ''; // Último botón de código fuente clickeado
let line_abstract = [73]; // Número de línea de abstract/resumen
let line_authortable = [32]; // Número de línea tabla de integrantes
let line_docinit = [84]; // Número de línea inicio del documento
let line_infodocument = [17]; // Número de línea información del documento
let portraitGallery; // Muestra la galería de portadas
let totalHfStyles = 16; // Estilos totales en tipo de header-footer
let totalPortraitStyles = 21; // Estilos totales de portada

/**
 * Añade notificaciones
 */
notification['sabiasque'] = {
    '1': 'Existen más de 20 estilos de portada distintos, revisa las configuraciones :)',
    '2': 'El template está escrito en más de 7k líneas de código en LaTeX',
    '3': 'Existen más de 20 estilos de header-footer, revisa las configuraciones :)',
    '4': 'Existen más de 200 configuraciones en el template',
    '5': 'El template da soporte a más de 40 lenguajes de programación',
    '6': 'Es posible cambiar la fuente del texto, revisa las configuraciones :)',
    '7': 'Es posible cambiar todos los colores del documento, revisa las configuraciones :)',
    '8': 'Es posible cambiar los tamaños de todos los textos del documento, revisa las configuraciones :)',
    '9': 'El template se viene desarrollando desde el año 2016',
    '10': 'Quizás una de las cosas más poderosas de LaTeX son los macros, puedes automatizar cualquier cosa mediante el uso de funciones, de hecho, casi todo el template es un gran conjunto de macros y configuraciones',
    '11': 'El índice puede tener distintos tipos de orden, revisa las configuraciones :)',
    '12': 'Puedes utilizar el template para generar reportes automatizados, sólo basta generar el .tex con alguna herramienta como python y utilizar pdf2latex para compilar',
    '13': 'Con tikz puedes generar complejas figuras utilizando dibujo vectorial (svg)',
    '14': 'El manual online sólo da soporte a la última versión del template',
    '15': 'Aún existen muchos bugs, anímate a reportar alguno :)',
    '16': 'El template tiene soporte completo en overleaf',
    '17': 'Se puede cambiar la posición de todas las leyendas de los objetos, revisa las configuraciones :)',
    '18': 'Existe un <i>easter-egg</i> que nadie aún lo ha encontrado',
    '19': 'Se puede cambiar el nombre de todos los elementos del template, revisa las configuraciones :)',
    '20': 'Una de las librerías que más demoran la compilación en LaTeX es tikz',
    '21': 'Desde la versión 6.8.0 se pueden insertar ecuaciones en el índice',
    '22': 'Todos los subtemplates nacen a partir de template-informe',
    '23': 'Template-Informe es usado por personas de más de 30 países en el mundo',
    '24': 'La primera versión pública del template fue la 1.8.5',
    '25': 'El autor hizo un taller de LaTex? <a href="https://github.ppizarror.com/taller-latex" target="_blank">https://github.ppizarror.com/taller-latex</a>',
    '26': 'La mejor manera de crear tablas en LaTeX es usar Excel2LaTeX',
    '27': 'Si usas TexStudio existe un plugin para autocompletar todas las funciones del template<br><a href="https://github.com/Template-Latex/cwl-docs" target="_blank">https://github.com/Template-Latex/cwl-docs</a>',
    '28': 'El autor @ppizarror recomienda utilizar TexStudio para windows/linux y Overleaf para la web',
    '29': 'Un 70% de la gente prefire descargar la versión normal, 30% la modificada',
    '30': 'El departamento que más descarga el template es eléctrica (13%), seguido de ingeniería civil (12%) y ciencias de la computación (11%)',
    '31': 'Es posible cambiar el color de la página, revisa las configuraciones :)',
    '32': 'Puedes sugerir feedback o notificar de cualquier error al correo',
    '33': 'Graficar con LaTeX es muy sencillo, prueba a usar <a href="https://www.overleaf.com/learn/latex/Pgfplots_package" target="_blank">Pgfplots</a>',
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
    '46': 'Puedes añadir el número de sección/subsección/etc al número de cada objeto, como Figura 1.2, revisa las configuraciones <i>\\showsectioncaption</i>',
    '47': 'Recuerda revisar constantemente nuevas actualizaciones para estar al día con los parches y mejoras',
    '48': 'La diferencia entre las sub-versiones (ejemplo) <i>6.3</i> y <i>6.4</i> son debido a cambios importantes en configuraciones; la diferencia entre versiones (ejemplo) <i>6.0</i> y <i>7.0</i> son cambios notables en la funcionalidad y mecánica de funciones, configuraciones u otros',
    '49': 'El template tiene más de cuatro años de desarrollo constante',
    '50': 'La monotonía aburre a cualquiera, prueba a darle sabor al template jugando con las configuraciones, por ejemplo con una portada nueva',
    '51': 'En cada nueva versión se verifica que el tiempo que tarda en compilar el template no suba, puedes revisar el tiempo promedio de compilación (del archivo de ejemplo) en <a href="https://latex.ppizarror.com/stats/?template=Informe" target="_blank">https://latex.ppizarror.com/stats/?template=Informe</a>',
    '52': 'Si programar no es lo tuyo pero aún así quieres aportar al desarrollo del template puedes sugerir cambios en el manual online, descripción de las configuraciones o notificar errores :)',
};

// ¿Te gustaría participar de la encuesta de uso del template?<br><a href="https://forms.gle/xf9AEYbSuzGtqvWS6" target="_blank">https://forms.gle/xf9AEYbSuzGtqvWS6</a>
notification['encuesta'] = {
    'content': '',
    'persistent': true
};

/**
 * Requerimientos adicionales de ciertas portadas
 */
let portraitRequiresAdditional = {
    4: '\\portraitimageF, \\portraitimageparamsF',
    5: '\\portraitimageG, \\portraitimageparamsG',
    6: '\\portraitimageH, \\portraitimageparamsH',
    15: '\\portraitimageA, \\portraitimageparamsA, \\portraitimagerightA, \\portraitimagerightparamsA',
    16: '\\portraitbackgroundimageB, \\portraitbackgroundcolorB',
    17: '\\portraitimageC, \\portraitimageboxedC, \\portraitimageboxedwidthC, \\portraitimageparamsC',
    18: '\\portraitimageD, \\portraitimageboxedD, \\portraitimageboxedwidthD, \\portraitimageparamsD',
    20: '\\portraitverticalspaceE',
    21: '\\portraitimageI, \\portraitimageboxedI, \\portraitimageboxedwidthI, \\portraitimageparamsI'
};

// Lista de códigos fuente
// noinspection CssUnusedSymbol,JSUnresolvedFunction,BadExpressionStatementJS
let cmd_sourcecode = {
    'assemblerx64': '\\begin{sourcecode}{assemblerx64}{Assembler x64.}\n' +
        'cdqe 1, r8\n' +
        'push 1\n' +
        'add rsp, 4\n' +
        'push 1\n' +
        '\\end{sourcecode}',

    'assemblerx86': '\\begin{sourcecode}{assemblerx86}{Assembler x86.}\n' +
        '; ---------------------------------------------\n' +
        '; Programa que imprime un string en la pantalla\n' +
        '; ---------------------------------------------\n' +
        '.model small              ; modelo de memoria\n' +
        '\n' +
        '.stack                    ; segmento del stack\n' +
        '\n' +
        '.data                     ; segmento de datos\n' +
        'Cadena1 DB \'Hola Mundo.$\' ; string a imprimir (finalizado en $)\n' +
        '\n' +
        '.code                     ; segmento del código\n' +
        '\n' +
        '; ---------------------------------------------\n' +
        '; Inicio del programa\n' +
        '; ---------------------------------------------\n' +
        'programa:\n' +
        '\t; ------------------------------------\n' +
        '\t; inicia el segmento de datos\n' +
        '\t; ------------------------------------\n' +
        '\tMOV AX, @data          ; carga en AX la dirección del segmento de datos\n' +
        '\tMOV DS, AX             ; mueve la dirección al registro de segmento por medio de AX\n' +
        '\t\n' +
        '\t; ------------------------------------\n' +
        '\t; Imprime un string en pantalla\n' +
        '\t; ------------------------------------\n' +
        '\tMOV DX, offset Cadena1 ; mueve a DX la dirección del string a imprimir\n' +
        '\tMOV AH, 9              ; AH = código para indicar al MS DOS que imprima en la pantalla, el string en DS:DX\n' +
        '\tINT 21h                ; llamada al MS DOS para ejecutar la función (en este caso especificada en AH)\n' +
        '\n' +
        '\t; ------------------------------------\n' +
        '\t; Finaliza el programa\n' +
        '\t; ------------------------------------\n' +
        '\tINT 20h                ; llamada al MS DOS para finalizar el programa\n' +
        '\n' +
        '\tend programa\n' +
        '\\end{sourcecode}',

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

    'basic': '\\begin{sourcecode}{basic}{Ejemplo en Basic.}\n' +
        'REM QuickBASIC example\n' +
        '\n' +
        'REM Forward declaration - allows the main code to call a\n' +
        'REM    subroutine that is defined later in the source code\n' +
        'DECLARE SUB PrintSomeStars (StarCount!)\n' +
        '\n' +
        'REM Main program follows\n' +
        'INPUT "What is your name: ", UserName$\n' +
        'PRINT "Hello "; UserName$\n' +
        'DO\n' +
        '   INPUT "How many stars do you want: ", NumStars\n' +
        '   CALL PrintSomeStars(NumStars)\n' +
        '   DO\n' +
        '      INPUT "Do you want more stars? ", Answer$\n' +
        '   LOOP UNTIL Answer$ <> ""\n' +
        '   Answer$ = LEFT$(Answer$, 1)\n' +
        'LOOP WHILE UCASE$(Answer$) = "Y"\n' +
        'PRINT "Goodbye "; UserName$\n' +
        'END\n' +
        '\n' +
        'REM subroutine definition\n' +
        'SUB PrintSomeStars (StarCount)\n' +
        '   REM This procedure uses a local variable called Stars$\n' +
        '   Stars$ = STRING$(StarCount, "*")\n' +
        '   PRINT Stars$\n' +
        'END SUB\n' +
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

    'cobol': '\\begin{sourcecode}{cobol}{Ejemplo en Cobol.}\n' +
        '*> Terminator period ("implicit termination")\n' +
        'IF invalid-record\n' +
        '    IF no-more-records\n' +
        '        NEXT SENTENCE\n' +
        '    ELSE\n' +
        '        READ record-file\n' +
        '            AT END SET no-more-records TO TRUE.\n' +
        '\n' +
        '*> Scope terminators ("explicit termination")\n' +
        'IF invalid-record\n' +
        '    IF no-more-records\n' +
        '        CONTINUE\n' +
        '    ELSE\n' +
        '        READ record-file\n' +
        '            AT END SET no-more-records TO TRUE\n' +
        '        END-READ\n' +
        '    END-IF\n' +
        'END-IF\n' +
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

    'css': '\\begin{sourcecode}{css}{Código CSS.}\n' +
        '.fecha-estilo {\n' +
        '\tcolor: #819198;\n' +
        '\tfont-size: 15px;\n' +
        '\tposition: relative;\n' +
        '\tbottom: 0;\n' +
        '}\n' +
        '\n' +
        '.btn {\n' +
        '\t-moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n' +
        '\t-webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n' +
        '\tbackground-color: rgba(100, 100, 100, 0.4);\n' +
        '\tborder-radius: 0.3rem;\n' +
        '\tborder: 1px solid rgba(255, 255, 255, 0.2);\n' +
        '\tbox-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n' +
        '\tcolor: rgba(255, 255, 255, 1);\n' +
        '\tdisplay: inline-block;\n' +
        '\tmargin-bottom: 1rem;\n' +
        '\tmargin-left: 0;\n' +
        '\tmargin-right: 0.5rem;\n' +
        '\topacity: 1.0;\n' +
        '\toutline: none;\n' +
        '\ttransition: color 0.2s, background-color 0.2s, border-color 0.2s;\n' +
        '}\n' +
        '\n' +
        '.btn:hover {\n' +
        '\topacity: 1.0;\n' +
        '}\n' +
        '\n' +
        '.btn-pro {\n' +
        '\t-moz-box-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.75);\n' +
        '\t-webkit-box-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.75);\n' +
        '\tbackground-color: rgba(210, 210, 210, 0.85);\n' +
        '\tborder-radius: 0.3rem;\n' +
        '\tborder: 1px solid rgba(255, 255, 255, 0.5);\n' +
        '\tbox-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.75);\n' +
        '\tcolor: rgba(20, 20, 20, 1);\n' +
        '\tdisplay: inline-block;\n' +
        '\tfont-weight: bolder;\n' +
        '\tmargin-bottom: 1rem;\n' +
        '\tmargin-left: 0;\n' +
        '\tmargin-right: 0.5rem;\n' +
        '\topacity: 0.9;\n' +
        '\toutline: none;\n' +
        '\ttransition: color 0.2s, background-color 0.2s, border-color 0.2s;\n' +
        '}\n' +
        '\\end{sourcecode}',

    'csv': '\\begin{sourcecode}{csv}{Archivo en csv.}\n' +
        'orand-car-with-bbs/training/images/0001_5179655_46066.jpg,83,8,126,61,4\n' +
        'orand-car-with-bbs/training/images/0001_5179655_46066.jpg,143,11,182,61,6\n' +
        'orand-car-with-bbs/training/images/0001_5179655_46066.jpg,204,11,247,54,0\n' +
        'orand-car-with-bbs/training/images/0001_5179655_46066.jpg,264,15,307,58,6\n' +
        'orand-car-with-bbs/training/images/0001_5179655_46066.jpg,329,11,365,62,6\n' +
        'orand-car-with-bbs/training/images/0002_5179657_53862.jpg,80,11,114,56,5\n' +
        'orand-car-with-bbs/training/images/0002_5179657_53862.jpg,116,13,150,62,3\n' +
        'orand-car-with-bbs/training/images/0002_5179657_53862.jpg,166,15,205,68,8\n' +
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

    'fortran': '\\begin{sourcecode}{fortran}{Ejemplo en Fortran.}\n' +
        'REGRESION LINEAL.FORTRANS\n' +
        'APLICACION\n' +
        '     DIMENSION TIEMPO(1000),PROD(1000)\n' +
        '        OPEN(1,FILE=\'HISTORIA.txt\')\n' +
        '        I=0\n' +
        ' 10     READ(1,*,END=80)T,P\n' +
        '        I=I+1\n' +
        '        TIEMPO(.l.)=T\n' +
        '        PROD(I)=P\n' +
        '        GO TO 10\n' +
        ' 80     NDATOS=I\n' +
        '        CALL AJULIN(TIEMPO,PROD,NDATOS,A,B)\n' +
        '        WRITE(*,90)A,B\n' +
        ' 90     FORMAT(\'LA ECUACION ES:Y=\',F10.2,\'+\',F10.2,\'X\')\n' +
        ' 20     FORMAT(20F10.0)\n' +
        '        END\n' +
        '\n' +
        '\n' +
        '        SUBROUTINE AJULIN(X,Y,N,A,B)\n' +
        '         DIMENSION X(1),Y(1)\n' +
        '          SUMX=0.\n' +
        '          SUMY=0.\n' +
        '          SUMX2=0.\n' +
        '          SUMY2=0\n' +
        '          SUMXY=0\n' +
        '        DO 20 I=1,N\n' +
        '         SUMX=SUMX+X(.l.)\n' +
        '         SUMY=SUMY+Y(.l.)\n' +
        '         SUMX2=SUMX2+(X(I)*X(.l.))\n' +
        '         SUMY2=SUMY2+Y(I)**2\n' +
        '         SUMXY=SUMXY+(X(I)*Y(I))\n' +
        ' 20    CONTINUE\n' +
        '        PROD=SUMX*SUMY\n' +
        '        B=(SUMXY-PROD/N)/(SUMX2-SUMX**2/N)\n' +
        '        A=(SUMY/N-B*SUMX/N)\n' +
        '       RETURN\n' +
        '       END\n' +
        '\\end{sourcecode}',

    'glsl': '\\begin{sourcecode}{glsl}{Noise shader.}\n' +
        '#ifdef GL_ES\n' +
        'precision mediump float;\n' +
        '#endif\n' +
        '\n' +
        'uniform vec2 u_resolution;\n' +
        'uniform vec2 u_mouse;\n' +
        'uniform float u_time;\n' +
        '\n' +
        '// 2D Random\n' +
        'float random (in vec2 st) {\n' +
        '\treturn fract(sin(dot(st.xy,\n' +
        '\tvec2(12.9898,78.233)))\n' +
        '\t* 43758.5453123);\n' +
        '}\n' +
        '\n' +
        '// 2D Noise based on Morgan McGuire @morgan3d\n' +
        '// https://www.shadertoy.com/view/4dS3Wd\n' +
        'float noise (in vec2 st) {\n' +
        '\tvec2 i = floor(st);\n' +
        '\tvec2 f = fract(st);\n' +
        '\t\n' +
        '\t// Four corners in 2D of a tile\n' +
        '\tfloat a = random(i);\n' +
        '\tfloat b = random(i + vec2(1.0, 0.0));\n' +
        '\tfloat c = random(i + vec2(0.0, 1.0));\n' +
        '\tfloat d = random(i + vec2(1.0, 1.0));\n' +
        '\t\n' +
        '\t// Smooth Interpolation\n' +
        '\t\n' +
        '\t// Cubic Hermine Curve.  Same as SmoothStep()\n' +
        '\tvec2 u = f*f*(3.0-2.0*f);\n' +
        '\t// u = smoothstep(0.,1.,f);\n' +
        '\t\n' +
        '\t// Mix 4 coorners percentages\n' +
        '\treturn mix(a, b, u.x) +\n' +
        '\t(c - a)* u.y * (1.0 - u.x) +\n' +
        '\t(d - b) * u.x * u.y;\n' +
        '}\n' +
        '\n' +
        'void main() {\n' +
        '\tvec2 st = gl_FragCoord.xy/u_resolution.xy;\n' +
        '\t\n' +
        '\t// Scale the coordinate system to see\n' +
        '\t// some noise in action\n' +
        '\tvec2 pos = vec2(st*5.0);\n' +
        '\t\n' +
        '\t// Use the noise function\n' +
        '\tfloat n = noise(pos);\n' +
        '\t\n' +
        '\tgl_FragColor = vec4(vec3(n), 1.0);\n' +
        '}\n' +
        '\\end{sourcecode}',

    'gnuplot': '\\begin{sourcecode}{gnuplot}{Ejemplo en Gnuplot.}\n' +
        'set terminal epslatex   \n' +
        'set output \'mplot.tex\'   \n' +
        'set xlabel "Avg. No. of demand duration (slot) "   \n' +
        'set ylabel "Acceptence rate (%)"   \n' +
        'set grid xtics ytics   \n' +
        'set key right bottom   \n' +
        '\n' +
        'set style line 1 lw 1 lc 3 pt 7  \n' +
        'set style line 2 lw 1 lc 1 pt 5  \n' +
        'set style line 3 lw 1 lc 0 pt 9  \n' +
        'set style line 4 lw 1 lc 4 pt 3  \n' +
        '\n' +
        'plot "AcceptanceRate_Ser.txt" using 2:4:5:6 title "NoMig" with errorlines linestyle 1,\\ \n' +
        '     "AcceptanceRate_Ser.txt" using 2:7:8:9 title "FlowMig" with errorlines linestyle 2 ,\\ \n' +
        '      "AcceptanceRate_Ser.txt" using 2:10:11:12 title "VMMig" with errorlines linestyle 3, \\ \n' +
        '     "AcceptanceRate_Ser.txt" using 2:13:14:15 title "NoRis" with errorlines linestyle 4\n' +
        '\\end{sourcecode}',

    'go': '\\begin{sourcecode}{go}{Ejemplo en Go.}\n' +
        '// Package main is, tautologically, the main package.\n' +
        'package main\n' +
        '\n' +
        'import "fmt"\n' +
        '\n' +
        'type s struct{}\n' +
        '\n' +
        'func main() {\n' +
        '\tfmt.Println("Hello, world!")\n' +
        '}\n' +
        '\\end{sourcecode}',

    'haskell': '\\begin{sourcecode}{haskell}{Ejemplo en Haskell.}\n' +
        '-- Type annotation (optional)\n' +
        'fib :: Int -> Integer\n' +
        '\n' +
        '-- With self-referencing data\n' +
        'fib n = fibs !! n\n' +
        'where fibs = 0 : scanl (+) 1 fibs\n' +
        '-- 0,1,1,2,3,5,...\n' +
        '\n' +
        '-- Same, coded directly\n' +
        'fib n = fibs !! n\n' +
        'where fibs = 0 : 1 : next fibs\n' +
        'next (a : t@(b:_)) = (a+b) : next t\n' +
        '\n' +
        '-- Similar idea, using zipWith\n' +
        'fib n = fibs !! n\n' +
        'where fibs = 0 : 1 : zipWith (+) fibs (tail fibs)\n' +
        '\n' +
        '-- Using a generator function\n' +
        'fib n = fibs (0,1) !! n\n' +
        'where fibs (a,b) = a : fibs (b,a+b)\n' +
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

    'ini': '\\begin{sourcecode}{ini}{Ejemplo de archivo de configuración.}\n' +
        '[anchor_parameters]\n' +
        '# Sizes should correlate to how the network processes an image.\n' +
        'sizes   = 32 64 128 256 512\n' +
        '# Strides should correlate to how the network strides over an image.\n' +
        'strides = 8 16 32 64 128\n' +
        '# The different ratios to use per anchor location.\n' +
        'ratios  = 0.5 1 2 3\n' +
        '# The different scaling factors to use per anchor location.\n' +
        'scales  = 1 1.2 1.6\n' +
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

    'lisp': '\\begin{sourcecode}{lisp}{Ejemplo en Lisp.}\n' +
        '(defun find-symbol-between-sigma-sets (sigma-a sigma-b scan-node symbols g)\n' +
        '\t(let* ((scan-node-set-in-sigma-a (find-scan-node sigma-a scan-node))\n' +
        '\t\t   (next-scan-node-set-in-sigma-b \n' +
        '\t\t\t(get-next-node-set-from-scan-node-set \n' +
        '\t\t\t scan-node-set-in-sigma-a sigma-b g))\n' +
        '\t\t   (union-node-set-in-sigma-a \n' +
        '\t\t\t(get-previous-nodes next-scan-node-set-in-sigma-b g)))\n' +
        '\t  (if \n' +
        '\t   (and \n' +
        '\t\t(memberp union-node-set-in-sigma-a scan-node-set-in-sigma-a)\n' +
        '\t\t(path-exists-between-set-a-and-set-b \n' +
        '\t\t union-node-set-in-sigma-a next-scan-node-set-in-sigma-b g))\n' +
        '\t   (car \n' +
        '\t\t(unique-get-symbols \n' +
        '\t\t union-node-set-in-sigma-a next-scan-node-set-in-sigma-b symbols))\n' +
        '\t   nil)))\n' +
        '\\end{sourcecode}',

    'lua': '\\begin{sourcecode}{lua}{Ejemplo en Lua.}\n' +
        '-- defines a factorial function\n' +
        'function fact (n)\n' +
        '\tif n == 0 then\n' +
        '\t\treturn 1\n' +
        '\telse\n' +
        '\t\treturn n * fact(n-1)\n' +
        '\tend\n' +
        'end\n' +
        '\n' +
        'print("enter a number:")\n' +
        'a = io.read("*number")        -- read a number\n' +
        'print(fact(a))\n' +
        '\\end{sourcecode}',

    'maple': '\\begin{sourcecode}{maple}{Ejemplo en Maple.}\n' +
        'restart:\n' +
        'with(geom3d):\n' +
        'eqS:=Equation(sphere(S,(x-1)^2 + (y-1)^2 +(z-1)^2 -121=0,[x,y,z],\'centername\'=T)):\n' +
        'L:=[]:\n' +
        'for x from -5 to 10  do\n' +
        'for y from -5 to 10  do\n' +
        'L:=[op(L), [x,y,z]] fi;\n' +
        'od: od: od: \n' +
        'nops(L);  \n' +
        'L;\n' +
        '\\end{sourcecode}',

    'mathematica': '\\begin{sourcecode}{mathematica}{Ejemplo en Mathematica.}\n' +
        'Block[\n' +
        ' {region=DiscretizeRegion[Polygon[{{0,0},{-1/2,Sqrt[3]/2},{1/2,Sqrt[3]/2}}]]},\n' +
        ' ContourPlot[\n' +
        '  2 Cos[4 Pi x] Sin[(4 Pi y)/Sqrt[3]] - Sin[(8 Pi y)/Sqrt[3]],\n' +
        '  {x,y} %*$\\in$*) region,\n' +
        '  PlotPoints ->70,\n' +
        '  Contours ->10,\n' +
        '  AspectRatio ->Automatic,\n' +
        '  FrameLabel ->{"x","y"},\n' +
        '  PlotLabel ->"Excited state of the equilateral triangle"\n' +
        ' ]\n' +
        ']\n' +
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

    'octave': '\\begin{sourcecode}{octave}{Ejemplo en Octave.}\n' +
        'function out = invar_table(n,m,N)\n' +
        'if n>m, error(\'first number must be smaller than the second\'), endif\n' +
        '\n' +
        't = cputime;\n' +
        'out = zeros(m-n+1,2);\n' +
        '\n' +
        'for i=n:m\n' +
        '  out(i+1-n,1) = i;\n' +
        '  out(i+1-n,2) = invar(braidmatrix(i),N);\n' +
        'end\n' +
        '\n' +
        'printf(\'Total CPU time: %f seconds\\n\', cputime-t);\n' +
        'end\n' +
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

    'pascal': '\\begin{sourcecode}{pascal}{Ejemplo pascal.}\n' +
        'PROGRAM NotasDeAlumnos;\n' +
        'uses crt;\n' +
        'Type\n' +
        'vecalumnos = array [1..40] of string;\n' +
        'var\n' +
        'Nombre, Apellido: vecalumnos;\n' +
        'Nota: array [1..40] of real;\n' +
        'Begin\n' +
        'clrscr; /*Limpia pantalla*/\n' +
        'For i:= 1 to 40 do\n' +
        '\tbegin\n' +
        '\t\twrite(\'Ingrese Nombre: \');\n' +
        '\t\treadln(Nombre[i]);\n' +
        '\t\twrite(\'Ingrese Apellido: \');\n' +
        '\t\treadln(Apellido[i]);\n' +
        '\t\twrite(\'Ingrese Nota: \');\n' +
        '\t\treadln(Nota[i]);\n' +
        '\tend;\n' +
        'For i:= 1 to 40 do\n' +
        '\tbegin\n' +
        '\t\twrite(Nombre[i], \' \',Apellido[i]);\n' +
        '\t\tif (Nota[i] >=7) then\n' +
        '\t\t\twriteln(\' aprobó\')\n' +
        '\t\telse\n' +
        '\t\t\twriteln(\' no aprobó\');\n' +
        '\tend;\n' +
        'writeln(\'\');\n' +
        'Write (\'Pulse [Intro] para finalizar...\');\n' +
        'Readln\n' +
        'end.\n' +
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

    'postscript': '\\begin{sourcecode}{postscript}{Ejemplo en PostScript.}\n' +
        '%!PS\n' +
        ' /Courier             % name the desired font\n' +
        ' 20 selectfont        % choose the size in points and establish \n' +
        '                      % the font as the current one\n' +
        ' 72 500 moveto        % position the current point at \n' +
        '                      % coordinates 72, 500 (the origin is at the \n' +
        '                      % lower-left corner of the page)\n' +
        ' (Hello world!) show  % stroke the text in parentheses\n' +
        ' showpage             % print all on the page\n' +
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

    'r': '\\begin{sourcecode}{r}{Ejemplo en r.}\n' +
        '# Genera una correlacion de los generos con todas sus variables\n' +
        'corr_data_genre <- function(data, genre) {\n' +
        '\tnum_genre <- data[data$genre == genre, -c(1:4)]\n' +
        '\tcorr_genre <- cor(num_genre)\n' +
        '}\n' +
        '\\end{sourcecode}',
    'racket': '\\begin{sourcecode}{racket}{Ejemplo en Racket.}\n' +
        '#lang racket/gui\n' +
        '\n' +
        ';; let\'s play a guessing game\n' +
        '\n' +
        '(define frame (new frame% [label "Guess"]))\n' +
        '\n' +
        '(define secret (random 5))\n' +
        '(define ((check i) btn evt)\n' +
        '  (define found? (if (= i secret) "Yes" "No"))\n' +
        '  (message-box "?" found?)\n' +
        '  (when (= i secret)\n' +
        '    (send frame show #false)))\n' +
        '\n' +
        '(for ([i (in-range 5)])\n' +
        '   (new button%\n' +
        '        [label (~a i)]\n' +
        '        [parent frame]\n' +
        '        [callback (check i)]))\n' +
        '\n' +
        '(send frame show #t)\n' +
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

    'rust': '\\begin{sourcecode}{rust}{Ejemplo en Rust.}\n' +
        'use std::rc::Rc;\n' +
        '\n' +
        '/// upside-down tree with a designated position (the *stack pointer*)\n' +
        '/// and *nodes* of type `A`.\n' +
        '#[derive(Clone, Debug)]\n' +
        'pub struct TreeStack<A> {\n' +
        '\tparent: Option<(usize, Rc<TreeStack<A>>)>,\n' +
        '\tvalue: A,\n' +
        '\tchildren: Vec<Option<Rc<TreeStack<A>>>>,\n' +
        '}\n' +
        '\n' +
        'impl<A> TreeStack<A> {\n' +
        '\t/// Creates a new `TreeStack<A>` with root label `a`.\n' +
        '\tpub fn new(a: A) -> Self {\n' +
        '\t\tTreeStack { value: a, children: Vec::new(), parent: None }\n' +
        '\t}\n' +
        '\t\n' +
        '\t/// Applies a function `FnMut(&A) -> B` to every node in a `TreeStack<A>`.\n' +
        '\tpub fn map<F, B>(&self, f: &mut F) -> TreeStack<B>\n' +
        '\twhere F: FnMut(&A) -> B,\n' +
        '\t{\n' +
        '\t\tlet new_value = f(&self.value);\n' +
        '\t\tlet new_parent = match self.parent {\n' +
        '\t\t\tSome((i, ref p)) => Some((i, Rc::new(p.map(f)))),\n' +
        '\t\t\tNone => None,\n' +
        '\t\t};\n' +
        '\t\tlet new_children = self.children\n' +
        '\t\t.iter()\n' +
        '\t\t.map(|o| o.clone().map(|v| Rc::new(v.map(f))))\n' +
        '\t\t.collect();\n' +
        '\t\tTreeStack {\n' +
        '\t\t\tparent: new_parent,\n' +
        '\t\t\tvalue: new_value,\n' +
        '\t\t\tchildren: new_children\n' +
        '\t\t}\n' +
        '\t}\n' +
        '}\n' +
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

    'scheme': '\\begin{sourcecode}{scheme}{Ejemplo en Scheme.}\n' +
        ';;; If the next character on p is a letter, get-word reads a word\n' +
        ';;; from p and returns it in a string.  If the character is not a\n' +
        ';;; letter, get-word returns the character (on eof, the eof-object).\n' +
        '(define get-word\n' +
        '\t(lambda (p)\n' +
        '\t(let ((c (read-char p)))\n' +
        '\t\t(if (eq? (char-type c) \'letter)\n' +
        '\t\t\t(list->string\n' +
        '\t\t\t(let loop ((c c))\n' +
        '\t\t\t\t(cons c\n' +
        '\t\t\t\t(if (memq (char-type (peek-char p)) \'(letter digit))\n' +
        '\t\t\t\t\t(loop (read-char p))\n' +
        '\t\t\t\t\t\'()))))\n' +
        '\t\t\tc))))\n' +
        '\\end{sourcecode}',

    'swift': '\\begin{sourcecode}{swift}{Ejemplo en Swift.}\n' +
        '// This function passes the result of the first closure or function to another and returns its result.\n' +
        'func b(closure a: () -> Int, anotherClosure: (Int) -> Int) -> Int {\n' +
        '    return anotherClosure(a())\n' +
        '}\n' +
        '\n' +
        '// With no trailing closures\n' +
        'a(closure: {return 1}, anotherClosure: {x in return x + 1})\n' +
        '\n' +
        '// With 1 trailing closure\n' +
        'a(closure: {return 1}) {x in return x + 1})\n' +
        '\n' +
        '// With 2 trailing closures\n' +
        'a {return 1} anotherClosure: {x in return x + 1}\n' +
        '\\end{sourcecode}',

    'tcl': '\\begin{sourcecode}[\\label{ejemplo-tcl}]{tcl}{Código en TCL.}\n' +
        'proc file\'hexdump filename {\n' +
        '   set fp [open $filename]\n' +
        '   fconfigure $fp -translation binary\n' +
        '   set n 0\n' +
        '   while {![eof $fp]} {\n' +
        '       set bytes [read $fp 16]\n' +
        '       regsub -all {[^ -p]} $bytes . ascii\n' +
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

    'vbscript': '\\begin{sourcecode}{vbscript}{Ejemplo en Visual Basic.}\n' +
        'Option Explicit\n' +
        '\n' +
        'Sub Signal(strSignalfolge As String, Optional lngTakt As Long = 100)\n' +
        '\'Prozedur erzeugt eine Serie von Warntönen.\n' +
        '\'Die optionale Variable lngTakt gibt den Takt in Millisekunden vor (Standard: 100 ms)\n' +
        '\'Das Muster kann über die String-Variable strSignalfolge beeinflusst werden:\n' +
        '\' Stern (*)     -> 1 Warnton\n' +
        '\' Ziffern 1..9  -> 1..9 Takte Pause\n' +
        '\' Leerzeichen   -> 1 Sekunde Pause\n' +
        '\' Minus (-)     -> 1.5 Sekunden Pause\n' +
        '    Dim i As Integer\n' +
        '    Dim b As String\n' +
        '    For i = 1 To Len(strSignalfolge)\n' +
        '        b = Mid(strSignalfolge, i, 1)\n' +
        '        Select Case b\n' +
        '            Case "*": beep\n' +
        '            Case 1 To 9: DELAY CInt(b) * lngTakt\n' +
        '            Case " ": DELAY 1000\n' +
        '            Case "-": DELAY 1500\n' +
        '        End Select\n' +
        '        DELAY lngTakt\n' +
        '    Next i\n' +
        '\n' +
        'End Sub\n' +
        '\n' +
        'Public Function strParse(Data As String, Trenn As String, Nr As Integer)\n' +
        '\'Funktion trennt die Zeichenkette <Data>\n' +
        '    On Error Resume Next\n' +
        '    Dim MainData() As String, SplitData() As String\n' +
        '    MainData = Split(Data, Trenn)\n' +
        '    SplitData = Split(MainData(Nr - 1), Trenn)\n' +
        '    strParse = SplitData(0)\n' +
        'End Function\n' +
        '\\end{sourcecode}',

    'verilog': '\\begin{sourcecode}{verilog}{Ejemplo en Verilog.}\n' +
        'module Mixing {\n' +
        '\t///////// ADC /////////\n' +
        '\tinout              ADC_CS_N,\n' +
        '\toutput             ADC_DIN,\n' +
        '\tinput              ADC_DOUT,\n' +
        '\toutput             ADC_SCLK,\n' +
        '\t\n' +
        '\t///////// ADC /////////\n' +
        '\tinput              AUD_ADCDAT,\n' +
        '\tinout              AUD_ADCLRCK,\n' +
        '\tinout              AUD_BCLK,\n' +
        '\toutput             AUD_DACDAT,\n' +
        '\tinout              AUD_DACLRCK,\n' +
        '\toutput             AUD_XCK,\n' +
        '\t\n' +
        '\t///////// clocks /////////\n' +
        '\tinput              clock2_50,\n' +
        '\tinput              clock3_50,\n' +
        '\tinput              clock4_50,\n' +
        '\tinput              clock_50,\n' +
        '\t\n' +
        '\t///////// HEX /////////\n' +
        '\toutput      [6:0]  HEX0,\n' +
        '\toutput      [6:0]  HEX1,\n' +
        '\toutput      [6:0]  HEX2,\n' +
        '\toutput      [6:0]  HEX3,\n' +
        '\toutput      [6:0]  HEX4,\n' +
        '\toutput      [6:0]  HEX5,\n' +
        '\t\n' +
        '\t///////// FOO /////////\n' +
        '\toutput      [2]    FOO,\n' +
        '}\n' +
        '\\end{sourcecode}',

    'vhdl': '\\begin{sourcecode}{vhdl}{Ejemplo en VHDL.}\n' +
        '-- (this is a VHDL comment)\n' +
        '\n' +
        '-- import std_logic from the IEEE library\n' +
        'library IEEE;\n' +
        'use IEEE.std_logic_1164.all;\n' +
        '\n' +
        '-- this is the entity\n' +
        'entity ANDGATE is\n' +
        '\tport (\n' +
        '\t\tI1 : in std_logic;\n' +
        '\t\tI2 : in std_logic;\n' +
        '\t\tO  : out std_logic);\n' +
        'end entity ANDGATE;\n' +
        '\n' +
        '-- this is the architecture\n' +
        'architecture RTL of ANDGATE is\n' +
        'begin\n' +
        '\tO <= I1 and I2;\n' +
        'end architecture RTL;\n' +
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
            $(this).html(String.format('(línea {0})', line_abstract[0]));
        }
    );

    /**
     * Escribe número de líneas tabla autor
     */
    $('.intro-line-authortable').each(function () {
        $(this).attr('style', 'cursor:pointer;');
        $(this).html(String.format('(línea {0})', line_authortable[0]));
    });

    /**
     * Escribe número de líneas inicio del documento
     */
    $('.intro-line-docinit').each(
        function () {
            $(this).attr('style', 'cursor:pointer;');
            $(this).html(String.format('(línea {0})', line_docinit[0]));
        }
    );

    /**
     * Escribe número de líneas información del documento
     */
    $('.intro-line-infodocument').each(function () {
        $(this).attr('style', 'cursor:pointer;');
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
        NotificationJS.clearall(); // Oculta las notificaciones
        gallery.init(); // Inicia la galería
    };
    let $hftrigger = $('#hfTrigger');
    // noinspection JSCheckFunctionSignatures
    $hftrigger.on('click', hfGallery);
    $hftrigger.html(String.format('{0} estilos distintos', totalHfStyles));

    /**
     * Galería portadas
     */
    portraitGallery = function () {
        let pswpElement = document.querySelectorAll('.pswp')[0];
        let items = [];
        let req_add; // Requerimientos adicionales
        for (let i = 1; i <= totalPortraitStyles; i += 1) {
            req_add = '';
            if (portraitRequiresAdditional[i] !== undefined) {
                req_add = '<br>Configuraciones adicionales: <div class="codegallerytitle">' + portraitRequiresAdditional[i] + '</div>';
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

        NotificationJS.clearall(); // Oculta las notificaciones
        gallery.init(); // Inicia la galería
    };
    let $portraittrigger = $('#portraitTrigger');
    // noinspection JSCheckFunctionSignatures
    $portraittrigger.on('click', portraitGallery);
    $portraittrigger.html(String.format('{0} estilos distintos', totalPortraitStyles));

    /**
     * Efecto bounce
     */
    bounceConfig = function (a, b) {
        // noinspection JSUnresolvedFunction
        $(a).ScrollTo();
        setTimeout(function () {
            doBounce($(b), 3, '6px', 100);
        }, 1000);
    };

    // noinspection JSUnresolvedFunction
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
     * Imagemc
     */
    triggerShowContainer('#showCodeImageMc', '#showCodeImageMcContainer');
    triggerShowContainer('#showCodeBeginImageMc', '#showCodeBeginImageMcContainer');

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
    triggerShowContainerChangeTrigger('#showLibsContainer', '#libsUsedContainer', 'Mostrar lista de librerías utilizadas', 'Ocultar lista de librerías');

    /**
     * Motrar funciones matemáticas + total
     */
    $('#mathFunCounter').html($('#mathFunContainer').find('li').length);
    triggerShowContainerChangeTrigger('#showMathFunContainer', '#mathFunContainer', 'Mostrar lista de funciones', 'Ocultar lista de funciones');

    // noinspection JSStringConcatenationToES6Template
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
        $a = $a.replace('\\begin{sourcecode}[', '<span class="pl-c1">\\begin</span><b>{</b><span class="pl-e">sourcecode</span><b>}[</b>');
        $a = $a.replace('\\begin{sourcecode}{', '<span class="pl-c1">\\begin</span><b>{</b><span class="pl-e">sourcecode</span><b>}{</b>');
        $a = $a.replace('\\label{', '<span class="pl-c1">\\label</span>{');
        $a = $a.replace('<b>[</b>]', '<b>[</b><b>]</b>');
        $a = $a.replace('}]', '}<b>]</b>');
        $a = $a.replace('<b>]</b>{', '<b>]</b><b>{</b>');
        $a = $a.replace('}{', '<b>}</b><b>{</b>');
        $a = $a.replace('}{', '<b>}</b><b>{</b>');
        $a = $a.replace('{}', '<b>{</b><b>}</b><span class="pl-srccode">');
        $a = $a.replace('.}', '.<b>}</b><span class="pl-srccode">');
        $a = $a.replace('\\end{sourcecode}', '</span><span class="pl-c1">\\end</span><b>{</b><span class="pl-e">sourcecode</span><b>}</b>');
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

    // noinspection JSStringConcatenationToES6Template
    /**
     * Se añade evento a cada elemento de código fuente
     */
    $('#sourcecode-container').find('.sourcecodel').each(function () {
        let $a = $(this).html();
        $(this).attr('id', 'sourcecode-' + $(this).html()); // Añade código fuente como atributo
        let $callback = function () {
            $write_source_code($a);
        };
        // noinspection JSCheckFunctionSignatures
        $(this).on('click', $callback);
    });

    // noinspection JSUnresolvedFunction
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
        if (href.indexOf('https://tug.org/') !== -1) {
            let img = href.split('/')[4];
            img = href + img + '-1.svg';

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

    /**
     * Ejemplos de tablas
     */
    $addExample('table-style-c', '<img src="res/images/tabla_c.PNG" alt="" class="imageCodeExample" />');
    $addExample('table-style-l', '<img src="res/images/tabla_l.PNG" alt="" class="imageCodeExample" />');
    $addExample('table-style-r', '<img src="res/images/tabla_r.PNG" alt="" class="imageCodeExample" />');

    /**
     * Columnas
     */
    $addExample('multicol-createwocolumn', '<img src="res/images/column_two_normal.PNG" alt="" class="imageCodeExample" />');
    $addExample('multicol-createwocolumn-cfg1', '<img src="res/images/column_two_normal_cfg1.PNG" alt="" class="imageCodeExample" />');
    $addExample('multicol-createwocolumn-cfg2', '<img src="res/images/column_two_normal_cfg2.PNG" alt="" class="imageCodeExample" />');
    $addExample('multicol-createthreecolumn', '<img src="res/images/column_three_normal.PNG" alt="" class="imageCodeExample" />');

}

/**
 * Función que se aplica una vez se carga el JSON de las versiones
 */
function afterJSONLoad() {
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
    $contents.append(String.format('<div class="downloadother-entry downloadother-compact"><div class="downloadother-name">Versión completa</div><div class="downloadother-link"><a href="{0}download/{1}/Template-Informe.zip">Descargar</a></div></div>', href_github_project, verid));
    for (let i = 0; i < deptos.length; i += 1) {
        // noinspection HtmlUnknownTarget
        $contents.append(String.format('<div id="downloadentry-{1}" class="downloadother-entry"><div class="downloadother-name">{0}</div><div class="downloadother-link"><a href="{3}download/{2}/Template-Informe-{1}.zip" class="otherdownloadclickeable">Descargar</a></div></div>', deptos[i][0], deptos[i][1], verid, href_github_project));
    }

}