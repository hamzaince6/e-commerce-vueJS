<template>
  <section class="section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="Comparison__Card">
            <h2>Go to Product page for more Products</h2>
            <a href="" class="comparison-btn" aria-label="">View More</a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="Comparison__Card">
            <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
            <h3>Asgaard Sofa</h3>
            <span>Rs. 250,000.00</span>
            <div class="Card__Group">
              <em>4.7</em>
              <div class="products-star">
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
              </div>
              <span>204 Review</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="Comparison__Card">
            <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
            <h3>Asgaard Sofa</h3>
            <span>Rs. 250,000.00</span>
            <div class="Card__Group">
              <em>4.7</em>
              <div class="products-star">
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
                <font-awesome-icon :icon="['fas', 'star']" class="comparison__star" />
              </div>
              <span>204 Review</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="Comparison__Card">
            <h4>Add A Product</h4>
            <div class="product-select">
              <select>
                <option disabled selected>Choose a Product</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                <option value="product3">Product 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row Comparison__Row">
        <div class="col-md-3 line-table">
          <h4>General</h4>
          <ul class="list">
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 Three Seater, 2 Single Seater</li>
            <li>DTUBLIGRBL568</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3"></div>

        <div class="col-md-3 line-table">
          <h4>General</h4>
          <ul class="list">
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 Three Seater, 2 Single Seater</li>
            <li>DTUBLIGRBL568</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3"></div>

        <div class="col-md-3 line-table">
          <h4>General</h4>
          <ul class="list">
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 Three Seater, 2 Single Seater</li>
            <li>DTUBLIGRBL568</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3"></div>

        <div class="col-md-3 line-table">
          <h4>General</h4>
          <ul class="list">
            <li>Sales Package</li>
            <li>Sales Package</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3 line-table">
          <h4></h4>
          <ul class="list">
            <li>1 Three Seater, 2 Single Seater</li>
            <li>DTUBLIGRBL568</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

h4 {
  font-weight: bold;
  margin-bottom: 15px;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list li {
  margin-bottom: 10px;
  font-size: 16px;
}

.col-md-3 {
  padding: 15px;
}

</style>


<script>
export default {
  data() {
    return {
      productImages: [
        require('@/assets/img/products/pr1.jpg'),
      ],
    };
  },
};
</script>