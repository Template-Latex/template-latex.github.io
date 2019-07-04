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
    writeBadges();

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
        // noinspection JSValidateTypes
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
    let backgroundmaincolor = shadeColor2(wallpaper_db.color, 0.98);
    let bgprecolor = shadeColor2(wallpaper_db.color, 0.9);
    let codebarcolor = shadeColor2(wallpaper_db.color, 0.4);
    let codeprecolor = shadeColor2(wallpaper_db.color, 0.2);
    let hrcolor = shadeColor2(wallpaper_db.color, 0.7);
    let pacecolor = shadeColor2(wallpaper_db.color, 0.15);

    // noinspection JSJQueryEfficiency
    /**
     * ------------------------------------------------------------------------
     * Aplica tema de color a página
     * ------------------------------------------------------------------------
     */
    let $head = $('head');
    $head.append(String.format('<meta name="theme-color" content="{0}">', backgroundmaincolor));
    $head.append(String.format('<meta name="msapplication-navbutton-color" content="{0}">', backgroundmaincolor));
    $head.append(String.format('<meta name="apple-mobile-web-app-capable" content="yes">', backgroundmaincolor));
    $head.append(String.format('<meta name="apple-mobile-web-app-status-bar-style" content="{0}">', backgroundmaincolor));

    /**
     * ------------------------------------------------------------------------
     * Se añaden las descargas del template base
     * ------------------------------------------------------------------------
     */
    let jsonquery;
    if (href_json_releases !== '') {
        jsonquery = $.getJSON(href_json_releases, function (json) {

            /**
             * Se cargan los datos del json
             */
            total_downloads = 0;
            for (let i = 0; i < json.length; i += 1) {
                try {
                    for (let j = 0; j < json[i].assets.length; j += 1) {
                        total_downloads += parseInt(json[i].assets[j].download_count);
                        version_entries.push(json[i].tag_name);
                    }
                } catch (err) {
                    console.log(String.format('Error al obtener la cantidad de descargas del archivo {0}', json[i].name));
                }
            }

            /**
             * Válido para los subtemplates
             */
            try {
                last_version = json[0].tag_name;
                last_version_link = json[0].assets[0].browser_download_url;
                let last_version_link_1 = json[0].assets[1].browser_download_url;
                var normal_link, compact_link;
                if (last_version_link.includes('.min')) {
                    normal_link = last_version_link_1;
                    compact_link = last_version_link;
                } else {
                    normal_link = last_version_link;
                    compact_link = last_version_link_1;
                }
                console.log(String.format('Última versión template: {0}', last_version));
            } catch (err) {
                throwError(errors.cantGetVersion);
            }

            /**
             * Se actualiza total de descargas
             */
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
            update_download_banner(total_downloads);

            /**
             * Se añade link estadísticas a banner descargas
             */
            $('#main-content-section #templatestats').attr('href', stats_href + stats_name);
            if (update_download_counter === 'Template-Informe') {

                // Se carga los elementos
                let $dlbutton = $('#download-button');

                // Si es Template-Informe se muestra botón otras descargas
                $('a[name*=leanModal]').leanModal({
                    closeButton: '.modal_close',
                    onopen: function () {
                        $('#download-button-1file').tooltipster('close');
                        $('#autorbanner').tooltipster('close');
                    }
                });
                let normal_link = String.format('{0}download/{1}/Template-Informe.zip', href_github_project, last_version);
                // noinspection HtmlUnknownTarget
                $('#download-button-1file').append(String.format(' <span id="buttonfile1text">(v{0}) <i class="fas fa-download"></i></span>', last_version));
                $dlbutton.attr('href', normal_link);
                // noinspection HtmlUnknownTarget
                $dlbutton.append(String.format(' <span id="buttonfilectext">(v{0}) <i class="fas fa-download"></i></span>', last_version));
                writeOtherLinks(last_version);

            } else {

                // Se carga los elementos
                let $dlbutton = $('#download-button');
                let $d1fbutton = $('#download-button-1file');

                // Se establece la versión en el botón de descargas
                $d1fbutton.attr('href', compact_link);
                // noinspection HtmlUnknownTarget
                $d1fbutton.append(String.format(' <span id="buttonfilectext">(v{0}) <i class="fas fa-download"></i></span>', last_version));
                $dlbutton.attr('href', normal_link);
                // noinspection HtmlUnknownTarget
                $dlbutton.append(String.format(' <span id="buttonfile1text">(v{0}) <i class="fas fa-download"></i></span>', last_version));
                $d1fbutton.click(function () {
                    if (total_downloads !== nan_value) {
                        total_downloads += 1;
                        total_downloads_l30 += 1;
                        update_download_banner(total_downloads);
                    }
                });

            }

            /**
             * Se muestra descargas y botones con efecto
             */
            fadein_css('#total-download-counter-1', '0.1s');
            fadein_css('#total-download-counter-2', '0.1s');
            $('#buttonfile1text').fadeIn('slow');
            $('#buttonfilectext').fadeIn('slow');

            /**
             * Se establece la última versión del pdf
             */
            pdf_href_lastv = pdf_js_href + String.format(href_pdf_version, last_version);
            $('#template-preview-pdf').attr('href', pdf_href_lastv);
            $(".badgeejemplopdf").attr('href', pdf_href_lastv);

            /**
             * Se obtiene el what's new
             */
            $('#github-button-header').attr('href', href_github_project_source);
            let whats_new_html = "<div id='que-hay-de-nuevo-version-title'>{0}</div><blockquote class='que-hay-de-nuevo-blockquote'>{1}</blockquote>";
            let whats_new_versions = Math.min(changelog_max, json.length);
            // noinspection ES6ModulesDependencies
            let md_converter = new showdown.Converter();
            let show_github_button = (whats_new_versions === changelog_max);
            try {
                for (let i = 0; i < whats_new_versions; i += 1) {
                    let version_created_at = json[i].created_at.substring(0, 10);
                    let $version_created_at = version_created_at.substring(8, 10) + '/' + version_created_at.substring(5, 7) + '/' + version_created_at.substring(0, 4);
                    // noinspection HtmlUnknownTarget
                    let title_new_version = String.format('<b>Versión <a href="{2}" class="javascripthref">{0}</b></a>: <i class="fecha-estilo">{1}</i>', json[i].tag_name, $version_created_at, json[i].html_url);
                    let content_version = md_converter.makeHtml(json[i].body);
                    new_version_entry += String.format(whats_new_html, title_new_version, content_version);
                    if (i < whats_new_versions - 1 && changelog_show_hr) {
                        new_version_entry += '<hr class="style1">';
                    }
                }
                if (show_github_button) {
                    // noinspection HtmlUnknownTarget
                    new_version_entry += String.format("Puedes ver la lista de cambios completa en <a href='{0}' class='javascripthref'>GitHub <i class='fab fa-github'></i></a>", href_github_project);
                }
                $('#que-hay-de-nuevo').html(new_version_entry);
                $('.main-content hr').css('background-color', hrcolor);
                $('.que-hay-de-nuevo-blockquote').css('border-left', '0.25rem solid ' + codebarcolor);
            } catch ($e) {
                throwError(errors.retrieveContentVersions);
                throwException($e);
            }

            // Se llama a afterJSON
            afterJSONLoad();
        });
        jsonquery.fail(function () { // Se activa error de json
            throwError(errors.cantLoadJson);
        });

        /**
         * Se actualiza la cantidad de descargas al hacer click
         */
        $('total-download-counter').each(function () {
            this.id.innerHTML = total_downloads;
        });
        $('#download-button').click(function () {
            if (total_downloads !== nan_value) {
                total_downloads += 1;
                total_downloads_l30 += 1;
                update_download_banner(total_downloads);
            }
        });

        /**
         * Se actualiza el total de descargas cada n-segundos
         */
        if (update_downloads_version) {
            setInterval(function () {
                let update_downloads = 0;
                let update_last_version = '';
                jsonquery = $.getJSON(href_json_releases, function (json) {
                    for (let i = 0; i < json.length; i += 1) {
                        try {
                            for (let j = 0; j < json[i].assets.length; j += 1) {
                                update_downloads += parseInt(json[i].assets[j].download_count);
                            }
                        } catch (err) {
                            console.log(String.format('Error al obtener la cantidad de descargas del archivo {0}', json[i].name));
                        }
                    }
                    update_last_version = json[0].tag_name;

                    // Si cambió la versión actual entonces recarga la página
                    if (update_last_version !== last_version) {
                        console.log(String.format('Se encontró una nueva versión v{0}, recargando págna', update_last_version));
                        location.reload();
                    }

                    // Si existieron nuevas descargas actualiza contador
                    if (update_downloads > total_downloads_l30) {
                        let delta_downloads = update_downloads - total_downloads_l30;
                        let d = new Date();
                        console.log(String.format('[{1} {2}] Actualizando el contador de descargas, +{0} descargas', delta_downloads, d.toLocaleDateString(), d.toLocaleTimeString()));
                        total_downloads += delta_downloads;
                        total_downloads_l30 += delta_downloads;
                        update_download_banner(total_downloads);
                    }
                });
            }, seconds_update_downloadCounter * 1000);
        }
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
    $('.main-content .functtitlstyle').css('color', wallpaper_db.color);
    $('.main-content h1').css('color', wallpaper_db.color);
    $('.main-content h2').css('color', wallpaper_db.color);
    $('.main-content h3').css('color', wallpaper_db.color);
    $('.main-content h4').css('color', wallpaper_db.color);
    $('.main-content h5').css('color', wallpaper_db.color);
    $('.main-content h6').css('color', wallpaper_db.color);
    $('.menu-big-entry').css('color', wallpaper_db.color);
    $('.menu-little-entry').css('color', wallpaper_db.color);
    $('.que-hay-de-nuevo-blockquote h3').css('color', wallpaper_db.color);
    $('.section-template').css('color', wallpaper_db.color);
    $('.main-content hr').css('background-color', hrcolor); // Se cambia el color de las barras hr
    $('.main-content blockquote').css({ // Se cambia el color de las cajas de código
        'border-left': '0.25rem solid ' + codebarcolor,
        'color': codeprecolor
    });
    $('.main-content pre').css({
        'background-color': bgprecolor,
        'border': 'solid 1px ' + codeprecolor,
    });
    $('.main-content').css('background-color', backgroundmaincolor);
    $('#contentBackground').css('background-color', backgroundmaincolor);
    $('body').css('background-color', backgroundmaincolor);
    $('#que-hay-de-nuevo blockquote').css('border-left', '0.25rem solid ' + codebarcolor);

    // noinspection CssInvalidHtmlTagReference, CssUnusedSymbol, JSJQueryEfficiency
    $('head').append(String.format('<style>.preExampleButton{background-color:{0}}</style>', codeprecolor));

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
        console.log(String.format('Cargando fondo {0} - ID {1} (wallpaper.db)', wallpaper_db.image, wallpaper_db.index));
        if (!is_movile_browser && enableparallax) {
            // noinspection JSUnresolvedFunction
            $('#background-page-header').parallax({
                src: wallpaper_db.image,
                posX: 'center',
                posY: 'bottom',
                speed: 0.20,
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
                    $(window).on('resize.parallax', backgroundResize);
                    backgroundResize();
                    parallaxloaded = true;
                }
            });
        } else {
            try {
                let back_img = new Image();
                back_img.onload = function () {
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
                    $(window).on('resize.backgroundPageHeader', backgroundResize);

                    // Aplica blur
                    wallpaper_db_random_blur('#background-page-header', blurprobability, blurlimits);
                };
                back_img.src = wallpaper_db.image;
            } catch ($e) {
                console.log('Error crítico al obtener la imagen del wallpaper (wallpaper.db)');
            } finally {
            }
        }
    }

    if (changepacecolor) { // Se cambia el color de pace
        $('.pace .pace-progress').css('background', pacecolor);
        $('.pace .pace-activity').css({
            'border-top-color': codeprecolor,
            'border-left-color': codeprecolor
        });
        $('.pace .pace-progress-inner').css('box-shadow', '0 0 10px ' + bgprecolor + ', 0 0 5px ' + bgprecolor + ';');
    }

    /**
     * ------------------------------------------------------------------------
     * Muestra un botón para subir al hacer scroll
     * ------------------------------------------------------------------------
     */
    backToTop = $.backToTop({
        backgroundColor: wallpaper_db.color,
        height: 65,
        position: 'top right',
        pxToTrigger: amountScrolled,
        scrollAnimation: 400,
        width: 65,
    });

    /**
     * ------------------------------------------------------------------------
     * Smooth scrolling al clickear un anchor
     * ------------------------------------------------------------------------
     */
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // noinspection JSCheckFunctionSignatures
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });

    /**
     * ------------------------------------------------------------------------
     * Se añade el link a chat banner
     * ------------------------------------------------------------------------
     */
    // $('#chatgitter').attr('href', gitter_href + update_download_counter);

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
    $('#download-button-1file').tooltipster({
        animation: 'grow',
        content: 'Seleccionar entre distintas versiones',
        delay: 600,
        maxWidth: 200,
        side: 'bottom',
        theme: 'tooltipster-borderless',
    });
    // noinspection HtmlUnknownAttribute
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
        "timeout": 30000
    });

    // Lanza las configuraciones
    let $c = Object.keys(notification);
    for (let $i = 0; $i < $c.length; $i++) {
        if ($c[$i] === 'sabiasque') {
            let $rand = Object.keys(notification[$c[$i]]).randomElement();
            let $text = String.format('Sabías que <b>#{0}</b>:<br>{1}', $rand, notification[$c[$i]][$rand]);
            $text = $text.replace(':)', '🤔');
            NotificationJS.other($text, {"persistent": false});
            continue;
        }
        if (notification[$c[$i]].content.length === 0) continue;
        NotificationJS.other(notification[$c[$i]].content, {"persistent": notification[$c[$i]].persistent});
    }

    /**
     * ------------------------------------------------------------------------
     * Se llama a la función de cada template después de cargar
     * ------------------------------------------------------------------------
     */
    afterDocumentReady();

});