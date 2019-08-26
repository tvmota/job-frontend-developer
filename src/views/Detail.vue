<script>
// eslint-disable-next-line
import backIcon from '../assets/img/icons/left-arrow.svg?sprite';

export default {
  name: 'App-details',
  data() {
    return {
      videoLink: 'https://www.youtube.com/embed/',
      backIcon,
    };
  },
  created() {
    this.videoLink += this.$route.params.videoId;
  },
};
</script>

<template>
  <div class="container">
    <div class="columns box box-center">
      <div class="b-bottom column col-xs-12 col-sm-12 col-md-12 col-10 text-right">
        <router-link title="Voltar" to="/">
          <svg class="icone icone-lg icone-primary" role="presentation">
            <use :xlink:href="'#' + backIcon.id"></use>
          </svg>
        </router-link>
      </div>
      <div class="column col-xs-12 col-sm-12 col-md-12 col-10">
        <div class="video-responsive">
          <iframe
            :src="videoLink"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/_utilities/_variables';
@import '~spectre.css/src/_variables';
@import '~spectre.css/src/_media';
@import '~spectre.css/src/_layout';
@import '../assets/css/_modules/_icons';
@import '../assets/css/_utilities/_functions';

.box {
  margin-top: 50px;

  &-center {
    justify-content: center;
  }
}

.text-right {
  text-align: right;
}

.b-bottom {
  border-bottom: pxToRem(2) solid $color-primary-dark;
  margin-bottom: pxToRem(10);
}

.video-responsive {
  @extend .video-responsive;
  max-height: pxToRem(680);
}
</style>
