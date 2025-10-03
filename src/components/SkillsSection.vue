<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title">
        <h2>My Skills</h2>
        <p>Technologies and tools I use to bring ideas to life</p>
      </div>
      <div class="skills-grid">
        <div class="skill-card glass-card animate-fade-in" v-for="skill in skills" :key="skill.id">
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SkillsSection',
  setup() {
    const skills = ref([
      {
        id: 1,
        title: "JavaScript",
        description: "Modern ES6+ JavaScript for interactive web experiences",
        icon: "fab fa-js"
      },
      {
        id: 2,
        title: "Vue.js",
        description: "Building dynamic user interfaces with Vue 3 and Nuxt.js",
        icon: "fab fa-vuejs"
      },
      {
        id: 3,
        title: "PHP & Laravel",
        description: "Full-stack development with Laravel and MySQL",
        icon: "fab fa-laravel"
      },
      {
        id: 4,
        title: "AI Integration",
        description: "Implementing AI tools and APIs into web applications",
        icon: "fas fa-robot"
      }
    ])

    return {
      skills
    }
  }
}
</script>