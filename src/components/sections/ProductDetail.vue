
<template>
  <section class="section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="product-img">
            <div class="col-md-2">
              <div class="image-box">
                <img :src="require('@/assets/img/products/1-mini.png')" alt="Product Image">
              </div>
              <div class="image-box">
                <img :src="require('@/assets/img/products/2-mini.png')" alt="Product Image">
              </div>
              <div class="image-box">
                <img :src="require('@/assets/img/products/3-mini.png')" alt="Product Image">
              </div>
              <div class="image-box">
                <img :src="require('@/assets/img/products/4-mini.png')" alt="Product Image">
              </div>
            </div>
            <div class="col-md-10">
              <div class="image-box-large">
                <img :src="require('@/assets/img/products/1-large.png')" alt="Product Image">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="products-content">
            <div class="products-price">
              <h1>{{ productName }}</h1>
              <span>Rs. {{ productPrice }}</span>
              <div class="products-star">
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star-half']" class="star-half" />
                <span>5 Customer Review</span>
              </div>
              <div class="products-detail">
                <p>{{QuantityPerUnit}}</p>
              </div>
              <div class="products-size">
                <h2>Size</h2>
                <div class="size-box-group">
                  <div class="size-box">L</div>
                  <div class="size-box">XL</div>
                  <div class="size-box">XS</div>
                </div>
              </div>
              <div class="products-color">
                <h2>Color</h2>
                <div class="color-box-group">
                  <a v-for="(color, index) in colors" :key="index" :href="`#color${index}`" class="color-box" :style="{ backgroundColor: color }"></a>
                </div>
              </div>
              <div class="products-btn">
                <button class="btn-products adjust-btn" @click="decreaseQuantity">-</button>
                <span class="quantity">{{ quantity }}</span>
                <button class="btn-products adjust-btn" @click="increaseQuantity">+</button>
                <button class="btn-products add-to-cart">Add To Cart</button>
                <button class="btn-products compare-btn">
                  <i class="fa fa-plus"></i> Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productName: '',
      productPrice: '',
      QuantityPerUnit: '',
      productImages: ['1-mini', '2-mini', '3-mini', '4-mini'],
      largeImage: '1-large',
      colors: ['#816DFA', '#FF5733', '#33FF57', '#3357FF'],
      quantity: 1
    };
  },
  async created() {
    await this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        const data = response.data;
        if (data.length > 0) {
          this.productName = data[1].ProductName;
          this.productPrice = data[1].UnitPrice;
          this.QuantityPerUnit = data[1].QuantityPerUnit;
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>