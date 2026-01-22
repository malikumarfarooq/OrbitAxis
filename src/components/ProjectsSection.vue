<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-title">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work and personal projects</p>
      </div>
      <div class="projects-grid">
        <div class="project-card glass-card animate-fade-in" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <i :class="project.icon"></i>
          </div>
          <div class="project-content">
            <div class="project-title">
              <i class="fas fa-folder"></i>
              <h3>{{ project.title }}</h3>
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <button @click="openModal(project)" class="btn glass-button">View Project</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ selectedProject.title }}</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-image">
            <i :class="selectedProject.icon"></i>
          </div>
          <p class="modal-desc">{{ selectedProject.description }}</p>
          <div class="modal-tags">
            <span class="tag" v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="modal-links">
            <a :href="selectedProject.link" target="_blank" class="btn primary-btn">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProjectsSection',
  setup() {
    const projects = ref([
      {
        id: 1,
        title: "DataLinkedNY",
        description: "A comprehensive data management platform with secure authentication, user dashboards, and advanced data visualization capabilities built with Laravel.",
        tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
        link: "https://www.datalinkedny.com/login",
        icon: "fas fa-database"
      },
      {
        id: 2,
        title: "Easy Neuroscience",
        description: "Educational platform providing accessible neuroscience content with interactive elements and responsive design using modern web technologies.",
        tags: ["PHP", "JavaScript", "HTML/CSS", "CMS Integration"],
        link: "https://easyneuroscience.com/",
        icon: "fas fa-brain"
      },
      {
        id: 3,
        title: "Real Estate Solutions",
        description: "Full-stack real estate platform with property listings, search functionality, and agent management system built with Laravel and Vue.js.",
        tags: ["Laravel", "Vue.js", "MySQL", "RESTful APIs", "Tailwind CSS"],
        link: "https://buy.webpenter.com/",
        icon: "fas fa-home"
      }
    ])

    const selectedProject = ref(null)

    const openModal = (project) => {
      selectedProject.value = project
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      selectedProject.value = null
      document.body.style.overflow = 'auto'
    }

    return {
      projects,
      selectedProject,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 80px 0;
  background: var(--bg-color);
  transition: background 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 15px;
}

.section-title p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  text-align: center;
  margin-bottom: 20px;
}

.project-image i {
  font-size: 2.5rem;
  color: var(--primary-color);
}

.project-title {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.project-title i {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-right: 10px;
}

.project-title h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.project-desc {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: var(--tag-bg);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
}

.glass-button {
  background: var(--btn-bg);
  color: var(--primary-color);
  border: 1px solid var(--border-color);
}

.glass-button:hover {
  background: var(--btn-hover);
  transform: translateY(-2px);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: var(--card-bg);
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px 0;
  margin-bottom: 20px;
}

.modal-header h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--btn-hover);
  color: var(--text-color);
}

.modal-body {
  padding: 0 25px 25px;
}

.modal-image {
  text-align: center;
  margin-bottom: 20px;
}

.modal-image i {
  font-size: 3rem;
  color: var(--primary-color);
}

.modal-desc {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1rem;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}

.modal-links {
  display: flex;
  gap: 10px;
}

.primary-btn {
  background: var(--primary-color);
  color: white;
  border: none;
}

.primary-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Light Mode Variables */
:root {
  --bg-color: #f8f9fa;
  --text-color: #333;
  --text-muted: #6c757d;
  --card-bg: #ffffff;
  --border-color: rgba(0, 0, 0, 0.1);
  --primary-color: #667eea;
  --primary-dark: #5a6fd8;
  --tag-bg: rgba(102, 126, 234, 0.1);
  --btn-bg: rgba(255, 255, 255, 0.8);
  --btn-hover: rgba(102, 126, 234, 0.1);
}

/* Dark Mode Variables */
.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --text-muted: #a0a0a0;
  --card-bg: #2d2d2d;
  --border-color: rgba(255, 255, 255, 0.1);
  --primary-color: #8a9eff;
  --primary-dark: #7a8bef;
  --tag-bg: rgba(138, 158, 255, 0.2);
  --btn-bg: rgba(45, 45, 45, 0.8);
  --btn-hover: rgba(138, 158, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .modal-content {
    margin: 10px;
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 20px 20px 0;
  }
  
  .modal-body {
    padding: 0 20px 20px;
  }
}
</style>