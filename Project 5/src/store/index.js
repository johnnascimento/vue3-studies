import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [1, 2, 3]
  },
  mutations: {
    loadProducts(state, products) {
      console.log('state', state);
      console.log('products', products);

      state.products = products;
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
    }
  },
  modules: {
  }
})
