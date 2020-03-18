<template>
  <header class="teaser" v-editable="blok">
    <CImage :image="blok.logo || {}" />
    <Navigation :items="blok.navigation || []" />
    <br>
    <component v-if="slide" :blok="slide" :is="slide.component"></component>
    <div class="teaser__pag">
      <button @click="handleDotClick(index)"
              :key="index"
              v-for="(blok, index) in blok.body"
              :class="{'teaser__pag-dot--current': index == currentSlide}"
              class="teaser__pag-dot">Next</button>
    </div>
  </header>
</template>

<script>
export default {
  props: ['blok'],

  data () {
    return {
      currentSlide: 0
    }
  },

computed: {
    slide () {
      let slides = this.blok.body.filter((slide, index) => {
        return this.currentSlide === index
      })
      if (slides.length) {
        return slides[0]
      }
      return null
    }
  },

  methods: {
    handleDotClick (index) {
      this.currentSlide = index
    }
  }
}
</script>

<style lang="scss">
.teaser {
  padding: $desktop-container-spacing - 20px $desktop-container-spacing - 20px;
}

.teaser .c-image {
  max-width: 180px;
  margin: 0 auto $desktop-inner-spacing auto;
}

@media screen and (max-width: 523px) {
  .teaser {
    padding: $mobile-container-spacing;
  }

  .teaser .c-image {
    margin-bottom: $mobile-inner-spacing * 3;
  }
}
.teaser__pag {
  width: 100%;
  text-align: center;
  margin: 30px 0;
}

.teaser__pag-dot {
  text-indent: -9999px;
  border: 0;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 5px 6px;
  background-color: #ccc;
  -webkit-appearance: none;
  cursor: pointer;

  &--current {
    background-color: #000;
  }
}
</style>