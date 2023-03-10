<template>
    <div class="cookies">
        <h1 v-if="this.grabbedCookie">
            {{ this.grabbedCookie }}
        </h1>

        <button @click="addCookie('userName', 'John', 2)">Add John to Cookie</button>
        <button @click="getCookie()">Get Cookie</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Cookies',
    data() {
        return {}
    },

    methods: {
        addCookie(key, value, timeInDays) {
            let userObj = {
                userKey: key,
                userValue: value,
                expireDate: timeInDays
            };

            this.$store.dispatch('storeCookies', userObj);
        },

        getCookie() {
            this.$store.dispatch('retrieveCookies');
        },

        /**
         * @description Function responsible for setting cookies
         * @param {String} name Cookie name
         * @param {String} value Cookie value
         * @param {Number} [expires] Cookie expiration in days
         * @param {String} [domain] Cookie domain
         * @param {String} [path] Cookie path
         * @param {Boolean} [secure] Cookie ssl flag
         */
        setCookies(name, value, expires, domain, path, secure) {
            
        }
    },

    computed: mapState([
        'storeCookies'
    ])
}
</script>

<style lang="scss"></style>
