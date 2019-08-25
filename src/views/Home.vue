
<script>
// @ is an alias to /src
import AutoComplete from '@/components/common/AutoComplete/AutoComplete.vue';
import ArtistInfoVideos from '@/components/custom/ArtistInfoVideos/ArtistInfoVideos.vue';
import artistInfo from '../services/ArtistInfoService';

export default {
  name: 'home',
  components: {
    AutoComplete,
    ArtistInfoVideos,
  },
  data() {
    return {
      apiArtistInfo: artistInfo.findArtists,
    };
  },
  methods: {
    getSearchResult(item) {
      if (item) {
        this.$store.dispatch('updateArtistInfo', item.item);
        this.$refs.searchContent.classList.remove('home-search--todown');
        this.$refs.searchContent.classList.add('home-search--totop');
        this.$refs.homeContent.classList.add('home-content--visible');
        setTimeout(() => {
          this.$refs.searchContent.classList.add('box-top');
          this.$refs.searchContent.classList.remove('box-middle');
        }, 1500);
      } else {
        this.$store.dispatch('updateArtistInfo', {});
        this.$refs.homeContent.classList.remove('home-content--visible');
        this.$refs.searchContent.classList.remove('home-search--totop');
        this.$refs.searchContent.classList.add('home-search--todown');
        setTimeout(() => {
          this.$refs.searchContent.classList.remove('box-top');
          this.$refs.searchContent.classList.add('box-middle');
        }, 1500);
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home-search box-middle" ref="searchContent">
      <div class="home-search--wrap">
        <AutoComplete
          :api-endpoint="apiArtistInfo"
          input-name="artistSearchInput"
          input-placeholder="Procure pelo nome do(a) artista ou banda"
          @get-result="getSearchResult"/>
      </div>
    </div>
    <div class="home-content" ref="homeContent">
      <ArtistInfoVideos />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/_utilities/_functions';
@keyframes slide-top {
  100% {
    margin-top: 0;
  }
}

@keyframes slide-down {
  100% {
    margin-top: calc(50vh - 30px);
  }
}

.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  &-content {
    height: 100%;
    opacity: 0;
    visibility: hidden;
    width: 100%;

    &--visible {
      margin-top: pxToRem(38);
      opacity: 1;
      transition: opacity 1s ease-in .5s;
      visibility: visible;
      -moz-transition: opacity 1s ease-in .5s;
      -webkit-transition: opacity 1s ease-in .5s;

      .home-search {
        margin-top: 0;
      }
    }
  }

  &-search {
    display: flex;
    justify-content: center;
    width: 100%;

    &--wrap {
      position: relative;
      width: 80%;

      @media(max-width: 620px) {
        width: 100%;
      }
    }

    &--totop {
      animation-name: slide-top;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }

    &--todown {
      animation-name: slide-down;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
    }
  }
}

.box {
  &-middle {
    margin-top: calc(50vh - 30px);
  }

  &-top {
    margin-top: 0;
  }
}
</style>
