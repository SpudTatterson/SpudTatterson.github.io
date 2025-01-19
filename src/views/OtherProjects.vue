<template>
  <div>
    <h1 class="centered">Tech & Tools</h1>

    <div style="margin-bottom: 30px;">
      Explore the Unity tools I’ve developed, in-depth overviews of different systems i developed.
      This section highlights my technical expertise and contributions to game development.
    </div>
    <ProjectsList v-bind:projects="projects" />
    <div style="margin-bottom: 30px;">
      <h2 style="line-height: 1.7; text-align: center;"><strong>NOTICE</strong> - This area of the website is still under
        development come back later to see what i add :)</h2>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
<style scoped>
.centered {
  text-align: center;
}

h1.centered {
  margin: 20px;
  font-weight: bold;
}
</style >