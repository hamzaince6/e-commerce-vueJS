<template>
  <header>
    <div class="desktop-menu">
      <div class="row">
        <div class="col-md-3 header">
          <router-link to="/">
            <img :src="headerLogo" class="img-fluid" alt="e-commerce-header-logo">
          </router-link>
          <h1>E-Commerce</h1>
        </div>
        <div class="col-md-6 header-list">
          <ul class="nav-list">
            <li class="nav-item"><router-link to="/">Home</router-link></li>
            <li class="nav-item"><router-link to="/shop">Shop</router-link></li>
            <li class="nav-item"><router-link to="/product-comparison">Product Comparison</router-link></li>
            <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 icon-container">
          <router-link to="/profile">
            <font-awesome-icon icon="user" class="header-icon" />
          </router-link>
          <router-link to="/search">
            <font-awesome-icon icon="search" class="header-icon" />
          </router-link>
          <router-link to="/favorites">
            <font-awesome-icon icon="heart" class="header-icon" />
          </router-link>
          <router-link to="/shop-card">
            <font-awesome-icon icon="cart-shopping" class="header-icon" />
          </router-link>
        </div>
      </div>
    </div>


      <!-- Hamburger Menu Icon -->
      <div class="hamburger" @click="toggleMobileMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <!-- Mobile Menu Sidebar -->
      <aside class="mobile-menu" :class="{ active: isMobileMenuActive }">
        <div class="header">
          <router-link to="/">
            <img :src="headerLogo" class="img-fluid" alt="e-commerce-header-logo" />
          </router-link>
          <h1>E-Commerce</h1>
        </div>
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/shop">Shop</router-link></li>
          <li class="nav-item"><router-link to="/product-comparison">Product Comparison</router-link></li>
          <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div class="icon-container">
          <router-link to="/profile">
            <font-awesome-icon icon="user" class="header-icon" />
          </router-link>
          <router-link to="/search">
            <font-awesome-icon icon="search" class="header-icon" />
          </router-link>
          <router-link to="/favorites">
            <font-awesome-icon icon="heart" class="header-icon" />
          </router-link>
          <router-link to="/shop-card">
            <font-awesome-icon icon="cart-shopping" class="header-icon" />
          </router-link>
        </div>
      </aside>
  </header>
</template>


<script>
export default {
  data() {
    return {
      headerLogo: './assets/img/header-logo.png',
      isMobileMenuActive: false // Track mobile menu state
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuActive = !this.isMobileMenuActive; // Toggle menu visibility
    }
  }
};
</script>