<script>
export default {
  name: 'App-Footer',
};
</script>
<template>
  <footer class="container-footer" role="contentinfo">
    <a
      class="container-footer--link"
      href="https://github.com/tvmota/job-frontend-developer"
      target="_blank"
      title="Src">
        GitHub
    </a>
  </footer>
</template>
<style lang="scss">
@import '../../../assets/css/_utilities/_variables.scss';
@import '../../../assets/css/_utilities/_functions.scss';

.container-footer {
  background-color: $color-primary;
  flex: none;
  padding: pxToRem(10);
  text-align: right;

  &--link {
    color: $color-primary-text-light;
    font-size: pxToRem(20);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: $color-primary-text-dark;
      text-decoration: underline;
    }
  }
}
</style>
