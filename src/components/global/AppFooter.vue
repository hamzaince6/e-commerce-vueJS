<template>
  <footer>
    <div class="container pt-50">
      <div class="row">
        <div class="col-md-3">
          <div class="footer">
            <img :src="headerLogo" class="img-fluid" alt="e-commerce-footer-logo">
            <h6>E-Commerce</h6>
          </div>
          <div class="footer-text">
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
        </div>
        <div class="col-md-2 footer-nav">
          <ul class="nav-list-footer">
            <li class="nav-item-footer"><a href="#">Home</a></li>
            <li class="nav-item-footer"><a href="#">Shop</a></li>
            <li class="nav-item-footer"><a href="#">About</a></li>
            <li class="nav-item-footer"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-nav">
          <ul class="nav-list-footer">
            <li class="nav-item-footer"><a href="#">Payment Options</a></li>
            <li class="nav-item-footer"><a href="#">Returns</a></li>
            <li class="nav-item-footer"><a href="#">Privacy Policies</a></li>
            <li class="nav-item-footer"><a href="#">Policies</a></li>
          </ul>
        </div>
        <div class="col-md-4 newsletter">
          <h6 class="newsletter-title">Newsletter</h6>
          <div class="newsletter-input-container">
            <input class="newsletter-input" placeholder="Enter Your Email Address" type="text">
            <button class="newsletter-button">
              <p class="newsletter-button-text">Subscribe</p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="newsletter-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 footer-container">
          <div class="footer-left">
            <p>Copyright © 2024 Hamza İnce. All rights reserved</p>
          </div>
          <div class="footer-right">
            <a href="https://www.instagram.com/hamza.ince6/?hl=tr" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://github.com/hamzaince6" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://www.linkedin.com/in/hamzaince/" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://x.com/Hamza__ince" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: './assets/img/header-logo.png'
    };
  }
};
</script>