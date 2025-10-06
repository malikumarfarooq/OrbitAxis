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
        date: "2023 - Present",
        title: "Freelance Full-Stack Developer",
        company: "Upwork - Personal Quiz Project",
        description: "Developing an interactive quiz platform with real-time scoring, user authentication, and analytics dashboard."
      },
      {
        id: 2,
        date: "2022 - 2023",
        title: "Full-Stack Developer",
        company: "Webpenter",
        description: "Built responsive web applications, implemented RESTful APIs, and collaborated with cross-functional teams to deliver high-quality software solutions."
      },
      {
        id: 3,
        date: "2021 - 2022",
        title: "Junior Developer / Intern",
        company: "Skylab BWP",
        description: "Assisted in developing and maintaining web applications, fixed bugs, and implemented new features under senior developer guidance."
      }
    ])

    return {
      experiences
    }
  }
}
</script>