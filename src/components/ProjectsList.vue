<template>
  <div>
    <div class="projects-list">
      <!-- Apply v-for to the actual rendered element with a key -->
      <div v-for="project in projects" :key="project.id" @click="showDetails(project)" class="project-item"
        :class="{ 'wide': project.isWide, 'high': project.isHigh }">
        <!-- Project Image or Video with Blurred Background -->
        <div class="project-item-image">
          <!-- Blurred Background -->
          <template v-if="project.iconType === 'video'">
            <video :src="project.iconUrl" autoplay muted loop playsinline class="blurred-background"></video>
            <video :src="project.iconUrl" autoplay muted loop playsinline class="project-video"></video>
          </template>
          <template v-else>
            <!-- <div :style="{ 'background-image': 'url(' + project.iconUrl + ')' }" class="blurred-background"></div> -->
            <img :src="project.iconUrl" alt="Project Image" class="project-image" />
          </template>
        </div>
        <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
          <div class="title-text">
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- Details Overlay -->
    <ProjectDetailsOverlay v-on:close="showPopup = false" :visible="showPopup" :title="popupTitle"
      :htmlContent="popupContent" :color="popupColor" />
  </div>
</template>




<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
// eslint-disable-next-line @typescript-eslint/camelcase
import { sa_event } from "simple-analytics-vue"; // Import sa_event

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0, 0);

      // Track the event
      sa_event("open-overlay", {
        projectName: item.name,
        projectId: item.id,
      });
      console.log("Project opened");
    },
  },
});
</script>

<style scoped>
.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}

.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-video {
  position: relative;
  z-index: 2;
  /* Stays above the blurred background */
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Keep the aspect ratio */
}

/* .project-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
} */


.project-image {
  height: 100%;
  width:  100%;
  background-size: cover;
  background-position: center;
}

/* .project-image {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain; 
} */

.project-item-image {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* Blurred Background */
.blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-size: cover;
  background-position: center;
  filter: blur(10px) brightness(0.7);
  /* Adjust blur and brightness */
  transform: scale(1.1);
  /* Slightly enlarge to cover edges */
  z-index: 1;
  /* Ensure it stays behind the main video/image */
}

.project-item:hover {
  filter: brightness(120%);
  transform: scale(1.05);
}

.title-bar {
  position: absolute;
  top: 0px;
  z-index: 5;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
    margin: 0 auto;
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }

  .high {
    grid-row-end: span 2;
  }
}
</style>