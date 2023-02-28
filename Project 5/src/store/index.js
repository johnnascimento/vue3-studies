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

    addToBag(state, product) {
      state.productsInBag.push(product);
    },

    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag.filter(item => item.id != productId);

      state.productsInBag = updatedBag;
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
