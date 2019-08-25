<script>
import { VueAutosuggest } from 'vue-autosuggest';

export default {
  name: 'App-autocomplete',
  components: {
    VueAutosuggest,
  },
  props: {
    apiEndpoint: {
      type: Function,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      autoCompleteOpt: {
        inputProps: {
          class: 'autosuggest-input',
          name: this.inputName,
          placeholder: this.inputPlaceholder,
        },
        query: '',
        showLoading: false,
        suggestions: [],
      },
    };
  },
  methods: {
    clickHandler() {
      if (!this.autoCompleteOpt.query) {
        this.autoCompleteOpt.suggestions = [];
      }
    },
    searchArtists(searchParam) {
      const respParam = '_embedded';

      if (searchParam.length > 4) {
        this.autoCompleteOpt.showLoading = true;
        this.apiEndpoint(searchParam)
          .then((resp) => {
            if (resp[respParam]) {
              this.autoCompleteOpt.suggestions = [{ data: resp[respParam].attractions }];
            } else {
              this.autoCompleteOpt.suggestions = [{
                data: [
                  { id: 0, name: 'Sem Resultados' },
                ],
              }];
            }
          }).catch((err) => {
            console.log(err);
          }).finally(() => {
            this.autoCompleteOpt.showLoading = false;
          });
      }

      if (searchParam.length < 1) {
        this.selectedOption('');
      }
    },
    selectedOption(item) {
      this.$emit('get-result', item);
    },
  },
};
</script>

<template>
  <vue-autosuggest
    ref="autocomplete"
    :inputProps="autoCompleteOpt.inputProps"
    :suggestions="autoCompleteOpt.suggestions"
    v-model="autoCompleteOpt.query"
    @input="searchArtists"
    @click="clickHandler"
    @selected="selectedOption">
      <template slot="after-input">
        <div class="input-loading" v-show="autoCompleteOpt.showLoading">
          <i class="input-loading--loader"></i>
        </div>
      </template>
      <template slot-scope="{ suggestion }">
        <div>{{suggestion.item.name}}</div>
      </template>
  </vue-autosuggest>
</template>

<style lang="scss">
@import '../../../assets/css/_utilities/_functions';
@import '../../../assets/css/_utilities/_variables';
@keyframes donut {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.autosuggest-input {
  background-color: $color-white;
  border: pxToRem(1) solid $color-secondary;
  border-radius: pxToRem(6);
  box-sizing: border-box;
  color: $color-primary;
  display: block;
  font-size: pxToRem(20);
  padding: pxToRem(10) pxToRem(8);
  position: relative;
  outline: none;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  &::-moz-selection {
    background: $color-primary;
    color: $color-white;
  }

  &:selection {
    background: $color-primary;
    color: $color-white;
  }

  @media(max-width: 620px) {
    font-size: pxToRem(18);
  }
}

.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  margin-top: pxToRem(4);
  position: relative;
  width: 100%;
}

.autosuggest__results {
  background: $color-white;
  border: pxToRem(1) solid $color-secondary;
  border-bottom-left-radius: pxToRem(4);
  border-bottom-right-radius: pxToRem(4);
  font-weight: 300;
  margin: 0;
  max-height: pxToRem(300);
  padding: 0;
  position: absolute;
  overflow: auto;
  z-index: 1;
  width: 100%;

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  ul:nth-child(1) > .autosuggest__results-title {
    border-top: none;
  }
}

.autosuggest__results-item {
  background: $color-light;
  cursor: pointer;
  color: $color-primary;
  font-weight: 700;
  padding: pxToRem(10);

  &:active,
  &:hover,
  &:focus
  {
    background-color: $color-primary;
    color: $color-primary-text-light;
  }
}

.input-loading {
  position: absolute;
  right: 16px;
  top: calc(50% - 11px);

  &--loader {
    animation: donut 5.4s infinite;
    display: inline-block;
    height: 20px;
    position: relative;
    width: 20px;

    &::after,
    &::before {
      animation: donut 0.7s ease-in-out infinite;
      background: $color-white;
      border-color: $color-primary $color-primary transparent transparent;
      border-radius: pxToRem(20);
      border-style: solid;
      border-width: pxToRem(4);
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &::after {
      animation: donut 0.7s ease-in-out 0.1s infinite;
      background: transparent;
    }
  }
}
</style>
