<template>
  <section class="section__space">
    <div class="container">
      <div class="row">
        <h2>Billing Details</h2>
        <div class="col-md-6">
          <form>
            <div class="form-group row">
              <div class="col-md-6">
                <input type="text" id="firstName" class="input" placeholder="First Name" required>
              </div>
              <div class="col-md-6">
                <input type="text" id="lastName" class="input" placeholder="Last Name" required>
              </div>
            </div>
            <div class="form-group">
              <input type="text" id="companyName" class="input" placeholder="Company Name (Optional)">
            </div>
            <div class="form-group">
              <input type="text" id="country" class="input" placeholder="Country / Region" required>
            </div>
            <div class="form-group">
              <input type="text" id="streetAddress" class="input" placeholder="Street Address" required>
            </div>
            <div class="form-group">
              <input type="text" id="townCity" class="input" placeholder="Town / City" required>
            </div>
            <div class="form-group">
              <input type="text" id="province" class="input" placeholder="Province" required>
            </div>
            <div class="form-group">
              <input type="text" id="zipCode" class="input" placeholder="ZIP Code" required>
            </div>
            <div class="form-group">
              <input type="tel" id="phone" class="input" placeholder="Phone" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" class="input" placeholder="Email Address" required>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="product-total">
            <div class="product-item">
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div class="product-item">
              <h3>Asgaard sofa x 1</h3>
              <h3>Rs. 250,000.00</h3>
            </div>
            <div class="product-item">
              <h3>Another Product x 1</h3>
              <h3>Rs. 150,000.00</h3>
            </div>
            <div class="product-item">
              <h3>Subtotal</h3>
              <h3>Rs. 400,000.00</h3>
            </div>
            <div class="product-item">
              <h3>Total</h3>
              <h2>Rs. 400,000.00</h2>
            </div>
            <div class="product-btn">
              <a href="" class="place-holder-btn">Place order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>

</script>
