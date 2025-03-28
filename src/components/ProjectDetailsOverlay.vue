<template>
  <transition name="fade">
    <div v-if="visible">
      <!-- Click on the overlay will close the popup -->
      <div class="overlay" @click="$emit('close')"></div>

      <!-- Dialog Window -->
      <div class="dialog" :style="{ 'background-color': color }" @click.stop>
        <!-- Title -->
        <h1 class="dialog-title">{{ title }}</h1>

        <!-- Close Button -->
        <div @click="$emit('close')" class="dialog-close">
          <i class="fa fa-times fa-lg fa-fw"></i>
        </div>

        <!-- Content Section -->
        <div class="dialog-content">
          <div v-html="htmlContent"></div>

          <!-- Bottom "Close" Button -->
          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import Vue from "vue";
import hljs from "highlight.js"; // Import Highlight.js library
import "highlight.js/styles/obsidian.css"; // Import a Highlight.js theme
// eslint-disable-next-line @typescript-eslint/camelcase
import { sa_event } from 'simple-analytics-vue';

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  mounted() {
    this.highlightCode();
    this.addScrollTracking(); // Add scroll tracking when the component mounts
    this.attachLoaderLogic();
  },
  watch: {
    visible(newVal) {
      // Re-run loader logic when the overlay becomes visible
      if (newVal) {
        this.$nextTick(() => this.attachLoaderLogic());
      }
    },
  },
  updated() {
    this.highlightCode();
  },
  beforeDestroy() {
    this.removeScrollTracking(); // Clean up event listeners
    // this.cleanUpLoader();  
  },
  methods: {
    highlightCode() {
      const blocks = this.$el.querySelectorAll("pre.code-snippet");
      blocks.forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    },
    attachLoaderLogic() {
      // Locate the iframe and loader in the rendered HTML  
      const iframe = this.$el.querySelector("iframe") as HTMLIFrameElement | null;
      const loader = this.$el.querySelector("#loader") as HTMLElement | null;

      if (!iframe || !loader) return;

      // Attach the onload event to hide the loader
      iframe.onload = () => {
        loader.style.display = "none"; // Hide the loader when iframe finishes loading
      };
    },
    cleanUpLoader() {
      const loader = this.$el.querySelector("#loader") as HTMLElement | null;
      if (loader) {
        loader.style.display = "none";
      }
    },
    addScrollTracking() {
      const content = this.$el.querySelector(".dialog-content");
      if (content) {
        content.addEventListener("scroll", this.trackScrollDepth);
      }
    },
    removeScrollTracking() {
      const content = this.$el.querySelector(".dialog-content");
      if (content) {
        content.removeEventListener("scroll", this.trackScrollDepth);
      }
    },
    trackScrollDepth(event: Event) {
      const target = event.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      // Track the scroll depth
      sa_event('scroll-depth', {
        percentage: scrollPercentage,
        title: this.title,
      });
      console.log("Scroll depth tracked:", scrollPercentage);
    },
    getImage(url: string) {
      console.log("fetching image " + url);
    },
  },
});

</script>


<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.dialog {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color: white;
  border-radius: 4px;
  box-shadow: inset -1px 2px 5px 0px rgba(0, 0, 0, 0.45);
}



iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0px;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
}

.dialog-content {
  background-color: #17191b;

}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
}

.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

@media only screen and (min-width: 620px) {
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}
</style>
