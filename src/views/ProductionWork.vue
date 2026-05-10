<template>
  <div>
    <h1 class="centered">Production Work</h1>

    <section class="work-section">
      <h2 class="centered">Spark Games - Mobile Puzzle Game Systems</h2>
      <p class="intro centered">
        Freelance Unity development across production mobile puzzle games, including these public Spark Games titles.
      </p>

      <div class="game-links" aria-label="Spark Games titles">
        <a v-for="game in games" :key="game.name" class="game-link" :href="game.url" target="_blank" rel="noopener">
          <img :src="game.icon" :alt="game.name + ' icon'" />
          <span>{{ game.name }}</span>
        </a>
      </div>

      <div class="columns">
        <div>
          <h3>Unity Work</h3>
          <ul>
            <li>Integrated and maintained Firebase, Adjust, LevelPlay, AppLovin MAX, analytics, and messaging SDKs.</li>
            <li>Implemented gameplay-adjacent systems such as daily rewards, win-streak rewards, and popup flows.</li>
            <li>Connected Unity features to remote config, backend APIs, attribution data, and reward systems.</li>
            <li>Handled production debugging, Android build issues, SDK migrations, and release-facing fixes.</li>
          </ul>
        </div>

        <div>
          <h3>Backend Work</h3>
          <ul>
            <li>Designed and developed an AWS serverless backend for wallet, offerwall, purchase, and reward flows.</li>
            <li>Built production services with AWS Lambda, DynamoDB, S3, API Gateway, SSM, and Secrets Manager.</li>
            <li>Integrated third-party services for attribution, purchases, surveys, rewards, identity, and analytics.</li>
            <li>Used AI-assisted engineering workflows while owning architecture, implementation, and production behavior.</li>
          </ul>
        </div>
      </div>
      <div class="metrics">
        <div>
          <strong>8</strong>
          <span>production game configurations</span>
        </div>
        <div>
          <strong>40+</strong>
          <span>HTTP endpoints</span>
        </div>
        <div>
          <strong>40+</strong>
          <span>Lambda handlers</span>
        </div>
        <div>
          <strong>3M+</strong>
          <span>Lambda invocations in a day</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductionWork",
  data() {
    return {
      games: [
        {
          name: "Candy Match - Dream Factory",
          url: "https://play.google.com/store/apps/details?id=com.SparksGames.JumWorldMatchPuzzleGame",
          icon:
            "https://lh3.googleusercontent.com/RSrUO9c6hkab_R6Y2ji55E8xaPFTUSNPDGhfs4fkJ6vT4zTxRRCgr9v-5PJzzcm2pRK6TQ6mH3jAtOii5A5mQP4bY5ffmL5jd9XO%3Drw",
        },
        {
          name: "Block Escape 3D",
          url: "https://play.google.com/store/apps/details?id=com.sparksgames.blockesacape3d",
          icon:
            "https://lh3.googleusercontent.com/QoxgztUCGcxzSNbu1-c_FCaHFXATm8SqXA47_0DgtBK84VQZ8ds4jKHbyXZPOYLhMttKcbA2X514f9iWM3rFmZYI3U0TDRHrpp73HQ%3Drw",
        },
        {
          name: "Bus Rush - Puzzle Game",
          url: "https://play.google.com/store/apps/details?id=com.sparkgames.rushbustation",
          icon:
            "https://play-lh.googleusercontent.com/cwpjHa-nRo0zu7gVafGh3vOIV7DqMb0mMbZW6hLZckzhA7wtTB9CUl7LtxvXZatQy4XjZZsMokd5VztFOS__BQ%3Dw240-h480",
        },
      ],
    };
  },
});
</script>

<style scoped>
.centered {
  text-align: center;
}

.intro {
  margin-bottom: 30px;
}

.work-section {
  max-width: 1000px;
  margin: 0 auto;
}

h1.centered {
  margin: 20px;
  font-weight: bold;
}

h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0 0 20px;
  padding-top: 10px;
}

h3 {
  font-weight: 100;
  font-size: 1.4em;
  margin-bottom: 8px;
}

.game-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin: 28px auto 34px;
  max-width: 760px;
}

.game-link {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  color: inherit;
  text-align: center;
  line-height: 1.25em;
  transition: transform 0.15s ease, filter 0.15s ease, border-color 0.15s ease;
}

.game-link:hover {
  border-color: rgba(255, 255, 255, 0.32);
  filter: brightness(1.12);
  transform: translateY(-2px);
}

.game-link img {
  width: 96px;
  height: 96px;
  border-radius: 18px;
  object-fit: cover;
}

.game-link span {
  min-height: 2.5em;
  display: flex;
  align-items: center;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 30px 0;
  text-align: center;
}

.metrics div {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.04);
}

.metrics strong {
  display: block;
  font-size: 1.8em;
  line-height: 1.1em;
}

.metrics span {
  display: block;
  margin-top: 6px;
}

.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

ul {
  padding-left: 22px;
}
</style>
