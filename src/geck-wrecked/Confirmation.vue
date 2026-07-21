<template>
  <main class="confirmation-page">
    <div class="shape shape-one" aria-hidden="true"></div>
    <div class="shape shape-two" aria-hidden="true"></div>

    <section class="confirmation-card">
      <a class="wordmark" href="/geck-wrecked/">
        <span class="wordmark-mark" aria-hidden="true"></span>
        GECK WRECKED
      </a>

      <div v-if="isConfirmed" class="message">
        <p class="eyebrow">Subscription confirmed</p>
        <div class="status-icon confirmed" aria-hidden="true">✓</div>
        <h1>You’re<br><strong>in.</strong></h1>
        <p>
          You’re officially on the list. You’ll only receive the GECK WRECKED
          updates you selected.
        </p>
        <a class="button" href="/geck-wrecked/">Back to the game <span>↗</span></a>
      </div>

      <div v-else class="message">
        <p class="eyebrow">One more step</p>
        <div class="status-icon" aria-hidden="true">@</div>
        <h1>Check your<br><strong>inbox.</strong></h1>
        <p>
          We sent you a confirmation email. Click the link inside to lock in your
          selected GECK WRECKED updates.
        </p>
        <p class="hint">
          Can’t find it? Check your spam or promotions folder. Delivery may take a minute.
        </p>
        <a class="button" href="/geck-wrecked/">Back to the game <span>↗</span></a>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GeckWreckedConfirmation',
  computed: {
    isConfirmed(): boolean {
      return window.location.pathname.indexOf('/confirmed') !== -1
    }
  }
})
</script>

<style lang="less">
@import '../css/variables.less';

@bodyBgColor: #131713;
@contentBgColor: #222820;
@textColor: #f6f0d5;
@accentColor: #f4d63d;
@highlightColor: #dc4b36;
@geckGreen: #7fb84a;

* { box-sizing: border-box; }
html, body { min-height: 100%; margin: 0; background: @bodyBgColor; }

.confirmation-page {
  min-height: 100vh;
  padding: 5vw;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 15%, fade(@geckGreen, 13%), transparent 34%),
    @contentBgColor;
  color: @textColor;
  font-family: 'Roboto', sans-serif;
}

.confirmation-card {
  width: 92vw;
  max-width: 760px;
  padding: clamp(32px, 6vw, 74px);
  position: relative;
  z-index: 1;
  border: 1px solid fade(@textColor, 14%);
  background: fade(@bodyBgColor, 48%);
  box-shadow: 16px 18px 0 fade(@bodyBgColor, 55%);
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: @textColor;
  font-family: 'Lilita One', 'Roboto', sans-serif;
  font-size: .85rem;
  letter-spacing: .05em;
  text-decoration: none;
}

.wordmark-mark {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: @geckGreen;
  clip-path: polygon(8% 18%, 66% 0, 100% 38%, 76% 100%, 19% 85%, 0 53%);
}

.message { margin-top: clamp(55px, 9vh, 100px); }
.eyebrow { color: @accentColor; text-transform: uppercase; font-size: .68rem; font-weight: 800; letter-spacing: .16em; }
.status-icon { width: 64px; height: 64px; margin: 24px 0; border-radius: 50%; display: grid; place-items: center; background: @highlightColor; color: white; font: 400 1.45rem 'Lilita One', sans-serif; transform: rotate(-7deg); }
.status-icon.confirmed { background: @geckGreen; color: @contentBgColor; }
h1 { margin: 0; font: 400 clamp(4rem, 11vw, 7.5rem)/.82 'Lilita One', sans-serif; text-transform: uppercase; letter-spacing: -.025em; }
h1 strong { color: @highlightColor; font-weight: 400; }
.message > p:not(.eyebrow):not(.hint) { max-width: 570px; margin: 34px 0 0; color: fade(@textColor, 76%); font-size: 1.04rem; line-height: 1.7; }
.hint { max-width: 570px; margin: 16px 0 0; color: fade(@textColor, 48%); font-size: .78rem; line-height: 1.55; }
.button { min-width: 220px; margin-top: 36px; padding: 15px 18px; display: inline-flex; justify-content: space-between; gap: 30px; background: @accentColor; color: @contentBgColor; box-shadow: 6px 6px 0 @highlightColor; text-decoration: none; text-transform: uppercase; letter-spacing: .06em; font-size: .7rem; font-weight: 800; }
.shape { position: absolute; aspect-ratio: 1; transform: rotate(20deg); }
.shape-one { width: 34vw; max-width: 480px; left: -15vw; top: -12vw; background: @geckGreen; clip-path: polygon(50% 0, 100% 25%, 82% 83%, 20% 100%, 0 33%); opacity: .7; }
.shape-two { width: 28vw; max-width: 390px; right: -12vw; bottom: -12vw; background: @highlightColor; border-radius: 50%; opacity: .78; }

@media (max-width: 600px) {
  .confirmation-page { padding: 20px; }
  .confirmation-card { width: 100%; padding: 28px 24px 40px; box-shadow: 8px 9px 0 fade(@bodyBgColor, 55%); }
  .message { margin-top: 55px; }
}
</style>
