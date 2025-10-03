<template>
  <div id="app">
    <Header />
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <FooterSection />
    <SmartWhatsApp />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import SmartWhatsApp from './components/SmartWhatsApp.vue';

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
    FooterSection,
    SmartWhatsApp
  },
  mounted() {
    // Add scroll animations
    this.initScrollAnimations()
    this.initSmoothScroll()
  },
  methods: {
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      }, observerOptions)

      // Observe all elements that should animate on scroll
      document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
        observer.observe(el)
      })
    },
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const targetId = this.getAttribute('href')
          if (targetId === '#') return
          
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            })
          }
        })
      })
    }
  }
}
</script>