<template>
  <div class="container pt-50 pb-50">
    <div class="container our-products">
      <div class="row">
        <div class="our-products-title">
          <h1>Our Products</h1>
        </div>
        <div
            v-for="product in products"
            :key="product.id"
            class="col-md-3 our-products-card"
        >
          <router-link :to="{ path: '/single-product', query: { id: product.id } }" class="product-link">
          <img :src="product.image" alt="" class="img-fluid">
            <h1>{{ product.name }}</h1>
            <h2>{{ product.description }}</h2>
            <h3>{{ product.price }}</h3>
            <span>{{ product.originalPrice }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/customers')
        .then((response) => {
          const customers = response.data;
          this.products = customers.map((customer, index) => {
            return {
              id: index,
              image: `./assets/img/our-products/${(index % 8) + 1}.jpg`,
              name: customer.CompanyName || 'N/A',
              description: customer.ContactTitle || 'N/A',
              price: customer.PostalCode || 'N/A',
              originalPrice: customer.Phone || 'N/A',
            };
          });
        })
        .catch((error) => {
          console.error('API request failed:', error);
        });
  },
};
</script>

