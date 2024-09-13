
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
              <h1>Asgaard sofa</h1>
              <span>Rs. 250,000.00</span>
              <div class="products-star">
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star']" class="star-full" />
                <font-awesome-icon :icon="['fas', 'star-half']" class="star-half" />
                <span>5 Customer Review</span>
              </div>
              <div class="products-detail">
                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
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
export default {
  data() {
    return {
      colors: ['#816DFA', '#FF5733', '#33FF57', '#3357FF'],
      quantity: 1
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    }
  }
};
</script>