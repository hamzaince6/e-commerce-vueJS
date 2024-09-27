<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  computed: {
    limitedProducts() {
      return this.products.slice(0, 25);
    }
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<template>
  <div class="container section__space">
    <div class="row">
      <div class="col-md-8">
        <div class="card-head">
            <ul class="card-head-list">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>
        <div class="card-content" v-for="(product, index) in limitedProducts" :key="index">
          <img src="/assets/img/products/2-mini.png" class="img-fluid" alt="sepet-mini-img">
          <div class="product-info">
            <span class="product-name">{{ product.ProductName }}</span>
            <span class="product-price">{{ product.UnitPrice }}</span>
            <span class="product-quantity">{{ product.ReorderLevel }}</span>
            <span class="product-subtotal">{{ product.UnitsOnOrder }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-wrapper">
          <h2>Cart Totals</h2>
          <div class="total-wrapper">
            <div class="subtotal">
              <h3>Subtotal</h3>
              <h4>Rs. 250,000.00</h4>
            </div>
            <div class="total">
              <h3>Total</h3>
              <h4>Rs. 250,000.00</h4>
            </div>
          </div>
          <div class="shop-btn">
            <router-link to="/checkout" class="checkout-btn" aria-label="sepet-buton">Check Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>