<template>
  <nav>
    <div class="container nav-container">
      <div class="logo">
        <i class="fas fa-code"></i>
        DevPortfolio
      </div>
      <div class="nav-links" :class="{ active: mobileMenuOpen }">
        <a href="#home" @click="closeMobileMenu">Home</a>
        <a href="#portfolio" @click="closeMobileMenu">Work</a>
        <a href="#about" @click="closeMobileMenu">About</a>
        <a href="#services" @click="closeMobileMenu">Services</a>
        <a href="#contact" @click="closeMobileMenu">Contact</a>
        <button class="theme-toggle" @click="toggleTheme" :title="themeButtonTitle">
          <i :class="themeIcon"></i>
        </button>
      </div>
      <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
        <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const mobileMenuOpen = ref(false)
    const isDarkMode = ref(false)

    const themeIcon = computed(() => {
      return isDarkMode.value ? 'fas fa-sun' : 'fas fa-moon'
    })

    const themeButtonTitle = computed(() => {
      return isDarkMode.value ? 'Switch to light mode' : 'Switch to dark mode'
    })

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      if (isDarkMode.value) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
      }
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    onMounted(() => {
      // Check for saved theme preference or prefer dark scheme
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDarkMode.value = true
        document.documentElement.setAttribute('data-theme', 'dark')
      }
    })

    return {
      mobileMenuOpen,
      themeIcon,
      themeButtonTitle,
      toggleTheme,
      closeMobileMenu
    }
  }
}
</script>