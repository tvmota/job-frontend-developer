
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
      this.$store.dispatch('updateArtistInfo', item.item);
      this.$refs.searchContent.classList.add('home-search--totop');
      this.$refs.homeContent.classList.add('home-content--visible');
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home-search" ref="searchContent">
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
      margin-top: pxToRem(20);
      opacity: 1;
      transition: opacity 1s ease-in .5s;
      visibility: visible;
      -moz-transition: opacity 1s ease-in .5s;
      -webkit-transition: opacity 1s ease-in .5s;
    }
  }

  &-search {
    display: flex;
    justify-content: center;
    margin-top: calc(50vh - 30px);
    width: 100%;

    &--wrap {
      position: relative;
      width: 80%;
    }

    &--totop {
      animation-name: slide-top;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }
  }
}
</style>
