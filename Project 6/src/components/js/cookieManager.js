'use strict';

export default {
    /**
    * @description Function responsible for setting cookies
    * @param {String} name Cookie name
    * @param {String} value Cookie value
    * @param {Number} [expires] Cookie expiration in days
    * @param {String} [domain] Cookie domain
    * @param {String} [path] Cookie path
    * @param {Boolean} [secure] Cookie ssl flag
    */
    setCookie: (name, value, expires, domain, path, secure) => {
        var cookie = name + '=' + value;

        if (typeof expires === 'number') {
            let expiryTime = new Date();

            expiryTime.setTime(expiryTime.getTime() + expires * 24 * 60 * 60 * 1000);
            cookie += ';expires=' + expiryTime.toUTCString();
        }

        if (typeof domain === 'string') {
            cookie += ';domain=' + domain;
        }

        if (typeof path === 'string') {
            cookie += ';path=' + path;
        }

        if (typeof secure === 'string') {
            cookie += ';secure';
        }

        document.cookie = cookie;

        return cookie;
    },

    getCookies: (name) => {
        var cookies = document.cookie.split(';').map((cookie) => {
            return cookie.trim();
        });

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split('=');
            let key = cookie[0];
            let value = cookie[1];

            if (key === name) {
                return value;
            }
        }

        return undefined;
    },

    updateCookie: (name, value, expires, domain, path, secure) => {
        this.setCookie(name, value, expires, domain, path, secure);
    },

    deleteCookie: (name) => {
        this.setCookie(name, '', -1);
    },

    getAllCookies: () => {
        let cookies = document.cookie.split(';').map((cookie) => {
            return cookie.trim();
        });

        let cookiesList = [];

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split('=');
            let key = cookie[0];
            let value = cookie[1];
            cookiesList.push(
                {
                    key: key,
                    value: value
                }
            );
        }

        return cookiesList;
    },

    clearAllCookies: () => {
        let cookies = document.cookie.split(';').map((cookie) => {
            return cookie.trim();
        });

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split('=');
            let key = cookie[0];
            let value = cookie[1];

            this.deleteCookie(key);
        }

        return this;
    }
};
