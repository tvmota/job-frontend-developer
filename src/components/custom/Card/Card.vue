<script>
export default {
  name: 'App-card',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card-video">
    <img
      :alt="info.snippet.title"
      :src="info.snippet.thumbnails.medium.url">
  </div>
</template>

<style lang="scss">
.card-video {
  &--img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
