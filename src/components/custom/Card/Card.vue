<script>
export default {
  name: 'App-card',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fmtTitle() {
      return this.info.snippet.title.replace(/&\w*;/g, '');
    },
  },
};
</script>

<template>
  <div class="card-video c-hand">
    <div class="card-video--header">
      <img
      :alt="info.snippet.title"
      :src="info.snippet.thumbnails.medium.url">
      <div class="card-video-img--description">
        <h4>{{ fmtTitle }}</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/css/_utilities/_functions';
@import '../../../assets/css/_utilities/_variables';
@import '../../../assets/css/_modules/_cursors';
.card-video {
  position: relative;

  &--header {
    img {
      border-radius: pxToRem(6);
      object-fit: cover;
      width: 100%;

      &:hover {
        opacity: .8;
      }
    }
  }

  &-img--description {
    align-items: flex-start;
    background: $color-primary-shadow;
    border-radius: pxToRem(6);
    bottom: pxToRem(4);
    color: $color-light;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: left;
    transition: opacity .2s, visibility .2s;
    top: 0;
    visibility: hidden;
  }
}

.card-video:hover .card-video-img--description {
  visibility: visible;
  opacity: 1;
}
</style>
