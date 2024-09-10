<template>
  <div class="container pt-50 pb-50">
    <div class="container our-products">
      <div class="row">
        <div class="our-products-title">
          <h1>Our Products</h1>
        </div>
        <div
            v-for="(product, index) in products"
            :key="index"
            class="col-md-3 our-products-card">

          <img :src="product.image" alt="" class="img-fluid">
          <h1>{{ product.name }}</h1>
          <h2>{{ product.description }}</h2>
          <h3>{{ product.price }}</h3>
          <span>{{ product.originalPrice }}</span>
        </div>
      </div>
      <div class="shop-btn text-center">
        <a href="#" class="our-products-btn mt-20 mb-20">
          Show More
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: ('./assets/img/our-products/1.jpg'),
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          price: 'Rp 2.500.000',
          originalPrice: 'Rp 3.500.000'
        },
        {
          image: ('./assets/img/our-products/2.jpg'),
          name: 'Leviosa',
          description: 'Modern dining chair',
          price: 'Rp 1.500.000',
          originalPrice: 'Rp 2.500.000'
        },
        {
          image: ('./assets/img/our-products/3.jpg'),
          name: 'Luxe',
          description: 'Luxury office chair',
          price: 'Rp 4.500.000',
          originalPrice: 'Rp 6.500.000'
        },
        {
          image: ('./assets/img/our-products/4.jpg'),
          name: 'Ergon',
          description: 'Ergonomic work chair',
          price: 'Rp 3.000.000',
          originalPrice: 'Rp 4.000.000'
        },
        {
          image: ('./assets/img/our-products/5.jpg'),
          name: 'Aura',
          description: 'Elegant lounge chair',
          price: 'Rp 3.800.000',
          originalPrice: 'Rp 5.000.000'
        },
        {
          image: ('./assets/img/our-products/6.jpg'),
          name: 'Orb',
          description: 'Minimalist accent chair',
          price: 'Rp 2.200.000',
          originalPrice: 'Rp 3.200.000'
        },
        {
          image: ('./assets/img/our-products/7.jpg'),
          name: 'Silvan',
          description: 'Wooden dining chair',
          price: 'Rp 1.800.000',
          originalPrice: 'Rp 2.800.000'
        },
        {
          image: ('./assets/img/our-products/8.jpg'),
          name: 'Verve',
          description: 'Versatile armchair',
          price: 'Rp 2.700.000',
          originalPrice: 'Rp 3.700.000'
        },
        {
          image: ('./assets/img/our-products/2.jpg'),
          name: 'Leviosa',
          description: 'Modern dining chair',
          price: 'Rp 1.500.000',
          originalPrice: 'Rp 2.500.000'
        },
        {
          image: ('./assets/img/our-products/3.jpg'),
          name: 'Luxe',
          description: 'Luxury office chair',
          price: 'Rp 4.500.000',
          originalPrice: 'Rp 6.500.000'
        },
        {
          image: ('./assets/img/our-products/4.jpg'),
          name: 'Ergon',
          description: 'Ergonomic work chair',
          price: 'Rp 3.000.000',
          originalPrice: 'Rp 4.000.000'
        },
        {
          image: ('./assets/img/our-products/5.jpg'),
          name: 'Aura',
          description: 'Elegant lounge chair',
          price: 'Rp 3.800.000',
          originalPrice: 'Rp 5.000.000'
        },
        {
          image: ('./assets/img/our-products/6.jpg'),
          name: 'Orb',
          description: 'Minimalist accent chair',
          price: 'Rp 2.200.000',
          originalPrice: 'Rp 3.200.000'
        },
        {
          image: ('./assets/img/our-products/7.jpg'),
          name: 'Silvan',
          description: 'Wooden dining chair',
          price: 'Rp 1.800.000',
          originalPrice: 'Rp 2.800.000'
        },
        {
          image: ('./assets/img/our-products/6.jpg'),
          name: 'Orb',
          description: 'Minimalist accent chair',
          price: 'Rp 2.200.000',
          originalPrice: 'Rp 3.200.000'
        },
        {
          image: ('./assets/img/our-products/7.jpg'),
          name: 'Silvan',
          description: 'Wooden dining chair',
          price: 'Rp 1.800.000',
          originalPrice: 'Rp 2.800.000'
        },
      ]
    };
  }
};
</script>