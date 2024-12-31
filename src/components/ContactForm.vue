<template>
  <div class="contact-form">
    <h2 style="text-align: center;">Contact Me</h2>
    <form @submit.prevent="submitForm" :action="formAction" method="POST">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" name="name" required />
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" name="_replyto" required />
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" name="message" required></textarea>
        <!-- set font to match input fields -->
      </div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Send' }}
      </button>
    </form>

    <div v-if="successMessage" class="success">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      formAction: 'https://formspree.io/f/mzzzdvzk',
      isSubmitting: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('_replyto', this.form.email);
      formData.append('message', this.form.message);

      try {
        const response = await fetch(this.formAction, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          this.successMessage = 'Thank you for your message!';
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } else {
          const errorData = await response.json();
          this.errorMessage = errorData.error || 'Oops! Something went wrong.';
        }
      } catch (error) {
        this.errorMessage = 'Oops! Something went wrong.';
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
  
<style scoped lang="less">
@import '../css/variables.less';

.contact-form {
  max-width: 600px;
  margin: 0 auto;


  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: large;
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%; 
    padding: 10px;
    font-family: 'Roboto', serif;
    font-size: medium;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.245);
  }

  textarea {
    min-height: 70px;
  }

  button {
    padding: 10px 20px;
    background-color: @accentColor;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

.success {
  color: @accentColor;
  margin-top: 20px;
  filter: brightness(1.2);
  text-align: center;
  font-size: larger;
}

.error {
  color: red;
  margin-top: 20px;
  text-align: center;
  font-size: larger;
}
</style>
  