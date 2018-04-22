(function ($) {
    $.fn.extend({
        leanModal: function (options) {
            // noinspection ES6ConvertVarToLetConst
            var defaults = {
                overlay: 0.7,
                onopen: function () {
                },
                closeButton: null
            };
            // noinspection ES6ConvertVarToLetConst
            var overlay = $("<div id='lean_overlay'></div>");
            $('body').append(overlay);
            options = $.extend(defaults, options);

            return this.each(function () {
                // noinspection ES6ConvertVarToLetConst
                var o = options;
                $(this).on('click', function (e) {
                    let modal_id = $(this).attr('content');
                    let $overlay = $('#lean_overlay');

                    function onDocumentKeyUp(event) {
                        if (event.keyCode === 27 || event.keyCode === 8) {
                            close_modal(modal_id);
                        }
                    }

                    // Eventos elementos
                    $overlay.off();
                    $overlay.on('click', function () {
                        close_modal(modal_id);
                    });
                    document.addEventListener('keyup', onDocumentKeyUp, false);
                    $(o.closeButton).off();
                    $(o.closeButton).on('click', function () {
                        close_modal(modal_id);
                    });

                    // Aplica estilos
                    let modal_height = ($(window).height() - $(modal_id).height()) / 2;
                    let modal_width = $(modal_id).outerWidth();
                    $overlay.css({
                        'display': 'block',
                        opacity: 0
                    });
                    $overlay.fadeTo(200, o.overlay);
                    $(modal_id).css({
                        'display': 'block',
                        'position': 'fixed',
                        'opacity': 0,
                        'z-index': 11000,
                        'left': 50 + '%',
                        'margin-left': -(modal_width / 2) + 'px',
                        'top': modal_height + 'px'
                    });
                    $('.page-header').css({
                        'filter': 'blur(' + downloadOtherBackgroundBlur + 'px)',
                        '-webkit-filter': 'blur(' + downloadOtherBackgroundBlur + 'px)'
                    });
                    $('#contentBackground').css({
                        'filter': 'blur(' + downloadOtherBackgroundBlur + 'px)',
                        '-webkit-filter': 'blur(' + downloadOtherBackgroundBlur + 'px)'
                    });
                    $('a.back-to-top').fadeOut(otherdownloadsfadetime);
                    $(modal_id).fadeTo(otherdownloadsfadetime, 1);
                    $('html').css('overflow-y', 'hidden');
                    // noinspection JSValidateTypes
                    $('#downloadother-contents').scrollTop(0);
                    $(window).off('w.resizelean');
                    $(window).on('w.resizelean', function () {
                        modal_width = $(modal_id).outerWidth();
                        $(modal_id).css({
                            'top': ($(window).height() - $(modal_id).height()) / 2 + 'px',
                            'margin-left': -(modal_width / 2) + 'px'
                        });
                    });

                    // Aplica función onopen
                    o.onopen();

                    // Previene callback inicial
                    e.preventDefault();
                });
            });

            function close_modal(modal_id) {
                $('#lean_overlay').fadeOut(otherdownloadsfadetime);
                $('html').css('overflow-y', 'visible');
                $('.page-header').css({
                    'filter': 'blur(0px)',
                    '-webkit-filter': 'blur(0px)'
                });
                $('#contentBackground').css({
                    'filter': 'blur(0px)',
                    '-webkit-filter': 'blur(0px)'
                });
                $(modal_id).css({
                    'display': 'none'
                });
            }
        }
    });
})(jQuery);
