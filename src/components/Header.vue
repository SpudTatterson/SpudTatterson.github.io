<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/about">About me</router-link>
      <router-link to="/">Projects</router-link>
      <router-link to="/other-projects">Tech & Tools</router-link>
      <router-link to="/free-tools">Free Tools</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: center;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px) {
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}
</style>
