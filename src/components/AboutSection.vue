<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About <span>Me</span></h2>
      <div class="about-content">
        <div class="about-text glass-card animate-fade-in">
          <h3>Who I Am</h3>
          <p>I'm a full-stack developer with 5+ years of experience specializing in Laravel and Vue.js development. I create robust, scalable web applications with clean code and intuitive user interfaces.</p>
          <p>When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies in the ever-evolving web development landscape.</p>
        </div>
        <div class="about-skills glass-card animate-fade-in delay-1">
          <h3>My Skills</h3>
          <div class="skills">
            <span class="skill" v-for="skill in skills" :key="skill">
              <i class="fas fa-check"></i>
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AboutSection',
  setup() {
    const skills = ref([
      "Laravel", "Vue.js", "PHP", "JavaScript", "HTML/CSS", 
      "Tailwind CSS", "MySQL", "RESTful APIs", "Git", "Docker",
      "Webpack", "Redis", "AWS", "Responsive Design"
    ])
    
    return {
      skills
    }
  }
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.about-text, .about-skills {
  padding: 2rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

.skill {
  background: rgba(124, 58, 237, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.skill i {
  color: var(--primary);
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>