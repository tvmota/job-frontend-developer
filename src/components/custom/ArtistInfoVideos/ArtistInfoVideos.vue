<script>
import { mapGetters } from 'vuex';
import Card from '../Card/Card.vue';

export default {
  name: 'App-artist-info-videos',
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['getArtistInfo', 'getArtistVideos']),
  },
};
</script>

<template>
  <div class="columns">
    <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-4">
      info
    </div>
    <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-8">
      <div class="columns">
        <div class="column col-4" v-for="video in getArtistVideos" :key="video.id.videoId">
          <Card :info="video" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
@import '../../../assets/css/_utilities/_imports';
@import '~spectre.css/src/_variables';
@import '~spectre.css/src/_layout';
</style>
