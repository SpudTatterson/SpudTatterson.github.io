<template>
  <div>
    <h1>Tech & Tools</h1>

    <div style="margin-bottom: 30px;">
      Explore the Unity tools I’ve developed, in-depth overviews of different systems i developed.
      This section highlights my technical expertise and contributions to game development.
      <h1 style="line-height: 1.7; text-align: center;"><strong>NOTICE</strong> - This area of the website is still under development come back later to see what i add :)</h1> 
    </div>
    <ProjectsList v-bind:projects="projects" />
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
