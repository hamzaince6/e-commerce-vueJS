<template>
  <section class="section__space">
    <div class="container three-card">
      <div class="row">
        <div class="card-three-title">
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div v-for="(card, index) in cards" :key="index" class="col-md-4">
          <div class="card-three">
            <img :src="card.image" :alt="card.title" class="img-fluid">
            <h2>{{ card.title }}</h2>
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
      cards: [
        {
          image: ('./assets/img/three/dinning.jpg'),
          title: 'Dining'
        },
        {
          image: ('./assets/img/three/living.jpg'),
          title: 'Living'
        },
        {
          image: ('./assets/img/three/bedroom.jpg'),
          title: 'Bedroom'
        }
      ]
    };
  }
};
</script>