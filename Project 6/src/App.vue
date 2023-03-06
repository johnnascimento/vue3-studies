<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/basket">Shopping Bag ({{this.$store.state.productsInBag.length}})</router-link> | 
    <router-link to="/cookies">Cookies</router-link> | 
    <router-link to="/login" v-if="!this.$store.state.userLoggedIn">Login</router-link> | 
    <a href="javascript:void(0)" v-if="this.$store.state.userLoggedIn" @click="logOutUser(this.$store.state.db.userName)">Logout</a>
  </div>
  <router-view/>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('loadProducts');
      this.$store.dispatch('loadBag');

      console.log('state', this.$store.state.products);
    },

    methods: {
      logOutUser(userName) {
        console.log('userName', userName);
        let userObj = {
          userName: userName
        };

        this.$store.dispatch('logOutUser', userObj);
      }
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
