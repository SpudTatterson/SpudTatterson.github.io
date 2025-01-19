<template>
  <div>
    <h1 class="centered">Games & Projects</h1>

    <div  class ="centered" style="margin-bottom: 30px;">
      Here are the complete games and related projects I've worked on, including mods and similar endeavors.
    </div>

      <ProjectsList v-bind:projects="projects" />


    <!-- <div style="margin-top: 20px;">
      Discover more on <a target="_blank" href="https://someexternalwebsite.com">this external website</a>.
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>
.centered {
  text-align: center;
}
h1.centered{
  margin: 20px;
  font-weight: bold;
}
</style >
