<script>
import AppFooter from '@/components/common/Footer/AppFooter.vue';

export default {
  name: 'App-home',
  components: {
    AppFooter,
  },
};
</script>

<template>
  <div class="home-container" id="app">
    <main class="home-container--content" role="main">
      <keep-alive include="home">
        <router-view/>
      </keep-alive>
    </main>
    <AppFooter />
  </div>
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
