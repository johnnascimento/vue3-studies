import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: []
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
    }
  },
  modules: {
  }
})
