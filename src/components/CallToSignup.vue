<template>
  <div class="call-to-signup" v-editable="blok">
    <div class="call-to-signup-mask"></div>
    
    <div
      class="call-to-signup-image"
      :style="callToAboutImageStyle"
    >
      <g-link
        class="link only-desktop"
        to="/signup"
        title="Go to Sign up page"
      >
        <img src="/sign-up.svg" alt="" />
      </g-link>
    </div>

    <div class="call-to-signup-section">
      <h2 class="call-to-signup-section_title">{{blok.title}}</h2>

      <p class="call-to-signup-section_description">{{blok.description}}</p>

      <g-link
        class="link button is-primary only-mobile signup-button"
        to="/signup"
        title="Go to Sign up page"
      >
        Sign up!
      </g-link>
    </div>
  </div>
</template>

<script>
import Link from './Link'

export default {
  name: 'CallToSignup',
  props: ['blok'],
  components: {
    Link
  },
  computed: {
    callToSignupImageStyle () {
      return {
        'background-image': `url(https:${this.blok.image})`
      }
    }
  }
}
</script>

<style lang="scss">
.call-to-signup {
  padding-top: $desktop-grid-gap;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.call-to-signup .link {
  margin-top: 20px;
}

.call-to-signup-mask {
  width: 556px;
  height: 556px;
  background-color: #edf6fb;
}

.call-to-signup-image {
  width: 556px;
  height: 356px;
  float: left;
  position: relative;
  margin-left: -458px;
  margin-top: 100px;
}

.call-to-signup-image .link {
  position: absolute;
  right: -34px;
  bottom: 15%;
  opacity: 0;
  transition: all 0.3s ease;
}

.call-to-signup:hover .call-to-signup-image .link {
  opacity: 1;
}

.call-to-signup-section {
  width: 556px;
  height: 356px;
  margin-top: 100px;
  // padding-left: $desktop-grid-gap;
  padding-right: $desktop-grid-gap;
}

.call-to-signup-section_title {
  font-size: 65px;
  font-weight: 800;
  line-height: 1.15;
  color: $primary-color;
  margin-top: $desktop-grid-gap;
}

.call-to-signup-section_description {
  font-size: 16px;
  color: $blog-text-color;
  line-height: 1.63;
  margin-top: $desktop-grid-gap;
}

@media screen and (max-width: 762px) {
  .call-to-signup {
    display: inline;
  }

  .call-to-signup-mask {
    display: none;
  }

  .call-to-signup-image {
    margin: 0 auto;
    width: 95%;
    float: none;
  }

  .call-to-signup-section {
    width: 100%;
    height: auto;
    margin: 0;
    padding: $mobile-container-spacing;
    text-align: center;
  }

  .call-to-signup-section_title { 
    margin-top: 0px;
    font-size: 65px;
    font-weight: bold;
    line-height: 1.10;
    font-size: 50px;
  }

  .signup-button {
    margin: 0 auto;
  }
} 

@media screen and (max-width: 1200px){
  .call-to-signup-section {
    padding: $mobile-container-spacing;
  }

  .call-to-signup-section_title {
    font-size: 55px;
    margin-top: 0;
  }
}

</style>