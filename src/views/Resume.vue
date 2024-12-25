<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong style="font-family: 'Source Code Pro', monospace;">Aviv Hauyn</strong>, a Unity Game Developer with a solid background in C# programming, Unity
      development, and 3D art.
      I have hands-on experience developing games from start to finish, tackling technical challenges, and delivering
      immersive gameplay experiences.
      My journey started as a 3D Artist in the Israeli Air Force, and today, I help others as a Unity Tutor while building
      innovative tools and systems in game development.
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Aviv" />
    </div>

    <div style="clear:both"></div>

    <div style="margin-top:20px; margin-bottom:20px; text-align:center;">
      <a class="download-link" href="d/Aviv_Hauyn_Unity_Dev.pdf" target="_blank">
        <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
      </a>
    </div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Unity Developer - Freelance</h3>
      <h4>2024 - Present</h4>
      <div>
        - Collaborating with both recurring clients and one-time projects. <br />
        - Adding new features, debugging, and optimizing Unity projects to improve performance and user experience. <br />
        - Providing consultation on game design decisions to enhance the overall design quality.
      </div>
      <div class="tech-stack">
        Tools: Unity, VSCode.
      </div>


      <h3>Unity Tutor - IAC College</h3>
      <h4>2024 - Present</h4>
      <div>
        - Instructing students on Unity development, C# programming, game mechanics, and object-oriented
        programming.<br />
        - Assisting with debugging, optimization, and game design practices.
      </div>
      <div class="tech-stack">
        Tools: Unity, VSCode, Blender, Substance Painter.
      </div>

      <h3>3D Artist - Israeli Air Force</h3>
      <h4>2021 - 2022</h4>
      <div>
        - Collaborated with developers to seamlessly integrate 3D assets into Unity, ensuring optimal functionality and
        visual fidelity. <br />
        - Identified and resolved technical challenges during asset creation, streamlining the workflow and improving team
        communication between artists and developers. <br />
        - Designed and developed small, custom tools in Blender using Python to automate tasks and enhance production
        efficiency.
      </div>

      <div class="tech-stack">
        Tools: Unity, Blender, Substance Painter.
      </div>

      <h2>Skills</h2>
      <div class="skills-container">
        <div class="skill-group">
          <h3>Development</h3>
          <SkillRate name="Unity" :rate="5" />
          <SkillRate name="C# Programming" :rate="4" />
          <SkillRate name="OOP" :rate="4" />
          <SkillRate name="Design Patterns" :rate="4" />
          <SkillRate name="Shaders" :rate="3" />
          <SkillRate name="Debugging & Optimization" :rate="4" />
        </div>

        <div class="skill-group">
          <h3>3D Art Tools</h3>
          <SkillRate name="Blender" :rate="4" />
          <SkillRate name="Substance Painter" :rate="4" />
          <SkillRate name="Photoshop" :rate="4" />
        </div>

        <div class="skill-group">
          <h3>Project Management</h3>
          <SkillRate name="Git Version Control" :rate="4" />
          <SkillRate name="Trello" :rate="4" />
          <SkillRate name="Milanote" :rate="4" />
        </div>
      </div>

      <h2>Education</h2>
      <h3>Game Development & Design - IAC College, Tel Aviv</h3>
      <h4>Two-Year Program</h4>
      <div>
        - Specialized in Unity development, C# programming, and game design.<br />
        - Completed full games each semester, including game mechanics, UI design, and shaders.
      </div>

      <h2>Languages</h2>
      <div class="languages">
        <!-- <h3>English</h3>
        <div>Full Professional Proficiency</div>
        <h3>Hebrew</h3> -->
        <div>
          <div><strong class="highlight">English - </strong>Full Professional Proficiency</div>
          <div><strong class="highlight">Hebrew - </strong>Native Speaker</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}

h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.Language-Title {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 10px;
}

.paragraph {
  max-width: 700px;
}

.highlight {
  font-size: 1.4em;
  /* Controls the strong text size */
}

@media only screen and (min-width: 620px) {

  .download-link {
    text-align: center;
    display: inline-block;
    font-size: 1.3em;
  }
}

.full-content div {
  max-width: 800px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
  margin-top: 10px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.skills-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.skill-group {
  flex: 1;
  margin-right: 20px;
  min-width: 250px;
}

.skill-group h3 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 1.4em;
}

.centered-header {
  text-align: center;
}

.languages {
  text-align: left;
  margin-top: 10px;
}

.languages h3 {
  margin-top: 10px;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }
}
</style>
