<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="section-title">
        <h2>Work Experience</h2>
        <p>My professional journey and career milestones</p>
      </div>
      <div class="timeline">
        <div class="timeline-item animate-fade-in" v-for="experience in experiences" :key="experience.id">
          <div class="timeline-content glass-card">
            <div class="timeline-date">{{ experience.date }}</div>
            <h3 class="timeline-title">{{ experience.title }}</h3>
            <p class="timeline-company">{{ experience.company }}</p>
            <p class="timeline-desc">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ExperienceSection',
  setup() {
    const experiences = ref([
      {
        id: 1,
        date: "2022 - Present",
        title: "Senior Full-Stack Developer",
        company: "Tech Innovations Inc.",
        description: "Leading development of AI-powered web applications and mentoring junior developers."
      },
      {
        id: 2,
        date: "2020 - 2022",
        title: "Frontend Developer",
        company: "Digital Solutions LLC",
        description: "Developed responsive user interfaces and integrated with backend APIs."
      },
      {
        id: 3,
        date: "2018 - 2020",
        title: "Junior Web Developer",
        company: "WebCraft Studio",
        description: "Built and maintained websites for various clients using modern web technologies."
      }
    ])

    return {
      experiences
    }
  }
}
</script>