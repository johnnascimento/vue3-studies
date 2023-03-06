import { createStore } from 'vuex';
import axios from 'axios';
import router from './../router';

export default createStore({
  state: {
    products: [],
    productsInBag: [],
    cookies: [],
    grabbedCookie: '',
    userLoggedIn: false,
    db: {
      userName: 'John',
      password: '123456789'
    }
  },

  mutations: {
    loadProducts(state, products) {
      console.log('state', state);
      console.log('products', products);

      state.products = products;
    },

    loadBag(state, products) {
      state.productsInBag = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);

      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
    },

    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag.filter(item => item.id != productId);

      state.productsInBag = updatedBag;

      localStorage.setItem('productsInBag', JSON.stringify(updatedBag));
    },

    storeCookies(state, userObj) {
      let keyValue = userObj.userKey + '=' + userObj.userValue;
      let now = new Date();

      console.log('userObj.expireDate', userObj.expireDate);

      now.setTime(now.getTime() + userObj.expireDate * 24 * 60 * 60 * 1000);

      let expires = 'expires=' + now.toUTCString();
      let cookie = keyValue + ';' + expires;

      console.log('cookie', cookie);

      document.cookie = cookie;

      state.cookies.push(cookie);
    },

    retrieveCookies(state, searchValue) {
      let currentCookies = document.cookie.split(';');
      let retrievedCookie = '';

      for(let i = 0; i < currentCookies.length; i++) {
        let curCookie = currentCookies[i].split('=');
        // let curKey = curCookie[0];
        let curVal = curCookie[1].trim();

        if (searchValue === curVal) {
          retrievedCookie = curVal;
        }
      }

      state.grabbedCookie = retrievedCookie;

      return retrievedCookie;
    },

    isUserLoggedIn(state, userName) {
      console.log('state', state);
      console.log('userObject', userName);
      console.log('this', this);

      this.commit('retrieveCookies', userName);

      state.userLoggedIn = state.grabbedCookie === userName;
      console.log('state.userLoggedIn', state.userLoggedIn);
    },

    logOutUser(state, userObject) {
      let userObj = {
        userKey: 'userName',
        userValue: userObject.userName,
        expireDate: -1
      };

      console.log('userObj', userObj);
      this.commit('storeCookies', userObj);

      state.userLoggedIn = false;

      console.log('document.cookie 2', document.cookie);
      router.push('/login');
    },

    logInUser(state, userObject) {
      let userObj = {
        userKey: 'userName',
        userValue: userObject.userName,
        expireDate: 3
      };

      this.commit('storeCookies', userObj);

      console.log('userObject', userObject);
      console.log('state.cookies', state.cookies);
      console.log('userObject.userName', userObject.userName);
      console.log('state.db.userName', state.db.userName);
      console.log('userObject.password', userObject.password);
      console.log('state.db.password', state.db.password);

      if (userObject.userName === state.db.userName && userObject.password === state.db.password) {
        state.userLoggedIn = true;

        console.log('router', router);

        router.push('/');
      } else {
        alert('Password or user is invalid');
      }
    }
  },

  actions: {
    loadProducts({ commit }) {
      axios
        .get('https://fakestoreapi.com/products')
        .then(response => {
          console.log('actions phase: products', response.data);

          commit('loadProducts', response.data);
        });
    },

    loadBag({ commit }) {
      if (localStorage.getItem('productsInBag')) {
        commit('loadBag', JSON.parse(localStorage.getItem('productsInBag')));
      }
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },

    removeFromBag({ commit }, productId) {
      if (confirm('Are you sure you want to remove?')) {
        commit('removeFromBag', productId);
      }
    },

    storeCookies({ commit }, value) {
      commit('storeCookies', value);
    },

    retrieveCookies({ commit }) {
      commit('retrieveCookies');
    },

    logOutUser({commit}, userObject) {
      console.log('logOutUser Action', userObject);

      commit('logOutUser', userObject);
    },

    logInUser({ commit }, userObject) {
      console.log('logInUser Action', userObject);

      commit('logInUser', userObject);
    }
  },

  modules: {}
})
