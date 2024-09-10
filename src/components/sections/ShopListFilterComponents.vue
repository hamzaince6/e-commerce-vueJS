<template>
  <div class="container-fluid shop-filter">
    <div class="row">
      <div class="col-md-4 filter-icon">
        <font-awesome-icon :icon="['fas', 'filter']" class="" />
        <span>Filter</span>
        <font-awesome-icon :icon="['fas', 'th-large']" class="" />
        <font-awesome-icon :icon="['fas', 'list']" />
      </div>

      <div class="col-md-4 filter-options">
        <h2>Showing 1–16 of 32 results</h2>
      </div>
      <div class="col-md-4 filter-options">
        <div class="option">
          <h4>Show</h4>
          <div class="square show-box"></div>
        </div>
        <div class="option">
          <h4>Short by</h4>
          <div class="square short-by-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>