<template>
  <div class="footer">
    <!-- Existing Footer Content -->
    <!-- <div class="left"><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio template</a> by
      schouffy</div> -->
    <div class="right">
      Reach me at 
      <a href="mailto:avivhauyn@gmail.com" target="_blank">avivhauyn@gmail.com</a>,
      <router-link to="/contact">any of these</router-link> 
      or send me a message right here
    </div>

    <!-- Embed the Contact Form -->
    <ContactForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactForm from "./ContactForm.vue"; // Adjust the path if necessary

export default Vue.extend({
  name: "Footer",
  components: {
    ContactForm,
  },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.9;
  padding: 30px 0;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0px;
  max-width: 100%;
}

.left,
.right {
  padding-top: 10px;
  text-align: center;
}

.contact-form-container {
  width: 90%;
  max-width: 600px;
  margin: 20px auto 0;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.contact-form-container h3 {
  text-align: center;
  margin-bottom: 15px;
}

/* Additional styling can be added as needed */
</style>
