<template>
    <div class="login">
        <div class="login-form">
            <h1>Login to your account</h1>

            <input id="formUsername" type="text" placeholder="username" v-model="userName" required />
            <input id="formPassword" type="password" placeholder="password" v-model="password" required />

            <button @click="logInUser(userName, password)" id="login-button">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {}
        },

        methods: {
            logInUser(userName, password) {
                console.log('userName', userName);
                console.log('password', password);
                let userObj = {
                    userName: userName,
                    password: password
                };

                this.$store.dispatch('logInUser', userObj);
            }
        }
    }
</script>

<style lang="scss">
    .login {
        background: #e9e9e9;
        color: #666666;
        font-family: 'RobotoDraft', 'Roboto', sans-serif;
        font-size: 14px;
    }

    .login-form {
        background: #ffffff;
        width: 360px;
        border-top: 5px solid #76b852;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        margin: 150px auto;
        box-sizing: border-box;
        padding: 20px 20px 40px 20px;
    }

    .login-form input {
        outline: none;
        display: block;
        width: 100%;
        border: 1px solid #d9d9d9;
        margin: 0 0 20px;
        padding: 10px 15px;
        box-sizing: border-box;
        font-wieght: 400;
        transition: 0.3s ease;
    }

    .login-form button {
        cursor: pointer;
        background: #76b852;
        width: 100%;
        border: 0;
        padding: 10px 15px;
        color: #ffffff;
        transition: 0.3s ease;
    }
</style>