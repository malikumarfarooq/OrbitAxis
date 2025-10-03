<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's discuss how we can work together</p>
      </div>
      <form class="contact-form glass-card" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="contactForm.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="contactForm.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="contactForm.message" required></textarea>
        </div>
        <button type="submit" class="btn glass-button">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactSection',
  setup() {
    const contactForm = ref({
      name: "",
      email: "",
      message: ""
    })

    const submitForm = () => {
      alert(`Thank you ${contactForm.value.name} for your message! I'll get back to you soon.`)
      contactForm.value = { name: "", email: "", message: "" }
    }

    return {
      contactForm,
      submitForm
    }
  }
}
</script>