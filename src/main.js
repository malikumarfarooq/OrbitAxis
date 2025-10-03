import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

// Initialize theme before creating the app
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'light') {
  document.documentElement.removeAttribute('data-theme')
} else {
  // Default to dark mode (your original design)
  document.documentElement.setAttribute('data-theme', 'dark')
}

createApp(App).mount('#app')