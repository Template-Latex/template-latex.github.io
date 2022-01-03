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
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Las cookies se cargaron de manera local.
 *
 * @type {boolean}
 */
let cfg_cookie_local = false;

/**
 * Carga las cookies de la sesión.
 *
 * @returns {object} - Cookie de la sesión
 */
function loadSessionCookies() {

    /**
     * Carga las cookies
     */
    let c = Cookies.get(cfg_cookie_session_id);
    if (!notNullUndf(c)) {

        /**
         * Valores por defecto
         */
        let defvalue = {
            encuesta: true, // Carga la encuesta
        };

        /**
         * Si las cookies no son locales se carga la cookie guardada para verificar errores
         */
        Cookies.set(cfg_cookie_session_id, defvalue, {
            expires: cfg_cookie_expire_days,
            path: '/',
        });
        c = Cookies.get(cfg_cookie_session_id);

        /**
         * No se pueden almacenar cookies en el navegador se utiliza localStorage
         */
        if (!notNullUndf(c)) {

            console.log('Usando localStorage');
            cfg_cookie_local = true;

            // Se obtiene las cookies desde la localStorage
            try {
                c = localStorage.getItem(cfg_cookie_session_id);
            } catch (e) {
                // Si las cookies de terceros están desactivadas se retorna nulo
                return defvalue;
            } finally {
            }

            if (!notNullUndf(c)) {
                localStorage.setItem(cfg_cookie_session_id, JSON.stringify(defvalue));
                c = localStorage.getItem(cfg_cookie_session_id);
            }
            c = JSON.parse(c);
            return c;

        }

        /**
         * Retorna las cookies
         */
        try {
            return JSON.parse(c);
        } catch (e) {
            return defvalue;
        } finally {
        }
    }

    /**
     * Fallback, retorna cookies cargadas
     */
    return JSON.parse(c);

}

/**
 * Guarda el estado de la sesión.
 *
 * @returns {boolean} - Indica el estado de la consulta
 */
function updateSessionCookie() {
    try {
        if (!cfg_cookie_local) {
            Cookies.set(cfg_cookie_session_id, sessionCookie, {
                expires: cfg_cookie_expire_days
            });
        } else {
            localStorage.setItem(cfg_cookie_session_id, JSON.stringify(sessionCookie));
        }
        return true;
    } catch ($e) {
    } finally {
    }
    return false;
}