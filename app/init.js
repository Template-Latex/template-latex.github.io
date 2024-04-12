// noinspection JSUnresolvedReference

/**
 The MIT License (MIT)

 Copyright 2017 Pablo Pizarro R.

 Permission is hereby granted, free of charge, to any person obtaining a
 copy of this software and associated documentation files (the "Software"),
 to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense,
 and/or sell copies of the Software, and to permit persons to whom the Software
 is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or significant portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

let amountScrolled = 600;
let is_movile_browser = false;
let last_version = '$VERSION';
let last_version_link = '$VERSION_LINK';
let new_version_entry = '';
let pdf_href_lastv = '';
let total_downloads = 0;
let total_downloads_l30 = 0;
let version_entries = [];

/**
 * Inicio de la aplicación
 */
$(function () {

    /**
     * ------------------------------------------------------------------------
     * Escribe el acerca-de
     * ------------------------------------------------------------------------
     */
    printAboutInfo();

    /**
     * ------------------------------------------------------------------------
     * Carga las cookies
     * ------------------------------------------------------------------------
     */
    sessionCookie = loadSessionCookies();

    /**
     * ------------------------------------------------------------------------
     * Se comprueba que wallpaper.db se cargó
     * ------------------------------------------------------------------------
     */
    try {
        // noinspection JSUnusedLocalSymbols
        let $s = wallpaper_db.color + wallpaper_db.image + wallpaper_db.position;
    } catch ($e) {
        // noinspection JSValidateTypes,JSUndeclaredVariable
        wallpaper_db = {
            color: getRandomDarkColor(),
            image: null,
        };
        console.warn('No se pudo cargar wallpaper.db, se creó un color aleatorio por defecto');
    } finally {
    }

    /**
     * ------------------------------------------------------------------------
     * Se generan colores
     * ------------------------------------------------------------------------
     */
    let $color = wallpaper_db_query_color(tinycolor, 70);
    let $backgroundmaincolor = '#ffffff';
    let $bgprecolor = wallpaper_db_query_color(tinycolor, 250);
    let $bodycolor = '#4d4d4d';
    let $codebarcolor = wallpaper_db_query_color(tinycolor, 110);
    let $codeprecolor = wallpaper_db_query_color(tinycolor, 90);
    let $hrcolor = wallpaper_db_query_color(tinycolor, 65);
    let $pacecolor = wallpaper_db_query_color(tinycolor, 60);
    let $titlecolor = wallpaper_db_query_color(tinycolor, 45);

    /**
     * ------------------------------------------------------------------------
     * Aplica tema de color a página
     * ------------------------------------------------------------------------
     */
    let $head = $('head');
    $head.append(`<meta name="theme-color" content="${$backgroundmaincolor}">`);
    $head.append(`<meta name="msapplication-navbutton-color" content="${$backgroundmaincolor}">`);
    $head.append('<meta name="apple-mobile-web-app-capable" content="yes">');
    $head.append(`<meta name="apple-mobile-web-app-status-bar-style" content="${$backgroundmaincolor}">`);

    /**
     * ------------------------------------------------------------------------
     * Se añaden las descargas del template base
     * ------------------------------------------------------------------------
     */
    let $jsonquery;
    if (href_json_releases !== '') {
        $jsonquery = $.getJSON(href_json_releases, function ($json) {
            let $normal_link;

            // Se cargan los datos del json
            total_downloads = 0;
            for (let $i = 0; $i < $json.length; $i += 1) {
                try {
                    for (let j = 0; j < $json[$i].assets.length; j += 1) {
                        total_downloads += parseInt($json[$i].assets[j].download_count);
                        version_entries.push($json[$i].tag_name);
                    }
                } catch (err) {
                    console.log(`Error al obtener la cantidad de descargas del archivo ${$json[$i].name}`);
                }
            }

            // Válido para los subtemplates
            try {
                last_version = $json[0].tag_name;
                last_version_link = $json[0].assets[0].browser_download_url;
                if (last_version_link.includes('.min')) {
                    $normal_link = $json[0].assets[1].browser_download_url;
                } else {
                    $normal_link = last_version_link;
                }
                console.log(`Última versión template: ${last_version}`);
            } catch (err) {
                throwError(errors.cantGetVersion);
            }

            // Se actualiza total de descargas
            total_downloads_l30 = total_downloads;
            if (total_downloads === 0) {
                total_downloads = nan_value;
            } else {
                updateDownloadCounter(total_downloads, update_download_counter);
                let j = '';
                for (let i = 0; i < download_list_counter.length; i += 1) {
                    j = download_list_counter[i][1];
                    if (version_entries.indexOf(j) === -1) {
                        if (Array.isArray(download_list_counter[i][0])) {
                            total_downloads += download_list_counter[i][0][0] + download_list_counter[i][0][1];
                        } else {
                            total_downloads += download_list_counter[i][0];
                        }
                    }
                }
            }
            addDownloadCounter(total_downloads);
            console.log(`Total descargas: ${total_downloads}`);

            // Se añade link estadísticas a banner descargas
            $('#main-content-section #templatestats').attr('href', stats_href + stats_name);
            if (
                update_download_counter === 'Template-Informe' ||
                update_download_counter === 'Template-Presentacion' ||
                update_download_counter === 'Template-Reporte' ||
                update_download_counter === 'Template-Tesis'
            ) {
                // Se carga los elementos
                let $dlbutton = $('#download-button');

                // Si es Template-Informe se muestra botón otras descargas
                $('a[name*=leanModal]').leanModal({
                    closeButton: '.modal_close',
                    onopen: function () {
                        // $('#download-button-1file').tooltipster('close');
                        $('#autorbanner').tooltipster('close');
                    }
                });
                $normal_link = `${href_github_project}download/${last_version}/${update_download_counter}.zip`;
                $('#download-button-1file').append(` <span id="buttonfile1text">(v${last_version}) <i class="fas fa-download"></i></span>`);
                $dlbutton.attr('href', $normal_link);
                $dlbutton.append(` <span id="buttonfilectext">(v${last_version}) <i class="fas fa-download"></i></span>`);
                writeOtherLinks(last_version);
            } else {
                // Se carga los elementos
                let $dlbutton = $('#download-button');

                $dlbutton.attr('href', $normal_link);
                $dlbutton.append(` <span id="buttonfile1text">(v${last_version}) <i class="fas fa-download"></i></span>`);
            }

            // Se muestra descargas y botones con efecto
            $('#buttonfile1text').fadeIn('slow');
            $('#buttonfilectext').fadeIn('slow');

            // Se establece la última versión del pdf
            pdf_href_lastv = pdf_js_href + String.format(href_pdf_version, last_version);
            $('#template-preview-pdf').attr('href', pdf_href_lastv);
            $(".badgeejemplopdf").attr('href', pdf_href_lastv);

            // Se obtiene el what's new
            $('#github-button-header').attr('href', href_github_project_source);
            let $whats_new_versions = Math.min(changelog_max, $json.length);
            let $md_converter = new showdown.Converter();
            let $show_github_button = ($whats_new_versions === changelog_max);
            try {
                for (let $i = 0; $i < $whats_new_versions; $i += 1) {
                    let $version_created_at = $json[$i].created_at.substring(0, 10);
                    $version_created_at = $version_created_at.substring(8, 10) + '/' + $version_created_at.substring(5, 7) + '/' + $version_created_at.substring(0, 4);
                    new_version_entry += `
                        <div id='que-hay-de-nuevo-version-title'>
                            <b>Versión <a href="${$json[$i].html_url}" class="javascripthref">${$json[$i].tag_name}</b></a>: <i class="fecha-estilo">${$version_created_at}</i>
                        </div>
                        <blockquote class='que-hay-de-nuevo-blockquote'>
                            ${$md_converter.makeHtml($json[$i].body)}
                        </blockquote>
                    `;
                    if ($i < $whats_new_versions - 1 && changelog_show_hr) {
                        new_version_entry += '<hr class="style1">';
                    }
                }
                if ($show_github_button) {
                    new_version_entry += `Puedes ver la lista de cambios completa en <a href='${href_github_project}' class='javascripthref'>GitHub <i class='fab fa-github'></i></a>`;
                }
                $('#que-hay-de-nuevo').html(new_version_entry);
                $('.main-content hr').css('background-color', $hrcolor);
                $('.que-hay-de-nuevo-blockquote').css('border-left', '0.25rem solid ' + $codebarcolor);
            } catch ($e) {
                throwError(errors.retrieveContentVersions);
                throwException($e);
            }

            // Se llama a afterJSON
            afterJSONLoad();
        });
        $jsonquery.fail(function () { // Se activa error de json
            throwError(errors.cantLoadJson);
        });
    }

    /**
     * ------------------------------------------------------------------------
     * Se define color de fondo principal antes de carga imagen
     * ------------------------------------------------------------------------
     */
    let $bgheaderc = $('#background-page-header-colored');
    $bgheaderc.css('background-color', wallpaper_db.color);
    $bgheaderc.show();

    /**
     * ------------------------------------------------------------------------
     * Se cambia el estilo de la página
     * ------------------------------------------------------------------------
     */
    $('.main-content .functtitlstyle').css('color', $titlecolor);
    $('.main-content h1').css('color', $titlecolor);
    $('.main-content h2').css('color', $titlecolor);
    $('.main-content h3').css('color', $titlecolor);
    $('.main-content h4').css('color', $titlecolor);
    $('.main-content h5').css('color', $titlecolor);
    $('.main-content h6').css('color', $titlecolor);
    $('.menu-big-entry').css('color', $titlecolor);
    $('.menu-little-entry').css('color', $titlecolor);
    $('.que-hay-de-nuevo-blockquote h3').css('color', $titlecolor);
    $('.section-template').css('color', $titlecolor);
    $('.main-content hr').css('background-color', $hrcolor); // Se cambia el color de las barras hr
    $('.main-content blockquote').css({ // Se cambia el color de las cajas de código
        'border-left': '0.25rem solid ' + $codebarcolor,
        'color': $codeprecolor
    });
    $('.main-content pre').css({
        'background-color': $bgprecolor,
        'border': 'solid 1px ' + $codeprecolor,
    });
    $('.main-content').css('background-color', $backgroundmaincolor);
    $('#contentBackground').css('background-color', $backgroundmaincolor);
    $('body').css('background-color', $bodycolor);
    $('#que-hay-de-nuevo blockquote').css('border-left', '0.25rem solid ' + $codebarcolor);
    $head.append(`<style>.preExampleButton{background-color: ${$codeprecolor}}</style>`);
    $('.page-header-container').addClass('onstart');

    /**
     * ------------------------------------------------------------------------
     * Se comprueba si es navegador móvil
     * ------------------------------------------------------------------------
     */
    if (/Mobi/.test(navigator.userAgent)) {
        is_movile_browser = true;
        console.log('Utilizando versión móvil');
    } else {
        console.log('Utilizando versión escritorio');
    }

    /**
     * ------------------------------------------------------------------------
     * Se aplica paralaje o carga la imagen de fondo
     * ------------------------------------------------------------------------
     */
    if (wallpaper_db.image !== null) {
        console.log(`Cargando fondo ${wallpaper_db.image} - ID ${wallpaper_db.index} (wallpaper.db)`);
        if (!is_movile_browser && enableparallax) {
            // noinspection JSUnresolvedFunction
            $('#background-page-header').parallax({
                src: wallpaper_db.image,
                posX: 'center',
                posY: 'bottom',
                speed: 0.25,
                zIndex: 1,
                afterRefresh: function () {
                    if (parallaxloaded) return;

                    // Se oculta el colored
                    $('#background-page-header-colored').fadeOut(800);

                    // Se muestra el fondo
                    let $parallax = $('.parallax-mirror');
                    $parallax.fadeIn();

                    // Crea un id
                    $parallax.attr('id', 'parallaxBgHeader');

                    // Aplica blur
                    wallpaper_db_random_blur('parallaxBgHeader', blurprobability, blurlimits);

                    // Ajuste ancho
                    backgroundResize = function () {
                        if (!scrollLock) {
                            $('.parallax-mirror').css('width', $(window).outerWidth() + 'px');
                        }
                    };
                    // noinspection JSCheckFunctionSignatures
                    $(window).on('resize.parallax', backgroundResize);
                    backgroundResize();
                    parallaxloaded = true;
                }
            });
        } else {
            try {
                let $back_img = new Image();
                $back_img.onload = function () {
                    let $bgheader = $('#background-page-header');

                    // Se carga el css
                    $bgheader.css({
                        'background': wallpaper_db.color + ' url(' + wallpaper_db.image + ') ' + wallpaper_db.position + ' no-repeat fixed',
                        'background-attachment': 'fixed',
                    });
                    $bgheader.css('-webkit-background-size', 'cover');
                    $bgheader.css('-moz-background-size', 'cover');
                    $bgheader.css('-o-background-size', 'cover');
                    $bgheader.css('background-size', 'cover');
                    $bgheader.css('max-width', '100%');
                    $bgheader.css('width', $(window).width() + 20);

                    // Se oculta el colored
                    $bgheaderc.fadeOut();

                    // Se muestra el fondo
                    $bgheader.fadeIn();

                    // Se añade un evento al cambiar tamaño página web
                    backgroundResize = function () {
                        if (!scrollLock) {
                            $('#background-page-header').css('width', $(window).width() + 20);
                        }
                    };
                    // noinspection JSCheckFunctionSignatures
                    $(window).on('resize.backgroundPageHeader', backgroundResize);

                    // Aplica blur
                    wallpaper_db_random_blur('#background-page-header', blurprobability, blurlimits);
                };
                $back_img.src = wallpaper_db.image;
            } catch ($e) {
                console.log('Error crítico al obtener la imagen del wallpaper (wallpaper.db)');
            } finally {
            }
        }
    }

    if (changepacecolor) { // Se cambia el color de pace
        $('.pace .pace-progress').css('background', $pacecolor);
        $('.pace .pace-activity').css({
            'border-top-color': $codeprecolor,
            'border-left-color': $codeprecolor
        });
        $('.pace .pace-progress-inner').css('box-shadow', '0 0 10px ' + $bgprecolor + ', 0 0 5px ' + $bgprecolor + ';');
    }

    /**
     * ------------------------------------------------------------------------
     * Muestra un botón para subir al hacer scroll
     * ------------------------------------------------------------------------
     */
    backToTop = $.backToTop({
        backgroundColor: $color,
        height: 65,
        position: 'top right',
        pxToTrigger: amountScrolled,
        scrollAnimation: 400,
        width: 65,
    });

    // noinspection JSDeprecatedSymbols
    /**
     * ------------------------------------------------------------------------
     * Smooth scrolling al clickear un anchor
     * ------------------------------------------------------------------------
     */
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let $target = $(this.hash);
            $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                // noinspection JSCheckFunctionSignatures
                $('html, body').animate({
                    scrollTop: $target.offset().top
                }, 700);
                return false;
            }
        }
    });

    /**
     * ------------------------------------------------------------------------
     * Se crea un listener para cada elemento de código latex, evento copiar el texto
     * ------------------------------------------------------------------------
     */
    $('.highlight-text-tex').each(function () {
        selectAllText(this);
    });

    /**
     * ------------------------------------------------------------------------
     * Aplica tooltips
     * ------------------------------------------------------------------------
     */
    $('#autorbanner').tooltipster({
        animation: 'grow',
        content: '<img src="https://avatars0.githubusercontent.com/u/12925256" class="autor_photo" alt=""/>\n' +
            '        <div class="autor_name">Pablo Pizarro R.</div>\n' +
            '    <div class="autor_location">\n' +
            '        <svg aria-hidden="true" height="16" class="tooltiptext_autor_svg" viewBox="0 0 12 16" width="12">\n' +
            '        <path fill-rule="evenodd"\n' +
            '    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>\n' +
            '        </svg>\n' +
            '    Santiago, Chile\n' +
            '    </div>',
        contentAsHTML: true,
        delay: 400,
        maxWidth: 220,
        side: 'bottom',
        theme: 'tooltipster-borderless',
    });

    /**
     * ------------------------------------------------------------------------
     * Popup inicial
     * ------------------------------------------------------------------------
     */
    loadInitialPopup();

    /**
     * ------------------------------------------------------------------------
     * Abre la encuesta
     * ------------------------------------------------------------------------
     */
    loadEncuesta();

    /**
     * ------------------------------------------------------------------------
     * Inicia el motor de notificaciones
     * ------------------------------------------------------------------------
     */
    NotificationJS.init({
        "backgroundcolor": wallpaper_db.color,
        "core": "amaranjs",
        "enabled": true,
        "exceptionTitle": "Error",
        "maxStack": 5,
        "textcolor": "#ffffff",
        "timeout": 30 * 1000
    });

    let $throwNotification = function ($text, $persistent) {
        if ($text.length === 0) return;
        setTimeout(function () {
            NotificationJS.other($text, {"persistent": $persistent});
        }, 5000);
    };

    // Lanza las configuraciones
    let $c = Object.keys(notification);
    for (let $i = 0; $i < $c.length; $i++) {
        if ($c[$i] === 'sabiasque') {
            let $rand = Object.keys(notification[$c[$i]]).randomElement();
            let $text = `Sabías que <b>#${$rand}</b>:<br>${notification[$c[$i]][$rand]}`;
            $text = $text.replace(':)', '😉');
            $throwNotification($text, false);
            continue;
        }
        if (notification[$c[$i]].content.length === 0) continue;
        $throwNotification(notification[$c[$i]].content, notification[$c[$i]].persistent);
    }

    /**
     * ------------------------------------------------------------------------
     * Se llama a la función de cada template después de cargar
     * ------------------------------------------------------------------------
     */
    afterDocumentReady();

});