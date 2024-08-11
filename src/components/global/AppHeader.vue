<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 header">
          <img src="/assets/img/header-logo.png" class="img-fluid" alt="e-commerce-header-logo">
          <h1>E-Commerce</h1>
        </div>
        <div class="col-md-6 header-list">
          <ul class="nav-list">
            <li class="nav-item"><router-link to="/">Home</router-link></li>
            <li class="nav-item"><router-link to="/shop">Shop</router-link></li>
            <li class="nav-item"><router-link to="/about">About</router-link></li>
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
          <router-link to="/cart">
            <font-awesome-icon icon="cart-shopping" class="header-icon" />
          </router-link>
        </div>
      </div>
      </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>
