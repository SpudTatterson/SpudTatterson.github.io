<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <Accent style="font-family: 'Source Code Pro', monospace;">Aviv Hauyn</Accent>, a Unity Developer with
      production experience across mobile puzzle games, gameplay-facing systems, SDK integrations, monetization,
      analytics, and backend-connected features. My work combines hands-on Unity/C# implementation with systems thinking
      across live operations, game logic, and production debugging.
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Aviv" />
    </div>

    <div style="clear:both"></div>

    <div style="margin-top:20px; margin-bottom:20px; text-align:center;">
      <a class="download-link" href="d/Aviv_Hauyn_Unity_Dev.pdf" data-goatcounter-click="ResumeDownload" target="_blank">
        <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
      </a>
    </div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Freelance Unity Developer - Spark Games & more</h3>
      <h4>2024 - Present</h4>
      <div>
        - Collaborating with recurring clients and one-time freelance projects across Unity mobile games, tools, and
        interactive systems. <br />
        - Worked on production Unity mobile puzzle games including <a
          href="https://play.google.com/store/apps/details?id=com.SparksGames.JumWorldMatchPuzzleGame"
          target="_blank">Candy Match - Dream Factory</a>, <a
          href="https://play.google.com/store/apps/details?id=com.sparksgames.blockesacape3d" target="_blank">Block
          Escape 3D</a>, and <a href="https://play.google.com/store/apps/details?id=com.sparkgames.rushbustation"
          target="_blank">Bus Rush - Puzzle Game</a>. <br />
        - Integrated and maintained Firebase, Adjust, IronSource LevelPlay, AppLovin MAX, analytics, messaging,
        attribution, monetization, and live operations systems. <br />
        - Implemented gameplay-adjacent features such as daily rewards, win-streak rewards, remote-config-driven
        popups, production UI flows, and backend-connected reward logic. <br />
        - Designed and developed a serverless AWS backend supporting wallet/account flows, offerwall rewards, purchase
        verification, game reward logic, admin tools, and third-party integrations. <br />
        - Built and maintained production systems across 8 mobile game configurations, with backend traffic reaching
        millions of Lambda invocations in a day. <br />
        - Developing and optimizing physiotherapy-focused Unity games under NDA, using Kinect and Femto depth cameras
        for motion-based interaction and real-time player feedback.
      </div>
      <div class="tech-stack">
        Tools: Unity, C#, Firebase, Adjust, IronSource LevelPlay, AppLovin MAX, AWS Lambda, DynamoDB, S3, API Gateway,
        Python, Kinect, Femto.
      </div>


      <h3>Unity Tutor - IAC College</h3>
      <h4>2024 - Present</h4>
      <div>
        - Supporting Unity students with C# programming, game mechanics, object-oriented programming, and project
        structure.<br />
        - Helping students debug issues, improve performance, and approach technical problems more effectively.
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
          <SkillRate name="Async Coding" :rate="4" />
          <SkillRate name="OOP" :rate="4" />
          <SkillRate name="Design Patterns" :rate="4" />
          <SkillRate name="Shaders" :rate="3" />
          <SkillRate name="Debugging & Optimization" :rate="4" />
        </div>

        <div class="skill-group">
          <h3>Mobile & LiveOps</h3>
          <SkillRate name="Firebase" :rate="4" />
          <SkillRate name="Remote Config" :rate="4" />
          <SkillRate name="Analytics" :rate="4" />
          <SkillRate name="Adjust" :rate="4" />
          <SkillRate name="Ad Mediation" :rate="4" />
        </div>

        <div class="skill-group">
          <h3>Backend & Tools</h3>
          <SkillRate name="AWS Lambda" :rate="4" />
          <SkillRate name="DynamoDB" :rate="4" />
          <SkillRate name="Python" :rate="4" />
          <SkillRate name="Git Version Control" :rate="4" />
          <SkillRate name="Blender" :rate="4" />
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
import Accent from "@/components/Accent.vue"; // Adjust the import path as necessary

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
    Accent,
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
  max-width: 100%;
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
