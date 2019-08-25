<script>
import { mapGetters } from 'vuex';
// eslint-disable-next-line
import fbIcon from '../../../assets/img/icons/facebook.svg?sprite';
// eslint-disable-next-line
import ytIcon from '../../../assets/img/icons/youtube.svg?sprite';
// eslint-disable-next-line
import twtIcon from '../../../assets/img/icons/twitter.svg?sprite';
// eslint-disable-next-line
import siteIcon from '../../../assets/img/icons/site.svg?sprite';
import Card from '../Card/Card.vue';

export default {
  name: 'App-artist-info-videos',
  components: {
    Card,
  },
  data() {
    return {
      fbIcon,
      ytIcon,
      twtIcon,
      siteIcon,

    };
  },
  computed: {
    ...mapGetters(['getArtistInfo', 'getArtistVideos']),
    socialIcons() {
      const { externalLinks } = this.getArtistInfo;
      const socialArr = [];

      Object.keys(externalLinks).forEach((key) => {
        switch (key) {
          case 'facebook':
            socialArr.push({
              lnk: externalLinks[key][0].url,
              icon: this.fbIcon.id,
              title: 'facebook',
            });
            break;
          case 'homepage':
            socialArr.push({
              lnk: externalLinks[key][0].url,
              icon: this.siteIcon.id,
              title: 'homepage',
            });
            break;
          case 'twitter':
            socialArr.push({
              lnk: externalLinks[key][0].url,
              icon: this.twtIcon.id,
              title: 'twitter',
            });
            break;
          case 'youtube':
            socialArr.push({
              lnk: externalLinks[key][0].url,
              icon: this.ytIcon.id,
              title: 'youtube',
            });
            break;
          default:
            break;
        }
      });
      return socialArr;
    },
  },
};
</script>

<template>
  <div class="columns align-center" v-if="getArtistVideos.length > 0">
    <section class="column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-10">
      <div class="columns info">
        <div class="col-4 info-image">
          <img :alt="getArtistInfo.name" :src="getArtistInfo.images[0].url">
        </div>
        <section class="col-8 info-data">
          <header role="heading">
            <h2>{{ getArtistInfo.name }}</h2>
          </header>
          <ol>
            <li>
              <strong>Gênero:</strong>&nbsp;{{ getArtistInfo.classifications[0].genre.name }}
            </li>
            <li>
              <strong>Sub-Gênero:</strong>&nbsp;{{ getArtistInfo.classifications[0].subGenre.name }}
            </li>
          </ol>
          <div class="info-social">
            <a
              class="info-social--external"
              :href="socialInfo.lnk"
              :key="socialInfo.lnk"
              v-for="socialInfo in socialIcons"
              target="_blank"
              :title="socialInfo.title">
                <svg class="icone icone-lg" role="presentation">
                  <use :xlink:href="'#' + socialInfo.icon"></use>
                </svg>
            </a>
          </div>
        </section>
      </div>
    </section>
    <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-10 videos-content">
      <h3 class="videos-content--title">Videos</h3>
      <div class="columns">
        <div
          class="column col-xs-12 col-sm-12 col-md-6 col-4"
          v-for="video in getArtistVideos"
          :key="video.id.videoId">
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
@import '../../../assets/css/_modules/_icons';

.info {
  margin-bottom: pxToRem(30);
  display: flex;

  &-image {
    img {
      border-radius: pxToRem(6);
      object-fit: cover;
      width: 100%;
    }
  }

  &-data {
    padding-left: pxToRem(20);

    header {
      border-bottom: 2px solid $color-primary-dark;
      font-weight: 700;
      padding-bottom: pxToRem(8);
    }

    ol {
      list-style-type: none;
      margin: pxToRem(10) 0;
      padding: 0;
    }
  }

  &-social {
    margin-bottom: pxToRem(10);
    margin-top: pxToRem(10);

    &--external {
      padding: pxToRem(2);
      margin-right: pxToRem(6);
    }
  }
}

.videos-content {
  &--title {
    border-bottom: 2px solid $color-primary-dark;
    margin-bottom: pxToRem(14);
    padding-bottom: pxToRem(4);
  }
}

.align-center {
  justify-content: center;
}
</style>
