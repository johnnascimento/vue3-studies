<template>
  <div class="home">
    <div class="products">
      <div class="product"
        v-for="(product, idx) in this.products" :key="idx"
        :class="{ inBag: isInBag(product) }">
        <div class="product-image" :style="{backgroundImage: 'url(' + product.image + ')'}" :title="product.title"></div>
        <h4 class="product_title" v-html="product.title"></h4>
        <div class="product_category" v-html="product.category"></div>
        <p class="price">US$ {{(product.price).toFixed(2)}}</p>
        <button v-if="!isInBag(product)" @click="addToBag(product)">Add to bag</button>
        <button v-else @click="removeFromBag(product.id)" class="remove">Remove from bag</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {}
    },

    methods: {
      addToBag(product) {
        product.quantity = 1;

        this.$store.dispatch('addToBag', product);
      },

      removeFromBag(productId) {
        this.$store.dispatch('removeFromBag', productId);
      },

      isInBag(product) {
        return this.productsInBag.find(item => item.id == product.id);
      }
    },

    computed: mapState([
      'products',
      'productsInBag'
    ])
  }
</script>

<style lang="scss">

  .home {
    .product_category {
      width: auto;
      display: inline-block;
      font-size: 11px;
      font-weight: bold;
      padding: 4px 8px;
      margin: 0 auto;
      background-color: black;
      border-radius: 5px;
      color: white;
      text-align: center;
    }

    .product_title {
      margin: 4px 0;
    }

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        border: 1px solid lightgray;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 32px 16px;
        margin: 8px;
        height: auto;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }

        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 8px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
          margin: 8px 0 4px;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

  }


</style>
