<template>
  <div>
    <h1 class="centered">Free Tools</h1>

    <div style="margin-bottom: 30px;">
      Here are some free tools i developed for my self and my students 
    </div>
    <ProjectsList v-bind:projects="projects" />
    <div style="margin-bottom: 30px;">
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import freeToolsData from "@/data/FreeToolsData.ts";

export default Vue.extend({
  name: "FreeTools",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: freeToolsData,
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