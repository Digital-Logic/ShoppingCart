<template>
  <div class="logo-container">
      <h1 class="logo-title">Sports Gear</h1>
      <span class="logo-sub-text">Super Store</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.logo-container {
    line-height: normal;
    display: inline-block;
    margin: 5px;
}
.logo-title {
    display: block;
    margin-bottom: 0px;
    font-weight: 800;
}
.logo-sub-text {
    display: block;
    margin-top: -5px;
    text-align: right;
}

</style>
