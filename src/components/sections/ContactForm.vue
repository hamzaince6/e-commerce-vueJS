<template>
  <section class="section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 contact-tite">
          <h2>Get In Touch With Us</h2>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div class="col-md-6">
          <div class="address">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="address-icon" />
            <div class="address-details">
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div class="address">
            <font-awesome-icon :icon="['fas', 'phone']" class="address-icon" />
            <div class="address-details">
              <h3>Phone</h3>
              <p>+1 234 567 8900</p>
            </div>
          </div>
          <div class="address">
            <font-awesome-icon :icon="['fas', 'clock']" class="address-icon" />
            <div class="address-details">
              <h3>Working Time</h3>
              <p>Mon - Fri: 9 AM - 5 PM</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form class="contact-form">
            <div class="form-group">
              <input type="text" id="name" class="input" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" class="input" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
              <input type="text" id="subject" class="input" placeholder="Enter the subject" required>
            </div>
            <div class="form-group">
              <textarea id="message" class="input" rows="4" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>



<script>

</script>
