<template>
  <div style="margin-bottom: 80px;">
    <h1>About Me</h1>

    <div class="paragraph">
      <div class="content-wrapper">
        <div>
          I'm <Accent style="font-family: 'Source Code Pro', monospace;">Aviv Hauyn</Accent>, a Unity Developer focused
          on production game systems, mobile integrations, and gameplay-facing tools.<br />
          My recent freelance work includes production mobile puzzle games, live systems, SDK integrations,
          monetization, analytics, Remote Config flows, and AWS-backed services. I also support Unity students at IAC
          College, helping them with gameplay architecture, debugging, optimization, and technical problem solving.
        </div>
        <div class="photo">
          <img src="img/avatar-og.png" alt="Avatar of Aviv Hauyn" />
        </div>
      </div>

      <div style="margin-top: 20px;">
        I've worked on production titles with <strong>Spark Games</strong>, including <strong>Candy Match - Dream
          Factory</strong>, <strong>Block Escape 3D</strong>, and <strong>Bus Rush - Puzzle Game</strong>, where my work
        focused on Unity systems around rewards, popups, SDKs, backend-connected flows, and production debugging.
        I've also built <router-link to="/game-projects">Projects</router-link> like <strong>Skolger</strong> (a
        base-building colony management game) and <strong>Escape of the Doodis</strong> (a 3D Lemmings-inspired puzzle
        game). You can also explore my <router-link to="/other-projects">Tech & Tools</router-link> section, where I
        showcase standalone systems like my VAT Animator and Tutorial System. Check out
        <router-link to="/resume">my resume</router-link> for more details.
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>open to Unity developer opportunities</strong> where gameplay, tools, mobile systems, and live
        production work meet. You can reach me at <a href="mailto:avivhauyn@gmail.com">avivhauyn@gmail.com</a> or
        <router-link to="/contact">through here</router-link>.
      </div>

      <div style="margin-top: 20px;">
        When I'm not developing games or crafting tools, I enjoy exploring the outdoors through hiking and gardening it's where I
        find inspiration and recharge for my next creative challenge.
      </div>
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<script lang="ts">
import Accent from "@/components/Accent.vue";

export default {
  components: {
    Accent,
  },
};
</script>

<style scoped>
.paragraph {
  max-width: 100%;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
}

.photo {
  text-align: center;
  align-self: center;
}

.photo img {
  border-radius: 50%;
  height: auto;
  width: 50%;
}

.content-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  align-items: flex-start;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
  }
}

@media only screen and (max-width: 620px) {
  .content-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
