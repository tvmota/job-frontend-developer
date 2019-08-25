<script>
export default {
  name: 'App-home',
};
</script>

<template>
  <section class="home-container" id="app">
    <!--header><h2>Head</h2></header-->
    <main class="home-container--content" role="main">
      <router-view/>
    </main>
    <footer>
      <h4>adasdas</h4>
    </footer>
  </section>
</template>

<style lang="scss">
@import './assets/css/_base/_normalize';
@import './assets/css/_base/_base';
@import './assets/css/_utilities/_imports';

.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &--content {
    @include flexContainer(flex, column, nowrap, flex-start, flex-start, flex-start);
    flex: 1 0 auto;
    padding: pxToRem(20) pxToRem(30);
    overflow-y: auto;
    width: 100%;
  }
}
</style>
