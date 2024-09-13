<template>
  <section class="Product__Description section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="product-description">
            <h2>Description</h2>
            <h2>Additional Information</h2>
            <h2>Reviews [5]</h2>
          </div>
          <div class="product-content">
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrang e and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        </div>
        <div class="col-md-6">
          <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
        </div>
        <div class="col-md-6">
          <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
        </div>
      </div>
    </div>
  </section>
</template>

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
