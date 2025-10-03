<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="section-title">Featured <span>Projects</span></h2>
      <div class="projects">
        <div class="project-card animate-fade-in" v-for="project in projects" :key="project.id">
          <div class="project-img">
            <i :class="project.icon"></i>
          </div>
          <div class="project-content">
            <h3 class="project-title">
              <i class="fas fa-folder"></i>
              {{ project.title }}
            </h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" class="btn">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PortfolioSection',
  setup() {
    const projects = ref([
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution built with Laravel and Vue.js with payment integration and admin dashboard.",
        tags: ["Laravel", "Vue.js", "MySQL", "Stripe"],
        link: "#",
        icon: "fas fa-shopping-cart"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A productivity application for managing tasks and projects with real-time updates and team collaboration.",
        tags: ["Vue.js", "Laravel", "WebSockets", "Tailwind CSS"],
        link: "#",
        icon: "fas fa-tasks"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather information dashboard with interactive charts and location-based forecasts.",
        tags: ["Vue.js", "Chart.js", "API", "Geolocation"],
        link: "#",
        icon: "fas fa-cloud-sun"
      }
    ])
    
    return {
      projects
    }
  }
}
</script>