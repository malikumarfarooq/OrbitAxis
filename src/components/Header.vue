<template>
  <header>
    <div class="container header-container">
      <a href="#home" class="logo">
        <i class="fas fa-code"></i>
        Umar Farooq
      </a>
      <div class="nav-links" :class="{ active: mobileMenuOpen }">
        <a href="#home" @click="closeMobileMenu" class="glass-button">Home</a>
        <a href="#skills" @click="closeMobileMenu" class="glass-button">Skills</a>
        <a href="#projects" @click="closeMobileMenu" class="glass-button">Projects</a>
        <a href="#experience" @click="closeMobileMenu" class="glass-button">Experience</a>
        <a href="#contact" @click="closeMobileMenu" class="glass-button">Contact</a>
        <button class="theme-toggle" @click="toggleTheme" :title="themeButtonTitle">
          <i :class="themeIcon"></i>
        </button>
      </div>
      <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
        <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)
    const isDarkMode = ref(true)

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
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'light') {
        isDarkMode.value = false
        document.documentElement.removeAttribute('data-theme')
      } else {
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